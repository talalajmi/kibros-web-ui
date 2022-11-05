import { Button } from "@mui/material";
import React from "react";
import { iconColor } from "../../../../utils/colors";
import { Input, Label } from "../../../form";
import { X } from "../../../icons";
import styles from "./styles.module.css";

const AddAttchmentModal = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.modal__card}>
        <div className={styles.modal__icon}>
          <X size="24" color={iconColor} />
        </div>
        <div className={styles.modal__content}>
          <div className={styles.modal__header}>
            <p className="text-2xl">Add attachment to lesson</p>
            <p className="text-darkTextSecondary/[0.68]">
              Please enter attachment details
            </p>
          </div>
          <div className={styles.modal__body}>
            <div className={styles.modal__inputs}>
              <div className="relative">
                <Input type="text" placeholder="My file" />
                <Label>File Name</Label>
              </div>
              <div className="relative">
                <Input type="text" placeholder="link" />
                <Label>Download Link</Label>
              </div>
            </div>
            <div className={styles.modal__pillsContainer}>
              <div className={styles.modal__pillRow}>
                <div className={styles.modal__pill}>
                  <p>My File</p>
                  <X size="15" color={iconColor} className="cursor-pointer" />
                </div>
                <div className={styles.modal__pill}>
                  <p>My File</p>
                  <X size="15" color={iconColor} className="cursor-pointer" />
                </div>
              </div>
              <div className={styles.modal__pillRow}>
                <div className={styles.modal__pill}>
                  <p>My File</p>
                  <X size="15" color={iconColor} className="cursor-pointer" />
                </div>
                <div className={styles.modal__pill}>
                  <p>My File</p>
                  <X size="15" color={iconColor} className="cursor-pointer" />
                </div>
              </div>
              <div className={styles.modal__pillRow}>
                <div className={styles.modal__pill}>
                  <p>My File</p>
                  <X size="15" color={iconColor} className="cursor-pointer" />
                </div>
                <div className={styles.modal__pill}>
                  <p>My File</p>
                  <X size="15" color={iconColor} className="cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.modal__footer}>
            <Button variant="contained" size="medium" color="secondary">
              <span className="text-white">Add Attachment</span>
            </Button>
            <Button variant="contained" size="medium" color="success">
              <span className="text-white">Submit</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAttchmentModal;