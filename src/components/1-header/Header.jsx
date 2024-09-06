import { useEffect, useState } from "react";
import "./Header.css";
const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
    <header className="flex">
      <button
        className="menu icon-menu flex"
        onClick={() => setShowModal(true)}
      />

      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <button
        className="mode flex"
        onClick={() => {
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );
          setTheme(localStorage.getItem("currentMode"));
        }}
      >
        {theme === "dark" ? (
          <span className="icon-moon-o" />
        ) : (
          <span className="icon-sun" />
        )}
      </button>
      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button
                className="icon-cross"
                onClick={() => setShowModal(false)}
              />
            </li>
            <li>
              <a href="#skills" onClick={() => setShowModal(false)}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setShowModal(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setShowModal(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
