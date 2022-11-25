import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { logo } from "../../../constants";
import { kiBrosOrangeColor, iconColor } from "../../../utils/colors";
import {
  ArrowLeft,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../../icons";
import styles from "./PublicFooter.module.css";
import { publicRoutes } from "../../../routes";

const PublicFooter = () => {
  const router = useRouter();

  return (
    <footer className="bottom-0 mt-60">
      <div className={styles.container}>
        <div className="flex flex-col items-end justify-end space-y-20 pl-[40px]">
          <div className="space-y-20 text-right text-lg">
            <p className="text-lg">جهات التواصل</p>
            <p className="text-lg">
              أدخل عنوان بريدك الإلكتروني للتسجيل في الاشتراك في <br />
              النشرة الإخبارية
            </p>
          </div>
          <div className="flex flex-col-reverse items-end md:flex-row md:items-center md:justify-center md:space-x-20">
            <button className="flex flex-row items-center space-x-10 rounded-8 bg-secondary-base px-20 py-10 transition duration-[200ms] ease-in-out hover:bg-secondary-dark">
              <ArrowLeft size={17} color={"#ffffff"} />
              <span className="text-lg">اشترك الأن</span>
            </button>
            <input
              className="text-primary mb-10 rounded-8 p-12 text-right placeholder:text-right md:mb-0"
              placeholder="بريدك الإكتروني"
            />
          </div>
        </div>
        <div className="flex flex-col items-end justify-end space-y-20 text-lg font-bold">
          <p>الروابط</p>
          <p
            className={styles.link}
            onClick={() => router.push(publicRoutes.termaAndConditions)}
          >
            الشروط و الأحكام
          </p>
          <p
            className={styles.link}
            onClick={() => router.push(publicRoutes.faq)}
          >
            الأسئلة المتكررة
          </p>
        </div>
        <div className="flex flex-col items-end justify-end space-x-10 text-lg md:flex-col md:justify-end md:space-y-20">
          <div
            className="relative left-60 cursor-pointer"
            onClick={() => router.push(publicRoutes.home)}
          >
            <Image
              src={logo}
              alt="kibros-logo"
              width={230}
              height={50}
              objectFit="cover"
            />
            <p className="px-60 text-right">:تابعونا</p>
          </div>
          <div className="flex flex-row space-x-20">
            <a
              href="https://www.instagram.com/kibrosworkshops/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon size={27} className={styles.svg} />
            </a>
            <a
              href="https://twitter.com/kibrosworkshops"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon size={27} className={styles.svg} />
            </a>
            <a
              href="https://www.youtube.com/channel/UC0KbIFUFUVjVPBLwUR61Vog"
              target="_blank"
              rel="noreferrer"
            >
              <YoutubeIcon size={27} className={styles.svg} />
            </a>
            <a
              href="https://www.facebook.com/kibrosworkshops"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon size={27} className={styles.svg} />
            </a>
          </div>
        </div>
      </div>
      <hr style={{ color: iconColor, opacity: "0.2" }} />
      <div className={styles.footer}>
        <p className="text-center text-white">© KIBROS WORKSHOPS 2022 </p>
      </div>
    </footer>
  );
};

export default PublicFooter;
