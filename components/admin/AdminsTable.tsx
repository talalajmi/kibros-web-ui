import React, { useState, useEffect } from "react";
import { iconColor } from "../../utils/colors";
import { ArrowLeft } from "../icons";
import ArrowRight from "../icons/ArrowRight";
import EditIcon from "../icons/EditIcon";
import ExportIcon from "../icons/ExportIcon";
import TrashIcon from "../icons/TrashIcon";
import AddAdminModal from "./add/AddAdminModal";

import styles from "./AdminsTable.module.css";
import AccountController from "../../controllers/AccountController";
import { useRouter } from "next/router";
import { IUser } from "../../interfaces";
import { UserRoles } from "../../constants/UserRoles";

const AdminsTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState<IUser[]>([]);

  const router = useRouter();

  const getUsers = async () => {
    const accessToken = localStorage.getItem("at");

    const users = await new AccountController(
      accessToken ? accessToken : "",
      router
    ).getAllAccounts();

    if (!users) {
      return;
    }
    setUsers([...users.admins]);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className={showModal ? styles.blurryContainer : styles.container}>
        <div className={styles.tableCard}>
          <div className={styles.header}>
            <button className={styles.exportButton}>
              <ExportIcon size="24" color={iconColor} opacity="0.68" />
              <span>Export to CSV</span>
            </button>
            <div className={styles.searchContainer}>
              <input
                placeholder="Search User"
                className="rounded-8 border border-inputOutline border-opacity-20 bg-primary-light p-10 text-white"
              />
              <button
                className={styles.addButton}
                onClick={() => setShowModal((current) => !current)}
              >
                Add Admin
              </button>
            </div>
          </div>
          <table className="w-full">
            <thead>
              <tr className="flex bg-primary-base py-10 px-20 uppercase text-darkText">
                <td className="flex-1">User</td>
                <td className="flex-1">Email</td>
                <td className="flex-1">Role</td>
                <td className="flex-1">Actions</td>
              </tr>
            </thead>
            <tbody>
              {users.map((user: IUser, index: number) => (
                <tr
                  key={index}
                  className="flex border border-t-0 border-l-0 border-r-0 border-inputOutline/[0.2] py-[15px] px-20 text-darkTextSecondary/[0.68]"
                >
                  <td className="flex-1">{user.fullName}</td>
                  <td className="flex-1">{user.email}</td>
                  <td className="flex-1">
                    {UserRoles[user.role as keyof typeof UserRoles].title}
                  </td>
                  <td className="flex flex-1 justify-start space-x-10">
                    <EditIcon
                      size="20"
                      color={iconColor}
                      opacity="0.68"
                      className="cursor-pointer"
                    />
                    <TrashIcon
                      size="20"
                      color={iconColor}
                      opacity="0.68"
                      className="cursor-pointer"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={styles.cardFooter}>
            <p>1-5 of 13</p>
            <div className={styles.footerArrows}>
              <ArrowLeft
                size={17}
                color={iconColor}
                opacity={0.5}
                className="cursor-pointer"
              />
              <ArrowRight
                size={17}
                color={iconColor}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <AddAdminModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default AdminsTable;
