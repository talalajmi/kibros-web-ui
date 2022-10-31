import React from "react";
import { Filter, X } from "../../../icons";
import styles from "./styles.module.css";
import { iconColor, lightBlue } from "../../../../utils/colors";

const CategoryModal = ({ title }: { title: string }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modal__card}>
        <div className={styles.modal__close}>
          <X size="24" color={iconColor} />
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
          <button className={styles.modal__cancelButton}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;
