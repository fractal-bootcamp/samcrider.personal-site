import Project from "~/components/base/Project/component";
import s from "./styles.module.css";

const Component = () => {
  return (
    <ul className={`timeline ${s.timelineContainer}`}>
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
    </ul>
  );
};

export default Component;
