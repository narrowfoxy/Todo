import { AnimatePresence, motion } from "framer-motion";
import { range } from "lodash";
import { useContext, useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { TodoContext } from "../contexts/TodoContext";
import { TodoGroupElementTypes } from "../types/TodoGroup";
import TodoElementForm from "./TodoElementForm";
import TodoListing from "./TodoListing";
import { accordianVariant } from "../variants/accordianVariant";

const TodoGroupElement = ({ title, todos, hideAdd }: TodoGroupElementTypes) => {
  const { removeTodoGroup } = useContext(TodoContext);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [groupCount, setGroupCount] = useState<number>(0);

  const addTodoElement: React.MouseEventHandler<HTMLDivElement> = function (
    event
  ) {
    event.stopPropagation();
    setIsOpen(true);
    setGroupCount((prev) => prev + 1);
  };

  const removeGroup = function (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    title: string
  ) {
    event.stopPropagation();
    removeTodoGroup({ groupName: title });
  };

  useEffect(() => {
    return () => setGroupCount(0);
  }, []);

  function onSubmitCallback() {
    setGroupCount((prev) => prev - 1);
  }

  return (
    <div className="flex flex-col min-h-[48px] rounded-t-lg">
      <div
        className="flex justify-between items-center min-h-[48px] px-4 bg-white rounded-t-lg border-b-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="font-semibold capitalize">{title}</div>
        {!hideAdd && (
          <div className="flex gap-4">
            <motion.div
              variants={accordianVariant}
              whileHover="onHoverButtonAnimate"
              className="cursor-pointer rounded-full"
              onClick={addTodoElement}
            >
              <IoMdAdd />
            </motion.div>
            <motion.div
              variants={accordianVariant}
              whileHover="onHoverButtonAnimate"
              className="cursor-pointer rounded-full"
              onClick={(event) => removeGroup(event, title)}
            >
              <MdDelete />
            </motion.div>
          </div>
        )}
      </div>
      {isOpen ? (
        <AnimatePresence>
          <motion.div className="p-2 bg-gray-50">
            <TodoListing todo={todos} />
            {range(groupCount).map((group) => {
              return (
                <TodoElementForm
                  onSubmitCallback={onSubmitCallback}
                  group={title}
                />
              );
            })}
          </motion.div>
        </AnimatePresence>
      ) : null}
    </div>
  );
};

export default TodoGroupElement;
