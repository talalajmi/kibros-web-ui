import Image from "next/image";
import React, { useRef, useState } from "react";
import { iconColor } from "../../../../utils/colors";
import { avatar, logo, UserRoles } from "../../../../constants";
import { useRouter } from "next/router";
import { AdminRoute, AdminRoutes } from "../../../../routes/AdminRoutes";
import { AuthorizationRoutes } from "../../../../routes";
import {
  SettingsIcon,
  LogoutIcon,
  HomeIcon,
  LessonsIcon,
  UserIcon,
  Filter,
} from "../../../icons";
import styles from "./Navbar.module.css";
import NavbarButton from "./NavbarButton";
import { useAuth } from "../../../../utils/hooks";

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
      icon: <Filter size="22" color={iconColor} />,
      path: AdminRoutes.categoriesPage,
    },
    {
      name: "Users",
      icon: <UserIcon size="22" color={iconColor} />,
      path: AdminRoutes.usersPage,
    },
    {
      name: "Staff / Admin",
      icon: <UserIcon size="22" color={iconColor} />,
      path: AdminRoutes.staffsPage,
    },
  ];
  return routes;
};

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const { user } = useAuth();
  const dropdwonRef: any = useRef(null);
  const router = useRouter();

  const routes = getAdminRoutes();

  const logout = () => {
    router.push(AuthorizationRoutes.logout);
  };

  const checkIfClickedOutside = (e: MouseEvent) => {
    if (
      dropdwonRef.current &&
      showDropdown &&
      !dropdwonRef.current.contains(e.target)
    ) {
      setShowDropdown(false);
    }
  };

  window.addEventListener("click", (e) => checkIfClickedOutside(e));

  return (
    <header className={styles.conatiner}>
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
        <div ref={dropdwonRef} className={styles.iconContainer}>
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
                  <p className="text-white">{user?.fullName}</p>
                  <p className="text-darkTextSecondary/[0.68]">
                    {user
                      ? UserRoles[user.role as keyof typeof UserRoles].title
                      : ""}
                  </p>
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
              <div
                className={styles.dropdownLastButton}
                onClick={() => logout()}
              >
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
    </header>
  );
};

export default Navbar;
