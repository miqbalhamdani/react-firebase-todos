import React from "react";

import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import FormCheck from "react-bootstrap/FormCheck";

export default function TodoCard({ todo }) {
  return (
    <Card className="mb-3">
      <Card.Body>
        <FormCheck type="checkbox">
          <FormCheck.Label className="d-flex justify-content-between">
            <div>
              <Form.Check.Input type="checkbox" defaultChecked={todo.isDone} />

              <div className="ps-2">
                <h5 className="m-0">{todo.name}</h5>
                <p className="text-primary m-0">{todo.tag}</p>
              </div>
            </div>

            <div>
              <p className="text-primary m-0">{todo.dueDate}</p>
            </div>
          </FormCheck.Label>
        </FormCheck>
      </Card.Body>
    </Card>
  );
}
