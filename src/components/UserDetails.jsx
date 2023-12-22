import React from "react";
import editPng from "../assets/editing.png";
import deletePng from "../assets/delete.png";
import viewPng from "../assets/eye.png";
import Button from "../utils/Button";

function UserDetails() {
  return (
    <div className="w-full bg-slate-300 rounded-md shadow-md p-4 flex justify-between items-center">
      <h1 className="font-bold">Prathmesh Vhatkar</h1>
      <div className="flex justify-evenly items-center gap-8">
        <Button imgSrc={editPng} onClick={() => {}} />
        <Button imgSrc={viewPng} onClick={() => {}} />
        <Button imgSrc={deletePng} onClick={() => {}} />
      </div>
    </div>
  );
}

export default UserDetails;
