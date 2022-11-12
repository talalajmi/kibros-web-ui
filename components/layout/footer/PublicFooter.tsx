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
import { publicRoutes } from "../../../routes/PublicRoutes";

const PublicFooter = () => {
  const router = useRouter();
  return (
    <>
      <div className={styles.container}>
        <div className="flex flex-col items-end justify-end space-y-20 pl-[40px]">
          <p className="text-lg">جهات التواصل</p>
          <p className="text-right text-lg">
            أدخل عنوان بريدك الإلكتروني للتسجيل في الاشتراك في <br />
            النشرة الإخبارية
          </p>
          <div className="flex items-center justify-center space-x-20">
            <button className="flex flex-row items-center space-x-10 rounded-8 bg-secondary px-20 py-10">
              <ArrowLeft size={17} color={"#ffffff"} />
              <span className="text-lg">اشترك الأن</span>
            </button>
            <input
              className="rounded-8 p-12 text-right text-primary placeholder:text-right"
              placeholder="بريدك الإكتروني"
            />
          </div>
        </div>
        <div className="flex flex-col items-end justify-end space-y-20 text-lg font-bold">
          <p>الروابط</p>
          <p
            className="cursor-pointer"
            onClick={() => router.push(publicRoutes.termaAndConditions)}
          >
            الشروط و الأحكام
          </p>
          <p
            className="cursor-pointer"
            onClick={() => router.push(publicRoutes.faq)}
          >
            الأسئلة المتكررة
          </p>
        </div>
        <div className="flex flex-col items-end justify-end space-y-20 pr-[40px] text-lg">
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
          </div>
          <p>:تابعونا</p>
          <div className="flex flex-row space-x-20">
            <InstagramIcon
              size={27}
              color={kiBrosOrangeColor}
              className="cursor-pointer"
            />
            <TwitterIcon
              size={27}
              color={kiBrosOrangeColor}
              className="cursor-pointer"
            />
            <YoutubeIcon
              size={27}
              color={kiBrosOrangeColor}
              className="cursor-pointer"
            />
            <FacebookIcon
              size={27}
              color={kiBrosOrangeColor}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
      <hr style={{ color: iconColor, opacity: "0.2" }} />
      <div className={styles.footer}>
        <p className="text-center text-white">© KIBROS WORKSHOPS 2022 </p>
      </div>
    </>
  );
};

export default PublicFooter;
