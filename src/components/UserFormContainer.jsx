import React from "react";
import closePng from "../assets/close.png";
import Button from "../utils/Button";
function UserFormContainer({ children, isOpen, handleClose }) {
  if (!isOpen) {
    return null;
  }
  return (
    <>
      <div className="fixed inset-0 bg-black opacity-90 flex flex-col z-50 p-8 items-center justify-center">
        <div className="w-6/12 rounded-lg min-h-full bg-emerald-400 mt-8 flex p-4 flex-col items-center">
          <Button
            className="self-end"
            onClick={handleClose}
            imgSrc={closePng}
          />

          <>{children}</>
        </div>
      </div>
    </>
  );
}

export default UserFormContainer;
