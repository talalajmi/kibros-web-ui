import Image from "next/image";
import React, { useState } from "react";

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
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const onSubmit = async ({ email }: FormInput) => {
    setIsLoading(true);
    await new PasswordController(router).createForgetPasswordRequest(
      new CreateForgetPasswordModel(email)
    );
    router.push(AuthorizationRoutes.login);
    setIsLoading(false);
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
            <Form className="space-y-[25px]">
              <Field
                name="email"
                placeholder="البريد الالكتروني"
                component={Input}
                isRtl={true}
              />
              <motion.div
                className="w-full"
                whileHover={isLoading ? { scale: 1 } : { scale: 1.05 }}
                whileTap={isLoading ? { scale: 1 } : { scale: 0.8 }}
              >
                <Button
                  text="ارسال"
                  type="submit"
                  disabled={isLoading && true}
                />
              </motion.div>
              <div className="flex w-full items-center justify-center space-x-10">
                <ArrowLeft size={15} color={kiBrosOrangeColor} />
                <p
                  className="cursor-pointer text-secondary-base transition duration-300 ease-in-out hover:text-secondary-dark"
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
