import React from "react";
import addPng from "../assets/add.png";
import { useState } from "react";
import UserForm from "./UserForm";
function CatalogueContainer() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="   shadow-md mt-8 flex flex-col items-start justify-evenly p-4">
      <button
        className="self-end cursor-pointer"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <img src={addPng} alt="add Button" className="w-[25px] h-[25px]"></img>
      </button>
      <UserForm
        isOpen={isOpen}
        handleClose={() => {
          setIsOpen(false);
        }}
      />
    </div>
  );
}

export default CatalogueContainer;
