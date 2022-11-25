import React from "react";
import { SearchIcon } from "../../icons";
import styles from "./Home.module.css";
import { iconColor } from "../../../utils/colors";
import Lesson from "../lesson/Lesson";
import img from "../../../public/assets/images/lesson/lesson.png";

const Home = () => {
  return (
    <>
      <div className="carousel"></div>
      <div className={styles.container}>
        <div className="flex justify-end space-x-20">
          <div className="w-[300px]">
            <select
              dir="rtl"
              className="w-full rounded-8 border border-inputOutline/[.2] bg-primary-base p-12 text-right text-white"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <div className="relative w-[300px]">
            <input
              placeholder="بحث"
              className="w-full rounded-8 border border-inputOutline/[.2] bg-primary-base p-12 text-end text-white placeholder:p-12"
            />
            <SearchIcon
              size={20}
              color={iconColor}
              className="bg-primary absolute top-16 left-10"
            />
          </div>
        </div>
        <div className="flex justify-end space-x-20">
          <div className="space-y-20">
            <div className="text-right text-[30px] font-semibold text-secondary-base">
              الدروس المجّانية
            </div>
            <div className="grid grid-flow-row grid-cols-1">
              <div className="grid grid-flow-col grid-rows-1 gap-[40px] overflow-x-scroll py-[40px]">
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
                  isNew={false}
                  isPaid={false}
                  imagePath={img}
                />
                <Lesson
                  lessonName="مراحل الانتاج الاساسية"
                  lessonDuration="٣ دقايق و ٣٢ ثانية"
                  isNew={true}
                  isPaid={false}
                  imagePath={img}
                />
                <Lesson
                  lessonName="مراحل الانتاج الاساسية"
                  lessonDuration="٣ دقايق و ٣٢ ثانية"
                  isNew={false}
                  isPaid={false}
                  imagePath={img}
                />
              </div>
            </div>
          </div>
        </div>
        <hr style={{ color: "white" }} />
        <div className="flex justify-end space-x-20">
          <div className="space-y-20">
            <div className="text-right text-[30px] font-semibold text-success-base">
              دروس العضويّة الخاصة
            </div>
            <div className="grid grid-flow-row grid-cols-1">
              <div className="grid grid-flow-col grid-rows-1 gap-[40px] overflow-x-scroll py-[40px]">
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
        </div>
      </div>
    </>
  );
};

export default Home;
