import React, { ReactNode, useEffect, useRef, useState } from "react";
import { SearchIcon, UserIcon } from "../../icons";
import styles from "./Navbar.module.css";
import { iconColor } from "../../../utils/colors";
import Image from "next/image";
import { logo } from "../../../constants";
import { useRouter } from "next/router";
import { publicRoutes } from "../../../routes/PublicRoutes";
import MenuIcon from "../../icons/MenuIcon";
import { AuthorizationRoutes } from "../../../routes";

const Navbar = () => {
  // States
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);

  // Hooks
  const router = useRouter();

  const redirectToRoute = (route: string) => {
    router.push(route);
    setShowMobileDropdown((current) => !current);
  };

  return (
    <header className={styles.container}>
      <div className={styles.actionButtons}>
        <SearchIcon size={24} color={iconColor} />
        <UserIcon
          size={24}
          color={iconColor}
          onClick={() => redirectToRoute(AuthorizationRoutes.login)}
        />
      </div>

      <MenuIcon
        className={styles.menuButton}
        size={36}
        color={iconColor}
        onClick={() => setShowMobileDropdown((current) => !current)}
      />
      <div
        className={
          showMobileDropdown
            ? styles.mobileDropdown
            : styles.mobileDropdownHidden
        }
      >
        <p
          className="cursor-pointer text-xl"
          onClick={() => redirectToRoute(publicRoutes.aboutUs)}
        >
          من نحن
        </p>
        <p
          className="cursor-pointer text-xl"
          onClick={() => redirectToRoute(publicRoutes.home)}
        >
          الرئيسية
        </p>
        <div className={styles.mobileActionButtons}>
          <SearchIcon size={20} color={iconColor} />
          <UserIcon
            size={20}
            color={iconColor}
            onClick={() => redirectToRoute(AuthorizationRoutes.login)}
          />
        </div>
      </div>
      <div className={styles.routes}>
        <p
          className="cursor-pointer"
          onClick={() => router.push(publicRoutes.aboutUs)}
        >
          من نحن
        </p>
        <p
          className="cursor-pointer"
          onClick={() => router.push(publicRoutes.home)}
        >
          الرئيسية
        </p>
      </div>
      <div className="relative left-20">
        <Image
          src={logo}
          alt="kibros-logo"
          width={230}
          height={50}
          objectFit="cover"
        />
      </div>
    </header>
  );
};

export default Navbar;
