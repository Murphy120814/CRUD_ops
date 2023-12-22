import React from "react";
import addPng from "../assets/add.png";
import { useState } from "react";
import UserForm from "./UserForm";
import Button from "../utils/Button";
import UserDetails from "./UserDetails";
function CatalogueContainer() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="  shadow-md mt-8 flex flex-col items-start justify-evenly p-4">
        <Button
          className="self-end cursor-pointer mb-8"
          onClick={() => {
            setIsOpen(true);
          }}
          imgSrc={addPng}
        />

        <UserDetails />
      </div>
      <UserForm
        isOpen={isOpen}
        handleClose={() => {
          setIsOpen(false);
        }}
      />
    </>
  );
}

export default CatalogueContainer;
