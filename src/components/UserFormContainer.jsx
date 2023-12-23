import React from "react";
import closePng from "../assets/close.png";
import Button from "../utils/Button";
import { useDispatch } from "react-redux";
import { toggleViewMode, populateUserId } from "../slices/userInfoSlice";
function UserFormContainer({ children, isOpen, handleClose }) {
  const dispatch = useDispatch();
  if (!isOpen) {
    return null;
  }
  return (
    <>
      <div className="absolute top-0 left-0 lg:top-16 md:top-1 w-full flex flex-col z-50 p-4 items-center justify-center">
        <div className="w-full lg:w-6/12 rounded-lg min-h-full shadow-2xl shadow-black  bg-emerald-400 mt-4 flex p-4 pb-12 flex-col items-center">
          <Button
            className="self-end"
            onClick={() => {
              handleClose();
              dispatch(toggleViewMode(false));
              dispatch(populateUserId(null));
            }}
            imgSrc={closePng}
          />

          <>{children}</>
        </div>
      </div>
    </>
  );
}

export default UserFormContainer;
