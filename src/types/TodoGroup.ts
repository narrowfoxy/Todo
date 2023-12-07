import { TodoElementType } from "./todoTypes";

export interface TodoGroupElementTypes {
  title: string;
  todos: TodoElementType[];
  hideAdd?: boolean;
}

export interface TodoGroupsTypes {
  groups: string[];
  todos: TodoElementType[];
  hideAdd?: boolean
}
