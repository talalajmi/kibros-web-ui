import React from "react";
import { iconColor } from "../../utils/colors";
import { ArrowLeft } from "../icons";
import ArrowRight from "../icons/ArrowRight";
import EditIcon from "../icons/EditIcon";
import ExportIcon from "../icons/ExportIcon";
import TrashIcon from "../icons/TrashIcon";

import styles from "./AdminsTable.module.css";

const AdminsTable = () => {
  return (
    <div className={styles.container}>
      <div className={styles.tableCard}>
        <div className={styles.header}>
          <button className={styles.exportButton}>
            <ExportIcon size="24" color={iconColor} opacity="0.68" />
            <span>Export to CSV</span>
          </button>
          <div className={styles.searchContainer}>
            <input
              placeholder="Search User"
              className="rounded-8 border border-inputOutline border-opacity-20 bg-primaryLight p-10 text-white"
            />
            <button className={styles.addButton}>Add Admin</button>
          </div>
        </div>
        <table className="w-full">
          <thead>
            <tr className="flex bg-primary py-10 px-20 uppercase text-darkText">
              <td className="flex-1">User</td>
              <td className="flex-1">Email</td>
              <td className="flex-1">Role</td>
              <td className="flex-1">Actions</td>
            </tr>
          </thead>
          <tbody>
            <tr className="flex border border-t-0 border-l-0 border-r-0 border-inputOutline/[0.2] py-[15px] px-20 text-darkTextSecondary/[0.68]">
              <td className="flex-1">Benedetto Rossiter</td>
              <td className="flex-1">estelle.Bailey10@gmail.com</td>
              <td className="flex-1">Admin</td>
              <td className="flex flex-1 justify-start space-x-10">
                <EditIcon size="20" color={iconColor} opacity="0.68" />
                <TrashIcon size="20" color={iconColor} opacity="0.68" />
              </td>
            </tr>
            <tr className="flex border border-t-0 border-l-0 border-r-0 border-inputOutline/[0.2] py-[15px] px-20 text-darkTextSecondary/[0.68]">
              <td className="flex-1">Benedetto Rossiter</td>
              <td className="flex-1">estelle.Bailey10@gmail.com</td>
              <td className="flex-1">Admin</td>
              <td className="flex flex-1 justify-start space-x-10">
                <EditIcon size="20" color={iconColor} opacity="0.68" />
                <TrashIcon size="20" color={iconColor} opacity="0.68" />
              </td>
            </tr>
            <tr className="flex border border-t-0 border-l-0 border-r-0 border-inputOutline/[0.2] py-[15px] px-20 text-darkTextSecondary/[0.68]">
              <td className="flex-1">Benedetto Rossiter</td>
              <td className="flex-1">estelle.Bailey10@gmail.com</td>
              <td className="flex-1">Admin</td>
              <td className="flex flex-1 justify-start space-x-10">
                <EditIcon size="20" color={iconColor} opacity="0.68" />
                <TrashIcon size="20" color={iconColor} opacity="0.68" />
              </td>
            </tr>
            <tr className="flex border border-t-0 border-l-0 border-r-0 border-inputOutline/[0.2] py-[15px] px-20 text-darkTextSecondary/[0.68]">
              <td className="flex-1">Benedetto Rossiter</td>
              <td className="flex-1">estelle.Bailey10@gmail.com</td>
              <td className="flex-1">Staff</td>
              <td className="flex flex-1 justify-start space-x-10">
                <EditIcon size="20" color={iconColor} opacity="0.68" />
                <TrashIcon size="20" color={iconColor} opacity="0.68" />
              </td>
            </tr>
            <tr className="flex border border-t-0 border-l-0 border-r-0 border-inputOutline/[0.2] py-[15px] px-20 text-darkTextSecondary/[0.68]">
              <td className="flex-1">Benedetto Rossiter</td>
              <td className="flex-1">estelle.Bailey10@gmail.com</td>
              <td className="flex-1">Staff</td>
              <td className="flex flex-1 justify-start space-x-10">
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

export default AdminsTable;
