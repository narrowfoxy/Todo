import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const MyComponent = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 2000);
  });
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 5,
            },
          }}
        >
          Please
        </motion.div>
      )}
    </AnimatePresence>
  );
};
