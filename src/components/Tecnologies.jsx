import html from "../assets/img/html.svg";
import css from "../assets/img/css.svg";
import sass from "../assets/img/sass.svg";
import bootstrap from "../assets/img/bootstrap.svg";
import js from "../assets/img/javascript.svg";
import react from "../assets/img/react.svg";
import nodejs from "../assets/img/nodejs.svg";
import mongodb from "../assets/img/mongodb.svg";
import "./styles/tecnologies.css";

const technologies = [
  { name: "HTML5", icon: html, category: "Frontend" },
  { name: "CSS3", icon: css, category: "Frontend" },
  { name: "Sass", icon: sass, category: "Frontend" },
  { name: "Bootstrap", icon: bootstrap, category: "Frontend" },
  { name: "JavaScript", icon: js, category: "Language" },
  { name: "React", icon: react, category: "Frontend" },
  { name: "Node.js", icon: nodejs, category: "Backend" },
  { name: "MongoDB", icon: mongodb, category: "Database" },
];

function Tecnologies() {
  return (
    <div className="tech-container">
      <div className="tech-grid">
        {technologies.map((tech, index) => (
          <div
            key={tech.name}
            className="tech-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="tech-icon-wrapper">
              <img
                src={tech.icon}
                className="tech-icon"
                alt={`${tech.name} logo`}
              />
              <div className="tech-glow"></div>
            </div>
            <span className="tech-name">{tech.name}</span>
            <span className="tech-category">{tech.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tecnologies;
