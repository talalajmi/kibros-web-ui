interface AddAdminFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  country: string;
}

const addAdminInitialValues: AddAdminFormInputs = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  country: "",
};

export { type AddAdminFormInputs, addAdminInitialValues };
