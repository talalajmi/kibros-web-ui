import type { NextPage } from "next";
import React from "react";
import { Users } from "../components";
import AdminsTable from "../components/admin/AdminsTable";

const Home: NextPage = () => {
  return <AdminsTable />;
};

export default Home;
