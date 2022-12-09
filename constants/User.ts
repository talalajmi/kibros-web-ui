import { IUser } from "../interfaces";
import { UserRoles } from "./UserRoles";

let userCsvRows = ["User", "Email", "Role", "Status"];
let adminCsvRows = ["User", "Email", "Role"];

const getUserValuesForExport = (user: IUser) => {
  let values = [
    user.fullName,
    user.email,
    UserRoles[user.role as keyof typeof UserRoles].title,
    "Free",
  ];

  return values;
};

const getAdminValuesForExport = (user: IUser) => {
  let values = [
    user.fullName,
    user.email,
    UserRoles[user.role as keyof typeof UserRoles].title,
  ];

  return values;
};

export {
  userCsvRows,
  getUserValuesForExport,
  adminCsvRows,
  getAdminValuesForExport,
};
