import React from "react";
import { ArrowLeft, SearchIcon } from "../../icons";
import styles from "./Home.module.css";
import { iconColor, kiBrosDarkBlueColor } from "../../../utils/colors";
import Lesson from "../lesson/Lesson";
import img from "../../../public/assets/images/lesson/thumbnail.jpg";
import Select from "react-select";
import {
  reactSelectTheme,
  getReactSelectStyles,
} from "../../../utils/ReactSelectTheme";
import Image from "next/image";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ArrowRight from "../../icons/ArrowRight";

const options = [{ label: "1" }, { label: "2" }, { label: "3" }];

const RightArrow = ({ clickHandler }: { clickHandler: () => void }) => {
  return (
    <ArrowRight
      size={24}
      className="absolute top-1/2 right-10 cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
      onClick={clickHandler}
    />
  );
};
const LeftArrow = ({
  clickHandler,
  hasPrev,
}: {
  clickHandler: () => void;
  hasPrev: boolean;
}) => {
  return (
    <ArrowLeft
      size={24}
      className="absolute top-1/2 left-10 cursor-pointer fill-white transition duration-300 ease-in-out hover:fill-secondary-base"
      onClick={clickHandler}
    />
  );
};

const Home = () => {
  return (
    <>
      <Carousel autoPlay={true} showStatus={false} className="relative">
        <div>
          <Image src={img} alt="kibros-logo" objectFit="cover" />
        </div>
        <div>
          <Image src={img} alt="kibros-logo" objectFit="cover" />
        </div>
        <div>
          <Image src={img} alt="kibros-logo" objectFit="cover" />
        </div>
      </Carousel>
      <div className={styles.container}>
        <div className="flex justify-end space-x-20">
          <div className="w-[300px]">
            <Select
              options={options}
              placeholder="فرز"
              styles={getReactSelectStyles(kiBrosDarkBlueColor)}
              isRtl
              theme={reactSelectTheme}
            />
          </div>
          <div className="relative w-[300px]">
            <input
              placeholder="بحث"
              className="w-full rounded-8 border border-inputOutline/[.2] bg-primary-base p-12 text-end text-white placeholder:p-12"
            />
            <SearchIcon
              size={20}
              color={iconColor}
              className="absolute top-16 left-10 bg-primary-base"
            />
          </div>
        </div>
        <div className="flex justify-end space-x-20 md:justify-center">
          <div className="space-y-20">
            <p className="text-right text-[30px] font-semibold text-secondary-base">
              الدروس المجّانية
            </p>
            <div className="grid items-center justify-center">
              <div className="scrollbar-hide flex justify-center space-x-[20px] py-[40px] md:grid-flow-col md:overflow-x-scroll">
                <Lesson
                  lessonName="مراحل الانتاج الاساسية"
                  lessonDuration="3 دقايق و 23 ثانية"
                  isNew={false}
                  isPaid={false}
                  imagePath={img}
                />
                <Lesson
                  lessonName="مراحل الانتاج الاساسية"
                  lessonDuration="3 دقايق و 23 ثانية"
                  isNew={false}
                  isPaid={false}
                  imagePath={img}
                />
                <Lesson
                  lessonName="مراحل الانتاج الاساسية"
                  lessonDuration="3 دقايق و 23 ثانية"
                  isNew={true}
                  isPaid={false}
                  imagePath={img}
                />
              </div>
              <div className="scrollbar-hide flex justify-center space-x-[20px] py-[40px] md:grid-flow-col md:overflow-x-scroll">
                <Lesson
                  lessonName="مراحل الانتاج الاساسية"
                  lessonDuration="3 دقايق و 23 ثانية"
                  isNew={false}
                  isPaid={false}
                  imagePath={img}
                />
                <Lesson
                  lessonName="مراحل الانتاج الاساسية"
                  lessonDuration="3 دقايق و 23 ثانية"
                  isNew={false}
                  isPaid={false}
                  imagePath={img}
                />
                <Lesson
                  lessonName="مراحل الانتاج الاساسية"
                  lessonDuration="3 دقايق و 23 ثانية"
                  isNew={true}
                  isPaid={false}
                  imagePath={img}
                />
              </div>
            </div>
          </div>
        </div>
        <hr style={{ color: "white" }} />
        <div className="flex justify-center space-x-20">
          <div className="space-y-20">
            <p className="text-right text-[30px] font-semibold text-success-base">
              دروس العضويّة الخاصة
            </p>
            <div className="grid flex-col ">
              <div className="scrollbar-hide grid grid-rows-1 gap-[40px] py-[40px] md:grid-flow-col md:overflow-x-scroll">
                <Lesson
                  lessonName="مراحل الانتاج الاساسية"
                  lessonDuration="3 دقايق و 23 ثانية"
                  isNew={true}
                  isPaid={true}
                  imagePath={img}
                />
                <Lesson
                  lessonName="مراحل الانتاج الاساسية"
                  lessonDuration="3 دقايق و 23 ثانية"
                  isNew={true}
                  isPaid={true}
                  imagePath={img}
                />
                <Lesson
                  lessonName="مراحل الانتاج الاساسية"
                  lessonDuration="3 دقايق و 23 ثانية"
                  isNew={true}
                  isPaid={true}
                  imagePath={img}
                />
              </div>
              <div className="scrollbar-hide grid grid-rows-1 gap-[40px] py-[40px] md:grid-flow-col md:overflow-x-scroll">
                <Lesson
                  lessonName="مراحل الانتاج الاساسية"
                  lessonDuration="3 دقايق و 23 ثانية"
                  isNew={true}
                  isPaid={true}
                  imagePath={img}
                />
                <Lesson
                  lessonName="مراحل الانتاج الاساسية"
                  lessonDuration="3 دقايق و 23 ثانية"
                  isNew={true}
                  isPaid={true}
                  imagePath={img}
                />
                <Lesson
                  lessonName="مراحل الانتاج الاساسية"
                  lessonDuration="3 دقايق و 23 ثانية"
                  isNew={true}
                  isPaid={true}
                  imagePath={img}
                />
              </div>
              <div className="scrollbar-hide grid grid-rows-1 gap-[40px] py-[40px] md:grid-flow-col md:overflow-x-scroll">
                <Lesson
                  lessonName="مراحل الانتاج الاساسية"
                  lessonDuration="3 دقايق و 23 ثانية"
                  isNew={true}
                  isPaid={true}
                  imagePath={img}
                />
                <Lesson
                  lessonName="مراحل الانتاج الاساسية"
                  lessonDuration="3 دقايق و 23 ثانية"
                  isNew={true}
                  isPaid={true}
                  imagePath={img}
                />
                <Lesson
                  lessonName="مراحل الانتاج الاساسية"
                  lessonDuration="3 دقايق و 23 ثانية"
                  isNew={true}
                  isPaid={true}
                  imagePath={img}
                />
              </div>
              <div className="scrollbar-hide grid grid-rows-1 gap-[40px] py-[40px] md:grid-flow-col md:overflow-x-scroll">
                <Lesson
                  lessonName="مراحل الانتاج الاساسية"
                  lessonDuration="3 دقايق و 23 ثانية"
                  isNew={true}
                  isPaid={true}
                  imagePath={img}
                />
                <Lesson
                  lessonName="مراحل الانتاج الاساسية"
                  lessonDuration="3 دقايق و 23 ثانية"
                  isNew={true}
                  isPaid={true}
                  imagePath={img}
                />
                <Lesson
                  lessonName="مراحل الانتاج الاساسية"
                  lessonDuration="3 دقايق و 23 ثانية"
                  isNew={true}
                  isPaid={true}
                  imagePath={img}
                />
              </div>
              <div className="scrollbar-hide grid grid-rows-1 gap-[40px] py-[40px] md:grid-flow-col md:overflow-x-scroll">
                <Lesson
                  lessonName="مراحل الانتاج الاساسية"
                  lessonDuration="3 دقايق و 23 ثانية"
                  isNew={true}
                  isPaid={true}
                  imagePath={img}
                />
                <Lesson
                  lessonName="مراحل الانتاج الاساسية"
                  lessonDuration="3 دقايق و 23 ثانية"
                  isNew={true}
                  isPaid={true}
                  imagePath={img}
                />
                <Lesson
                  lessonName="مراحل الانتاج الاساسية"
                  lessonDuration="3 دقايق و 23 ثانية"
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
