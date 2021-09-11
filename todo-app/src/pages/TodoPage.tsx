import React, { useEffect, useState } from "react";
import { TodoService } from "../services/my-service";
import { TodoItem } from "../models";
import TodoList from "../containers/TodoList";
import { Subscription } from "rxjs";

function TodoPage() {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  useEffect(() => {
    const todoData$: Subscription = TodoService.todoData$.subscribe(
      (v: TodoItem[]) => {
        setTodos(v);
      }
    );

    return () => todoData$.unsubscribe();
  }, []);

  return <TodoList todos={todos} />;
}

export default TodoPage;
