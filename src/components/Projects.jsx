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
                <a key={project.image} target="_blank">
                  <div>
                    <article className="article-items">
                      <div>
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
                          <span className="button">
                            <p>{project.repositorie}</p>
                            <img src={github} className="" alt="Logo GitHub" />
                          </span>
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
