import React from "react";
import ReactPortal from "../utils/ReactPortal";
import UserFormContainer from "./UserFormContainer";
import FormikRootComponent from "./FormikComponents/FormikRootComponent";
function UserForm(props) {
  const { handleClose } = props;
  return (
    <>
      <ReactPortal wrapperId={"user_form"}>
        <div className="">
          <UserFormContainer {...props}>
            <FormikRootComponent handleClose={handleClose} />
          </UserFormContainer>
        </div>
      </ReactPortal>
    </>
  );
}

export default UserForm;
