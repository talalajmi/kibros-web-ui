import * as yup from "yup";

export const addAdminSchema = yup.object().shape({
  firstName: yup
    .string()
    .transform((v, o) => (o.trim() === "" ? null : v))
    .typeError("First name cannot be empty")
    .required("Please enter a first name")
    .max(100, "First name cannot exceed 100 characters")
    .matches(/^[A-Za-z0-9 ء-ي]+$/, " Special characters are not allowed"),
  lastName: yup
    .string()
    .required("Please enter a last name")
    .transform((v, o) => (o.trim() === "" ? null : v))
    .typeError("Last name cannot be empty")
    .max(100, "Last name cannot exceed 100 characters")
    .matches(/^[A-Za-z0-9 ء-ي]+$/, " Special characters are not allowed"),
  email: yup
    .string()
    .email()
    .required("Please enter an email")
    .transform((v, o) => (o.trim() === "" ? null : v))
    .typeError("Email cannot be empty")
    .max(100, "Email name cannot exceed 100 characters")
    .matches(
      /^([A-Za-z0-9_\-\.]){1,63}\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,20})$/,
      "Please enter a valid email"
    ),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]*$/, "Phone number can only consist of numbers")
    .required("Please enter a phone number")
    .min(6, "Phone number cannot exceed 100 characters")
    .max(8, "Phone number cannot exceed 100 characters"),
  country: yup
    .string()
    .required("Please enter a country")
    .max(100, "Country name cannot exceed 100 characters")
    .matches(/^[A-Za-z0-9 ء-ي]+$/, " Special characters are not allowed"),
});

export const editUserSchema = yup.object().shape({
  firstName: yup
    .string()
    .transform((v, o) => (o.trim() === "" ? null : v))
    .typeError("First name cannot be empty")
    .required("Please enter a first name")
    .max(100, "First name cannot exceed 100 characters")
    .matches(/^[A-Za-z0-9 ء-ي]+$/, " Special characters are not allowed"),
  isSuspended: yup.bool().oneOf([true, false]),
  lastName: yup
    .string()
    .required("Please enter a last name")
    .transform((v, o) => (o.trim() === "" ? null : v))
    .typeError("Last name cannot be empty")
    .max(100, "Last name cannot exceed 100 characters")
    .matches(/^[A-Za-z0-9 ء-ي]+$/, " Special characters are not allowed"),
});
