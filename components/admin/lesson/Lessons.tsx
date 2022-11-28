import React, { useState } from "react";
import { iconColor } from "../../../utils/colors";
import { ArrowLeft } from "../../icons";
import ArrowRight from "../../icons/ArrowRight";
import EditIcon from "../../icons/EditIcon";
import TrashIcon from "../../icons/TrashIcon";
import AddLessonModal from "./add/AddLessonModal";

import styles from "./Lessons.module.css";
import AddFileIcon from "../../icons/AddFileIcon";
import AddAttachmentModal from "./attachment/AddAttachmentModal";

const Lessons = () => {
  const [showAddLessonModal, setShowAddLessonModal] = useState(false);
  const [showAddAttachmentModal, setShowAddAttachmentModal] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.tableCard}>
        <div className={styles.header}>
          <div className={styles.searchContainer}>
            <input
              placeholder="Search Lesson"
              className="rounded-8 border border-inputOutline border-opacity-20 bg-primary-light p-10 text-white"
            />
            <button
              className={styles.addButton}
              onClick={() => setShowAddLessonModal(true)}
            >
              Add Lesson
            </button>
          </div>
        </div>
        <table className="w-full">
          <thead>
            <tr className="flex bg-primary-base uppercase text-darkText">
              <td className={styles.tableCell}>#</td>
              <td className={styles.tableCell}>Name</td>
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
                <AddFileIcon
                  size="20"
                  className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
                  opacity="0.68"
                  onClick={() => setShowAddAttachmentModal(true)}
                />
                <EditIcon
                  size="20"
                  className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
                  opacity="0.68"
                />
                <TrashIcon
                  size="20"
                  className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
                  opacity="0.68"
                />
                <AddAttachmentModal
                  showModal={showAddAttachmentModal}
                  setShowModal={setShowAddAttachmentModal}
                  lesson={{}}
                />
                <AddLessonModal
                  showModal={showAddLessonModal}
                  setShowModal={setShowAddLessonModal}
                />
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
                <AddFileIcon
                  size="20"
                  className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
                  opacity="0.68"
                />
                <EditIcon
                  size="20"
                  className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
                  opacity="0.68"
                />
                <TrashIcon
                  size="20"
                  className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
                  opacity="0.68"
                />
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
                <AddFileIcon
                  size="20"
                  className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
                  opacity="0.68"
                />
                <EditIcon
                  size="20"
                  className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
                  opacity="0.68"
                />
                <TrashIcon
                  size="20"
                  className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
                  opacity="0.68"
                />
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
                <AddFileIcon
                  size="20"
                  className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
                  opacity="0.68"
                />
                <EditIcon
                  size="20"
                  className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
                  opacity="0.68"
                />
                <TrashIcon
                  size="20"
                  className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
                  opacity="0.68"
                />
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
                <AddFileIcon
                  size="20"
                  className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
                  opacity="0.68"
                />
                <EditIcon
                  size="20"
                  className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
                  opacity="0.68"
                />
                <TrashIcon
                  size="20"
                  className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
                  opacity="0.68"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className={styles.cardFooter}>
          <p>1-5 of 13</p>
          <div className={styles.footerArrows}>
            <ArrowLeft size={17} color={iconColor} opacity={0.5} />
            <ArrowRight
              size={17}
              className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lessons;
