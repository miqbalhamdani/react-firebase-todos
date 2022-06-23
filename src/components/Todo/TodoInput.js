import React, { useState } from "react";
import Form from "react-bootstrap/Form";

import { Todos } from "../../context/TodosContext";

export default function TodoInput() {
  const { addNewTodo } = Todos();

  const [textInput, setTextInput] = useState("");

  const handleChangeInput = (e) => {
    setTextInput(e.target.value);
  }

  const handlerEnterInput = (e) => {
    if (e.key !== "Enter") return;

    const tag = getHashtag(textInput);
    const payload = {
      name: getTextWithoutHashtag(tag),
      tag,
    };
    addNewTodo(payload);

    setTextInput("");
  };

  const getHashtag = (fullText) => {
    return fullText
      .split(" ")
      .find((value) => value.startsWith("#"))
      .replace('#', '');
  };

  const getTextWithoutHashtag = (tag) => {
    return textInput.replace(` #${tag}`,'');
  };

  return (
    <Form.Group className="mb-3">
      <Form.Control
        size="lg"
        type="text"
        value={textInput}
        placeholder="Add a task"
        onChange={handleChangeInput}
        onKeyDown={handlerEnterInput}
      />
    </Form.Group>
  );
}
