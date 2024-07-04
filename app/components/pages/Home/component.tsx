import ProjectTimeLine from "~/components/compound/ProjectTimeLine";
import s from "./styles.module.css";
import About from "../About";
import NavBar from "~/components/base/NavBar/component";
import Links from "~/components/compound/Links/component";
import { Fields } from "./types";

const Component = ({ message, handleClick }: Fields) => {
  return (
    <div className={s.homeContainer} id="about">
      <div className="sticky top-0 z-10">
        <div className="toast toast-top toast-end items-end z-20">
          {message.map((msg, i) => (
            <div key={i} className="alert bg-secondary w-fit">
              <p>{msg}</p>
            </div>
          ))}
        </div>
        <NavBar handleClick={handleClick} />
      </div>

      <div className="pb-20">
        <About />
      </div>

      <div className={s.projectPage} id="projects">
        <div className={s.titleContainer}>
          <p className={s.title}>
            <span className="text-content">Projects</span>
          </p>
        </div>
        <div className="pb-20">
          <ProjectTimeLine />
        </div>
      </div>
      <div id="connect" className="pb-64 pt-64">
        <Links />
      </div>
    </div>
  );
};

export default Component;
