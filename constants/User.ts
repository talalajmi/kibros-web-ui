import { IUser } from "../interfaces";
import { UserRoles } from "./UserRoles";

let userCsvRows = ["User", "Email", "Role", "Status"];

export const getUserValuesForExport = (user: IUser) => {
  let values = [
    user.fullName,
    user.email,
    UserRoles[user.role as keyof typeof UserRoles].title,
    "Free",
  ];

  return values;
};

export { userCsvRows };
