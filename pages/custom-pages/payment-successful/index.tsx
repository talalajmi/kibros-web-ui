import Image from "next/image";
import React, { useEffect, useState } from "react";

// Styles
import styles from "./payment-success.module.css";

// Image Paths
import errorImage from "../../../public/assets/images/pages/payment-successful.png";
import { logo } from "../../../constants";
import { motivationalQuotes } from "../../../constants/MotivationalQuotes";

function PaymentSuccessful() {
  const [quote, setQuote] = useState("");

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
      <div className={styles.content}>
        <Image
          src={logo}
          alt="kibros-logo"
          width={300}
          height={100}
          objectFit="cover"
        />
        <p className="text-xl">تم الدفع بنجاح</p>
        <p className="text-justify text-xl">{quote}</p>
        <button className={styles.error__button}>
          ارجع الى الصفحة الماضية
        </button>
        <div className="pt-[150px]">
          <Image
            src={errorImage}
            alt="payment-failed-image"
            width={300}
            height={300}
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}

export default PaymentSuccessful;
