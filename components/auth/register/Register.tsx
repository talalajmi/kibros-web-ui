import Image from "next/image";
import React, { useState, useEffect } from "react";

// Styles
import styles from "./register.module.css";

// Constants
import { Eye, EyeCrossed, FacebookIcon, GoogleIcon } from "../../icons";
import { logo } from "../../../constants";
import {
  iconColor,
  kiBrosLightBlueColor,
  whiteColor,
} from "../../../utils/colors";
import { AuthorizationRoutes, publicRoutes } from "../../../routes";
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
import Select from "react-select";
import { countries, countriesHashTable } from "../../../constants/countries";
import {
  reactSelectTheme,
  getReactSelectStyles,
} from "../../../utils/ReactSelectTheme";

export default function Register() {
  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [quote, setQuote] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [country, setCountry] = useState("");

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
        country
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
            <p>???? ?????????? ???????????? ???????? ?????? </p>
            <p>{quote}</p>
            <p>?????????? ????????????</p>
          </div>
          <Formik
            initialValues={registerFormInitialValues}
            validationSchema={registerSchema}
            onSubmit={onSubmit}
          >
            {({ isValid }) => (
              <Form dir="rtl" className={styles.form}>
                <div className={styles.row}>
                  <Field
                    name="firstName"
                    component={Input}
                    placeholder="??????????"
                  />
                  <Field
                    name="lastName"
                    component={Input}
                    placeholder="?????????? ????????????"
                  />
                </div>
                <Field
                  name="email"
                  component={Input}
                  placeholder="???????????? ????????????????????"
                />
                <div className={styles.row}>
                  <Select
                    isClearable
                    className="mb-10 flex-1"
                    options={countries}
                    placeholder="???????? ????????????..."
                    theme={reactSelectTheme}
                    onChange={(e) => setCountry(e ? e.value : country)}
                    styles={getReactSelectStyles(kiBrosLightBlueColor)}
                  />
                  <Field
                    name="phoneNumber"
                    component={Input}
                    placeholder="?????? ????????????"
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
                    placeholder="???????? ????????????"
                  />
                </div>
                <div className={`${styles.row} justify-start`}>
                  <input
                    type="checkbox"
                    onClick={() => setIsCheckboxChecked((current) => !current)}
                  />
                  <p className="text-white">
                    ???????? ??
                    <a
                      href="https://kibros-web-ui.vercel.app/terms-and-conditions"
                      target="_blank"
                      className="cursor-pointer text-secondary-base transition duration-300 ease-out hover:text-secondary-disabled"
                    >
                      ???????????? ?? ??????????????
                    </a>
                  </p>
                </div>
                <Button
                  text="?????????? ????????"
                  disabled={isLoading || !isValid}
                  type="submit"
                />
                <div className={styles.divider}>
                  <hr style={{ color: whiteColor, width: " 100%" }} />
                  <p className={styles.dividertext}>????</p>
                  <hr style={{ color: whiteColor, width: "100%" }} />
                </div>
                <div className={styles.row}>
                  <button className="flex w-full justify-center rounded-8 bg-google/50 px-20 py-10">
                    <GoogleIcon size={18} className="fill-google" />
                  </button>
                  <button className="flex w-full justify-center rounded-8 bg-facebook/50 px-20 py-10">
                    <FacebookIcon size={18} className="fill-facebook" />
                  </button>
                </div>
                <div className={styles.divider}>
                  <hr style={{ color: whiteColor, width: " 100%" }} />
                  <p className={styles.dividertext}>????</p>
                  <hr style={{ color: whiteColor, width: "100%" }} />
                </div>
                <div className="text-center">
                  <p className="p-5 text-white">
                    ???????? ??????????
                    <span
                      className="cursor-pointer px-5 text-secondary-base transition duration-300 ease-in-out hover:text-secondary-dark"
                      onClick={() => router.push(AuthorizationRoutes.login)}
                    >
                      ?????????? ????????????
                    </span>
                  </p>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
