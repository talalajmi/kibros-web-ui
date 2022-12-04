import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required("الرجاء إدخال بريد إلكتروني")
    .max(254, "لا يمكن أن يتجاوز البريد الإلكتروني 254 حرفا")
    .matches(
      /^([A-Za-z0-9_\-\.]){1,63}\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,20})$/,
      "يرجى إدخال البريد الإلكتروني الصحيح"
    ),

  password: yup
    .string()
    .required("الرجاء إدخال كلمة المرور")
    .min(8, "كلمة المرور لا يجب ان لا تقل عن 8 احرف")
    .max(20, "كلمة المرور لا يجب ان لا تتعدى 20 حرفا")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#_\$%\^&\*])(?=.{8,})/,
      "يجب أن يحتوي على 8 أحرف ، وحرف كبير واحد ، وحرف صغير واحد ، ورقم واحد ، وحرف خاص واحد"
    ),
});
