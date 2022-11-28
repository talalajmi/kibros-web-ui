import { Switch } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { avatar } from "../../../constants";
import { Input } from "../../form";
import { X } from "../../icons";
import styles from "./EditUserModal.module.css";
import Select from "react-select";
import { kiBrosLightBlueColor } from "../../../utils/colors";
import {
  getReactSelectTheme,
  reactSelectStyles,
} from "../../../utils/ReactSelectTheme";
import { IUser } from "../../../interfaces";
import EditIcon from "../../icons/EditIcon";

interface ModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser;
}

const options = [
  { label: "Staff", value: 2 },
  { label: "Admin", value: 3 },
];

const EditUserModal = ({ showModal, setShowModal }: ModalProps) => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div>
      <EditIcon
        onClick={() => setShowModal((current) => !current)}
        size="20"
        className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
        opacity="0.68"
      />
      <div
        id="userModal"
        className={showModal ? styles.modal : styles.modalHidden}
      >
        <div className={styles.modal__card}>
          <div className={styles.modal__container}>
            <div className={styles.modal__icon}>
              <X
                size="24"
                className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
                onClick={() => setShowModal((current) => !current)}
              />
            </div>
            <p className={styles.modal__title}>Edit User</p>
            <div className={styles.modal__circleContainer}>
              <Image
                src={avatar}
                alt="avatar-image"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <form className={styles.modal__form}>
              <div className="flex-1">
                <Input type="text" placeholder="Name" />
              </div>
              <div className={styles.modal__row}>
                <Input type="email" placeholder="Email" className="p-10" />
                <Select
                  options={options}
                  placeholder="Please Select a role"
                  styles={reactSelectStyles(kiBrosLightBlueColor)}
                  theme={getReactSelectTheme}
                />
              </div>
              <div className={styles.modal__row}>
                <div className="flex flex-row items-center">
                  <Switch defaultChecked color="secondary" disabled />
                  <p className="text-darkTextSecondary/[0.68]">
                    Email Activated
                  </p>
                </div>
                <div className="flex flex-row items-center">
                  <Switch defaultChecked color="secondary" />
                  <p className="text-darkTextSecondary/[0.68]">Suspend</p>
                </div>
              </div>
              <div className={styles.modal__row}>
                <div className="flex justify-end">
                  <button className={styles.modal__submitButton}>Submit</button>
                </div>
                <div className="flex justify-start">
                  <button
                    className={styles.modal__cancelButton}
                    onClick={() => setShowModal((current) => !current)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUserModal;
