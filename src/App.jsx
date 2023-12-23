import React from "react";
import { CatalogueContainer } from "./components/index";

function App() {
  return (
    <div className="w-full  text-black p-4 border border-red-200 min-h-screen bg-emerald-200">
      <h1 className="border-b-black pb-4 border text-2xl font-bold text-center border-transparent">
        Profile Plex
      </h1>
      <h2 className="text-lg text-center">
        Made By{" "}
        <span className="font-bold text-blue-800">
          <a target="_blank" rel="noreffer noreferrer">
            Prathmesh Vhatkar
          </a>{" "}
        </span>
        with ❤️
      </h2>
      <CatalogueContainer />
    </div>
  );
}

export default App;
