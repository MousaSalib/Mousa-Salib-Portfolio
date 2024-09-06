import "./Footer.css";
const Footer = () => {
  return (
    <footer className="flex">
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
      <p>&copy; 2024 Mousa Salib. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
