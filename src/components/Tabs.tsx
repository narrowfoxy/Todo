import classNames from "classnames";
import { useState } from "react";
import { tabsType } from "../types/TabsType";
import { motion } from "framer-motion";

const Tabs = ({
  tabs,
  defaultSelected,
}: {
  tabs: tabsType[];
  defaultSelected: number | string;
}) => {
  const [currentTab, setCurrentTab] = useState(defaultSelected);
  const { component } = tabs.reduce((acc, tabElement) => {
    if (tabElement.id == currentTab) {
      return tabElement;
    }
    return acc;
  });

  return (
    <div className="p-4">
      <div className="flex">
        {tabs.map((tab) => {
          const titleClassName = classNames(
            "flex p-3 text-[#747684] text-semibold cursor-pointer",
            {
              "bg-[#F3F4F6] !text-[#1C64F2] rounded-md": currentTab == tab.id,
            }
          );
          return (
            <motion.div
              onClick={() => setCurrentTab(tab.id)}
              className={titleClassName}
              key={tab.id}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
            >
              {tab.title}
              <sub>{tab.subheader}</sub>
            </motion.div>
          );
        })}
      </div>
      <div className="mt-4 bg-[#F9FAFB] rounded-md">{component}</div>
    </div>
  );
};

export default Tabs;
