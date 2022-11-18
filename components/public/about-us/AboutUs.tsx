import React from "react";
import MapMarkerIcon from "../../icons/MapMarkerIcon";
import styles from "./AboutUs.module.css";
import { kiBrosGreenColor } from "../../../utils/colors";
import MailIcon from "../../icons/MailIcon";
import Image from "next/image";
import sulaiman from "/public/assets/images/founders/sulaiman.png";
import dawood from "/public/assets/images/founders/dawood.png";
import yasser from "/public/assets/images/founders/yasser.png";

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <p className={styles.pageTitle}>من نحن</p>
      <p dir="rtl" className={styles.aboutUs}>
        منصة كيبروز ووركشوبز هي إستكمال لمسيرة كيبروز، التي بدأت مشوارها المهني
        عام 2010 في مجال صناعة الأفلام، في مسقط، سلطنة عمان. في 2022، قرر أصحاب
        شركة كيبروز إنشاء منصة تهدف لمشاركة الناس المعرفة المهنية العملية
        المكتسبة خلال أكثر من عقد من الزمان، ويرجع ذلك لقلة المدراس والمنصات
        العربية المختصة بالتعليم في مجال صناعة الأفلام.
      </p>
      <div className={styles.infoSection}>
        <div className={styles.column}>
          <div className={styles.columnContent}>
            <MapMarkerIcon size={82} color={kiBrosGreenColor} />
            <p className="text-right text-2xl">
              المنطقة: شارع المها، بوشر، مسقط، سلطنة عمان
            </p>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.columnContent}>
            <MailIcon size={82} color={kiBrosGreenColor} />
            <p className="text-right text-2xl">contact@kibros.com </p>
          </div>
        </div>
      </div>
      <p className={styles.foundersText}>المؤسسون</p>
      <div className={styles.foundersSection}>
        <div className={styles.founderDetails}>
          <Image src={sulaiman} alt="" objectFit="contain" />
          <p className={styles.founderName}>سليمان المسعودي</p>
          <p className={styles.founderRole}>مدير انتاج وصانع أفكار</p>
        </div>
        <div className={styles.founderDetails}>
          <Image src={dawood} alt="" objectFit="contain" />
          <p className={styles.founderName}>داود الكيومي</p>
          <p className={styles.founderRole}>مخرج وفنان دمج</p>
        </div>
        <div className={styles.founderDetails}>
          <Image src={yasser} alt="" objectFit="contain" />
          <p className={styles.founderName}>ياسر الكيومي</p>
          <p className={styles.founderRole}>مخرج إبداعي وفنان إضاءة</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
