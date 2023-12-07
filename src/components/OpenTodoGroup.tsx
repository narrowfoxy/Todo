import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const OpenTodoGroup = () => {
  const { updateModalKeys } = useContext(TodoContext);
  return (
    <div
      onClick={() => updateModalKeys({ keyName: "groupModal", keyValue: true })}
      className="py-4 border-b-2 text-center text-gray-500 cursor-pointer"
    >
      Add Todo Group
    </div>
  );
};

export default OpenTodoGroup;
