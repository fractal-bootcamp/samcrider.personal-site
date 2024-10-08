import { motion } from "framer-motion";

const Links = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-20 lg:gap-5">
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <a
          href="https://github.com/SamuelRCrider"
          target="_blank"
          className="w-96 rounded-xl flex justify-center items-center font-bold"
        >
          <img
            src="/github-mark.png"
            alt="github"
            className="h-48 lg:h-[240px]"
          />
        </a>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <a
          target="_blank"
          href="https://www.linkedin.com/in/samuel-crider-7b0695205/"
          className="w-96 flex justify-center items-center font-bold"
        >
          <img
            src="/linkedin-mark.png"
            alt="linkedin"
            className="h-44 lg:h-56"
          />
        </a>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <a
          target="_blank"
          // href="mailto:samrobertcrider@gmail.com?subject=Your%20Subject&body=Your%20Message%20Here"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=samrobertcrider@gmail.com"
          className="w-96 flex justify-center items-center font-bold"
        >
          <img src="/gmail-mark.png" alt="gmail" className="h-36 lg:h-52" />
        </a>
      </motion.div>
    </div>
  );
};

export default Links;
