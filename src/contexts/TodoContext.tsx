import { ReactElement, createContext, useState } from "react";
import { TodoElementType } from "../types/todoTypes";
import { noop } from "lodash";

export const TodoContext = createContext({
  todo: [] as TodoElementType[],
  addTodo: noop,
  removeTodo: noop,
  updateComplete: noop,
  updateHeader: noop,
  addTodoGroup: noop,
  removeTodoGroup: noop,
  todoGroup: [] as string[],
  todoHeader: "",
  modalKeys: {} as { [key: string]: boolean },
  updateModalKeys: noop,
});

function TodoContextWrapper({ children }: { children: ReactElement }) {
  const [todo, setTodo] = useState<TodoElementType[]>([]);
  const [todoHeader, setTodoHeader] = useState<string>("");
  const [todoGroup, setTodoGroup] = useState<string[]>([]);
  const [modalKeys, setModalKeys] = useState<{ [key: string]: boolean }>({});

  function addTodo(todoElement: TodoElementType): void {
    setTodo([...todo, todoElement]);
  }

  function removeTodo({ todoElementId }: { todoElementId: number }): void {
    const updatedTodoList = todo.filter(
      (todoElement) => todoElement.id !== todoElementId
    );

    setTodo(updatedTodoList);
  }

  function updateComplete({ todoElementId }: { todoElementId: number }) {
    const updatedTodoList = todo.filter((todoElement) => {
      if (todoElement.id == todoElementId)
        todoElement.isCompleted = !todoElement.isCompleted;

      return todoElement;
    });

    setTodo(updatedTodoList);
  }

  function updateHeader(headerText: string) {
    setTodoHeader(headerText);
  }

  function addTodoGroup({ groupName }: { groupName: string }) {
    const isElementPresent = todoGroup.find(
      (todoGroupElement) => todoGroupElement == groupName
    );
    if (!isElementPresent) {
      setTodoGroup([...todoGroup, groupName]);
    }
  }

  function removeTodoByGroupName({ groupName }: { groupName: string }) {
    const updatedTodos = todo.filter(
      (todoElement) => todoElement.group !== groupName
    );
    setTodo(updatedTodos);
  }

  function removeTodoGroup({ groupName }: { groupName: string }) {
    setTodoGroup(todoGroup.filter((todoGroup) => todoGroup !== groupName));
    removeTodoByGroupName({ groupName: groupName });
  }

  function updateModalKeys({
    keyName,
    keyValue,
  }: {
    keyName: string;
    keyValue: boolean;
  }) {
    const keys = { ...modalKeys };
    keys[keyName] = keyValue;
    setModalKeys(keys);
  }

  return (
    <TodoContext.Provider
      value={{
        todo,
        addTodo,
        removeTodo,
        updateComplete,
        todoHeader,
        updateHeader,
        addTodoGroup,
        removeTodoGroup,
        todoGroup,
        modalKeys,
        updateModalKeys,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export default TodoContextWrapper;
