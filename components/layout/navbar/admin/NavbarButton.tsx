import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./NavbarButton.module.css";
import { AdminRoute } from "../../../../routes/AdminRoutes";

const NavbarButton = ({ icon, name, path }: AdminRoute) => {
  const router = useRouter();

  const [isActive, setIsActive] = useState(false);

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
