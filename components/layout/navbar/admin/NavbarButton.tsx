import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./Navbarbutton.module.css";
import { AdminRoute } from "../../../../routes/AdminRoutes";

const NavbarButton = ({ icon, name, path }: AdminRoute) => {
  const [selectedButton, setSelectedButton] = useState("");

  const router = useRouter();

  const redirectToPage = (path: string, name: string) => {
    setSelectedButton(name);
    router.push(path);
  };

  return (
    <button
      className={selectedButton === name ? styles.buttonActive : styles.button}
      onClick={(e) => redirectToPage(path, name)}
    >
      {icon}
      <p className="text-darkText">{name}</p>
    </button>
  );
};

export default NavbarButton;
