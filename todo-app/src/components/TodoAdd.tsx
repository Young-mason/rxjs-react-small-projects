import React, { useState } from "react";
import { kButton, kTodoInput, kInputFormWrap } from "../constants/style";

interface TodoAddProps {
  addTodo: (content: string) => void;
}

function TodoAdd({ addTodo }: TodoAddProps) {
  const [content, setContent] = useState("");
  const changeContent = (e: React.ChangeEvent<HTMLInputElement>) =>
    setContent(e.target.value);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodo(content);
    setContent("");
  };

  return (
    <>
      <form onSubmit={submit} style={kInputFormWrap}>
        <input
          type="text"
          style={kTodoInput}
          value={content}
          onChange={changeContent}
        />

        <button type="submit" style={kButton}>
          추가
        </button>

        <hr style={{ width: "100%" }} />
      </form>
    </>
  );
}

export default React.memo(TodoAdd);
