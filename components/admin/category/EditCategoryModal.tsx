import React, { useState } from "react";
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
import { useCategories, useUser } from "../../../utils/hooks";
import { EditCategoryModel } from "../../../models";
import EditIcon from "../../icons/EditIcon";
import { Input } from "../../form";
import { useAuth } from "../../../utils/hooks/useAuth";

interface ModalProps {
  category: ICategory;
}

const EditCategoryModal = ({ category }: ModalProps) => {
  const editCategoryInitialValue = {
    categoryName: category.categoryName,
  };

  const [showModal, setShowModal] = useState(false);

  const router = useRouter();
  const { accessToken } = useAuth();
  const { categories, setCategories } = useCategories();

  const editCategory = async ({ categoryName }: CategoryFormInputs) => {
    const updatedCategory: ICategory = await new CategoryController(
      accessToken,
      router
    ).editCategory(category.id, new EditCategoryModel(categoryName));

    if (!updatedCategory) {
      return;
    }

    const categoriesCopy = [...categories];
    const categoryIndex = categoriesCopy.findIndex(
      (c) => c.id === updatedCategory.id
    );
    categoriesCopy.splice(categoryIndex, 1, updatedCategory);
    setCategories([...categoriesCopy]);
    setShowModal(false);
  };

  return (
    <>
      <EditIcon
        size="18"
        className="cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
        opacity="0.68"
        onClick={() => setShowModal((current) => !current)}
      />
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
            <p>Edit Category</p>
          </div>
          <div className={styles.modal__circleContainer}>
            <div className={styles.modal__circle}></div>
            <Filter
              className={styles.modal__icon}
              size="55"
              color={lightBlue}
            />
          </div>
          <Formik
            initialValues={editCategoryInitialValue}
            onSubmit={editCategory}
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
                  type="button"
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
    </>
  );
};

export default EditCategoryModal;
