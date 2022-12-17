import React, { useEffect, useState } from "react";
import styles from "./CategoryTable.module.css";
import AddCategoryModal from "./AddCategoryModal";
import { CategoryController } from "../../../controllers";
import { useRouter } from "next/router";
import { useCategories, useUser } from "../../../utils/hooks";
import EditCategoryModal from "./EditCategoryModal";
import DataTable, { TableColumn } from "react-data-table-component";
import { ICategory } from "../../../interfaces/Category";
import TrashIcon from "../../icons/TrashIcon";
import ArrowUp from "../../icons/ArrowUp";
import { toast } from "react-toastify";
import { ArrowLeft, ArrowRight } from "../../icons";

const CategoryTable = () => {
  // States
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState<ICategory[]>([]);
  const [isNextPageDisabled, setIsNextPageDisabled] = useState(false);
  const [isGettingCategories, setIsGettingCategories] = useState(false);
  const [pages, setPages] = useState([1]);

  // Hooks
  const { accessToken } = useUser();
  const {
    categories,
    pagesCount,
    pagesCalled,
    setPagesCalled,
    setPagesCount,
    setCategories,
  } = useCategories();
  const router = useRouter();

  const fetchCategories = async () => {
    setIsLoading(true);
    const response = await new CategoryController(
      accessToken,
      router
    ).getCategories(currentPage, 5);

    if (!categories) {
      setIsLoading(false);
      return;
    }

    setPagesCalled(currentPage);
    setCategories([...response.data]);

    let p = [];
    for (let index = 1; index <= response.pageCount; index++) {
      p.push(index);
    }
    setPages([...p]);

    setIsLoading(false);
  };
  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories();
    }
  }, []);

  const callNextPage = async (page: number) => {
    const newPage = page + 1;
    if (pagesCalled.includes(newPage)) {
      setCurrentPage(newPage);
    } else {
      setIsGettingCategories(true);
      const response = await new CategoryController(
        accessToken,
        router
      ).getCategories(newPage, 5);

      if (!response) {
        setIsGettingCategories(false);
        return;
      }

      if (response.length === 0) {
        setCurrentPage(newPage - 1);
        setIsGettingCategories(false);
        setIsNextPageDisabled(true);
        toast.error("No more categories can be found");
        return;
      }

      setIsGettingCategories(false);
      setCategories([...categories, ...response.data]);
      setPagesCalled(newPage);
      setCurrentPage(newPage);
    }
  };

  const deleteCategory = async (categoryId: string) => {
    const categoriesCopy = [...categories];
    const categoryIndex = categoriesCopy.findIndex((c) => c.id === categoryId);
    const isDeleted = await new CategoryController(
      accessToken,
      router
    ).deleteCategory(categoryId);

    if (!isDeleted) {
      return;
    }
    categoriesCopy.splice(categoryIndex, 1);
    setCategories([...categoriesCopy]);
  };

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let updatedData = [];
    setSearchValue(value);

    if (value.length) {
      updatedData = categories.filter((category) => {
        const startsWith = category.categoryName
          .toLowerCase()
          .startsWith(value.toLowerCase());

        const includes = category.categoryName
          .toLowerCase()
          .includes(value.toLowerCase());

        if (startsWith) {
          return startsWith;
        } else if (!startsWith && includes) {
          return includes;
        } else return null;
      });
      setFilteredData(updatedData);
      setSearchValue(value);
    }
  };

  const columns: TableColumn<ICategory>[] = [
    {
      name: "#",
      cell: (category, index) => index + 1,
    },
    {
      name: "Category Name",
      sortable: true,
      selector: (category) => category.categoryName,
    },
    {
      name: "Actions",
      cell: (category) => (
        <div className="flex items-center justify-center space-x-10">
          <EditCategoryModal category={category} />
          <TrashIcon
            size={19}
            className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
            opacity={0.68}
            onClick={() => deleteCategory(category.id)}
          />
        </div>
      ),
    },
  ];

  if (isLoading) {
    return <p className="text-center text-white">loading</p>;
  }

  const CustomPagination = () => {
    return (
      <div className={styles.paginationContainer}>
        <div className={styles.row}>
          <button
            className={
              currentPage === 1 ? styles.buttonDisabled : styles.button
            }
            disabled={currentPage === 1}
            onClick={() => {
              setCurrentPage((current) => current - 1);
              setIsNextPageDisabled(false);
            }}
          >
            <ArrowLeft
              size={16}
              className={`${
                currentPage === 1 ? "fill-white/[0.7]" : "fill-white"
              }`}
            />
          </button>
          <div className="flex -space-x-[8px]">
            {pages.map((index: number) => (
              <p key={index} className={styles.currentPage}>
                {index}
              </p>
            ))}
          </div>
          <button
            className={
              isNextPageDisabled ? styles.buttonDisabled : styles.button
            }
            disabled={isNextPageDisabled}
            onClick={() => callNextPage(currentPage)}
          >
            <ArrowRight
              size={16}
              className={`${
                isNextPageDisabled ? "fill-white/[0.7]" : "fill-white"
              } `}
            />
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className={showModal ? styles.blurryContainer : styles.container}>
        <div className={styles.card}>
          <div className={styles.card__header}>
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Search Category"
              onChange={handleFilter}
            />
            <button
              className={styles.addButton}
              onClick={() => setShowModal((current) => !current)}
            >
              Add Category
            </button>
          </div>
          <div className="react-dataTable">
            <DataTable
              noHeader
              pagination
              columns={columns}
              className="react-dataTable"
              paginationPerPage={5}
              sortIcon={
                <ArrowUp
                  size={18}
                  className="fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
                />
              }
              paginationDefaultPage={currentPage}
              progressPending={isGettingCategories}
              progressComponent={<p>loading...</p>}
              paginationComponent={CustomPagination}
              data={searchValue.length ? filteredData : categories}
            />
          </div>
        </div>
      </div>
      <AddCategoryModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default CategoryTable;
