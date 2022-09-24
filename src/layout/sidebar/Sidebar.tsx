import React, { FC } from "react";
import AppLogo from "../../assets/images/AppLogo.svg";
import { List } from "semantic-ui-react";

import "./sidebar.scss";

const Sidebar: FC = () => {
  const listSideBarItem = [
    {
      title: "",
      icon: "",
      path: "",
    },
  ];

  return (
    <div className="Sidebar">
      <div className="view-countiner">
        <header className="header-view">
          <img src={AppLogo} alt="not found" />
        </header>

        <section>
          <List>
            {listSideBarItem.map((item, index: number) => {
              return <List.Item key={index}>{item.title}</List.Item>;
            })}
          </List>
        </section>
      </div>
    </div>
  );
};

export default Sidebar;
