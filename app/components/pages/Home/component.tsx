import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Fields } from "./types";
import Projects from "~/components/compound/ProjectTimeLine";
import Links from "~/components/compound/Links/component";
import { useEffect, useState } from "react";

const Component = ({ message, handleClick }: Fields) => {
  const [typingMessage, setTypingMessage] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore modifier keys and function keys
      if (
        e.ctrlKey ||
        e.altKey ||
        e.metaKey ||
        (e.key.length > 1 && e.key !== "Backspace")
      ) {
        return;
      }

      setTypingMessage("lol stop it, you can't type here.");

      // Clear the message after 3 seconds
      setTimeout(() => {
        setTypingMessage(null);
      }, 3000);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-base-100 relative">
      {/* Notification Toast */}
      <div className="toast toast-top toast-end items-end z-20 pt-20">
        {message.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="alert bg-neutral shadow-lg border border-primary/30 text-secondary"
          >
            <span className="font-terminal">$ {msg}</span>
          </motion.div>
        ))}
      </div>

      {/* Navbar */}
      <header className="fixed top-0 w-full z-10 backdrop-blur-md bg-neutral/70 border-b border-primary/20">
        <nav className="container mx-auto py-4 px-6 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-terminal text-xl"
          >
            sam@crider:~$
          </motion.div>
          <ul className="flex space-x-8">
            {["about", "projects", "connect"].map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="text-secondary hover:text-primary cursor-pointer transition-colors font-terminal text-sm uppercase tracking-wider"
                  onClick={() => handleClick()}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex-grow flex flex-col justify-center items-center py-24 px-6"
      >
        <div className="max-w-4xl w-full mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="glass-card bg-neutral/70 backdrop-blur-sm p-8 border border-primary/30 shadow-lg"
          >
            <div className="flex items-center border-b border-primary/20 pb-4 mb-6">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-error"></div>
                <div className="w-3 h-3 rounded-full bg-warning"></div>
                <div className="w-3 h-3 rounded-full bg-success"></div>
              </div>
              <div className="ml-4 font-terminal text-sm text-secondary/70">
                terminal — sam@crider
              </div>
            </div>

            <div className="font-terminal">
              <div className="mb-4">
                <span className="text-primary">$ </span>
                <span className="typing-effect animate-text-glow">whoami</span>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="pl-4 mb-6"
              >
                <p className="mb-2">SAM CRIDER</p>
                <p className="text-secondary/70 mb-4">
                  Engineer | Cool Guy | Lasagna Enthusiast
                </p>
                <p className="text-sm leading-relaxed">
                  When I'm not at the computer, I'm likely to be found touching
                  grass and sometimes day dreaming about becoming one with the
                  grass on a sunny day. Something else I like to do is stretch,
                  as my entire body is broken from coding all day.
                </p>
              </motion.div>

              <div className="mb-4">
                <span className="text-primary">$ </span>
                <span>cat skills.txt</span>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="pl-4 mb-6"
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    "Golang",
                    "TypeScript",
                    "React",
                    "AWS",
                    "Python",
                    "SQL",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="bg-neutral/50 px-3 py-1 rounded border border-primary/20 text-sm"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>

              <div>
                <span className="text-primary">$ </span>
                {typingMessage ? (
                  <span className="text-warning">{typingMessage}</span>
                ) : (
                  <span className="animate-terminal-blink">_</span>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-base-100">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-terminal text-primary mb-8 border-b border-primary/20 pb-2"
          >
            $ projects --list
          </motion.h2>

          <Projects />
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="py-20 px-6 bg-neutral/30">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-terminal text-primary mb-8 border-b border-primary/20 pb-2"
          >
            $ connect --with-me
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <Links />

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card bg-base-100/40 backdrop-blur-sm p-6 border border-primary/20"
            >
              <h3 className="font-terminal text-xl mb-4">Send a Message</h3>
              <div className="font-terminal mb-4">
                <span className="text-primary">$ </span>
                <span>echo "Your message" &gt; contact.txt</span>
              </div>
              <div className="flex flex-col space-y-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="bg-neutral/50 border border-primary/30 px-4 py-2 text-secondary focus:outline-none focus:border-primary"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-neutral/50 border border-primary/30 px-4 py-2 text-secondary focus:outline-none focus:border-primary"
                />
                <textarea
                  rows={3}
                  placeholder="Your message"
                  className="bg-neutral/50 border border-primary/30 px-4 py-2 text-secondary focus:outline-none focus:border-primary"
                />
                <button className="bg-primary hover:bg-primary/80 text-base-100 py-2 px-4 font-terminal transition-colors">
                  SEND
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 bg-neutral border-t border-primary/20">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div className="text-sm text-secondary/70 font-terminal">
            <span className="text-primary">$ </span>
            echo "© $(date +%Y) Sam Crider"
          </div>
          <div className="text-sm text-secondary/70">
            Made with <span>&hearts;</span> and code
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Component;
