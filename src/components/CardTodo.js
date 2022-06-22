import React from "react";

import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import FormCheck from "react-bootstrap/FormCheck";

export default function CardTodo({ todo }) {
  return (
    <Card className="mb-3">
      <Card.Body>
        <FormCheck type="checkbox">
          <FormCheck.Label>
            <Form.Check.Input type="checkbox" checked={todo.isDone} />
            <div className="ps-2">
              <h5 className="m-0">{todo.name}</h5>
              <p className="text-primary m-0">{todo.dueDate}</p>
            </div>
          </FormCheck.Label>
        </FormCheck>
      </Card.Body>
    </Card>
  );
}
