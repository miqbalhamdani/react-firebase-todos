import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Sidebar from "./components/Sidebar/Sidebar";
import Todo from "./components/Todo/Todo";

import { TodosContextProvider } from './context/TodosContext';

function App() {
  return (
    <TodosContextProvider>
      <Sidebar />
      <Todo />
    </TodosContextProvider>
  );
}

export default App;
