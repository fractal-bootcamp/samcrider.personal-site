import Project from "~/components/compound/Project/component";
import s from "./styles.module.css";
import { Fields } from "./types";

const Component = ({ projects }: Fields) => {
  return (
    <ul
      className={`timeline timeline-snap-icon max-md:timeline-compact timeline-vertical ${s.timeline} ${s.timelineContainer}`}
    >
      {projects.map((project) => {
        return <Project project={project} />;
      })}
    </ul>
  );
};

export default Component;
