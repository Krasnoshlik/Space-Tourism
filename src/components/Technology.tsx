import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TechnologyInfo } from "../Database/Technology.tsx";
import { TechnologyMainInfo } from "./Technology-main-info.tsx";

export const Technology = () => {
  const [selectedTab, setSelectedTab] = useState(TechnologyInfo[0]);
  return (
    <>
    <AnimatePresence mode="wait">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
      <section className="technology">
        <div className="technology__heading">
          <span>03</span>
          <h2>MEET YOUR CREW</h2>
        </div>
        <div className="technology__wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab ? selectedTab.name : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="technology__img">
                <img src={selectedTab.img} alt="" width="100%" />
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="technology__main-info">
            <nav>
              <ul>
                {TechnologyInfo.map((item) => (
                  <li
                    key={item.name}
                    className={item === selectedTab ? "selected" : ""}
                    onClick={() => setSelectedTab(item)}
                  >
                    {`${item.id}`}
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
                  <TechnologyMainInfo selectedTab={selectedTab} />
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
