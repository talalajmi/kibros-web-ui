import React from "react";
import { kiBrosLightBlueColor, borderColor } from "../../../../utils/colors";
import { Input } from "../../../form";
import { X } from "../../../icons";
import styles from "./AddLessonModal.module.css";
import Select from "react-select";
import {
  reactSelectTheme,
  getReactSelectStyles,
} from "../../../../utils/ReactSelectTheme";
import { Switch } from "@mui/material";
import { lessonLevelOptions } from "../../../../helpers/lessonHelper";
import { Field, Form, Formik } from "formik";

interface ModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddLessonModal = ({ showModal, setShowModal }: ModalProps) => {
  return (
    <div className={showModal ? styles.modal : styles.modalHidden}>
      <div className={"rounded-10 bg-primary-light shadow-2xl"}>
        <div className="flex flex-col space-y-20 p-[30px]">
          <div className="flex justify-end">
            <X
              size={24}
              className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
              onClick={() => setShowModal(false)}
            />
          </div>
          <div className="flex flex-col items-center justify-between">
            <p className="text-xl text-white">Add Lesson</p>
            <p className="text-lg text-darkTextSecondary/[.6]">
              Please enter lesson details here
            </p>
          </div>
          <Formik initialValues={{}} onSubmit={() => {}}>
            <Form className="flex flex-col items-center space-y-20">
              <div className="flex w-full space-x-20">
                <Field component={Input} />
                <Field component={Input} />
              </div>
              <Field component={Input} />
              <div className="flex w-full space-x-20">
                <Field component={Input} />
                <Field component={Input} />
              </div>
              <Field component={Input} />
              <div className="flex w-full space-x-20">
                <Field component={Input} />
                <Field component={Input} />
              </div>
              <div className="flex w-full space-x-20">
                <Select
                  placeholder="Choose Level"
                  className="w-full"
                  theme={reactSelectTheme}
                  options={lessonLevelOptions}
                  styles={getReactSelectStyles(kiBrosLightBlueColor)}
                />
                <Field component={Input} />
              </div>
              <div className="flex w-full space-x-20">
                <Select
                  placeholder="Choose category"
                  className="w-full"
                  theme={reactSelectTheme}
                  styles={{
                    control: (baseStyles: any) => ({
                      ...baseStyles,
                      backgroundColor: kiBrosLightBlueColor,
                      borderColor: borderColor,
                      padding: 3,
                    }),
                  }}
                />
                <Select
                  placeholder="Choose Lessons"
                  className="w-full"
                  theme={reactSelectTheme}
                  styles={{
                    control: (baseStyles: any) => ({
                      ...baseStyles,
                      backgroundColor: kiBrosLightBlueColor,
                      borderColor: borderColor,
                      padding: 3,
                    }),
                  }}
                />
              </div>
              <Field component={Input} type="file" />
              <div className="flex space-x-20">
                <div className="flex items-center justify-center">
                  <Switch defaultChecked color="secondary" />
                  <p className="mt-[8px] text-darkTextSecondary/[0.68]">
                    is Paid?
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <Switch defaultChecked color="secondary" />
                  <p className="mt-[8px] text-darkTextSecondary/[0.68]">
                    is Highlighted?
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <Switch defaultChecked color="secondary" />
                  <p className="mt-[8px] text-darkTextSecondary/[0.68]">
                    is New?
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <Switch defaultChecked color="secondary" />
                  <p className="mt-[8px] text-darkTextSecondary/[0.68]">
                    is Activated?
                  </p>
                </div>
              </div>
              <div className="flex space-x-20">
                <button className="flex items-center justify-center rounded-8 bg-secondary-base py-5 px-20 text-white transition duration-300 ease-in-out hover:bg-secondary-dark">
                  Submit
                </button>
                <button
                  className="flex items-center justify-center rounded-8 border border-inputOutline/[0.2] bg-primary-light py-5 px-20 text-white transition duration-300 ease-in-out hover:bg-white/[0.05]"
                  onClick={() => setShowModal((current) => !current)}
                >
                  Cancel
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default AddLessonModal;
