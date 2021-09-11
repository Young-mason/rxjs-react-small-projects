import React from "react";
import { TodoItem } from "../models";
import { TodoService } from "../services";
import { kListWrap, kTodoContentWrap, kButtonWrap } from "../constants/style";
import {
  Todo,
  TodoWrap,
  TodoDeleteButton,
  TodoAdd,
  TodoToggle,
} from "../components";

interface TodoListProps {
  todos: TodoItem[];
}

function TodoList({ todos }: TodoListProps) {
  const deleteTodoItem = (id: number) => TodoService.deleteTodo(id);

  const addTodoItem = (content: string) => TodoService.addTodo(content);

  const onToggle = (id: number, checked: boolean) =>
    TodoService.toggleIsDone(id, checked);

  return (
    <TodoWrap style={kListWrap}>
      <TodoAdd addTodo={addTodoItem} />
      {!!todos &&
        todos.map((item: TodoItem) => (
          <TodoWrap style={kTodoContentWrap} key={item.id}>
            <Todo todoItem={item} />
            <TodoWrap style={kButtonWrap}>
              <TodoDeleteButton onDelete={deleteTodoItem} todoId={item.id} />
              <TodoToggle onToggle={onToggle} todo={item} />
            </TodoWrap>
          </TodoWrap>
        ))}
    </TodoWrap>
  );
}

export default React.memo(TodoList);
