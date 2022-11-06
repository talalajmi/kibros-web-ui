import Image from "next/image";
import { useState } from "react";

// Icons
import { Eye, EyeCrossed, FacebookIcon, GoogleIcon } from "../../icons";

// Styles
import styles from "./login.module.css";
import { iconColor } from "../../../utils/colors";

//Logo Path
import { useRouter } from "next/router";
import { AuthorizationRoutes } from "../../../routes";
import { logo } from "../../../constants";

export default function Login() {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isUnsuccessfull, setIsUnsuccessfull] = useState(false);

  const router = useRouter();

  const showPassword = () => {
    setIsPasswordShown((current) => !current);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.card__container}>
          <div className={styles.logo__container}>
            <Image src={logo} alt="kibros-logo" width={250} height={250} />
          </div>
          <div className={styles.card__bodyContainer}>
            <div className={styles.card__textContainer}>
              <p className={styles.primary__text}>
                !👋 مرحبا بك في ورشات كيبروس
              </p>
              <p className={styles.secondary__text}>تسجيل الدخول</p>
            </div>
            <div className={styles.email__inputContainer}>
              <input
                className={styles.email__input}
                placeholder="البريد الالكتروني"
                type="email"
              />
            </div>
            <div className={styles.password__inputContainer}>
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
            <button className={styles.submit__button}>تسجيل الدخول</button>
            <div className={styles.socialLogin__container}>
              <div className={styles.facebookButton__content}>
                <button className={styles.facebook__button}></button>
                <div className={styles.social__icon}>
                  <FacebookIcon />
                </div>
              </div>
              <div className={styles.googleButton__content}>
                <button className={styles.google__button}></button>
                <div className={styles.social__icon}>
                  <GoogleIcon />
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
