import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControlComponent from "./FormikControlComponent";
import { sexOptions } from "../../constant";

function FormikRootComponent({ handleClose }) {
  const initialValues = {
    firstName: "",
    lastName: "",
    sex: "",
    age: "",
    phoneNumber: "",
    roleInCompany: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required!"),
    lastName: Yup.string().required("Last name is required!"),
    sex: Yup.string().required("Sex is required!"),
    age: Yup.number()
      .positive("Age cannot be negative")
      .min(18, "Must be above 18 years")
      .max(120, "Are you Human!")
      .required("Age is Required!"),
    roleInCompany: Yup.string().required("Role is required!"),
    phoneNumber: Yup.string()
      .required("Phone number is required!")
      .min(10, "Must have 10 digits")
      .max(10, "Must have 10 digits")
      .matches(/^\d{10}$/, "Phone Number is Invalid"),
  });

  const onSubmit = (values, onSubmitProps) => {
    console.log("formData", values);
    onSubmitProps.resetForm();
    handleClose();
  };

  return (
    <>
      <Formik
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        initialValues={initialValues}
      >
        {(formik) => {
          return (
            <Form className=" w-9/12 mt-4 min-h-full flex flex-col gap-2 ">
              <div className="mb-2">
                <FormikControlComponent
                  control="input"
                  label="First Name"
                  type="text"
                  name="firstName"
                  placeholder="Prathmesh"
                />
              </div>
              <div className="mb-2">
                <FormikControlComponent
                  control="input"
                  label="Last Name"
                  type="text"
                  name="lastName"
                  placeholder="Vhatkar"
                />
              </div>
              <div className="flex flex-col lg:flex-row gap-2  justify-between items-center ">
                <div className=" w-full lg:w-6/12">
                  <FormikControlComponent
                    control="input"
                    label="Age"
                    type="number"
                    name="age"
                    placeholder="23"
                  />
                </div>
                <div className="w-full lg:w-6/12">
                  <FormikControlComponent
                    control="select"
                    label="Sex"
                    options={sexOptions}
                    name="sex"
                    placeholder="Male"
                  />
                </div>
              </div>
              <div className="mb-2">
                <FormikControlComponent
                  control="input"
                  label="Contact Number"
                  type="text"
                  name="phoneNumber"
                  placeholder="9191919123"
                />
              </div>
              <div className="mb-2">
                <FormikControlComponent
                  control="input"
                  label="Role in Fermion"
                  type="text"
                  name="roleInCompany"
                  placeholder="React Developer"
                />
              </div>
              <button
                disabled={!(formik.isValid && formik.dirty)}
                type="submit"
                className="text-white bg-blue-700 hover:bg-black focus:ring-4 focus:outline-none focus:ring-emerald-300-300 font-medium rounded-lg text-sm w-full mt-2 sm:w-auto px-5 py-2.5 text-center disabled:opacity-20 disabled:bg-black"
              >
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default FormikRootComponent;
