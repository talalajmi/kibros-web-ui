import Image from "next/image";
import React, { useState, useEffect } from "react";

// Styles
import styles from "./register.module.css";

// Constants
import { Eye, EyeCrossed } from "../../icons";
import { logo } from "../../../constants";
import { iconColor, whiteColor } from "../../../utils/colors";
import { AuthorizationRoutes } from "../../../routes";
import { RegisterModel } from "../../../models";
import { AuthController } from "../../../controllers";
import { hashPassword } from "../../../helpers";

// Hooks
import { useRouter } from "next/router";

// Third library Imports
import { motion } from "framer-motion";
import { motivationalQuotes } from "../../../constants/MotivationalQuotes";
import { Field, Form, Formik } from "formik";
import { Button, Input } from "../../form";
import {
  registerFormInitialValues,
  RegisterFormInputs,
  registerSchema,
} from "../../../schemas/RegisterSchema";

export default function Register() {
  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [quote, setQuote] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  // Hooks
  const router = useRouter();

  const showPassword = () => {
    setIsPasswordShown((current) => !current);
  };

  const onSubmit = async (formInputs: RegisterFormInputs) => {
    setIsLoading(true);
    const accessToken = await new AuthController(router).register(
      new RegisterModel(
        formInputs.email,
        await hashPassword(formInputs.password),
        formInputs.firstName,
        formInputs.lastName,
        formInputs.phoneNumber,
        formInputs.country
      )
    );

    if (!accessToken) {
      setIsLoading(false);

      return;
    }
    setIsLoading(false);
    router.push(AuthorizationRoutes.login);
  };

  const getMotivationalQuote = () => {
    const motivationalQuote =
      motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
        .quote;

    setQuote(motivationalQuote);
  };

  useEffect(() => {
    getMotivationalQuote();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <Image
              src={logo}
              alt="kibros-logo"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.cardHeader}>
            <p>🚀 طريقك للنجاح يبدا هنا </p>
            <p>{quote}</p>
            <p>انشاء الحساب</p>
          </div>
          <Formik
            initialValues={registerFormInitialValues}
            validationSchema={registerSchema}
            onSubmit={onSubmit}
          >
            <Form className={styles.form}>
              <div className={styles.row}>
                <Field
                  name="lastName"
                  component={Input}
                  placeholder="الاسم الاخير"
                  isRtl
                />
                <Field
                  name="firstName"
                  component={Input}
                  placeholder="الأسم"
                  isRtl
                />
              </div>
              <Field
                name="email"
                component={Input}
                placeholder="البريد الالكتروني"
                isRtl
              />
              <div className={styles.row}>
                <Field
                  name="phoneNumber"
                  component={Input}
                  placeholder="الدولة"
                  isRtl
                />
                <Field
                  name="country"
                  component={Input}
                  placeholder="رقم الهاتف"
                  isRtl
                />
              </div>
              <div className="relative">
                {isPasswordShown ? (
                  <EyeCrossed
                    size={24}
                    className={styles.icon}
                    onClick={() => showPassword()}
                  />
                ) : (
                  <Eye
                    size={24}
                    className={styles.icon}
                    onClick={() => showPassword()}
                  />
                )}
                <Field
                  name="password"
                  component={Input}
                  type={isPasswordShown ? "text" : "password"}
                  placeholder="كلمة المرور"
                  isRtl
                />
              </div>
              <div className={`${styles.row} justify-end`}>
                <p className="text-white">
                  قبلت ب
                  <span className="text-secondary-base">الشروط و الأحكام</span>
                </p>
                <input
                  type="checkbox"
                  onClick={() => setIsCheckboxChecked((current) => !current)}
                />
              </div>
              <Button
                text="انشاء حساب"
                disabled={isLoading ? true : !isCheckboxChecked ? true : false}
                type="submit"
              />
              <div className={styles.divider}>
                <hr style={{ color: whiteColor, width: " 100%" }} />
                <p className={styles.dividertext}>او</p>
                <hr style={{ color: whiteColor, width: "100%" }} />
              </div>
              <div className={styles.row}>
                <Button text="facebook" type="button" />
                <Button text="google" type="button" />
              </div>
              <div className={styles.divider}>
                <hr style={{ color: whiteColor, width: " 100%" }} />
                <p className={styles.dividertext}>او</p>
                <hr style={{ color: whiteColor, width: "100%" }} />
              </div>
              <div className="text-center">
                <p className="text-white">
                  لديك حساب؟
                  <span
                    className="text-secondary-base"
                    onClick={() => router.push(AuthorizationRoutes.login)}
                  >
                    تسجيل الدخول
                  </span>
                </p>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
