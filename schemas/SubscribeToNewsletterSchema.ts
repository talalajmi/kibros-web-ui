import * as yup from "yup";

export const subscribeToNewsletterSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required("الرجاء إدخال بريد إلكتروني")
    .max(254, "لا يمكن أن يتجاوز البريد الإلكتروني 254 حرفا")
    .matches(
      /^([A-Za-z0-9_\-\.]){1,63}\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,20})$/,
      "يرجى إدخال البريد الإلكتروني الصحيح"
    ),
});
