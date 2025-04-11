import Component from "./component";
import { useTimeLineData } from "./data";

const Projects = () => {
  const { projects } = useTimeLineData();
  return <Component projects={projects} />;
};

export default Projects;
