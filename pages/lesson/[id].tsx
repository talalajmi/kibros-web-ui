import React from "react";
import { UserIcon } from "../../components/icons";
import styles from "./LessonDetails.module.css";
import { kiBrosOrangeColor } from "../../utils/colors";
import GlobeIcon from "../../components/icons/GlobeIcon";
import SignalIcon from "../../components/icons/SignalIcon";
import Image from "next/image";
import img from "/public/assets/images/lesson/lesson.png";
import Lesson from "../../components/user/lesson/Lesson";

const LessonDetails = () => {
  return (
    <div className={styles.container}>
      <div className={styles.lessonDetails}>
        <div className={styles.lessonHighlights}>
          <div dir="rtl" className={styles.lessonDescription}>
            <p className="text-[28px] text-secondary">تفاصيل الدرس</p>
            <p>
              في هذي الحلقة نتكلم عن المراحل الأساسية في معظم الإنتاجات. بالنسبة
              لسؤال الحلقة: بإمكانكم كتابة الفكرة بشكل مبسط، وأريد اعرف ويش
              التجهيزات اللي بتسووها خلال مرحلة ما قبل الإنتاج. فكرة السؤال هو
              ترسيخ معلومات الحلقة، وأرحب بأي اقتراحات او نقد بناء لتحسين
              الحلقات القادمة.
            </p>
          </div>
          <div className="flex flex-col items-end space-y-10 ">
            <div className="flex h-[1px] w-[119px] bg-white"></div>
            <div className="flex flex-col items-end space-y-5 text-lg">
              <div className="flex space-x-10">
                <p className="text-success">متوسط</p>
                <p className="text-white">:مستوى الدرس</p>
              </div>
              <div className="flex space-x-10 ">
                <p className="text-success">العضوية الخاصة</p>
                <p className="text-white">:العضوية</p>
              </div>
              <div className="flex space-x-10 ">
                <p className="text-secondary">تحميل</p>
                <p className="text-white">:المرفقات</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.lessonOverview}>
          <p className="text-right text-[40px] font-bold text-white">
            مراحل الإنتاج الأساسيّة
          </p>
          <div className="flex flex-row justify-end space-x-10 text-right text-white">
            <div className="flex flex-row space-x-10">
              <p className="text-lg">اللغة العربية</p>
              <SignalIcon size={20} color={kiBrosOrangeColor} />
            </div>
            <div className="flex flex-row space-x-10">
              <div className={styles.verticalDivider}></div>
              <p className="text-lg">مبتدأ</p>
              <GlobeIcon size={20} color={kiBrosOrangeColor} />
            </div>
            <div className="flex flex-row space-x-10">
              <div className={styles.verticalDivider}></div>
              <p className="text-lg">ياسر الكيومي</p>
              <UserIcon size={20} color={kiBrosOrangeColor} />
            </div>
          </div>
          <div className="flex items-center justify-end">
            <Image
              src={img}
              alt="kibros-logo"
              objectFit="fill"
              width={1920}
              height={1080}
            />
          </div>
        </div>
      </div>
      <hr style={{ color: "white", width: "100%" }} />
      <div className="flex flex-col items-center justify-start space-y-10">
        <p className="text-start text-[40px] font-bold text-white">
          دروس مرتبطة
        </p>
        <div className="flex flex-row space-x-[30px] overflow-x-scroll">
          <Lesson
            lessonName="مراحل الانتاج الاساسية"
            lessonDuration="٣ دقايق و ٣٢ ثانية"
            isNew={true}
            isPaid={true}
            imagePath={img}
          />
          <Lesson
            lessonName="مراحل الانتاج الاساسية"
            lessonDuration="٣ دقايق و ٣٢ ثانية"
            isNew={true}
            isPaid={true}
            imagePath={img}
          />
          <Lesson
            lessonName="مراحل الانتاج الاساسية"
            lessonDuration="٣ دقايق و ٣٢ ثانية"
            isNew={true}
            isPaid={true}
            imagePath={img}
          />
        </div>
      </div>
    </div>
  );
};

export default LessonDetails;
