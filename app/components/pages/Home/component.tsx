import Card from "~/components/base/Card/component";
import ProjectTimeLine from "~/components/compound/ProjectTimeLine";
import { Link } from "react-scroll";

import s from "./styles.module.css";

const Component = () => {
  return (
    <div className={s.homeContainer}>
      <div id="topOfPage" className={s.greetPage}>
        <div className={s.cardContainer}>
          <Card
            image="/criderSelfie.PNG"
            text={{
              title: "ABOUT",
              text: "click the button to learn about me",
            }}
            link="/about"
          />
          <Card
            image="/thoughts.png"
            text={{
              title: "THOUGHTS",
              text: "click the button to learn what I think about things",
            }}
            link="/thoughts"
          />
          <Card
            text={{ title: "LINKS", text: "Here I am on the internet" }}
            links={[
              { name: "GitHub", link: "https://github.com/SamuelRCrider" },
              {
                name: "LinkedIn",
                link: "https://www.linkedin.com/in/samuel-crider-7b0695205/",
              },
            ]}
          />
        </div>

        <div className="w-full text-center">
          <Link
            to="projects"
            smooth
            duration={500}
            className="btn btn-wide btn-lg btn-warning text-black"
          >
            MY WORK
          </Link>
        </div>
      </div>

      <div className={s.projectPage}>
        <div className={s.titleContainer}>
          <p className={s.title} id="projects">
            <span className="text-content">Projects</span>
          </p>
        </div>
        <div className="pb-20">
          <ProjectTimeLine />
        </div>
      </div>
      <Link
        to="topOfPage"
        smooth
        duration={500}
        className={`btn btn-medium btn-warning text-black text-6xl ${s.upButton}`}
      >
        ^
      </Link>
    </div>
  );
};

export default Component;
