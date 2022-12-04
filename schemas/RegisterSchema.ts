import * as yup from "yup";

export type RegisterFormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  country: string;
  password: string;
};

export const registerFormInitialValues: RegisterFormInputs = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  country: "",
  password: "",
};

export const registerSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("الرجاء إدخال الأسم")
    .max(100, "الأسم لا يجب ان لا يتعدى 100 حرفا"),
  lastName: yup
    .string()
    .required("الرجاء إدخال اسم اخير")
    .max(100, "الأسم الاخير لا يجب ان لا يتعدى 100 حرفا"),
  email: yup
    .string()
    .email()
    .required("الرجاء إدخال بريد إلكتروني")
    .max(254, "لا يمكن أن يتجاوز البريد الإلكتروني 254 حرفا")
    .matches(
      /^([A-Za-z0-9_\-\.]){1,63}\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,20})$/,
      "يرجى إدخال البريد الإلكتروني الصحيح"
    ),
  phoneNumber: yup
    .string()
    .required("الرجاء رقم الهاتف")
    .min(6, "رقم الهاتف يجب ان لا يقل عن 6 ارقام")
    .max(8, "رقم الهاتف لا يجب ان لا يتعدى 8 حرفا"),
  country: yup
    .string()
    .required("الرجاء إدخال الدولة")
    .max(100, "اسم الدولة لا يجب ان لا يتعدى 100 حرفا"),
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
