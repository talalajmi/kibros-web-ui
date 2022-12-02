import { ErrorMessage, Field, Form, Formik } from "formik";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { avatar } from "../../../constants";
import AccountController from "../../../controllers/AccountController";
import {
  AddAdminFormInputs,
  addAdminInitialValues,
} from "../../../helpers/userHelper";
import { AddAdminModel } from "../../../models";
import { addAdminSchema } from "../../../schemas/addAdminSchema";
import { useUser, useUsers } from "../../../utils/hooks";
import { X } from "../../icons";
import styles from "./AddAdminModal.module.css";

interface ModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddAdminModal = ({ showModal, setShowModal }: ModalProps) => {
  const router = useRouter();
  const { accessToken } = useUser();
  const { admins, setAdmins } = useUsers();

  const onSubmit = async (admin: AddAdminFormInputs) => {
    const password = await new AccountController(accessToken, router).addAdmin(
      new AddAdminModel(
        admin.email,
        admin.firstName,
        admin.lastName,
        admin.phoneNumber,
        admin.country,
        0
      )
    );

    if (!password) {
      return;
    }

    setShowModal((current) => !current);
  };

  return (
    <div className={showModal ? styles.modal : styles.modalHidden}>
      <div className={styles.modal__card}>
        <div className={styles.modal__close}>
          <X
            size="24"
            className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
            onClick={() => setShowModal((current) => !current)}
          />
        </div>
        <div className={styles.modal__title}>Add Admin</div>
        <div className={styles.modal__circleContainer}>
          <Image
            src={avatar}
            alt="avatar-image"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <Formik
          initialValues={addAdminInitialValues}
          onSubmit={onSubmit}
          validationSchema={addAdminSchema}
        >
          <div className={styles.modal__formContainer}>
            <Form className={styles.modal__form}>
              <div className={styles.modal__formRow}>
                <div className="flex w-full flex-col items-start">
                  <Field
                    name="firstName"
                    placeholder="First Name"
                    className={styles.modal__input}
                  />
                  <ErrorMessage name="firstName" />
                </div>
                <div className="flex w-full flex-col items-start">
                  <Field
                    name="lastName"
                    placeholder="Last Name"
                    className={styles.modal__input}
                  />
                  <ErrorMessage name="lastName" />
                </div>
              </div>
              <div className="flex flex-col items-start">
                <Field
                  name="email"
                  placeholder="Email"
                  className={styles.modal__input}
                />
                <ErrorMessage name="email" />
              </div>
              <div className={styles.modal__formRow}>
                <div className="flex w-full flex-col items-start">
                  <Field
                    name="phoneNumber"
                    placeholder="Phone Number"
                    className={styles.modal__input}
                  />
                  <ErrorMessage name="phoneNumber" />
                </div>
                <div className="flex w-full flex-col items-start">
                  <Field
                    name="country"
                    placeholder="Country"
                    className={styles.modal__input}
                  />
                  <ErrorMessage name="country" />
                </div>
              </div>
              <div className={styles.modal__formRow}>
                <button className={styles.modal__submitButton} type="submit">
                  Submit
                </button>
                <button
                  className={styles.modal__cancelButton}
                  type="button"
                  onClick={() => setShowModal((current) => !current)}
                >
                  Cancel
                </button>
              </div>
              <div className={styles.modal__formRow}>
                <p className={styles.modal__note}>
                  Note: Password will be auto generated <br /> and sent through
                  the email provided
                </p>
              </div>
            </Form>
          </div>
        </Formik>
      </div>
    </div>
  );
};

export default AddAdminModal;
