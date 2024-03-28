import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlanetsInfo } from "../Database/Destination.js";
import { DestinationMainInfo } from "./Destination-main-info";

export const Destination = () => {
  const [selectedTab, setSelectedTab] = useState(PlanetsInfo[0]);
  return (
    <>
    <AnimatePresence mode="wait">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
      <section className="destination">
        <div className="destination__heading">
          <span>01</span>
          <h2>PICK YOUR DESTINATION</h2>
        </div>
        <div className="destination__wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab ? selectedTab.label : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="destination__img">
                <img src={selectedTab.img} alt="" />
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="destination__main-info">
            <nav>
              <ul>
                {PlanetsInfo.map((item) => (
                  <li
                    key={item.label}
                    className={item === selectedTab ? "selected" : ""}
                    onClick={() => setSelectedTab(item)}
                  >
                    {`${item.label}`}
                    {item === selectedTab ? (
                      <motion.div className="underline" layoutId="underline" />
                    ) : null}
                  </li>
                ))}
              </ul>
            </nav>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab ? selectedTab.label : "empty"}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {selectedTab ? (
                  <DestinationMainInfo selectedTab={selectedTab} />
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
