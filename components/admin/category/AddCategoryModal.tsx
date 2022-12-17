import React from "react";
import { Filter, X } from "../../icons";
import styles from "./AddCategoryModal.module.css";
import { lightBlue } from "../../../utils/colors";
import { ICategory } from "../../../interfaces/Category";
import { ErrorMessage, Field, Form, Formik } from "formik";
import {
  categoryInitialValues,
  CategoryFormInputs,
} from "../../../helpers/categoryHelper";
import { categorySchema } from "../../../schemas/categorySchema";
import CategoryController from "../../../controllers/CategoryController";
import { useRouter } from "next/router";
import { useUser, useCategories } from "../../../utils/hooks";
import { CreateCategoryModel } from "../../../models";
import { Input } from "../../form";

interface ModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CategoryModal = ({ showModal, setShowModal }: ModalProps) => {
  const router = useRouter();
  const { accessToken } = useUser();
  const { categories, setCategories } = useCategories();

  const addCategory = async ({ categoryName }: CategoryFormInputs) => {
    const category: ICategory = await new CategoryController(
      accessToken,
      router
    ).addCategory(new CreateCategoryModel(categoryName));

    if (!category) {
      return;
    }

    const categoriesCopy = [...categories];
    categoriesCopy.unshift(category);
    setCategories([...categoriesCopy]);
    setShowModal(false);
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
        <div className={styles.modal__title}>
          <p>Add Category</p>
        </div>
        <div className={styles.modal__circleContainer}>
          <div className={styles.modal__circle}></div>
          <Filter className={styles.modal__icon} size="55" color={lightBlue} />
        </div>
        <Formik
          initialValues={categoryInitialValues}
          onSubmit={addCategory}
          validationSchema={categorySchema}
        >
          <Form className="space-y-20">
            <div className={styles.modal__inputContainer}>
              <Field
                name="categoryName"
                placeholder="Category Name"
                component={Input}
              />
            </div>
            <div className={styles.modal__buttonContainer}>
              <button className={styles.modal__submitButton} type="submit">
                Submit
              </button>
              <button
                className={styles.modal__cancelButton}
                onClick={() => setShowModal((current) => !current)}
              >
                Cancel
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default CategoryModal;
