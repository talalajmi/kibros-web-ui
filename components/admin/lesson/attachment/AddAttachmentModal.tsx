import { Button } from "@mui/material";
import React, { useState } from "react";
import { iconColor } from "../../../../utils/colors";
import { Input, Label } from "../../../form";
import { X } from "../../../icons";
import AddFileIcon from "../../../icons/AddFileIcon";
import styles from "./AddAttachmentModal.module.css";

interface ModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  lesson: any;
}

const AddAttachmentModal = ({
  showModal,
  setShowModal,
  lesson,
}: ModalProps) => {
  return (
    <div className={showModal ? styles.modal : styles.modalHidden}>
      <div className={styles.modal__card}>
        <div className={styles.modal__icon}>
          <X
            size="24"
            className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
            onClick={() => setShowModal(false)}
          />
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
                <Label text="">File Name</Label>
              </div>
              <div className="relative">
                <Input type="text" placeholder="link" />
                <Label text="">Download Link</Label>
              </div>
            </div>
            <div className={styles.modal__pillsContainer}>
              <div className={styles.modal__pillRow}>
                <div className={styles.modal__pill}>
                  <p>My File</p>
                  <X
                    size="15"
                    className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
                  />
                </div>
                <div className={styles.modal__pill}>
                  <p>My File</p>
                  <X
                    size="15"
                    className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
                  />
                </div>
              </div>
              <div className={styles.modal__pillRow}>
                <div className={styles.modal__pill}>
                  <p>My File</p>
                  <X
                    size="15"
                    className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
                  />
                </div>
                <div className={styles.modal__pill}>
                  <p>My File</p>
                  <X
                    size="15"
                    className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
                  />
                </div>
              </div>
              <div className={styles.modal__pillRow}>
                <div className={styles.modal__pill}>
                  <p>My File</p>
                  <X
                    size="15"
                    className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
                  />
                </div>
                <div className={styles.modal__pill}>
                  <p>My File</p>
                  <X
                    size="15"
                    className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.modal__footer}>
            <button className="rounded-8 bg-secondary-base p-10 uppercase transition duration-300 ease-out hover:bg-secondary-dark">
              <span className="py-[7px] px-[22px] text-white">
                Add attachment
              </span>
            </button>
            <button className="rounded-8 bg-success-base p-10 uppercase transition duration-300 ease-out hover:bg-success-dark">
              <span className="py-[7px] px-[22px] text-white">Submit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAttachmentModal;
