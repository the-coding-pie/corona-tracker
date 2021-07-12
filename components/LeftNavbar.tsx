import React from "react";
import BrowseCountries from "./BrowseCountries";
import WorldData from "./WorldData";

const LeftNavbar = () => {
  return (
    <nav className="left-nav min-h-screen max-h-screen h-screen overflow-hidden w-min z-20 card flex flex-col" style={{
      minWidth: "260px"
    }}>
      <WorldData />

      <BrowseCountries />
    </nav>
  );
};

export default LeftNavbar;
