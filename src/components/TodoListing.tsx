import useSearchComponent from "../hooks/useSearchComponent";
import { TodoElementType } from "../types/todoTypes";
import TodoElement from "./TodoElement";

const TodoListing = ({ todo }: { todo: TodoElementType[] }) => {
  const { component, searchedList } = useSearchComponent(todo);

  return (
    <div>
      {component}
      {searchedList.map((todoElement) => {
        return <TodoElement key={todoElement.id} {...todoElement} />;
      })}
    </div>
  );
};

export default TodoListing;
