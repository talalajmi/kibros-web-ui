import React from "react";
import { SearchIcon, UserIcon } from "../../icons";
import styles from "./Navbar.module.css";
import { iconColor } from "../../../utils/colors";
import Image from "next/image";
import { logo } from "../../../constants";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.actionButtons}>
        <SearchIcon size={24} color={iconColor} />
        <UserIcon size={24} color={iconColor} />
      </div>
      <div className={styles.routes}>
        <p>من نحن</p>
        <p>الرئيسية</p>
        <div className="relative left-20">
          <Image
            src={logo}
            alt="kibros-logo"
            width={230}
            height={50}
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
