import React from "react";
import { kButton } from "../constants/style";

interface TodoDeleteButtonProps {
  onDelete: (id: number) => void;
  todoId: number;
}

function TodoDeleteButton({ onDelete, todoId }: TodoDeleteButtonProps) {
  return (
    <button style={kButton} onClick={() => onDelete(todoId)}>
      삭제
    </button>
  );
}

export default React.memo(TodoDeleteButton);
