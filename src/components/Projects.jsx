import { projects } from "../data/data.js";
import "./styles/projects.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Projects() {
  return (
    <>
      {/* <div>
        <section className="section-body">
          <div>
            <div className="project">
              {projects.map((project) => (
                <a href={project.link} key={project.image} className="">
                  <div>
                    <article className="article-items">
                      <div>
                        <div>
                          <img src={project.image} className="" alt="photo" />
                        </div>
                        <h2>Title: {project.title}</h2>
                        <h3>Subtitle: {project.subtitle}</h3>
                        <p>Description: {project.description}</p>
                        <h3>Tecnologies: {project.tecnologies}</h3>
                        <h3>Repositorie: {project.repositorie}</h3>
                        <h3>www: {project.www}</h3>
                      </div>
                    </article>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div></div>
          <div></div>
        </section>
      </div> */}
      <Container>
        <Row>
          <Col>
            <div className="project">
              {projects.map((project) => (
                <a href={project.www} key={project.image} className="">
                  <div>
                    <article className="article-items">
                      <div>
                        <div>
                          <img src={project.image} className="" alt="photo" />
                        </div>
                        <div>
                          <h2>Title: {project.title}</h2>
                          <h3>{project.subtitle}</h3>
                          <p>Description: {project.description}</p>
                          <h3>Tecnologies: </h3>
                          <p>{project.tecnologies}</p>
                          <h3>Repositorie: </h3>
                          <p>{project.repositorie}</p>
                          <h3>www: {project.www}</h3>
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
