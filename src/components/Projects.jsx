import { projects } from "../data/data.js";
import "./styles/projects.css";

function Projects() {
  return (
    <>
      <div>
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
      </div>
    </>
  );
}

export default Projects;
