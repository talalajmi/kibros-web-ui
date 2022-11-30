import React, { useState } from "react";
import { ArrowLeft } from "../../icons";
import ArrowRight from "../../icons/ArrowRight";
import styles from "./CategoryTable.module.css";
import { iconColor } from "../../../utils/colors";
import TrashIcon from "../../icons/TrashIcon";
import EditIcon from "../../icons/EditIcon";
import CategoryModal from "./CategoryModal";

const CategoryTable = () => {
  const [showModal, setShowModal] = useState(false);

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
          <div className={styles.table}>
            <div className={styles.tableHeader}>
              <div className={styles.tableHeaderCell}>
                <div className="w-[400px]">
                  <p>#</p>
                </div>
                <div className={styles.seperator}></div>
              </div>
              <div className={styles.tableHeaderCell}>
                <p>Name</p>
                <div className={styles.seperator}></div>
              </div>
              <div className={styles.tableHeaderCell}>
                <p>Actions</p>
                <div className={styles.seperator}></div>
              </div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>1</div>
              <div className={styles.tableCell}>
                <p>Lighting</p>
              </div>
              <div className={styles.tableCell}>
                <EditIcon
                  size="24"
                  className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
                  opacity="0.68"
                />
                <TrashIcon
                  size="24"
                  className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
                  opacity="0.68"
                />
              </div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>2</div>
              <div className={styles.tableCell}>
                <p>Screening</p>
              </div>
              <div className={styles.tableCell}>
                <EditIcon
                  size="24"
                  className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
                  opacity="0.68"
                />
                <TrashIcon
                  size="24"
                  className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
                  opacity="0.68"
                />
              </div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>3</div>
              <div className={styles.tableCell}>
                <p>Editing</p>
              </div>
              <div className={styles.tableCell}>
                <EditIcon
                  size="24"
                  className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
                  opacity="0.68"
                />
                <TrashIcon
                  size="24"
                  className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
                  opacity="0.68"
                />
              </div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>5</div>
              <div className={styles.tableCell}>
                <p>Motion</p>
              </div>
              <div className={styles.tableCell}>
                <EditIcon
                  size="24"
                  className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
                  opacity="0.68"
                />
                <TrashIcon
                  size="24"
                  className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
                  opacity="0.68"
                />
              </div>
            </div>
            <div className={styles.tableRow}>
              <div className={styles.tableCell}>4</div>
              <div className={styles.tableCell}>
                <p>Blur</p>
              </div>
              <div className={styles.tableCell}>
                <EditIcon
                  size="24"
                  className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
                  opacity="0.68"
                />
                <TrashIcon
                  size="24"
                  className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
                  opacity="0.68"
                />
              </div>
            </div>
            <div className={styles.cardFooter}>
              <p>1-5 of 13</p>
              <div className={styles.footerArrows}>
                <ArrowLeft size={17} color={iconColor} opacity={0.5} />
                <ArrowRight size={17} color={iconColor} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CategoryModal
        title="Add Category"
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
};

export default CategoryTable;
