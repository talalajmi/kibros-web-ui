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
import { useRouter } from "next/router";
import { UpdateAccountModel } from "../../../models";
import { useUser, useUsers } from "../../../utils/hooks";

interface ModalProps {
  user: IUser;
}

const options = [
  { label: "Free User", value: 0 },
  { label: "Premium User", value: 1 },
  { label: "Staff", value: 2 },
  { label: "Admin", value: 3 },
];

const EditUserModal = ({ user }: ModalProps) => {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuspended, setIsSuspended] = useState(user.isSuspended);
  const [role, setRole] = useState(user.role);

  const { accessToken } = useUser();
  const { users, admins, setUsers, setAdmins } = useUsers();
  const router = useRouter();

  const editUser = async (userFormInputs: UserFormInputs) => {
    setIsLoading(true);
    const updatedUser: IUser = await new AccountController(
      accessToken,
      router
    ).updateAccount(
      user.id,
      new UpdateAccountModel(
        userFormInputs.firstName,
        userFormInputs.lastName,
        userFormInputs.phoneNumber,
        userFormInputs.country,
        role,
        isSuspended
      )
    );

    if (!updatedUser) {
      return;
    }

    // Update users State
    const usersCopy = [...users];

    if (updatedUser.role === 0 || updatedUser.role === 1) {
      usersCopy.unshift(updatedUser);
    }
    setUsers([...usersCopy]);

    // Update admins State
    const adminsCopy = [...admins];

    if (updatedUser.role === 2 || updatedUser.role === 3) {
      adminsCopy.unshift(updatedUser);
    }

    setAdmins([...adminsCopy]);
    setIsLoading(false);
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
                <div className="grid w-full grid-flow-col grid-rows-1 gap-20">
                  <Field
                    name="firstName"
                    type="text"
                    placeholder="Name"
                    component={Input}
                  />

                  <Field
                    name="lastName"
                    type="text"
                    placeholder="Name"
                    component={Input}
                  />
                </div>
                <div className="w-full">
                  <Field
                    name="email"
                    type="email"
                    disabled
                    placeholder="Email"
                    component={Input}
                  />
                </div>
                <Select
                  options={options}
                  className="w-full"
                  defaultValue={options[user.role]}
                  theme={reactSelectTheme}
                  placeholder="Please Select a role"
                  onChange={(e) => setRole(e ? e.value : user.role)}
                  styles={getReactSelectStyles(kiBrosLightBlueColor)}
                />
                <div className={styles.modal__row}>
                  <div className="flex flex-row items-center">
                    <Switch
                      defaultChecked={user.isEmailActivated}
                      color="secondary"
                      disabled
                    />
                    <p className="text-darkTextSecondary/[0.68]">
                      Email Activated
                    </p>
                  </div>
                  <div className="flex flex-row items-center">
                    <Switch
                      defaultChecked={user.isSuspended}
                      color="secondary"
                      onClick={() => setIsSuspended((current) => !current)}
                    />
                    <p className="text-darkTextSecondary/[0.68]">Suspend</p>
                  </div>
                </div>
                <div className={styles.modal__row}>
                  <div className="flex justify-end">
                    <button
                      className={
                        isLoading
                          ? styles.modal__diasbledButton
                          : styles.modal__submitButton
                      }
                      type="submit"
                      disabled={isLoading}
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
