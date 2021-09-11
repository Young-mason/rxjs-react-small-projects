import { BehaviorSubject, Observable } from "rxjs";
import { TodoItem } from "../models";

class TodoServiceController {
  nextId = 3;

  TodoInitData: TodoItem[] = [
    {
      id: 1,
      content: "Learn React",
      isDone: false,
    },
    {
      id: 2,
      content: "Learn Angular",
      isDone: true,
    },
  ];

  private _data$: BehaviorSubject<TodoItem[]> = new BehaviorSubject<TodoItem[]>(
    this.TodoInitData
  );

  // _data$ Subject 에 직접 접근을 막기위해 임의의 Observable 로 변환합니다.
  readonly todoData$: Observable<TodoItem[]> = this._data$.asObservable();

  // add Todo Data
  addTodo(content: string): void {
    this.TodoInitData = this.TodoInitData.concat({
      content,
      id: this.nextId,
      isDone: false,
    });

    this._data$.next(this.TodoInitData);
    this.nextId++;
  }

  // delete Todo Data
  deleteTodo(id: number): void {
    this.TodoInitData = this.TodoInitData.filter((v) => v.id !== id);
    this._data$.next(this.TodoInitData);
  }

  // Toggle Todo Data
  toggleIsDone(id: number, checked: boolean): void {
    this.TodoInitData = this.TodoInitData.map((v) => ({
      id: v.id,
      content: v.content,
      isDone: v.id === id ? checked : v.isDone,
    }));
    this._data$.next(this.TodoInitData);
  }

  // 해당 State가 필요 없을 때 실행합니다.

  dispose(): void {
    this._data$.complete();
  }
}

export const TodoService = new TodoServiceController();
