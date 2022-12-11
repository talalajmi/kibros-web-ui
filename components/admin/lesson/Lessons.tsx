import React, { useEffect, useState } from "react";
import { iconColor } from "../../../utils/colors";
import { ArrowLeft } from "../../icons";
import ArrowRight from "../../icons/ArrowRight";
import EditIcon from "../../icons/EditIcon";
import TrashIcon from "../../icons/TrashIcon";
import AddLessonModal from "./add/AddLessonModal";

import styles from "./Lessons.module.css";
import AddFileIcon from "../../icons/AddFileIcon";
import { useAuth, useUser } from "../../../utils/hooks";
import { useRouter } from "next/router";
import { ILesson } from "../../../interfaces";
import { LessonController } from "../../../controllers";
import DataTable, { TableColumn } from "react-data-table-component";
import { toast } from "react-toastify";
import { useLessons } from "../../../utils/hooks/useLessons";
import { AdminRoutes } from "../../../routes/AdminRoutes";

const Lessons = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchedData, setSearchedData] = useState<ILesson[]>([]);
  const [isGetiingLessons, setIsGetiingLessons] = useState(false);
  const [isNextPageDisabled, setIsNextPageDisabled] = useState(false);

  const { accessToken } = useAuth();
  const { lessons, setLessons, pagesCalled, setPagesCalled } = useLessons();
  const router = useRouter();

  const getUsers = async () => {
    setIsLoading(true);
    const response = await new LessonController(accessToken, router).getLessons(
      currentPage,
      5,
      true
    );

    if (!response) {
      setIsLoading(false);
      return;
    }
    setIsLoading(false);
    setPagesCalled(currentPage);
    setLessons([...response]);
  };

  useEffect(() => {
    if (lessons.length === 0) {
      getUsers();
    }
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let updatedData = [];
    setSearchValue(value);

    if (value.length) {
      updatedData = lessons.filter((lesson) => {
        const startsWith =
          lesson.title.toLowerCase().startsWith(value.toLowerCase()) ||
          lesson.description.toLowerCase().startsWith(value.toLowerCase()) ||
          lesson.isActivated
            ? "Activated".toLowerCase().startsWith(value.toLowerCase())
            : "Not Activated".toLowerCase().startsWith(value.toLowerCase()) ||
              lesson.sortingId.toString() ||
              lesson.isPaid
            ? "Paid".toLowerCase().startsWith(value.toLowerCase())
            : "Free".toLowerCase().startsWith(value.toLowerCase());

        const includes =
          lesson.title.toLowerCase().includes(value.toLowerCase()) ||
          lesson.description.toLowerCase().includes(value.toLowerCase()) ||
          lesson.isActivated
            ? "Activated".toLowerCase().includes(value.toLowerCase())
            : "Not Activated".toLowerCase().includes(value.toLowerCase()) ||
              lesson.sortingId.toString() ||
              lesson.isPaid
            ? "Paid".toLowerCase().includes(value.toLowerCase())
            : "Free".toLowerCase().includes(value.toLowerCase());

        if (startsWith) {
          return startsWith;
        } else if (!startsWith && includes) {
          return includes;
        } else return null;
      });
      setSearchedData(updatedData);
      setSearchValue(value);
    }
  };

  const callNextPage = async (page: number) => {
    const newPage = page + 1;
    if (pagesCalled.includes(newPage)) {
      setCurrentPage(newPage);
    } else {
      setIsGetiingLessons(true);
      const response = await new LessonController(
        accessToken,
        router
      ).getLessons(newPage, 5, true);

      if (!response) {
        setIsGetiingLessons(false);
        return;
      }

      if (response.length === 0) {
        setCurrentPage(newPage - 1);
        setIsGetiingLessons(false);
        setIsNextPageDisabled(true);
        toast.error("No more lessons can be found");
        return;
      }

      setIsGetiingLessons(false);
      setLessons([...response]);
      setPagesCalled(newPage);
      setCurrentPage(newPage);
    }
  };

  const columns: TableColumn<ILesson>[] = [
    {
      name: "#",
      cell: (lesson, index) => index + 1,
    },
    {
      name: "Name",
      sortable: true,
      selector: (lesson) => lesson.title,
    },
    {
      name: "Description",
      sortable: true,
      selector: (lesson) => lesson.description,
    },
    {
      name: "Activated",
      sortable: true,
      cell: (lesson) => (
        <div
          className={`flex items-center justify-center rounded-100 px-20 py-5 ${
            lesson.isActivated
              ? "bg-success-base/[0.2] text-success-base"
              : "bg-error/[0.2] text-error"
          } `}
        >
          {lesson.isActivated ? "Activated" : "Not Activated"}
        </div>
      ),
    },
    {
      name: "Sorting No.",
      sortable: true,
      selector: (lesson) => lesson.sortingId,
    },
    {
      name: "Lesson Date",
      sortable: true,
      selector: (lesson) => lesson.creationTime,
    },
    {
      name: "Status",
      sortable: true,
      cell: (lesson) => (
        <div
          className={`flex items-center justify-center rounded-100 px-20 py-5 ${
            lesson.isPaid
              ? "bg-success-base/[0.2] text-success-base"
              : "bg-secondary-base/[0.2] text-secondary-base"
          } `}
        >
          {lesson.isPaid ? "Paid" : "Free"}
        </div>
      ),
    },
    {
      name: "Actions",
      cell: (lesson) => (
        <div className="flex items-center justify-center space-x-10">
          <EditIcon
            size={18}
            className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
            onClick={() =>
              router.push(AdminRoutes.editLessonPage.replace(":id", lesson.id))
            }
          />
          <TrashIcon
            size={18}
            className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
          />
        </div>
      ),
    },
  ];

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
          <p className={styles.currentPage}>{currentPage}</p>
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
    <div className={styles.container}>
      <div className={styles.tableCard}>
        <div className={styles.header}>
          <div className={styles.searchContainer}>
            <input
              placeholder="Search Lesson"
              className="rounded-8 border border-inputOutline border-opacity-20 bg-primary-light p-10 text-white"
              onChange={handleSearch}
            />
            <button className={styles.addButton}>Add Lesson</button>
          </div>
        </div>
        <div className="react-dataTable">
          <DataTable
            noHeader
            pagination
            data={lessons}
            columns={columns}
            paginationComponent={CustomPagination}
            paginationPerPage={5}
            className="react-dataTable"
          />
        </div>
      </div>
    </div>
  );
};

export default Lessons;
