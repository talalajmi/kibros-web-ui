import type { NextPage } from "next";
import React from "react";
import Lesson from "../components/user/lesson/Lesson";
import img from "/public/assets/images/pages/banner.png";
import Image from "next/image";
import FAQ from "../components/public/faq/FAQ";
import AboutUs from "../components/public/about-us/AboutUs";
import Home from "../components/public/home/Home";

const Index: NextPage = () => {
  return <Home />;
};

export default Index;
