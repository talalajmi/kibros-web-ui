import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./Navbarbutton.module.css";
import { AdminRoute } from "../../../../routes/AdminRoutes";

const NavbarButton = ({ icon, name, path }: AdminRoute) => {
  const router = useRouter();

  return (
    <button
      id={name}
      className={styles.button}
      onClick={() => {
        router.push(path);
      }}
    >
      {icon}
      <p className="text-darkText">{name}</p>
    </button>
  );
};

export default NavbarButton;
