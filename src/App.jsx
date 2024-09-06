import Hero from "./components/2-hero/Hero";
import Header from "./components/1-header/Header";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";
import Skills from "./components/skills/Skills";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollBTN(true);
      } else {
        setShowScrollBTN(false);
      }
    });
  }, []);
  const [showScrollBTN, setShowScrollBTN] = useState(false);
  return (
    <div id="up" className="container">
      <Header />
      <Hero />
      <div className="divider" />
      <Skills />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />
      <a
        href="#up"
        style={{ opacity: showScrollBTN ? 1 : 0, transition: "1s" }}
      >
        <button className="icon-arrow_circle_up scrollToUp" />
      </a>
    </div>
  );
}

export default App;
