import React from "react";
import { TodoItem } from "../models";
import { kTodoContentTitle } from "../constants/style";

interface TodoProps {
  todoItem: TodoItem;
}

function Todo({ todoItem }: TodoProps) {
  return (
    <p
      style={{
        ...kTodoContentTitle,
        textDecoration: todoItem.isDone ? "line-through" : "none",
      }}
    >
      {todoItem.content}
    </p>
  );
}

export default React.memo(Todo);
