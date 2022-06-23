import React from "react";
import style from "./sidebar.module.css";

export default function SidebarItem(props) {
  return (
    <div className={style["tag-item"]}>
      <div>{props.name ?? props.name}</div>
      <div>{props.qty ?? props.qty}</div>
    </div>
  );
}
