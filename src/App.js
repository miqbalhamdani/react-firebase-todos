import { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Sidebar from "./components/Sidebar/Sidebar";
import Todo from "./components/Todo/Todo";
import TODOS from "./dummy.json";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(TODOS);
  }, []);

  const handleTodoInput = (todoItem) => {
    setTodos((prev) => [
      ...prev,
      todoItem,
    ]);
  };

  return (
    <>
      <Sidebar todos={todos} />
      <Todo todos={todos} onTodoInput={handleTodoInput}/>
    </>
  );
}

export default App;
