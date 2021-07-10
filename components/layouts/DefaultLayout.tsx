import React from "react";
import LeftNavbar from "../LeftNavbar";

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <div className="body flex">
      <LeftNavbar />
      <main>
          {children}
      </main>
    </div>
  );
};

export default DefaultLayout;
