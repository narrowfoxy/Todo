import React, { useContext, useRef } from "react";
import { TodoContext } from "../contexts/TodoContext";

const TodoElementForm = ({
  group,
  onSubmitCallback,
}: {
  group: string;
  onSubmitCallback: () => void;
}) => {
  const { todo, addTodo } = useContext(TodoContext);

  const inputRef = useRef<HTMLInputElement | null>(null);

  function callOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    const { value = "" } = inputRef.current || { value: "" };
    e.preventDefault();

    if (inputRef.current && inputRef.current.value) {
      addTodo({
        id: todo.length + 1,
        description: value,
        isCompleted: false,
        group: group,
      });
      onSubmitCallback();
      inputRef.current.value = "";
    }
  }

  return (
    <form onSubmit={callOnSubmit}>
      <label className="mr-2" htmlFor="task">
        Add Task
      </label>
      <input
        ref={inputRef}
        className="mr-2 p-2 border-2 border-gray-200"
        placeholder="task"
        type="text"
        name="task"
        id="task element"
      />
      <input
        className="bg-green-300 p-2 cursor-pointer rounded-md"
        type="submit"
        value="Add Task"
      />
    </form>
  );
};

export default TodoElementForm;
