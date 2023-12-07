import { ReactElement, useContext } from "react";
import { TodoElementType } from "../types/todoTypes";
import { TodoContext } from "../contexts/TodoContext";

const TodoElement = ({
  description,
  id,
  isCompleted,
}: TodoElementType): ReactElement => {
  const { updateComplete, removeTodo } = useContext(TodoContext);

  return (
    <div className="flex justify-between" key={id}>
      <div>{description}</div>
      <input
        onChange={() => updateComplete({ todoElementId: id })}
        placeholder="completed"
        type="checkbox"
        name="completed"
        checked={isCompleted}
      />
      <button onClick={() => removeTodo({ todoElementId: id })}>X</button>
    </div>
  );
};

export default TodoElement;
