import Image from "next/image";
import React, { useState } from "react";
import SettingsIcon from "../../../icons/SettingsIcon";
import { iconColor } from "../../../../utils/colors";
import LogoutIcon from "../../../icons/LogoutIcon";
import HomeIcon from "../../../icons/HomeIcon";
import LessonsIcon from "../../../icons/LessonsIcon";
import { Filter } from "../../../icons";
import UserIcon from "../../../icons/UserIcon";
import { avatar, logo } from "../../../../constants";
import styles from "./Navbar.module.css";
import { useRouter } from "next/router";
import { AdminRoute, AdminRoutes } from "../../../../routes/AdminRoutes";
import NavbarButton from "./NavbarButton";

const getAdminRoutes = () => {
  const routes: AdminRoute[] = [
    {
      name: "Dashboard",
      icon: <HomeIcon size="24" color={iconColor} />,
      path: "",
    },
    {
      name: "Lessons",
      icon: <LessonsIcon size="24" color={iconColor} />,
      path: AdminRoutes.lessonsPage,
    },
    {
      name: "Categories",
      icon: <Filter size="24" color={iconColor} />,
      path: AdminRoutes.categoriesPage,
    },
    {
      name: "Users",
      icon: <UserIcon size="24" color={iconColor} />,
      path: AdminRoutes.usersPage,
    },
    {
      name: "Staff / Admin",
      icon: <UserIcon size="24" color={iconColor} />,
      path: AdminRoutes.staffsPage,
    },
  ];
  return routes;
};

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const routes = getAdminRoutes();
  const router = useRouter();

  return (
    <div className={styles.conatiner}>
      <div className={styles.content}>
        <div className={styles.logoContainer}>
          <Image
            src={logo}
            alt="kibros-logo"
            width={200}
            height={50}
            objectFit="cover"
          />
          <p className="text-xl font-bold text-darkText">Admin Panel</p>
        </div>
        <div className={styles.iconContainer}>
          <div className="relative">
            <Image
              src={avatar}
              alt="avatar-image"
              objectFit="cover"
              width={40}
              height={40}
              className="cursor-pointer "
              onClick={() => setShowDropdown((current) => !current)}
            />
            <div
              className={showDropdown ? styles.dropdown : styles.dropdownHidden}
            >
              <div className={styles.dropdownContainer}>
                <Image
                  src={avatar}
                  alt="avatar-image"
                  objectFit="cover"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col">
                  <p className="text-white">Yasser Al Kiyomi</p>
                  <p className="text-darkTextSecondary/[0.68]">Admin</p>
                </div>
              </div>
              <div
                className={styles.dropdownButton}
                onClick={() => {
                  router.push(AdminRoutes.settingsPage);
                  setShowDropdown((current) => !current);
                }}
              >
                <SettingsIcon size="20" color={iconColor} />
                <p>Settings</p>
              </div>
              <div className={styles.dropdownLastButton}>
                <LogoutIcon size="20" color={iconColor} />
                <p>Logout</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.routesContainer}>
        {routes.map((route: AdminRoute) => (
          <NavbarButton
            key={route.name}
            icon={route.icon}
            name={route.name}
            path={route.path}
          />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
