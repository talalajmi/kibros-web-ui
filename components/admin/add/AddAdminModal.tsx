import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { avatar } from "../../../constants";
import AccountController from "../../../controllers/AccountController";
import { AddAdminModel } from "../../../models";
import { iconColor } from "../../../utils/colors";
import { X } from "../../icons";
import styles from "./AddAdminModal.module.css";

interface ModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddAdminModal = ({ showModal, setShowModal }: ModalProps) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [accessToken, setAccessToken] = useState("");

  const router = useRouter();

  useEffect(() => {
    const at = localStorage.getItem("at");
    setAccessToken(at === null ? "" : at);
  }, []);

  const onSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const password = await new AccountController(accessToken, router).addAdmin(
      new AddAdminModel(email, firstName, lastName, phoneNumber, country, 0)
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
            color={iconColor}
            className="cursor-pointer"
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
        <div className={styles.modal__formContainer}>
          <form className={styles.modal__form}>
            <div className={styles.modal__formRow}>
              <input
                type="text"
                placeholder="First Name"
                className={styles.modal__input}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                className={styles.modal__input}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-center">
              <input
                type="text"
                placeholder="Email"
                className={styles.modal__input}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.modal__formRow}>
              <input
                type="text"
                placeholder="Phone Number"
                className={styles.modal__input}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <input
                type="text"
                placeholder="Country"
                className={styles.modal__input}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className={styles.modal__formRow}>
              <button
                className={styles.modal__submitButton}
                onClick={(e) => onSubmit(e)}
              >
                Submit
              </button>
              <button
                className={styles.modal__cancelButton}
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAdminModal;
