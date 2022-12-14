import Image from "next/image";
import React from "react";

// Styles
import styles from "./payment-failed.module.css";

// Image Paths
import errorImage from "../../../public/assets/images/pages/Payment-failure.png";
import { logo } from "../../../constants";
import { useRouter } from "next/router";

function PaymentFailed() {
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
        <button className={styles.error__button} onClick={() => router.back()}>
          ارجع الى الصفحة الماضية
        </button>
        <div className="pt-90">
          <Image
            src={errorImage}
            alt="payment-failed-image"
            width={530}
            height={400}
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}

export default PaymentFailed;
