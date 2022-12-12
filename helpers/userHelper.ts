import { IUser } from "../interfaces";
import { UserRoles } from "../constants/UserRoles";

interface UserFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  isSuspended: boolean;
  phoneNumber: string;
  country: string;
}

interface AddAdminFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  country: string;
}

interface AccountSettingsFromInputs {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

const addAdminInitialValues: AddAdminFormInputs = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  country: "",
};

const editUserInitialValues = (user: IUser) => {
  const initialValues: UserFormInputs = {
    firstName: user.firstname,
    lastName: user.lastname,
    email: user.email,
    isSuspended: user.isSuspended,
    phoneNumber: user.phoneNumber,
    country: user.country,
  };
  return initialValues;
};

const accountSettingsInitialValues = (user: IUser) => {
  const initialValues: AccountSettingsFromInputs = {
    firstName: user.firstname,
    lastName: user.lastname,
    email: user.email,
    role: UserRoles[user.role as keyof typeof UserRoles].title,
  };
  return initialValues;
};

export {
  type UserFormInputs,
  type AddAdminFormInputs,
  type AccountSettingsFromInputs,
  addAdminInitialValues,
  editUserInitialValues,
  accountSettingsInitialValues,
};
