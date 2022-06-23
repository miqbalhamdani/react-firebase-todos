import { createContext, useContext, useEffect, useState } from "react";
import TODOS from "../dummy.json";

const TodosContext = createContext();

export const TodosContextProvider = ({ children }) => {
  const [tags, setTags] = useState(null);
  const [todos, setTodos] = useState([]);
  const [categories, setCategories] = useState([
    { name: "Today" },
    { name: "Tomorrow" },
    { name: "Next 7 Days" },
  ]);

  useEffect(() => {
    if (todos.length < 1) {
      setTodos(TODOS);
    }

    const tags = todos.reduce(
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
  }, [todos]);

  const addNewTodo = (todoItem) => {
    setTodos((prev) => [...prev, todoItem]);
  };

  return (
    <TodosContext.Provider
      value={{
        tags,
        categories,
        todos,
        addNewTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export const Todos = () => {
  return useContext(TodosContext);
};
