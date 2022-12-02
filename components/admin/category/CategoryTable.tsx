import React, { useEffect, useState } from "react";
import { ArrowLeft } from "../../icons";
import ArrowRight from "../../icons/ArrowRight";
import styles from "./CategoryTable.module.css";
import { iconColor } from "../../../utils/colors";
import TrashIcon from "../../icons/TrashIcon";
import EditIcon from "../../icons/EditIcon";
import AddCategoryModal from "./AddCategoryModal";
import { CategoryController } from "../../../controllers";
import { useRouter } from "next/router";
import { ICategory } from "../../../interfaces/Category";
import { useUser } from "../../../utils/hooks";
import { useCategories } from "../../../utils/hooks/useCategories";
import EditCategoryModal from "./EditCategoryModal";

const CategoryTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { accessToken } = useUser();
  const { categories, setCategories } = useCategories();
  const router = useRouter();

  const getCategories = async () => {
    setIsLoading(true);
    const categories = await new CategoryController(
      accessToken,
      router
    ).getCategories();

    if (!categories) {
      return;
    }
    setCategories([...categories]);
    setIsLoading(false);
  };

  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
    }
  }, []);

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
            />
            <button
              className={styles.searchButton}
              onClick={() => setShowModal((current) => !current)}
            >
              Add Category
            </button>
          </div>
          <table className={styles.table}>
            <thead className={styles.tableHeader}>
              <tr className="flex">
                <td className={styles.tableHeaderCell}>
                  <div className="flex w-[400px] justify-self-start">
                    <p>#</p>
                  </div>
                  <div className={styles.seperator}></div>
                </td>
                <td className={styles.tableHeaderCell}>
                  <p>Name</p>
                  <div className={styles.seperator}></div>
                </td>
                <td className={styles.tableHeaderCell}>
                  <p>Actions</p>
                  <div className={styles.seperator}></div>
                </td>
              </tr>
            </thead>
            <tbody>
              {categories.length !== 0 ? (
                categories.slice(0, 5).map((category, i) => (
                  <tr key={i} className="flex">
                    <td className={styles.tableCell}>{i + 1}</td>
                    <td className={styles.tableCell}>
                      <p>{category.categoryName}</p>
                    </td>
                    <td className={styles.tableCell}>
                      <EditCategoryModal category={category} />
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="flex justify-center p-20 text-white">
                  <td>No Categories Found</td>
                </tr>
              )}
            </tbody>
          </table>
          <div className={styles.cardFooter}>
            <p>1-5 of 13</p>
            <div className={styles.footerArrows}>
              <ArrowLeft size={17} color={iconColor} opacity={0.5} />
              <ArrowRight size={17} color={iconColor} />
            </div>
          </div>
        </div>
      </div>
      <AddCategoryModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default CategoryTable;
