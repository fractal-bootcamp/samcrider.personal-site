import Stats from "~/components/base/Stats/component";
import s from "./styles.module.css";

const Component = () => {
  return (
    <div className={s.topContainer}>
      <div className={s.titleContainer}>
        <p className={s.title} id="projects">
          <span className="text-content">HEY! GREAT TO MEET YOU.</span>
        </p>
        <a
          href="/"
          className={`btn btn-medium btn-warning text-content ${s.link}`}
        >
          HOME
        </a>
      </div>
      <div className={s.aboutContainer}>
        <div className={s.paragraphContainer}>
          <p className="text-content">
            I graduated from North Carolina State University with honors in
            Spring '24. My degree is in Human Biology. Currently, I am enrolled
            in the{" "}
            <a
              className="text-accent"
              target="_blank"
              href="https://fractalbootcamp.com/"
            >
              Fractal Software Engineering Bootcamp
            </a>{" "}
            in Brooklyn, NY. I've been studing CS and writing code since 2022.
          </p>
          <p className="text-content">
            When I'm not in at the computer, I'm likely to be found touching
            grass and sometimes day dreaming about becoming one with the grass
            on a sunny day. Something else I like to do is stretch, as my entire
            body is broken from coding all day.
          </p>
        </div>
        <div className={s.imageDiv}>
          <img src="/criderSelfie.PNG" alt="profileImage" className={s.image} />
        </div>
      </div>
      <Stats />
    </div>
  );
};

export default Component;
