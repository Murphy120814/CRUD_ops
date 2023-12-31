import React from "react";
import { Field, ErrorMessage } from "formik";
import FormikTextError from "./FormikTextError";

function FromikInput(props) {
  const { label, name, ...restProps } = props;
  return (
    <>
      <label
        htmlFor={name}
        className="block mb-1 text-sm font-medium text-gray-900">
        {label}
      </label>
      <Field
        name={name}
        id={name}
        {...restProps}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"></Field>
      <ErrorMessage name={name} component={FormikTextError}></ErrorMessage>
    </>
  );
}

export default FromikInput;
