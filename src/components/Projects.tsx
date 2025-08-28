import "../styles/projects.css";
import { ProjectsList } from "../models/projects-model";
import { useContext } from "react";
import { LangContext } from "../context/LangContext";

export const Projects = () => {
  const { langState } = useContext(LangContext);

  return (
    <>
      <div className="container title-project" id="projects">
        <h2 className="visualHeadTitle-project">{langState.menu2}</h2>
      </div>
      <div className="container card-content">
        {ProjectsList.map((project, index) => {
          return (
            <div key={index} className="card">
              <div className="graphics">
                <div className="bg">
                  <img
                    src={project.img}
                    className="card-img-top"
                    alt={project.title}
                  />
                </div>
              </div>
              <div className="card-body">
                <div className="info-container">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                </div>
                <div className="tag-container">
                  <div className="tech-tag">
                    {project.tag.map((tag, index) => {
                      return <small key={index}>{tag.title}</small>;
                    })}
                  </div>
                  <div className="url-buttons">
                    <a href={project.url} target="_blank">
                      Visitar sitio web
                    </a>
                    <a href={project.urlGitHub} target="_blank">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
