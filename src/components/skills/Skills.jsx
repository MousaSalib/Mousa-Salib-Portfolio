import { useState } from "react";
import "./Skills.css";
import { data } from "./my-skills/data";
import { motion, AnimatePresence } from "framer-motion";

const allSkills = data;
const Skills = () => {
  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(allSkills);

  const handleClick = (btnCategory) => {
    setCurrentActive(btnCategory);
    const filteredSkills = allSkills.filter((item) => {
      return item.category === btnCategory;
    });
    setArr(filteredSkills);
  };

  return (
    <main className="skills" id="skills">
      <h1 className="title">
        <span className="icon-code" />
        Skills
      </h1>
      <div className="main flex">
      <section className="flex skills-left-section">
        <button
          onClick={() => {
            setCurrentActive("all");
            setArr(allSkills);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          All Skills
        </button>
        <button
          onClick={() => {
            handleClick("frontend");
          }}
          className={currentActive === "frontend" ? "active" : null}
        >
          Frontend Skills
        </button>
        <button
          onClick={() => {
            handleClick("backend");
          }}
          className={currentActive === "backend" ? "active" : null}
        >
          Backend Skills
        </button>
        <button
          onClick={() => {
            handleClick("version-control");
          }}
          className={currentActive === "version-control" ? "active" : null}
        >
          Version Control
        </button>
      </section>

      <section className="flex skills-right-section">
        <AnimatePresence>
          {arr.map((item) => (
            <motion.article
              className="skills-card"
              key={item.id}
              layout
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ type: "spring", damping: 8, stiffness: 50 }}
            >
              <img src={item.image} alt={item.title} />
              <div className="box">
                <h3 className="sub-title flex">
                  <span className="icon-star-full"/>
                  {item.title}
                  </h3>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </section>
      </div>
    </main>
  );
};

export default Skills;
