import { motion } from "framer-motion";

const Links = () => {
  return (
    <div className="flex flex-row justify-center">
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <a
          href="https://github.com/SamuelRCrider"
          target="_blank"
          className=" w-96 h-96 rounded-xl flex justify-center items-center font-bold"
        >
          <img src="/github-mark.png" alt="github" className="h-[50%]" />
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
          className="w-96 h-96 flex justify-center items-center font-bold"
        >
          <img src="/linkedin-mark.png" alt="linkedin" className="h-[50%]" />
        </a>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <a
          target="_blank"
          href="mailto:samrobertcrider@gmail.com?subject=Your%20Subject&body=Your%20Message%20Here"
          className="w-96 h-96 flex justify-center items-center font-bold"
        >
          <img src="/gmail-mark.png" alt="gmail" className="h-[45%]" />
        </a>
      </motion.div>
    </div>
  );
};

export default Links;
