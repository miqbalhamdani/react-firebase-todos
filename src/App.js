import { useEffect, useState } from "react";
import firebaseConfig from "./config/firebase";
import { getDatabase, ref, child, get } from "firebase/database";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import CardTodo from "./components/CardTodo";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, "todos"))
      .then((snapshot) => {
        setTodos(snapshot.val());
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Container>
      <Row>
        <Col sm={12} md={8} className="m-auto pt-5">
          {/* Todo Title */}
          <h1 className="mb-4 text-white">Iqbal Hamdani</h1>

          {/* Todo List */}
          <Form>
            {todos.length
              ? todos.map((todo, index) => <CardTodo todo={todo} key={index} />)
              : "No tasks, Today. Time to chill :D"}
          </Form>

          {/* Todo Input */}
          <Form.Group className="mb-3">
            <Form.Control size="lg" type="text" placeholder="Add a task" />
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
