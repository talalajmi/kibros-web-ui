import Image from "next/image";
import React, { MouseEvent, useState, useEffect } from "react";

// Styles
import styles from "./register.module.css";

// Constants
import { Eye, EyeCrossed } from "../../icons";
import { logo } from "../../../constants";
import { iconColor } from "../../../utils/colors";
import { AuthorizationRoutes } from "../../../routes";
import { RegisterModel } from "../../../models";
import { AuthController } from "../../../controllers";
import { hashPassword } from "../../../helpers";

// Hooks
import { useRouter } from "next/router";

// Third library Imports
import { motion } from "framer-motion";
import { motivationalQuotes } from "../../../constants/MotivationalQuotes";

export default function Register() {
  // States
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [quote, setQuote] = useState("");

  // Hooks
  const router = useRouter();

  const onSubmit = async (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();

    const accessToken = await new AuthController(router).register(
      new RegisterModel(
        email,
        await hashPassword(password),
        firstName,
        lastName,
        phoneNumber,
        country
      )
    );

    if (!accessToken) {
      return;
    }

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
        <div className={styles.logo__container}>
          <Image
            src={logo}
            alt="kibros-logo"
            width={250}
            height={70}
            objectFit="cover"
          />
        </div>
        <div className={styles.card__content}>
          <div className={styles.texts__container}>
            <div className={styles.primary__textContainer}>
              <p>🚀 طريقك للنجاح يبدا هنا</p>
            </div>
            <div className={styles.primary__textContainer}>
              <p>{quote}</p>
            </div>
            <div className={styles.secondary__textContainer}>
              <p>انشاء الحساب</p>
            </div>
          </div>
          <form className={styles.form__content}>
            <div className={styles.row}>
              <div className={styles.row__inputContainer}>
                <input
                  className={styles.input}
                  placeholder="الاسم الاخير"
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className={styles.row__inputContainer}>
                <input
                  className={styles.input}
                  placeholder="الأسم"
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
            </div>
            <div className={styles.column__inputContainer}>
              <input
                className={styles.input}
                placeholder="البريد الالكتروني"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.row}>
              <div className={styles.row__inputContainer}>
                <input
                  className={styles.input}
                  placeholder="الدولة"
                  type="text"
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
              <div className={styles.row__inputContainer}>
                <input
                  className={styles.input}
                  placeholder="رقم الهاتف"
                  type="text"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>
            <div className={styles.column__inputContainer}>
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
                  onClick={() => setIsPasswordShown((current) => !current)}
                />
              ) : (
                <Eye
                  size={24}
                  color={iconColor}
                  className={styles.icon}
                  onClick={() => setIsPasswordShown((current) => !current)}
                />
              )}
            </div>
            <div className={styles.terms__container}>
              <p>
                قبلت ب
                <span className={styles.action__text}>الشروط و الأحكام</span>
              </p>
              <input type="checkbox" />
            </div>
            <button
              className={styles.submitButton}
              onClick={(e) => onSubmit(e)}
            >
              انشاء حساب
            </button>
          </form>
          <div className={styles.divider}>
            <hr style={{ width: "100%", opacity: "0.2" }} />
            <p className="px-20 text-white">او</p>
            <hr style={{ width: "100%", opacity: "0.2" }} />
          </div>
          <div className={styles.row}>
            <button className="flex-1 rounded-8 bg-facebook p-10 text-white">
              Facebook
            </button>
            <button className="flex-1 rounded-8 bg-google p-10 text-white">
              Google
            </button>
          </div>
          <div className={styles.divider}>
            <hr style={{ width: "100%", opacity: "0.2" }} />
            <p className="px-20 text-white">او</p>
            <hr style={{ width: "100%", opacity: "0.2" }} />
          </div>
          <p className="text-center text-lg">
            لديك حساب؟
            <span
              className="cursor-pointer text-secondary-base"
              onClick={() => router.push(AuthorizationRoutes.login)}
            >
              {" "}
              تسجيل الدخول
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
