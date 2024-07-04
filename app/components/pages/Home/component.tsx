import ProjectTimeLine from "~/components/compound/ProjectTimeLine";
import s from "./styles.module.css";
import About from "../About";
import NavBar from "~/components/base/NavBar/component";
import Links from "~/components/compound/Links/component";
import { useEffect, useState } from "react";

const Component = () => {
  const [message, setMessage] = useState<string[]>([]);
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    if (message.length > 0) {
      const timeout = setTimeout(() => {
        setMessage((prev) => prev.slice(1));
      }, 2500);

      return () => clearTimeout(timeout);
    }
  }, [message]);

  const handleClick = () => {
    switch (counter) {
      case 0:
        setMessage((prev) => [
          ...prev,
          "I have no idea what you're trying to do, don't click that.",
        ]);

        setCounter(1);

        break;
      case 1:
        setMessage((prev) => [
          ...prev,
          "Seriously, that button is off limits.",
        ]);
        setCounter(2);
        break;

      case 2:
        setMessage((prev) => [...prev, "Nope, still off limits."]);
        setCounter(3);
        break;

      case 3:
        setMessage((prev) => [
          ...prev,
          "By the way, have you found the secret modal yet?",
        ]);
        setCounter(0);
        break;

      default:
        setMessage([]);
        setCounter(0);
    }
  };

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
