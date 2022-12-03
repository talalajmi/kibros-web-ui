import Image from "next/image";
import React from "react";

// Styles
import styles from "./forgot-password.module.css";

// Constants
import { ArrowLeft } from "../../icons";
import { kiBrosOrangeColor } from "../../../utils/colors";
import { AuthorizationRoutes } from "../../../routes";
import { logo } from "../../../constants";

// Hooks
import { useRouter } from "next/router";

// Third Party Imports
import { motion } from "framer-motion";

// Components
import { Input, Button } from "../../form";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { forgetPasswordSchema } from "../../../schemas/passowrdSchema";
import { PasswordController } from "../../../controllers";
import { CreateForgetPasswordModel } from "../../../models";

interface FormInput {
  email: string;
}

const initialValues = { email: "" };

export default function ForgotPassword() {
  const router = useRouter();

  const onSubmit = async ({ email }: FormInput) => {
    const response = await new PasswordController(
      router
    ).createForgetPasswordRequest(new CreateForgetPasswordModel(email));

    if (!response) {
      return;
    }

    console.log(response);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.logo__container}>
          <Image
            src={logo}
            alt="kibros-logo"
            objectFit="cover"
            width={250}
            height={70}
          />
        </div>
        <div className={styles.card__content}>
          <div className="flex flex-col items-end space-y-10 text-white">
            <p>🔒 نسيت كلمة المرور</p>
            <p dir="rtl" className="text-justify">
              أدخل بريدك الإلكتروني وسنرسل لك تعليمات لإعادة تعيين كلمة مرورك
            </p>
          </div>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={forgetPasswordSchema}
          >
            <Form className="flex flex-col items-end space-y-20">
              <Field
                name="email"
                placeholder="البريد الالكتروني"
                className="w-full rounded-8 border border-inputOutline/[0.2] bg-primary-light p-12 text-end text-white"
              />
              <ErrorMessage name="email" />
              <motion.div
                className="w-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.8 }}
              >
                <Button
                  text="ارسال"
                  className="bg-secondary-base"
                  type="submit"
                />
              </motion.div>
              <div className="flex w-full items-center justify-center space-x-10">
                <ArrowLeft size={15} color={kiBrosOrangeColor} />
                <p
                  className="cursor-pointer text-secondary-base"
                  onClick={() => router.push(AuthorizationRoutes.login)}
                >
                  تسجيل الدخول
                </p>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
