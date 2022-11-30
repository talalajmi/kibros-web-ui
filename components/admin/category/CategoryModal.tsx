import React from "react";
import { Filter, X } from "../../icons";
import styles from "./CategoryModal.module.css";
import { iconColor, lightBlue } from "../../../utils/colors";

interface ModalProps {
  title: string;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CategoryModal = ({ title, showModal, setShowModal }: ModalProps) => {
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
        <div className={styles.modal__title}>
          <p>{title}</p>
        </div>
        <div className={styles.modal__circleContainer}>
          <div className={styles.modal__circle}></div>
          <Filter className={styles.modal__icon} size="55" color={lightBlue} />
        </div>
        <div className={styles.modal__inputContainer}>
          <input
            type="text"
            placeholder="Category Name"
            className={styles.modal__input}
          />
        </div>
        <div className={styles.modal__buttonContainer}>
          <button className={styles.modal__submitButton}>Submit</button>
          <button
            className={styles.modal__cancelButton}
            onClick={() => setShowModal((current) => !current)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;
