import React from "react";
import { ArrowLeft } from "../../icons";
import ArrowRight from "../../icons/ArrowRight";
import styles from "./CategoryTable.module.css";
import { iconColor } from "../../../utils/colors";

const CategoryTable = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.card__header}>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Search Category"
          />
          <button className={styles.searchButton}>Add Category</button>
        </div>
        <div className={styles.table}>
          <div className={styles.tableHeader}>
            <div className={styles.tableHeaderCell}>
              <div className="w-[515px]">
                <p>#</p>
              </div>
              <div className={styles.seperator}></div>
            </div>
            <div className={styles.tableHeaderCell}>
              <div className="w-[515px]">
                <p>Name</p>
              </div>
              <div className={styles.seperator}></div>
            </div>
          </div>
          <div className={styles.tableRow}>
            <div className={styles.tableCell}>1</div>
            <div className={styles.tableCell}>
              <p>Lighting</p>
            </div>
          </div>
          <div className={styles.tableRow}>
            <div className={styles.tableCell}>2</div>
            <div className={styles.tableCell}>
              <p>Screening</p>
            </div>
          </div>
          <div className={styles.tableRow}>
            <div className={styles.tableCell}>3</div>
            <div className={styles.tableCell}>
              <p>Editing</p>
            </div>
          </div>
          <div className={styles.tableRow}>
            <div className={styles.tableCell}>5</div>
            <div className={styles.tableCell}>
              <p>Motion</p>
            </div>
          </div>
          <div className={styles.tableRow}>
            <div className={styles.tableCell}>4</div>
            <div className={styles.tableCell}>
              <p>Blur</p>
            </div>
          </div>
          <div className={styles.cardFooter}>
            <p>1-5 of 13</p>
            <div className="flex items-center justify-center space-x-20">
              <ArrowLeft size={17} color={iconColor} opacity={0.5} />
              <ArrowRight size={17} color={iconColor} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryTable;
