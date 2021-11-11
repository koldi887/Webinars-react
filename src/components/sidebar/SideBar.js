import React from "react";
import classes from "./Sidebar.module.css";
import { sideBarData } from "./SidebarData";

export default function SideBar() {
  const setClass = (item) => {
    if (item.title) return classes.titleBlock;
    if (item.subtitle) return classes.subtitle;
  };

  const setTitle = (item) => {
    if (item.title) return <p className={classes.title}>{item.title}</p>;
    return item.text;
  };

  return (
    <>
      <ul className={`list ${classes.sidebarList}`}>
        {sideBarData.map((item, index) => (
          <li key={index} className={setClass(item)}>
            {item.icon && item.icon}
            {setTitle(item)}
          </li>
        ))}
      </ul>
    </>
  );
}
