export const AdminRoutes = {
  settingsPage: "/admin/settings",
  lessonsPage: "/admin/lessons",
  filesPage: "/admin/files",
  categoriesPage: "/admin/categories",
  usersPage: "/admin/users",
  staffsPage: "/admin/staff",
  editLessonPage: "admin/lesson/:id",
  addLessonPage: "admin/lesson/:id",
};

export type AdminRoute = {
  name: string;
  icon: JSX.Element;
  path: string;
};
