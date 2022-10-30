import Image from "next/image";
import React from "react";

// Icons
import { Eye, EyeCrossed } from "../../../components/icons";
import facebookIcon from "../../../components/icons/facebook.svg";
import googleIcon from "../../../components/icons/google.svg";

// Styles
import styles from "./register.module.css";
import { iconColor } from "../../../utils/colors";

//Logo Path
import logo from "../../../public/assets/images/logo/kibros-logo.png";

function Register() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.logo__container}>
          <Image src={logo} alt="kibros-logo" width={250} height={250} />
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
          <div className={styles.form__content}>
            <div className={styles.row}>
              <div className={styles.row__inputContainer}>
                <input
                  className={styles.input}
                  placeholder="البريد الالكتروني"
                  type="email"
                />
              </div>
              <div className={styles.row__inputContainer}>
                <input
                  className={styles.input}
                  placeholder="البريد الالكتروني"
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
                  placeholder="البريد الالكتروني"
                  type="email"
                />
              </div>
              <div className={styles.row__inputContainer}>
                <input
                  className={styles.input}
                  placeholder="البريد الالكتروني"
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
          </div>
          <div className={styles.terms__container}>
            <p>
              قبلت ب
              <span className={styles.action__text}>الشروط و الأحكام</span>
            </p>
            <input type="checkbox" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
