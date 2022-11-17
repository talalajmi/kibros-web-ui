import type { NextPage } from "next";
import React from "react";
import Lesson from "../components/user/lesson/Lesson";
import img from "/public/assets/images/pages/banner.png";
import Image from "next/image";
import FAQ from "../components/public/faq/FAQ";

const Home: NextPage = () => {
  return <FAQ />;
};

export default Home;
