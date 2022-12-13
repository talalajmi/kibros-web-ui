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

export const userAccountSettingsSchema = yup.object().shape({
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
});

const showErrors = (field: any, valueLen: number, min: number) => {
  if (valueLen === 0) {
    return `${field} field is required`;
  } else if (valueLen > 0 && valueLen < min) {
    return `${field} must be at least ${min} characters`;
  } else {
    return "";
  }
};

export const changePasswordScheme = yup.object().shape({
  currentPassword: yup
    .string()
    .required("Please enter a password")
    .transform((v, o) => (o.trim() === "" ? null : v))
    .typeError("Password cannot be empty")
    .min(8, "Password cannot be less than 8 characters")
    .max(20, "Password cannot be more than 20 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#_\$%\^&\*])(?=.{8,})/,
      "Password must Contain One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  newPassword: yup
    .string()
    .min(8, (obj) => showErrors("New Password", obj.value.length, obj.min))
    .required("Please enter your new password")
    .transform((v, o) => (o.trim() === "" ? null : v))
    .typeError("Password cannot be empty")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#_\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  confirmNewPassword: yup
    .string()
    .transform((v, o) => (o.trim() === "" ? null : v))
    .typeError("Password cannot be empty")
    .min(8, (obj) =>
      showErrors("Retype New Password", obj.value.length, obj.min)
    )
    .required("Please confirm your new password")
    .oneOf([yup.ref(`newPassword`), null], "Passwords must match"),
});
