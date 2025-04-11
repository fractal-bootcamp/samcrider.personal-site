import Stats from "~/components/base/Stats/component";
import { motion } from "framer-motion";

const Component = () => {
  return (
    <div className="flex flex-col justify-center gap-6">
      <div className="terminal-header text-center mb-8">
        <pre className="text-primary text-xs sm:text-sm md:text-base lg:text-lg inline-block">
          {`  _____ _                 _   __  __      
 / ____| |               | | |  \\/  |     
| (___ | |__   ___  _   _| |_| \\  / | ___ 
 \\___ \\| '_ \\ / _ \\| | | | __| |\\/| |/ _ \\
 ____) | | | | (_) | |_| | |_| |  | |  __/
|_____/|_| |_|\\___/ \\__,_|\\__|_|  |_|\\___|`}
        </pre>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex flex-col flex-1 text-md font-terminal lg:text-xl text-center lg:text-left justify-center px-4 gap-4">
          <div className="terminal-line">
            <span className="text-primary font-bold">$ </span>
            <span className="text-secondary">whoami</span>
            <p className="mt-2 pl-6 text-secondary">
              I graduated from North Carolina State University with highest
              honors in Spring '24. My degree is in Human Biology. Currently, I
              am enrolled in the{" "}
              <a
                className="text-primary underline hover:text-accent"
                target="_blank"
                href="https://fractalbootcamp.com/"
              >
                Fractal Software Engineering Bootcamp
              </a>{" "}
              in Brooklyn, NY. I've been studying CS and writing code since
              2022.
            </p>
          </div>

          <div className="terminal-line mt-4">
            <span className="text-primary font-bold">$ </span>
            <span className="text-secondary">
              grep -i interests /etc/personality
            </span>
            <p className="mt-2 pl-6 text-secondary">
              When I'm not at the computer, I'm likely to be found touching
              grass and sometimes day dreaming about becoming one with the grass
              on a sunny day. Something else I like to do is stretch, as my
              entire body is broken from coding all day.
            </p>
          </div>
        </div>

        <div className={`hidden lg:flex flex-1 justify-center items-center`}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="terminal-frame p-1 border-2 border-primary"
          >
            <div className="terminal-frame-inner border-2 border-primary p-1">
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                src="/criderSelfie.PNG"
                alt="profileImage"
                className="h-64 w-64 grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-6 p-4 border-2 border-primary bg-neutral">
        <div className="terminal-header mb-2">
          <span className="text-primary font-bold">$ </span>
          <span className="text-secondary">./show_stats.sh</span>
        </div>
        <Stats />
      </div>
    </div>
  );
};

export default Component;
