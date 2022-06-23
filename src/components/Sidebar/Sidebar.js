import React, { useEffect, useState } from "react";
import style from "./sidebar.module.css";
import SidebarItem from "./SidebarItem";

export default function Sidebar(props) {
  const [categories, setCategories] = useState([
    { name: "Today" },
    { name: "Tomorrow" },
    { name: "Next 7 Days" },
  ]);
  const [tags, setTags] = useState(null);

  useEffect(() => {
    const tags = props.todos.reduce(
      (accumulator, todo) => ({
        ...accumulator,
        [todo.tag]:
          typeof accumulator[todo.tag] !== "undefined"
            ? accumulator[todo.tag] + 1
            : 1,
      }),
      {}
    );
    setTags(tags);
  }, [props.todos]);

  return (
    <div className={style.sidebar}>
      <div className={style["sidebar-body"]}>
        {categories.map((category, index) => (
          <SidebarItem key={index} name={category.name} />
        ))}
      </div>

      <div className={style["sidebar-header"]}>
        <h5>Tags</h5>
      </div>

      <div className={style["sidebar-body"]}>
        {tags &&
          Object.keys(tags).map((key, index) => (
            <SidebarItem key={index} name={key} qty={tags[key]} />
          ))}
      </div>
    </div>
  );
}
