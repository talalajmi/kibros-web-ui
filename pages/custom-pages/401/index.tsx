import Image from "next/image";
import React from "react";

// Styles
import styles from "./401.module.css";

// Image Paths
import logo from "../../../public/assets/images/logo/kibros-logo.png";
import errorImage from "../../../public/assets/images/pages/401.svg";

const Error401 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo__container}>
          <Image src={logo} alt="kibros-logo" width={322} height={322} />
        </div>
        <p className={styles.error__header}>نعتذر</p>
        <p className={styles.error_body}>لم نستطع العثور على الصفحة المطلوبة</p>
        <div className={styles.button__container}>
          <button className={styles.error__button}>
            ارجع الى الصفحة الماضية
          </button>
        </div>
        <div className={styles.image__container}>
          <Image src={errorImage} alt="401-image" width={500} height={500} />
        </div>
      </div>
    </div>
  );
};

export default Error401;
