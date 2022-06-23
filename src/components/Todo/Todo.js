import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import TodoCard from "./TodoCard";
import TodoInput from "./TodoInput";

import { Todos } from "../../context/TodosContext";

export default function Todo() {
  const { todos } = Todos();

  return (
    <Container>
      <Row>
        <Col
          xl={{ span: 9, offset: 3 }}
          md={{ span: 8, offset: 4 }}
          sm={{ span: 6, offset: 6 }}
          className="pt-5"
        >
          {/* Todo Title */}
          <h1 className="mb-4 text-white">Iqbal Hamdani</h1>

          {/* Todo List */}
          <Form>
            { todos.length
              ? todos.map((todo, index) => <TodoCard todo={todo} key={index} />)
              : "No tasks, Today. Time to chill :D"}
          </Form>

          <TodoInput />
        </Col>
      </Row>
    </Container>
  );
}
