import Image from "next/image";
import { useState } from "react";

// Icons
import { Eye, EyeCrossed } from "../../../components/icons";
import facebookIcon from "../../../components/icons/facebook.svg";
import googleIcon from "../../../components/icons/google.svg";

// Styles
import styles from "./login.module.css";
import { iconColor } from "../../../utils/colors";

//Logo Path
import logo from "../../../public/assets/images/logo/kibros-logo.png";
import Link from "next/link";
import { useRouter } from "next/router";
import { AuthorizationRoutes } from "../../../routes";

function Login() {
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
                <button className={styles.facebook__button}>
                  تسجيل الدخول باستعمال فيسبوك
                </button>
                <div className={styles.social__icon}>
                  <Image
                    src={facebookIcon}
                    alt="facebook-logo"
                    width={10}
                    height={18}
                  />
                </div>
              </div>
              <div className={styles.googleButton__content}>
                <button className={styles.google__button}>
                  تسجيل الدخول باستعمال فيسبوك
                </button>
                <div className={styles.social__icon}>
                  <Image
                    src={googleIcon}
                    alt="facebook-logo"
                    width={17}
                    height={17}
                  />
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

export default Login;
