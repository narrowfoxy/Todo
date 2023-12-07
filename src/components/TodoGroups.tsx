import { TodoGroupsTypes } from "../types/TodoGroup";
import TodoGroupElement from "./TodoGroupElement";

const TodoGroups = ({ groups, todos, hideAdd }: TodoGroupsTypes) => {
  return (
    <div className="border-2 border-gray-200 rounded-t-lg">
      {groups.map((group) => {
        const todosElement = todos.filter((todo) => todo.group == group);
        return (
          <TodoGroupElement
            title={group}
            todos={todosElement}
            hideAdd={hideAdd}
          />
        );
      })}
    </div>
  );
};
export default TodoGroups;
