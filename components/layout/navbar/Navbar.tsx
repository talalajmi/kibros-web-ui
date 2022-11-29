import React, { useState } from "react";
import { HomeIcon, SearchIcon, UserIcon } from "../../icons";
import styles from "./Navbar.module.css";
import Image from "next/image";
import { logo } from "../../../constants";
import { useRouter } from "next/router";
import { publicRoutes } from "../../../routes/PublicRoutes";
import { AuthorizationRoutes } from "../../../routes";
import AboutUsIcon from "../../icons/AboutUsIcon";

const Navbar = () => {
  // Hooks
  const router = useRouter();

  const redirectToRoute = (route: string) => {
    router.push(route);
  };

  return (
    <header className={styles.container}>
      <div className={styles.actionButtons}>
        <SearchIcon size={24} className={styles.svg} />
        <UserIcon
          size={24}
          className={styles.svg}
          onClick={() => redirectToRoute(AuthorizationRoutes.login)}
        />
      </div>

      <SearchIcon className={`${styles.svg} ${styles.menuButton}`} size={40} />
      <UserIcon
        className={`${styles.svg} ${styles.menuButton}`}
        size={40}
        onClick={() => redirectToRoute(AuthorizationRoutes.login)}
      />
      <AboutUsIcon
        className={`${styles.svg} ${styles.menuButton}`}
        size={40}
        onClick={() => redirectToRoute(publicRoutes.aboutUs)}
      />
      <HomeIcon
        className={`${styles.svg} ${styles.menuButton}`}
        size={46}
        onClick={() => redirectToRoute(publicRoutes.home)}
      />
      <div className={styles.routes}>
        <p
          className="cursor-pointer text-2xl transition duration-[200ms] hover:text-secondary-base active:text-secondary-base"
          onClick={() => redirectToRoute(publicRoutes.aboutUs)}
        >
          من نحن
        </p>
        <p
          className="cursor-pointer text-2xl transition duration-[200ms] hover:text-secondary-base active:text-secondary-base"
          onClick={() => redirectToRoute(publicRoutes.home)}
        >
          الرئيسية
        </p>
      </div>
      <div
        className="relative left-[44px] cursor-pointer md:left-20"
        onClick={(e) => router.push("/")}
      >
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
