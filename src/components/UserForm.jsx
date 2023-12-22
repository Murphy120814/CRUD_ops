import React from "react";
import ReactPortal from "../utils/ReactPortal";
import UserFormContainer from "./UserFormContainer";
function UserForm(props) {
  return (
    <>
      <ReactPortal wrapperId={"user_form"}>
        <UserFormContainer {...props}>This is Form</UserFormContainer>
      </ReactPortal>
    </>
  );
}

export default UserForm;
