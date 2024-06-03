import Card from "~/components/base/Card/component";
import ProjectTimeLine from "~/components/compound/ProjectTimeLine";

import s from "./styles.module.css";

const Component = () => {
  return (
    <div className={s.homeContainer}>
      <div className={s.cardContainer}>
        <Card
          image="/criderSelfie.PNG"
          text={{ title: "ABOUT", text: "click the button to learn about me" }}
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
        <button className="btn btn-wide">MY WORK</button>
      </div>
      <ProjectTimeLine />
    </div>
  );
};

export default Component;
