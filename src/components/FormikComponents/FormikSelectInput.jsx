import React from "react";
import { Field, ErrorMessage } from "formik";
import FormikTextError from "./FormikTextError";

function FormikSelectInput(props) {
  const { label, name, options, ...rest } = props;
  return (
    <>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900">
        {label}
      </label>
      <Field
        as="select"
        id={name}
        name={name}
        {...rest}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.key}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component={FormikTextError} />
    </>
  );
}

export default FormikSelectInput;
