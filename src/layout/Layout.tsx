import React, { FC } from "react";
import Sidebar from "./sidebar/Sidebar";
import "./layout.scss";

const Layout: FC<{ children: React.ReactElement | React.ReactElement[] }> = ({
  children,
}) => {
  return (
    <div className="Layout-coutniner">
      <Sidebar />

      <section className="child-coutniner">
        <div className="color-red-circle" />
        {/* <div className="color-yellow-circle" /> */}
        {children}
      </section>
    </div>
  );
};

export default Layout;
