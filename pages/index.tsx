import type { NextPage } from "next";
import React from "react";
import { AdminSettings } from "../components";
import CategoryTable from "../components/admin/category/CategoryTable";

const Home: NextPage = () => {
  return <CategoryTable />;
};

export default Home;
