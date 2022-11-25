import React from "react";
import { UserIcon } from "../../../../components/icons";
import styles from "./LessonDetails.module.css";
import { kiBrosOrangeColor } from "../../../../utils/colors";
import GlobeIcon from "../../../../components/icons/GlobeIcon";
import SignalIcon from "../../../../components/icons/SignalIcon";
import Image from "next/image";
import img from "../../../../public/assets/images/lesson/lesson.png";
import Lesson from "../../../../components/public/lesson/Lesson";

const LessonDetails = () => {
  return (
    <div className={styles.container}>
      <div className={styles.lessonOverview}>
        <div className={styles.lessonOverviewContent}>
          <p className={styles.lessonName}>مراحل الانتاج الاساسية</p>
          <div className={styles.lessonOverviewRow}>
            <div className={styles.idk}>
              <p>مبتدأ</p>
              <SignalIcon size={24} color={kiBrosOrangeColor} />
              <div className={styles.verticalDivider}></div>
            </div>
            <div className={styles.idk}>
              <p>اللغة العربية</p>
              <GlobeIcon size={24} color={kiBrosOrangeColor} />
              <div className={styles.verticalDivider}></div>
            </div>
            <div className={styles.idk}>
              <p>ياسر الكيومي</p>
              <UserIcon size={24} color={kiBrosOrangeColor} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles.lessonDescription}>
          <div className={styles.lessonDescriptionContent}>
            <p className={styles.lessonDescriptionTitle}>تفاصيل الدرس</p>
            <p dir="rtl" className="text-xl md:text-2xl">
              في هذي الحلقة نتكلم عن المراحل الأساسية في معظم الإنتاجات. بالنسبة
              لسؤال الحلقة: بإمكانكم كتابة الفكرة بشكل مبسط، وأريد اعرف ويش
              التجهيزات اللي بتسووها خلال مرحلة ما قبل الإنتاج. فكرة السؤال هو
              ترسيخ معلومات الحلقة، وأرحب بأي اقتراحات او نقد بناء لتحسين
              الحلقات القادمة.
            </p>
          </div>
          <div className={styles.lessonDescriptionOverview}>
            <hr
              style={{
                color: "white",
                width: "8rem",
              }}
            />
            <div className={styles.lessonDescriptionColumn}>
              <p>
                مستوى الدرس:
                <span className="text-success-base-base mr-10">متوسط</span>
              </p>
              <p>
                العضوية:
                <span className="text-success-base-base mr-10">
                  العضوية الخاصة
                </span>
              </p>
              <p>
                المرفقات:
                <span className="mr-10 cursor-pointer text-secondary-base">
                  تحميل
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.lessonImage}>
          <Image
            src={img}
            alt="kibros-logo"
            objectFit="fill"
            width={1200}
            height={650}
          />
        </div>
      </div>
      <hr style={{ color: "white" }} />
      <div className={styles.relatedLessonsContainer}>
        <div className={styles.realtedLessonsRow}>
          <p className={styles.realtedLessonsTitle}>دروس مرتبطة</p>
          <div className={styles.relatedLessons}>
            <Lesson
              lessonName="مراحل الانتاج الاساسية"
              lessonDuration="٣ دقايق و ٣٢ ثانية"
              isNew={false}
              isPaid={false}
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
              isNew={false}
              isPaid={false}
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
    </div>
  );
};

export default LessonDetails;
