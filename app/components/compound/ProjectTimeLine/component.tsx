import Project from "~/components/compound/Project/component";
import s from "./styles.module.css";

const Component = () => {
  return (
    <ul
      className={`timeline timeline-snap-icon max-md:timeline-compact timeline-vertical ${s.timeline} ${s.timelineContainer}`}
    >
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
    </ul>
  );
};

export default Component;
