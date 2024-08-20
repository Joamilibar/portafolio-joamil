import { projects } from "../data/data.js";
import "./styles/projects.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import github from "../assets/img/github.svg";

function Projects() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="project">
              {projects.map((project) => (
                <a key={project.image}>
                  <div>
                    <article className="article-items">
                      <div>
                        <img
                          href={project.www}
                          src={project.image}
                          className="link"
                          alt="photo"
                        />
                      </div>
                      <div>
                        <h2>{project.title}</h2>
                        <h3>{project.subtitle}</h3>
                        <p>{project.description}</p>
                        <h3>Tecnologies </h3>
                        <p>{project.tecnologies}</p>
                        <h3> - www - </h3>
                        <p href={project.www} className="link">
                          {project.www}
                        </p>
                        <h3>Github </h3>
                        <div className="button-container">
                          <img
                            src={github}
                            className="button link"
                            alt="Logo GitHub"
                          />
                        </div>
                      </div>
                    </article>
                  </div>
                </a>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Projects;
