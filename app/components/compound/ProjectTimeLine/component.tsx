import Project from "~/components/compound/Project/component";
import s from "./styles.module.css";

const Component = () => {
  return (
    <ul className={`timeline ${s.timeline} ${s.timelineContainer}`}>
      <Project />
      <Project />
    </ul>
  );
};

export default Component;
