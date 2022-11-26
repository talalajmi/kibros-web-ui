import Image from "next/image";
import { MouseEvent, useState, useEffect } from "react";

// Icons
import { Eye, EyeCrossed, FacebookIcon, GoogleIcon } from "../../icons";

// Styles
import styles from "./login.module.css";
import { iconColor } from "../../../utils/colors";

// Hooks
import { useRouter } from "next/router";

// Constants
import { AuthorizationRoutes } from "../../../routes";
import { logo } from "../../../constants";
import { AuthController } from "../../../controllers";
import { LoginModel } from "../../../models";
import { useQuery } from "react-query";
import { hashPassword } from "../../../helpers";

// Third Party Imports
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AdminRoute, AdminRoutes } from "../../../routes/AdminRoutes";
import { motion } from "framer-motion";
import { motivationalQuotes } from "../../../constants/MotivationalQuotes";

export default function Login() {
  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [quote, setQuote] = useState("");

  // Hooks
  const router = useRouter();

  const showPassword = () => {
    setIsPasswordShown((current) => !current);
  };

  const onSubmit = async (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();
    const accessToken = await new AuthController(router).login(
      new LoginModel(email, password)
    );

    if (!accessToken) {
      return;
    }

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
          <div className={styles.card__bodyContainer}>
            <div className={styles.card__textContainer}>
              <p className="">!👋 مرحبا بك في ورشات كيبروس</p>
              <p className="">{quote}</p>
              <p className="">تسجيل الدخول</p>
            </div>
            <div className={styles.email__inputContainer}>
              <input
                className={styles.email__input}
                placeholder="البريد الالكتروني"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.password__inputContainer}>
              <input
                className={styles.password__input}
                placeholder="كلمة المرور"
                type={`${isPasswordShown ? "text" : "password"}`}
                onChange={(e) => setPassword(e.target.value)}
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
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.8 }}>
              <button
                className={styles.submit__button}
                onClick={(e) => onSubmit(e)}
              >
                تسجيل الدخول
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
        </div>
      </div>
    </div>
  );
}
