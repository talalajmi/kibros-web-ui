import Image from "next/image";
import React from "react";
import { iconColor } from "../../../utils/colors";
import { X } from "../../icons";
import styles from "./styles.module.css";

const AddAdminModal = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.modal__card}>
        <div className={styles.modal__close}>
          <X size="24" color={iconColor} />
        </div>
        <div className={styles.modal__title}>Add Admin</div>
        <div className={styles.modal__circleContainer}>
          <Image
            src={"/assets/images/avatar.png"}
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
                placeholder="Category Name"
                className={styles.modal__input}
              />
              <input
                type="text"
                placeholder="Category Name"
                className={styles.modal__input}
              />
            </div>
            <div className="flex items-center justify-center">
              <input
                type="text"
                placeholder="Category Name"
                className={styles.modal__input}
              />
            </div>
            <div className={styles.modal__formRow}>
              <input
                type="text"
                placeholder="Category Name"
                className={styles.modal__input}
              />
              <input
                type="text"
                placeholder="Category Name"
                className={styles.modal__input}
              />
            </div>
            <div className="flex items-center justify-center">
              <input
                type="text"
                placeholder="Category Name"
                className={styles.modal__input}
              />
            </div>
            <div className={styles.modal__formRow}>
              <button className={styles.modal__submitButton}>Submit</button>
              <button className={styles.modal__cancelButton}>Cancel</button>
            </div>
            <div className={styles.modal__formRow}>
              <p className={styles.modal__note}>
                Note: Password will be auto generated and sent through the email
                provided
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAdminModal;
