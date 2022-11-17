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
      <div className={styles.content}>
        <div className={styles.lessonDetails}>
          <div className="flex flex-col items-end justify-between  text-end">
            <div className="flex flex-col space-y-10">
              <p className="text-secondary">تفاصيل الدرس</p>
              <p className="text-white">
                في هذي الحلقة نتكلم عن المراحل الأساسية في معظم الإنتاجات.
                بالنسبة لسؤال الحلقة: بإمكانكم كتابة الفكرة بشكل مبسط، وأريد
                اعرف ويش التجهيزات اللي بتسووها خلال مرحلة ما قبل الإنتاج. فكرة
                السؤال هو ترسيخ معلومات الحلقة، وأرحب بأي اقتراحات او نقد بناء
                لتحسين الحلقات القادمة.
              </p>
            </div>
            <div className="flex flex-col space-y-10">
              <hr style={{ width: "100%", color: "white" }} />
              <div>hi</div>
            </div>
          </div>
        </div>
        <div className={styles.lessonInformation}>
          <div className={styles.lesson}>
            <p className="text-[40px] font-bold">مراحل الإنتاج الأساسيّة</p>
            <div className="flex flex-row justify-start space-x-10 text-right text-white">
              <div className="flex flex-row space-x-10">
                <p className="text-lg">اللغة العربية</p>
                <GlobeIcon size={20} color={kiBrosOrangeColor} />
                <div className={styles.verticalDivider}></div>
              </div>
              <div className="flex flex-row space-x-10">
                <SignalIcon size={20} color={kiBrosOrangeColor} />
                <p className="text-lg">مبتدأ</p>
                <div className={styles.verticalDivider}></div>
              </div>
              <div className="flex flex-row space-x-10">
                <p className="text-lg">ياسر الكيومي</p>
                <UserIcon size={20} color={kiBrosOrangeColor} />
              </div>
            </div>
            <div className="flex items-start justify-start">
              <Image
                src={img}
                alt="kibros-logo"
                objectFit="fill"
                height={1080}
                width={1920}
              />
            </div>
          </div>
        </div>
      </div>
      <hr style={{ width: "100%", color: "white" }} />
      <div className={styles.relatedLessonsSection}>
        <p className="text-[40px] font-bold">دروس مرتبطة</p>
        <div className={styles.relatedLessons}>
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
