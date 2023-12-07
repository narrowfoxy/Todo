import { tabsType } from "../types/TabsType";
import { TodoElementType } from "../types/todoTypes";
import TodoGroups from "../components/TodoGroups";

export function tabSchema({
  allTodos,
  completeTodos,
  incompleteTodos,
  todoGroup,
}: {
  allTodos: TodoElementType[];
  completeTodos: TodoElementType[];
  incompleteTodos: TodoElementType[];
  todoGroup: string[];
}) {
  const tabSchema: tabsType[] = [
    {
      title: "All",
      id: "all",
      component: <TodoGroups groups={todoGroup} todos={allTodos} />,
      subheader: allTodos.length,
    },
    {
      title: "Completed",
      id: "completed",
      component: (
        <TodoGroups groups={todoGroup} todos={completeTodos} hideAdd={true} />
      ),
      subheader: completeTodos.length,
    },
    {
      title: "Incomplete",
      id: "incomplete",
      component: (
        <TodoGroups groups={todoGroup} todos={incompleteTodos} hideAdd={true} />
      ),
      subheader: incompleteTodos.length,
    },
  ];

  return tabSchema;
}
