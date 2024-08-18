import html from "../assets/img/html.svg";
import css from "../assets/img/css.svg";
import sass from "../assets/img/sass.svg";
import bootstrap from "../assets/img/bootstrap.svg";
import js from "../assets/img/javascript.svg";
import react from "../assets/img/react.svg";
import nodejs from "../assets/img/nodejs.svg";
import mongodb from "../assets/img/mongodb.svg";
import "./styles/tecnologies.css";

function Tecnologies() {
  return (
    <>
      <div className="tec-icon">
        <div>
          <img src={html} className="icon" alt="Logo Html" />
        </div>
        <div>
          <img src={css} className="icon" alt="Logo CSS" />
        </div>
        <div>
          <img src={sass} className="icon" alt="Logo Sass" />
        </div>
        <div>
          <img src={bootstrap} className="icon" alt="Logo Bootstrap" />
        </div>
        <div>
          <img src={js} className="icon" alt="Logo JavaScript" />
        </div>
        <div>
          <img src={react} className="icon" alt="Logo React" />
        </div>
        <div>
          <img src={nodejs} className="icon" alt="Logo NodJS" />
        </div>
        <div>
          <img src={mongodb} className="icon" alt="Logo MongoDB" />
        </div>
      </div>
    </>
  );
}

export default Tecnologies;
