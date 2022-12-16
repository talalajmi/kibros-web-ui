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

interface AccountSettingsFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

interface ChangePasswordFormInputs {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
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

const accountSettingsInitialValues = (user: IUser | null) => {
  const initialValues: AccountSettingsFormInputs = {
    firstName: user ? user.firstname : "",
    lastName: user ? user.lastname : "",
    email: user ? user.email : "",
    role: user ? UserRoles[user.role as keyof typeof UserRoles].title : "",
  };
  return initialValues;
};

const changePasswordInitialValues: ChangePasswordFormInputs = {
  currentPassword: "",
  newPassword: "",
  confirmNewPassword: "",
};

export {
  type UserFormInputs,
  type AddAdminFormInputs,
  type AccountSettingsFormInputs,
  type ChangePasswordFormInputs,
  addAdminInitialValues,
  editUserInitialValues,
  accountSettingsInitialValues,
  changePasswordInitialValues,
};
