import { TodoElementType } from "../types/todoTypes";

export function getDifferentTodoList(todos: TodoElementType[]): {
  allTodos: TodoElementType[];
  incompleteTodos: TodoElementType[];
  completeTodos: TodoElementType[];
} {
  const allTodos = todos;
  const incompleteTodos = todos.filter((todo) => !todo.isCompleted);
  const completeTodos = todos.filter((todo) => todo.isCompleted);

  return {
    allTodos,
    incompleteTodos,
    completeTodos,
  };
}
