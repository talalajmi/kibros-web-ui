import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./Navbarbutton.module.css";
import { AdminRoute } from "../../../../routes/AdminRoutes";

const NavbarButton = ({ icon, name, path }: AdminRoute) => {
  const router = useRouter();

  const redirectToPage = (path: string, name: string) => {
    const button = document.getElementById(name);
    if (!button?.classList.contains("buttonActive")) {
      button?.classList.remove("button");
      button?.classList.add("buttonActive");
    }

    router.push(path);
  };

  return (
    <button
      id={name}
      className={styles.button}
      onClick={(e) => redirectToPage(path, name)}
    >
      {icon}
      <p className="text-darkText">{name}</p>
    </button>
  );
};

export default NavbarButton;
