import { ErrorMessage, Field, Form, Formik } from "formik";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { avatar } from "../../../constants";
import AccountController from "../../../controllers/AccountController";
import {
  UserFormInputs,
  addAdminInitialValues,
} from "../../../helpers/userHelper";
import { AddAdminModel } from "../../../models";
import { addAdminSchema } from "../../../schemas/userSchema";
import { useAuth, useUser, useUsers } from "../../../utils/hooks";
import { Input } from "../../form";
import { X } from "../../icons";
import styles from "./AddAdminModal.module.css";

const AddAdminModal = () => {
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();
  const { accessToken } = useAuth();

  const onSubmit = async (admin: UserFormInputs) => {
    const password = await new AccountController(accessToken, router).addAdmin(
      new AddAdminModel(
        admin.email,
        admin.firstName,
        admin.lastName,
        admin.phoneNumber,
        admin.country,
        3
      )
    );

    if (!password) {
      return;
    }

    setShowModal((current) => !current);
  };

  return (
    <div>
      <button className={styles.addButton} onClick={() => setShowModal(true)}>
        Add Admin
      </button>
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
                <div className="grid grid-flow-col grid-rows-1 gap-20">
                  <Field
                    name="firstName"
                    placeholder="First Name"
                    component={Input}
                  />
                  <Field
                    name="lastName"
                    placeholder="Last Name"
                    component={Input}
                  />
                </div>
                <Field name="email" placeholder="Email" component={Input} />
                <div className="grid grid-flow-col grid-rows-1 gap-20">
                  <Field
                    name="phoneNumber"
                    placeholder="Phone Number"
                    component={Input}
                  />
                  <Field
                    name="country"
                    placeholder="Country"
                    component={Input}
                  />
                </div>
                <div className="grid grid-flow-col grid-rows-1 gap-20">
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
                <div className="grid grid-flow-col grid-rows-1 gap-20">
                  <p className={styles.modal__note}>
                    Note: Password will be auto generated <br /> and sent
                    through the email provided
                  </p>
                </div>
              </Form>
            </div>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default AddAdminModal;
