import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { tabSchema } from "../schema/tabSchema";
import { getDifferentTodoList } from "../utils/getDifferentTodoList";
import Header from "./Header";
import Modal from "./Modal";
import Tabs from "./Tabs";
import TodoGroupForm from "./TodoGroupForm";
import OpenTodoGroup from "./OpenTodoGroup";

const Todo = () => {
  const { todo, todoGroup } = useContext(TodoContext);

  const { allTodos, completeTodos, incompleteTodos } =
    getDifferentTodoList(todo);

  return (
    <>
      <Modal component={<TodoGroupForm />} modalId="groupModal" />
      <div className="border min-w-[350px] max-w-[760px] relative w-[90%] m-auto top-10 rounded-t-md">
        <Header />
        <OpenTodoGroup />
        <Tabs
          defaultSelected={"all"}
          tabs={tabSchema({
            allTodos,
            completeTodos,
            incompleteTodos,
            todoGroup,
          })}
        />
      </div>
    </>
  );
};

export default Todo;
