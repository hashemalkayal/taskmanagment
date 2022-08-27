import React, { FC } from "react";
import AppLogo from "../../assets/images/AppLogo.svg";
import "./sidebar.scss";

const Sidebar: FC = () => {
  return (
    <div className="Sidebar">
      <div className="view-countiner">
        <header className="header-view">
          <img src={AppLogo} alt="not found" />
        </header>

        <section></section>
      </div>
    </div>
  );
};

export default Sidebar;
