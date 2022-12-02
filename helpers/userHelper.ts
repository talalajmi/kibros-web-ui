import { IUser } from "../interfaces";

interface UserFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  country: string;
}

const addAdminInitialValues: UserFormInputs = {
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
    phoneNumber: user.phoneNumber,
    country: user.country,
  };
  return initialValues;
};

export { type UserFormInputs, addAdminInitialValues, editUserInitialValues };
