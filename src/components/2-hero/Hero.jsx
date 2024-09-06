import Lottie from "lottie-react";
import "./Hero.css";
import developerAnimation from "../../../src/animation/developer.json";
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const lottieRef = useRef();
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <motion.img
            src="./my-photo.jpg"
            className="avatar"
            alt=""
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.7 }}
          />
          <motion.div
            className="icon-verified"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.7 }}
          />
        </div>
        <motion.h1
          className="title"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          Web Developer.
        </motion.h1>
        <p className="sub-title">
          My name is Mousa Khairy Halim Salib, born on March 1, 1999. With a
          distinction in Agricultural Sciences, I took my passion for technology
          further by mastering Full Stack Web Development at ITI. Graduating
          with top marks, I’ve equipped myself with cutting-edge skills in
          modern web technologies, ready to drive innovation and excellence in
          the digital world.
        </p>
        <div className="all-icons flex">
          <a
            href="https://x.com/Mousa_Salib?t=u3Su5bHeDL2X_eKGQNRDBA&s=09"
            target="_blank"
          >
            <div className="icon icon-twitter" />
          </a>
          <a
            href="https://www.instagram.com/moussa.khairy?igsh=MWZvMHZqeWpicmR2OQ=="
            target="_blank"
          >
            <div className="icon icon-instagram" />
          </a>
          <a href="https://github.com/MousaSalib" target="_blank">
            <div className="icon icon-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/mousa-salib-285997223?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
          >
            <div className="icon icon-linkedin-square" />
          </a>
        </div>
      </div>
      <div className="right-section animation">
        <Lottie
          className="animation"
          animationData={developerAnimation}
          onLoadedImages={() => {
            // @ts-ignore
            lottieRef.current.setSpeed(0.5);
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
