import { Fields } from "./types";

const ProjectCard = ({ project }: Fields) => {
  return (
    <div className="card z-0 w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img src={project.projectImage} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{project.projectTitle}</h2>
        <p>{project.projectDescription}</p>
        <div className="card-actions justify-end">
          <a
            className="btn btn-accent"
            href={project.projectLink}
            target="_blank"
          >
            Live Preview
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
