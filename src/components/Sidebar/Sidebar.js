import style from "./sidebar.module.css";
import SidebarItem from "./SidebarItem";

import { Todos } from "../../context/TodosContext";

export default function Sidebar() {
  const { categories, tags } = Todos();

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
