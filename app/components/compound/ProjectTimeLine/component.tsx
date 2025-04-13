import { motion } from "framer-motion";
import { Fields } from "./types";

const Component = ({ projects }: Fields) => {
  return (
    <div className="grid gap-8">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: project.id * 0.1 }}
          className="bg-neutral/60 border border-primary/20 rounded-md overflow-hidden"
        >
          <div className="p-6">
            <h3 className="text-xl font-terminal text-secondary mb-2">
              {project.title} - {project.date}
            </h3>
            <p className="text-secondary/70 mb-4">{project.description}</p>
            <div className="flex space-x-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 bg-primary/20 rounded border border-primary/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-base-100/30 p-4 flex justify-between items-center border-t border-primary/10">
            <a
              href={project.sourceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:text-accent transition-colors font-terminal"
            >
              view-source
            </a>
            {project.demoLink ? (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:text-accent transition-colors font-terminal"
              >
                live-demo
              </a>
            ) : (
              <span className="text-sm text-primary/50 font-terminal">
                live-demo
              </span>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Component;
