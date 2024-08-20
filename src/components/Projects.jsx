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
                <div
                  className="card"
                  key={project.image}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <article className="article-items">
                      <div href={project.www} target="_blank">
                        <img
                          href={project.www}
                          src={project.image}
                          className="link"
                          alt="photo"
                          target="_blank"
                        />
                      </div>
                      <div>
                        <h2>{project.title}</h2>
                        <h3>{project.subtitle}</h3>
                        <p>{project.description}</p>
                        <h3>Tecnologies </h3>
                        <p>{project.tecnologies}</p>
                        <h3> - www - </h3>
                        <a href={project.www} target="_blank">
                          {" "}
                          <p href="" target className="link">
                            {project.www}
                          </p>
                        </a>
                        <h3>Github </h3>
                        <div
                          href={project.repositorie}
                          className="button-container"
                        >
                          <Button
                            href={project.repositorie}
                            target="_blanc"
                            className=" link"
                          >
                            <img
                              src={github}
                              className="button "
                              alt="Logo GitHub"
                            />
                          </Button>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Projects;
