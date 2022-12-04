import { FieldProps } from "formik";
import React, { ChangeEventHandler, ReactNode } from "react";

interface CustomInputComponent {
  type?: string;
  isRtl?: boolean;
}

const Input = ({
  field,
  form: { touched, errors },
  type,
  isRtl,
  ...props
}: FieldProps & CustomInputComponent) => {
  return (
    <div className="space-y-5">
      <input
        className={`w-full rounded-8 border ${
          errors[field.name] && "border-error"
        } border-inputOutline/[0.22] bg-primary-light p-12 ${
          isRtl ? "text-end" : "text-start"
        }
        text-white transition duration-300 ease-in-out  focus:border-secondary-base/[0.5] focus:outline-none focus:ring-0`}
        type={type}
        {...field}
        {...props}
      />
      {touched[field.name] && errors[field.name] && (
        <div className={`${isRtl ? "text-end" : "text-start"} text-error`}>
          {errors[field.name] as ReactNode}
        </div>
      )}
    </div>
  );
};

export default Input;
