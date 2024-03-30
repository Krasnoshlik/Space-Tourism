import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <section className="home__wrapper">
            <div className="info__wrapper">
              <h2>SO, YOU WANT TO TRAVEL TO</h2>
              <h1>SPACE</h1>
              <p>
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </div>
            <div className="button__holder">
              <button
                className="plus"
                onClick={() => navigate("/destination", { replace: false })}
              >
                EXPLORE
              </button>
            </div>
          </section>
        </motion.div>
      </AnimatePresence>
    </>
  );
};