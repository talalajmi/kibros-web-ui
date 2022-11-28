interface FormInputs {
  email: string;
  password: string;
}

const initialValues: FormInputs = {
  email: "",
  password: "",
};

export { type FormInputs, initialValues };
