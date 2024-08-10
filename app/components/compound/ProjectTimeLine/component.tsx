import Project from "~/components/compound/Project/component";
import s from "./styles.module.css";
import { Fields } from "./types";

const Component = ({ projects }: Fields) => {
  return (
    <ul
      className={`timeline timeline-snap-icon max-md:timeline-compact items-center timeline-vertical ${s.timeline} ${s.timelineContainer}`}
    >
      {projects.map((project) => {
        // handleTimelineFlip();
        return <Project key={project.id} project={project} />;
      })}
    </ul>
  );
};

export default Component;
