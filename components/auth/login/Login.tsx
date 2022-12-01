import Image from "next/image";
import { useState, useEffect } from "react";

// Icons
import { Eye, EyeCrossed, FacebookIcon, GoogleIcon } from "../../icons";

// Styles
import styles from "./login.module.css";
import { iconColor } from "../../../utils/colors";

// Hooks
import { useRouter } from "next/router";
import { useUser } from "../../../utils/hooks";

// Constants
import { AuthorizationRoutes } from "../../../routes";
import { logo } from "../../../constants";
import { AuthController } from "../../../controllers";
import { LoginModel } from "../../../models";
import { hashPassword } from "../../../helpers";

// Third Party Imports
import { AdminRoutes } from "../../../routes/AdminRoutes";
import { motion } from "framer-motion";
import { motivationalQuotes } from "../../../constants/MotivationalQuotes";
import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import { loginSchema } from "../../../schemas/loginSchema";
import { FormInputs, initialValues } from "../../../helpers/loginHelper";
import { IUser } from "../../../interfaces";
import AccountController from "../../../controllers/AccountController";
import jwtDecode from "jwt-decode";

export default function Login() {
  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [quote, setQuote] = useState("");

  // Hooks
  const router = useRouter();
  const { setAccessToken, setUser } = useUser();

  const showPassword = () => {
    setIsPasswordShown((current) => !current);
  };

  const onSubmit = async ({ email, password }: FormInputs) => {
    setIsLoading(true);
    const accessToken = await new AuthController(router).login(
      new LoginModel(email, password)
    );

    if (!accessToken) {
      setIsLoading(false);
      return;
    }

    const accessTokenDecoded: { nameid: string; role: string } =
      jwtDecode(accessToken);
    const user: IUser = await new AccountController(
      accessToken,
      router
    ).getAccount(accessTokenDecoded.nameid);

    if (!user) {
      setIsLoading(false);
      return;
    }
    setUser(user);
    setAccessToken(accessToken);
    setIsLoading(false);
    router.push(AdminRoutes.staffsPage);
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
        <div className={styles.card__container}>
          <div className={styles.logo__container}>
            <Image src={logo} alt="kibros-logo" width={250} height={250} />
          </div>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={loginSchema}
          >
            <Form>
              <div className={styles.card__bodyContainer}>
                <div className={styles.card__textContainer}>
                  <p>!👋 مرحبا بك في ورشات كيبروس</p>
                  <p>{quote}</p>
                  <p>تسجيل الدخول</p>
                </div>
                <div className={styles.email__inputContainer}>
                  <Field name="email" className={styles.email__input} />
                  <ErrorMessage name="email" />
                </div>
                <div className={styles.password__inputContainer}>
                  <Field
                    name="password"
                    type={`${isPasswordShown ? "text" : "password"}`}
                    className={styles.password__input}
                  />
                  {isPasswordShown ? (
                    <EyeCrossed
                      size={24}
                      color={iconColor}
                      className={styles.icon}
                      onClick={() => showPassword()}
                    />
                  ) : (
                    <Eye
                      size={24}
                      color={iconColor}
                      className={styles.icon}
                      onClick={() => showPassword()}
                    />
                  )}
                  <ErrorMessage name="password" />
                </div>
                <div className={styles.forgetPassword__container}>
                  <div className={styles.forgetPassword__content}>
                    <p
                      className="cursor-pointer"
                      onClick={() =>
                        router.push(AuthorizationRoutes.forgotPassword)
                      }
                    >
                      نسيت كلمة المرور؟
                    </p>
                  </div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <button className={styles.submit__button} type="submit">
                    {isLoading ? "...جاري تسجيل الدخول" : "تسجيل الدخول"}
                  </button>
                </motion.div>
                <div className={styles.divider__container}>
                  <hr
                    className={styles.hr}
                    style={{ color: "white", width: "171px" }}
                  />
                  <p className={styles.divider__text}>او</p>
                  <hr
                    className={styles.hr}
                    style={{ color: "white", width: "171px" }}
                  />
                </div>
                <div className={styles.socialLogin__container}>
                  <div className={styles.facebookButton__content}>
                    <button className={styles.facebook__button}></button>
                    <div className={styles.social__icon}>
                      <FacebookIcon size="18" color={"#3b5998"} />
                    </div>
                  </div>
                  <div className={styles.googleButton__content}>
                    <button className={styles.google__button}></button>
                    <div className={styles.social__icon}>
                      <GoogleIcon size="18" color={"#De5246"} />
                    </div>
                  </div>
                </div>
                <div className={styles.divider__container}>
                  <hr
                    className={styles.hr}
                    style={{ color: "white", width: "171px" }}
                  />
                  <p className={styles.divider__text}>او</p>
                  <hr
                    className={styles.hr}
                    style={{ color: "white", width: "171px" }}
                  />
                </div>
                <div className={styles.register__container}>
                  <div className={styles.register__text}>
                    جديد على منصتنا؟{" "}
                    <span
                      className={styles.register__actionText}
                      onClick={() => router.push(AuthorizationRoutes.register)}
                    >
                      انشاء حساب
                    </span>
                  </div>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
