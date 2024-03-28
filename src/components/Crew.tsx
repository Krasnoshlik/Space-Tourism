import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CrewInfo } from "../Database/Crew.tsx";
import { CrewMainInfo } from "./Crew-main-info.tsx";

export const Crew = () => {
  const [selectedTab, setSelectedTab] = useState(CrewInfo[0]);
  return (
    <>
    <AnimatePresence mode="wait">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
      <section className="crew">
        <div className="crew__heading">
          <span>02</span>
          <h2>MEET YOUR CREW</h2>
        </div>
        <div className="crew__wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab ? selectedTab.name : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="crew__img">
                <img src={selectedTab.img} alt="" />
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="crew__main-info">
            <nav>
              <ul>
                {CrewInfo.map((item) => (
                  <li
                    key={item.position}
                    className={item === selectedTab ? "selected" : ""}
                    onClick={() => setSelectedTab(item)}
                  >
                    {`${item.position}`}
                    {item === selectedTab ? (
                      <motion.div className="underline" layoutId="underline" />
                    ) : null}
                  </li>
                ))}
              </ul>
            </nav>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab ? selectedTab.name : "empty"}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {selectedTab ? (
                  <CrewMainInfo selectedTab={selectedTab} />
                ) : null}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
      </motion.div>
          </AnimatePresence>
    </>
  );
};
