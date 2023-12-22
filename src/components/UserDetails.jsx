import React from "react";
import editPng from "../assets/editing.png";
import deletePng from "../assets/delete.png";
import viewPng from "../assets/eye.png";
import Button from "../utils/Button";
import { useDispatch } from "react-redux";

import {
  removeUserInfo,
  populateUserId,
  toggleViewMode,
} from "../slices/userInfoSlice";
function UserDetails({ userData, setIsOpen }) {
  const dispatch = useDispatch();
  return (
    <div className="w-full bg-slate-300 rounded-md mb-4 shadow-md p-4 flex justify-between items-center">
      <h1 className="font-bold">{`${userData?.firstName} ${userData?.lastName}`}</h1>
      <div className="flex justify-evenly items-center gap-8">
        <Button
          imgSrc={editPng}
          onClick={() => {
            setIsOpen(true);
            dispatch(populateUserId(userData.userId));
          }}
        />
        <Button
          imgSrc={viewPng}
          onClick={() => {
            setIsOpen(true);
            dispatch(populateUserId(userData.userId));
            dispatch(toggleViewMode(true));
          }}
        />
        <Button
          imgSrc={deletePng}
          onClick={() => {
            dispatch(removeUserInfo(userData.userId));
          }}
        />
      </div>
    </div>
  );
}

export default UserDetails;
