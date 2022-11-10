import React from "react";
import { iconColor } from "../../../../utils/colors";
import { Input, Label } from "../../../form";
import { X } from "../../../icons";
import styles from "./LessonModal.module.css";

const LessonModal = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.modal__card}>
        <div className={styles.modal__icon}>
          <X size="24" color={iconColor} className="cursor-pointer" />
        </div>
        <div className="space-y-20">
          <div className={styles.modal__header}>
            <p className="text-2xl">Add lesson</p>
            <p className="text-darkTextSecondary/[0.68]">
              Please enter lesson details here
            </p>
          </div>
          <div className={styles.modal__form}>
            <div className={styles.modal__inputs}>
              <div className="relative">
                <Input type="text" />
                <Label>Lesson Name (AR)</Label>
              </div>
              <div className="relative">
                <Input type="text" />
                <Label>Lesson Subtitle (AR)</Label>
              </div>
            </div>
            <div>
              <div className="relative">
                <Input type="text" />
                <label>Lesson Description (AR)</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonModal;
