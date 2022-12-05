import React, { useEffect, useState } from "react";
import styles from "./CategoryTable.module.css";
import AddCategoryModal from "./AddCategoryModal";
import { CategoryController } from "../../../controllers";
import { useRouter } from "next/router";
import { useUser } from "../../../utils/hooks";
import { useCategories } from "../../../utils/hooks/useCategories";
import EditCategoryModal from "./EditCategoryModal";
import DataTable, { TableColumn } from "react-data-table-component";
import { ICategory } from "../../../interfaces/Category";
import TrashIcon from "../../icons/TrashIcon";
import ArrowUp from "../../icons/ArrowUp";
import { toast } from "react-toastify";
import CustomPagination from "../table/CustomPagination";

const CategoryTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState<ICategory[]>([]);
  const [isGettingCategories, setIsGettingCategories] = useState(false);
  const [isNextPageDisabled, setIsNextPageDisabled] = useState(false);

  const { accessToken } = useUser();
  const { categories, pagesCalled, setPagesCalled, setCategories } =
    useCategories();
  const router = useRouter();

  const getCategories = async () => {
    setIsLoading(true);

    const response = await new CategoryController(
      accessToken,
      router
    ).getCategories(currentPage, 5);

    if (!categories) {
      setIsLoading(false);
      return;
    }

    if (categories.length === 0) {
      setIsLoading(false);
      setCategories([...response]);
      return;
    }

    setCategories([...categories, ...response]);
    setCurrentPage(currentPage + 1);
    setIsLoading(false);
  };

  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
    }
  }, []);

  const callNextPage = async (page: number) => {
    if (pagesCalled.includes(page + 1)) {
      setCurrentPage(page);
    } else {
      setIsGettingCategories(true);
      const response = await new CategoryController(
        accessToken,
        router
      ).getCategories(page + 1, 5);

      if (!response) {
        setIsGettingCategories(false);
        return;
      }

      if (response.length === 0) {
        setCurrentPage(page - 1);
        setIsGettingCategories(false);
        setIsNextPageDisabled(true);
        toast.error("No more orders can be found");
        return;
      }

      setIsGettingCategories(false);
      setCategories([...categories, ...response]);
      setPagesCalled(page + 1);
      setCurrentPage(page);
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
              paginationComponent={() =>
                CustomPagination(currentPage, isNextPageDisabled, callNextPage)
              }
              progressComponent={<p className="text-white">loading...</p>}
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
