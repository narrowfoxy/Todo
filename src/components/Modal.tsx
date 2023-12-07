import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { AnimatePresence, motion } from "framer-motion";
import { modalVariants } from "../variants/modalVariant";
import { RxCross1 } from "react-icons/rx";

const Modal = ({
  modalId,
  component,
}: {
  modalId: string;
  component: React.ReactElement;
}) => {
  const { modalKeys, updateModalKeys } = useContext(TodoContext);

  return (
    <AnimatePresence>
      {modalKeys[modalId] ? (
        <motion.div
          className="fixed w-full h-full "
          variants={modalVariants}
          animate="backgroundOpenAnimate"
          exit="backgroundExitAnimate"
        >
          <motion.div
            className="bg-white min-w-[360px] w-[30%] m-auto p-4 shadow-xl rounded-sm"
            variants={modalVariants}
            initial="componentOpenInitial"
            animate="componentOpenAnimate"
            exit="componentExitAnimate"
          >
            <div
              className="flex justify-end cursor-pointer"
              onClick={() =>
                updateModalKeys({ keyName: modalId, keyValue: false })
              }
            >
              <RxCross1 />
            </div>
            <div className="mt-4">{component}</div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default Modal;
