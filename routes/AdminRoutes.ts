import React from "react";
import { LessonsIcon } from "../components/icons";

export const AdminRoutes = {
  settingsPage: "/admin/settings",
  lessonsPage: "/admin/lessons",
  filesPage: "/admin/files",
  categoriesPage: "/admin/categories",
  usersPage: "/admin/users",
  staffsPage: "/admin/staff",
};

export type AdminRoute = {
  name: string;
  icon: JSX.Element;
  path: string;
};
