import Stats from "~/components/base/Stats/component";
import s from "./styles.module.css";
import { motion } from "framer-motion";

const Component = () => {
  return (
    <div className={s.topContainer}>
      <div className={s.aboutContainer}>
        <div className={s.paragraphContainer}>
          <p className="text-content">
            I graduated from North Carolina State University with highest honors
            in Spring '24. My degree is in Human Biology. Currently, I am
            enrolled in the{" "}
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
            When I'm not at the computer, I'm likely to be found touching grass
            and sometimes day dreaming about becoming one with the grass on a
            sunny day. Something else I like to do is stretch, as my entire body
            is broken from coding all day.
          </p>
        </div>
        <div className={s.imageDiv}>
          <motion.img
            whileHover={{ scale: 1.065 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            src="/criderSelfie.PNG"
            alt="profileImage"
            className={s.image}
          />
        </div>
      </div>
      <Stats />
    </div>
  );
};

export default Component;
