import React, { useContext, useRef } from "react";
import { TodoContext } from "../contexts/TodoContext";

const TodoGroupForm = () => {
  const { addTodoGroup, updateModalKeys } = useContext(TodoContext);

  const inputRef = useRef<HTMLInputElement | null>(null);

  function callOnSubmit(e: React.FormEvent<HTMLFormElement>) {
    const { value = "" } = inputRef.current || { value: "" };
    e.preventDefault();

    if (inputRef.current && inputRef.current.value) {
      addTodoGroup({ groupName: value });
      inputRef.current.value = "";
      updateModalKeys({ keyName: "groupModal", keyValue: false });
    }
  }

  return (
    <>
      <form onSubmit={callOnSubmit}>
        <label className="mr-2" htmlFor="task">
          Add Task Group
        </label>
        <input
          ref={inputRef}
          className="mr-2 p-2 border-2 border-gray-200"
          placeholder="task"
          type="text"
          name="task"
          id="task"
        />
        <input
          className="bg-green-300 p-2 cursor-pointer rounded-md"
          type="submit"
          value="Add Task Group"
        />
      </form>
    </>
  );
};

// <form onSubmit={callOnSubmit}>
//     <label className="mr-2" htmlFor="task">
//       Add Task Group
//     </label>
//     <input
//       ref={inputRef}
//       className="mr-2 p-2 border-2 border-gray-200"
//       placeholder="task"
//       type="text"
//       name="task"
//       id="task"
//     />
//     <input
//       className="bg-green-300 p-2 cursor-pointer rounded-md"
//       type="submit"
//       value="Add Task Group"
//     />
//   </form>

export default TodoGroupForm;
