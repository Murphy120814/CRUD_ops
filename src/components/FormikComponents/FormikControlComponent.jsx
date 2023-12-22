import React from "react";
import FormikSelectInput from "./FormikSelectInput";
import FromikInput from "./FromikInput";

function FormikControlComponent(props) {
  const { control, ...restProps } = props;
  switch (control) {
    case "input":
      return <FromikInput {...restProps} />;
    case "select":
      return <FormikSelectInput {...restProps} />;
    default:
      return null;
  }
}

export default FormikControlComponent;
