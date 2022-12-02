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
  reactSelectTheme,
  getReactSelectStyles,
} from "../../../utils/ReactSelectTheme";
import { IUser } from "../../../interfaces";
import EditIcon from "../../icons/EditIcon";
import { ErrorMessage, Field, Form, Formik } from "formik";
import {
  editUserInitialValues,
  UserFormInputs,
} from "../../../helpers/userHelper";
import { editUserSchema } from "../../../schemas/userSchema";
import AccountController from "../../../controllers/AccountController";
import { useUser } from "../../../utils/hooks/useUser";
import { useRouter } from "next/router";
import { UpdateAccountModel } from "../../../models";
import { useUsers } from "../../../utils/hooks";

interface ModalProps {
  user: IUser;
}

const options = [
  { label: "Staff", value: 2 },
  { label: "Admin", value: 3 },
];

const EditUserModal = ({ user }: ModalProps) => {
  const [showModal, setShowModal] = useState(false);
  const [role, setRole] = useState(2);

  const { accessToken } = useUser();
  const { users, admins, setUsers, setAdmins } = useUsers();
  const router = useRouter();

  const editUser = async (userFormInputs: UserFormInputs) => {
    const updatedUser = await new AccountController(
      accessToken,
      router
    ).updateAccount(
      user.id,
      new UpdateAccountModel(
        userFormInputs.email,
        userFormInputs.firstName,
        userFormInputs.lastName,
        userFormInputs.phoneNumber,
        userFormInputs.country,
        role
      )
    );

    if (!updatedUser) {
      return;
    }
    // Update users State
    const usersCopy = [...users];
    const userIndex = usersCopy.indexOf(user);
    usersCopy.splice(userIndex, 1);
    setUsers([...usersCopy]);

    // Update Admins State
    setAdmins([...admins, updatedUser]);

    setShowModal(false);
  };

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
            <Formik
              initialValues={editUserInitialValues(user)}
              onSubmit={editUser}
              validationSchema={editUserSchema}
            >
              <Form className={styles.modal__form}>
                <div className="flex flex-1 flex-row space-x-20">
                  <Field
                    name="firstName"
                    type="text"
                    placeholder="Name"
                    className={styles.modal__input}
                  />
                  <ErrorMessage name="firstName" />

                  <Field
                    name="lastName"
                    type="text"
                    placeholder="Name"
                    className={styles.modal__input}
                  />
                  <ErrorMessage name="lastName" />
                </div>
                <Field
                  name="email"
                  type="email"
                  placeholder="Email"
                  className={styles.modal__input}
                />
                <ErrorMessage name="email" />
                <Select
                  options={options}
                  defaultValue={options[0]}
                  onChange={(e) => setRole(e!.value)}
                  className="w-full"
                  placeholder="Please Select a role"
                  styles={getReactSelectStyles(kiBrosLightBlueColor)}
                  theme={reactSelectTheme}
                />
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
                    <button
                      className={styles.modal__submitButton}
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                  <div className="flex justify-start">
                    <button
                      className={styles.modal__cancelButton}
                      onClick={() => setShowModal((current) => !current)}
                      type="button"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUserModal;
