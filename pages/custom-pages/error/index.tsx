import Image from "next/image";
import React from "react";

// Styles
import styles from "./error.module.css";

// Image Paths
import errorImage from "../../../assets/images/pages/error.gif";
import { logo } from "../../../constants";
import { useRouter } from "next/router";

function Error() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image
          src={logo}
          alt="kibros-logo"
          width={300}
          height={100}
          objectFit="cover"
        />
        <p className="text-xl">نعتذر</p>
        <p className="text-xl">لم نستطع العثور على الصفحة المطلوبة</p>
        <button className={styles.error__button} onClick={() => router.back}>
          ارجع الى الصفحة الماضية
        </button>
        <div className="pt-[150px]">
          <Image
            src={errorImage}
            alt="error-image"
            width={300}
            height={300}
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Error;
