import * as yup from "yup";

export const categorySchema = yup.object().shape({
  categoryName: yup
    .string()
    .required("Please enter a category name")
    .transform((v, o) => (o.trim() === "" ? null : v))
    .typeError("Category cannot be empty")
    .max(100, "Category name cannot exceed 100 characters")
    .matches(/^[A-Za-z0-9 ء-ي]+$/, " Special characters are not allowed"),
});
