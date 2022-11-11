import {
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  Switch,
} from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { avatar } from "../../../constants";
import { iconColor } from "../../../utils/colors";
import { Input } from "../../form";
import { X } from "../../icons";
import styles from "./EditUserModal.module.css";

const EditUserModal = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className={styles.modal}>
      <div className={styles.modal__card}>
        <div className={styles.modal__container}>
          <div className={styles.modal__icon}>
            <X size="24" color={iconColor} />
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
            <Input type="text" placeholder="Name" />
            <div className={styles.modal__row}>
              <div className={styles.modal__emailContainter}>
                <Input type="email" placeholder="Email" />
              </div>
              <div className={styles.modal__dropdownContainer}>
                <label
                  htmlFor="role"
                  className="text-darkTextSecondary/[0.68] absolute bottom-[45px] left-16 z-10 flex w-48 items-center justify-center bg-primaryLight"
                >
                  Role
                </label>
                <select
                  name="role"
                  id="role"
                  className="outlined h-[56px] w-full rounded-8 bg-primaryLight p-12 text-white "
                >
                  <option value="admin">Admin</option>
                  <option value="staff">Staff</option>
                </select>
              </div>
            </div>
            <div className={styles.modal__row}>
              <div className="flex flex-row items-center">
                <Switch defaultChecked color="secondary" disabled />
                <p className="text-darkTextSecondary/[0.68]">Email Activated</p>
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
                <button className={styles.modal__cancelButton}>Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUserModal;
