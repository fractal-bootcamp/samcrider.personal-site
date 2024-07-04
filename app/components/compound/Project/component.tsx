import ProjectCard from "~/components/base/ProjectCard/component";
import { Fields } from "./types";
import { motion } from "framer-motion";

const Project = ({ project }: Fields) => {
  if (project.id % 2 === 0) {
    return (
      <li>
        <hr />
        <div className="timeline-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="h-6 w-6 shrink-0 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <motion.div
          className="timeline-start md:text-end mb-10"
          whileHover={{ scale: 1.225 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <div className="font-mono italic">{project.timelineTitle}</div>
          <ProjectCard project={project} />
        </motion.div>
        <hr />
      </li>
    );
  }
  return (
    <li>
      <hr />
      <div className="timeline-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="h-6 w-6 shrink-0 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </div>
      <motion.div
        className="timeline-end mb-10"
        whileHover={{ scale: 1.225 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <div className="font-mono italic">{project.timelineTitle}</div>
        <ProjectCard project={project} />
      </motion.div>
      <hr />
    </li>
  );
};

export default Project;
