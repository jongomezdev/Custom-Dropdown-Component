import React from "react";
import "../ActionMenu.scss";

export const MenuOption = ({ label, value }) => {
  return (
    <li className="menu-item" value={value}>
      {label}
    </li>
  );
};
