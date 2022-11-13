import type { NextPage } from "next";
import React from "react";
import Lesson from "../components/user/lesson/Lesson";
import img from "/public/assets/images/lesson/lesson.png";

const Home: NextPage = () => {
  return (
    <Lesson
      lessonName="مراحل الانتاج الاساسية"
      lessonDuration="٣ دقايق و ٣٢ ثانية"
      isNew={true}
      isPaid={true}
      imagePath={img}
    />
  );
};

export default Home;
