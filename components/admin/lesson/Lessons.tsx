import React from "react";
import { iconColor } from "../../../utils/colors";
import { ArrowLeft } from "../../icons";
import ArrowRight from "../../icons/ArrowRight";
import EditIcon from "../../icons/EditIcon";
import TrashIcon from "../../icons/TrashIcon";

import styles from "./Lessons.module.css";

const Lessons = () => {
  return (
    <div className={styles.container}>
      <div className={styles.tableCard}>
        <div className={styles.header}>
          <div className={styles.searchContainer}>
            <input
              placeholder="Search Lesson"
              className="rounded-8 border border-inputOutline border-opacity-20 bg-primaryLight p-10 text-white"
            />
            <button className={styles.addButton}>Add Lesson</button>
          </div>
        </div>
        <table className="w-full">
          <thead>
            <tr className="text-darkText flex bg-primary uppercase">
              <td className={styles.tableCell}>#</td>
              <td className="flex-1 py-16 px-20 text-sm font-medium">Name</td>
              <td className={styles.tableCell}>Description</td>
              <td className={styles.tableCell}>Is Activated</td>
              <td className={styles.tableCell}>Sorting Number</td>
              <td className={styles.tableCell}>Lesson Date</td>
              <td className={styles.tableCell}>Status</td>
              <td className={styles.tableCell}>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.tableBodyRow}>
              <td className={styles.tableCell}>1</td>
              <td className={`${styles.tableCell}`}>اساسيات التصوير</td>
              <td dir="rtl" className={`${styles.tableCell} truncate`}>
                ذيييثييثثييث هكذا يبدا التصوير دعقد
              </td>
              <td className={styles.tableCell}>
                <div className={styles.tablePill}>Activated</div>
              </td>
              <td className={styles.tableCell}>2</td>
              <td className={styles.tableCell}>02/02/2022</td>
              <td className={styles.tableCell}>02/02/2022</td>
              <td className={styles.actionsCell}>
                <EditIcon size="20" color={iconColor} opacity="0.68" />
                <TrashIcon size="20" color={iconColor} opacity="0.68" />
              </td>
            </tr>
            <tr className={styles.tableBodyRow}>
              <td className={styles.tableCell}>1</td>
              <td className={`${styles.tableCell}`}>اساسيات التصوير</td>
              <td dir="rtl" className={`${styles.tableCell} truncate`}>
                ذيييثييثثييث هكذا يبدا التصوير دعقد
              </td>
              <td className={styles.tableCell}>
                <div className={styles.tablePill}>Activated</div>
              </td>
              <td className={styles.tableCell}>2</td>
              <td className={styles.tableCell}>02/02/2022</td>
              <td className={styles.tableCell}>02/02/2022</td>
              <td className={styles.actionsCell}>
                <EditIcon size="20" color={iconColor} opacity="0.68" />
                <TrashIcon size="20" color={iconColor} opacity="0.68" />
              </td>
            </tr>
            <tr className={styles.tableBodyRow}>
              <td className={styles.tableCell}>1</td>
              <td className={`${styles.tableCell}`}>اساسيات التصوير</td>
              <td dir="rtl" className={`${styles.tableCell} truncate`}>
                ذيييثييثثييث هكذا يبدا التصوير دعقد
              </td>
              <td className={styles.tableCell}>
                <div className={styles.tablePill}>Activated</div>
              </td>
              <td className={styles.tableCell}>2</td>
              <td className={styles.tableCell}>02/02/2022</td>
              <td className={styles.tableCell}>02/02/2022</td>
              <td className={styles.actionsCell}>
                <EditIcon size="20" color={iconColor} opacity="0.68" />
                <TrashIcon size="20" color={iconColor} opacity="0.68" />
              </td>
            </tr>
            <tr className={styles.tableBodyRow}>
              <td className={styles.tableCell}>1</td>
              <td className={`${styles.tableCell}`}>اساسيات التصوير</td>
              <td dir="rtl" className={`${styles.tableCell} truncate`}>
                ذيييثييثثييث هكذا يبدا التصوير دعقد
              </td>
              <td className={styles.tableCell}>
                <div className={styles.tablePill}>Activated</div>
              </td>
              <td className={styles.tableCell}>2</td>
              <td className={styles.tableCell}>02/02/2022</td>
              <td className={styles.tableCell}>02/02/2022</td>
              <td className={styles.actionsCell}>
                <EditIcon size="20" color={iconColor} opacity="0.68" />
                <TrashIcon size="20" color={iconColor} opacity="0.68" />
              </td>
            </tr>
            <tr className={styles.tableBodyRow}>
              <td className={styles.tableCell}>1</td>
              <td className={`${styles.tableCell}`}>اساسيات التصوير</td>
              <td dir="rtl" className={`${styles.tableCell} truncate`}>
                ذيييثييثثييث هكذا يبدا التصوير دعقد
              </td>
              <td className={styles.tableCell}>
                <div className={styles.tablePill}>Activated</div>
              </td>
              <td className={styles.tableCell}>2</td>
              <td className={styles.tableCell}>02/02/2022</td>
              <td className={styles.tableCell}>02/02/2022</td>
              <td className={styles.actionsCell}>
                <EditIcon size="20" color={iconColor} opacity="0.68" />
                <TrashIcon size="20" color={iconColor} opacity="0.68" />
              </td>
            </tr>
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
  );
};

export default Lessons;
