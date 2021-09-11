import React from "react";
import { TodoItem } from "../models";
import { kToggleCheckBox } from "../constants/style";

interface TodoToggleProps {
  onToggle: (id: number, checked: boolean) => void;
  todo: TodoItem;
}

function TodoToggle({ onToggle, todo }: TodoToggleProps) {
  const changeIsDone = (e: React.ChangeEvent<HTMLInputElement>) =>
    onToggle(todo.id, e.target.checked);

  return (
    <input
      type="checkbox"
      style={kToggleCheckBox}
      checked={todo.isDone}
      onChange={changeIsDone}
    />
  );
}

export default React.memo(TodoToggle);
