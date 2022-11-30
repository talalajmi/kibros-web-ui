import React, { useEffect, useState } from "react";
import { iconColor, kiBrosLightBlueColor } from "../../../utils/colors";
import { ArrowLeft, UserIcon } from "../../icons";
import ArrowRight from "../../icons/ArrowRight";
import EditIcon from "../../icons/EditIcon";
import ExportIcon from "../../icons/ExportIcon";
import styles from "./Users.module.css";
import TrashIcon from "../../icons/TrashIcon";
import Select from "react-select";
import {
  reactSelectTheme,
  getReactSelectStyles,
} from "../../../utils/ReactSelectTheme";
import { useRouter } from "next/router";
import { AccountController } from "../../../controllers";
import { IUser } from "../../../interfaces";
import { EditUserModal } from "..";

const options = [
  { label: "Free", value: "Free" },
  { label: "Premium", value: "Premium" },
];

const Users = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  const getUsers = async () => {
    const accessToken = localStorage.getItem("at");

    const response = await new AccountController(
      accessToken ? accessToken : "",
      router
    ).getAllAccounts();

    if (!response) {
      return;
    }
    setUsers([...response.users]);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="relative flex items-center justify-center">
      <div className={styles.container}>
        <div className={styles.filtersCard}>
          <p className="text-lg text-white">Search Filters</p>
          <div className={styles.inputs}>
            <Select
              options={options}
              placeholder="Please Select a status"
              className="w-full"
              styles={getReactSelectStyles(kiBrosLightBlueColor)}
              theme={reactSelectTheme}
            />
          </div>
        </div>
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
              <button className={styles.addButton}>Add User</button>
            </div>
          </div>
          <table className="w-full">
            <thead>
              <tr className="flex bg-primary-base py-10 px-20 uppercase text-darkText">
                <td className="flex-1">User</td>
                <td className="flex-1">Email</td>
                <td className="flex-1">Role</td>
                <td className="flex-1">Status</td>
                <td className="flex-1">subscription</td>
                <td className="flex-1">Actions</td>
              </tr>
            </thead>
            <tbody>
              {users.slice(0, 5).map((user, i) => (
                <tr
                  key={i}
                  className="flex border border-t-0 border-l-0 border-r-0 border-inputOutline/[0.2] py-[15px] px-20 text-darkTextSecondary/[0.68] hover:bg-primary-base"
                >
                  <td className="flex-1">{user.fullName}</td>
                  <td className="flex-1">{user.email}</td>
                  <td className="flex-1">User</td>
                  <td className="flex-1">
                    <div className="flex w-1/2 items-center justify-center rounded-100 bg-success-base/[0.2] text-success-base">
                      {user.subsecriptions ? user.subsecriptions : "Free"}
                    </div>
                  </td>
                  <td className="flex-1 cursor-pointer uppercase">
                    View subscription
                  </td>
                  <td className="flex flex-1 justify-start space-x-10">
                    <EditUserModal
                      showModal={showModal}
                      setShowModal={setShowModal}
                      user={user}
                    />
                    <TrashIcon
                      size="20"
                      className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
                      opacity="0.68"
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
                className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
                opacity={0.5}
              />
              <ArrowRight
                size={17}
                className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
