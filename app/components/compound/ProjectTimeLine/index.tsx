import Component from "./component";
import { useTimeLineData } from "./data";

const ProjectTimeLine = () => {
  const { projects } = useTimeLineData();
  return <Component projects={projects} />;
};

export default ProjectTimeLine;
