import React, { useContext, useState } from "react";
import { MenuOption } from "./MenuOption";
import { AnalyticsContext } from "./AnalyticsContext";
import "../ActionMenu.scss";

export const ActionMenu = ({ data, size }) => {
  const [isActive, setIsActive] = useState(false);
  const value = useContext(AnalyticsContext);

  const handleSelect = () => {
    setIsActive(!isActive);
  };

  const styles = isActive ? "menu-expanded" : "";

  return (
    <div
      className="menu"
      onClick={handleSelect}
      data-test-id={`${value}-action-menu`}
      aria-expanded={isActive}
    >
      <div className={`menu-toggle ${styles} ${size}`}>
        Label
        <span className="fas fa-caret-right"></span>
      </div>
      <ul className={`menu-content ${styles}`}>
        {isActive &&
          data.map((d) => (
            <MenuOption label={d.label} value={d.value} key={d.value} />
          ))}
      </ul>
    </div>
  );
};
