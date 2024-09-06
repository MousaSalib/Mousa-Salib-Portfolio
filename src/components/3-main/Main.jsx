import { useState } from "react";
import "./Main.css";
import { data } from "./projects/data";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./modal/Modal";

const allProjects = data;
const Main = () => {
  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(allProjects);
  const [showModal, setShowModal] = useState(false);
  const [currentDesc, setCurrentDesc] = useState("");
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentImage, setCurrentImage] = useState("");

  const handleClick = (btnCategory) => {
    setCurrentActive(btnCategory);
    const filteredProjects = allProjects.filter((item) => {
      return item.category === btnCategory;
    });
    setArr(filteredProjects);
  };

  const handleMoreClick = (desc, title, image) => {
    setCurrentTitle(title);
    setCurrentDesc(desc);
    setCurrentImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <main className="projects" id="projects">
      <h1 className="main-title">
        <span className="icon-sphere" />
        Projects
      </h1>
      <div className="main flex">
        <section className="flex left-section">
          <button
            onClick={() => {
              setCurrentActive("all");
              setArr(allProjects);
            }}
            className={currentActive === "all" ? "active" : null}
          >
            All Projects
          </button>
          <button
            onClick={() => {
              handleClick("JS");
            }}
            className={currentActive === "JS" ? "active" : null}
          >
            JavaScript
          </button>
          <button
            onClick={() => {
              handleClick("React");
            }}
            className={currentActive === "React" ? "active" : null}
          >
            React.JS
          </button>
          <button
            onClick={() => {
              handleClick("Next");
            }}
            className={currentActive === "Next" ? "active" : null}
          >
            Next.JS
          </button>
          <button
            onClick={() => {
              handleClick("Angular");
            }}
            className={currentActive === "Angular" ? "active" : null}
          >
            Angular
          </button>
          <button
            onClick={() => {
              handleClick("Node");
            }}
            className={currentActive === "Node" ? "active" : null}
          >
            Node & Express
          </button>
        </section>

        <section className="flex right-section">
          <AnimatePresence>
            {arr.map((item) => (
              <motion.article
                className="card"
                key={item.id}
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 8, stiffness: 50 }}
              >
                <img src={item.image} alt="image-card" />
                <div className="box">
                  <h1 className="title">{item.title}</h1>
                  <p className="sub-title">
                    {item.desc.length > 100
                      ? `${item.desc.substring(0, 100)}...`
                      : item.desc}
                  </p>
                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <a
                        href={item.deploy}
                        className="icon-link"
                        target="_blank"
                      ></a>
                      <a
                        href={item.github}
                        className="icon-github"
                        target="_blank"
                      ></a>
                    </div>
                    <button
                      className="link flex"
                      onClick={() => handleMoreClick(item.desc, item.title, item.image)}
                    >
                      Description
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right2"
                      />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </section>
      </div>
      <Modal
        show={showModal}
        onClose={closeModal}
        content={currentDesc}
        title={currentTitle}
        image={currentImage}
      />
    </main>
  );
};

export default Main;
