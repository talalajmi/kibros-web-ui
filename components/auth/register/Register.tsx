import Image from "next/image";
import React, { useState } from "react";

// Icons
import { Eye, EyeCrossed, FacebookIcon, GoogleIcon } from "../../icons";

// Styles
import styles from "./register.module.css";
import { logo } from "../../../constants";
import { iconColor } from "../../../utils/colors";
import { useRouter } from "next/router";
import { AuthorizationRoutes } from "../../../routes";

export default function Register() {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const router = useRouter();
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
                  type="email"
                />
              </div>
              <div className={styles.row__inputContainer}>
                <input
                  className={styles.input}
                  placeholder="الأسم"
                  type="email"
                />
              </div>
            </div>
            <div className={styles.column__inputContainer}>
              <input
                className={styles.input}
                placeholder="البريد الالكتروني"
                type="email"
              />
            </div>
            <div className={styles.row}>
              <div className={styles.row__inputContainer}>
                <input
                  className={styles.input}
                  placeholder="الدولة"
                  type="email"
                />
              </div>
              <div className={styles.row__inputContainer}>
                <input
                  className={styles.input}
                  placeholder="رقم الهاتف"
                  type="email"
                />
              </div>
            </div>
            <div className={styles.column__inputContainer}>
              <input
                className={styles.password__input}
                placeholder="كلمة المرور"
                type={`${isPasswordShown ? "text" : "password"}`}
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
            <button className={styles.submitButton}>انشاء حساب</button>
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
              className="cursor-pointer text-secondary"
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
