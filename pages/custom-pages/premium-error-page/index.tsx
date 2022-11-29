import Image from "next/image";
import React from "react";

// Styles
import styles from "./premium-error-page.module.css";

// Image Paths
import errorImage from "../../../public/assets/images/pages/premium-error-page.png";
import { logo } from "../../../constants";

function Error() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image
          src={logo}
          alt="kibros-logo"
          width={250}
          height={100}
          objectFit="cover"
        />
        <p className="text-xl">نعتذر</p>
        <p className="text-xl">لم نستطع العثور على الصفحة المطلوبة</p>
        <button className={styles.error__button}>
          ارجع الى الصفحة الماضية
        </button>
        <div className="pt-[90px]">
          <Image src={errorImage} alt="error-image" objectFit="cover" />
        </div>
      </div>
    </div>
  );
}

export default Error;
