import Image from "next/image";
import React from "react";

// Styles
import styles from "./forgot-password.module.css";

// Constants
import { ArrowLeft } from "../../../components/icons";
import { kiBrosDarkBlueColor } from "../../../utils/colors";

// Logo Path
import logo from "../../../public/assets/images/logo/kibros-logo.png";
import Link from "next/link";
import { useRouter } from "next/router";
import { AuthorizationRoutes } from "../../../routes";

function ForgotPassword() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.logo__container}>
          <Image src={logo} alt="kibros-logo" width={250} height={250} />
        </div>
        <div className={styles.card__content}>
          <div className={styles.texts__container}>
            <div className={styles.primary__text}>
              <p>🔒 نسيت كلمة المرور</p>
            </div>
            <div className={styles.secondary__text}>
              <p>
                أدخل بريدك الإلكتروني وسنرسل لك تعليمات لإعادة تعيين كلمة مرورك
              </p>
            </div>
          </div>
          <div className={styles.input__container}>
            <input
              className={styles.email__input}
              placeholder="البريد الالكتروني"
              type="email"
            />
          </div>
          <button className={styles.submit__button}>ارسال</button>
          <div className={styles.previousPage__container}>
            <ArrowLeft size={20} color={kiBrosDarkBlueColor} />
            <p
              className="cursor-pointer"
              onClick={() => router.push(AuthorizationRoutes.login)}
            >
              تسجيل الدخول
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
