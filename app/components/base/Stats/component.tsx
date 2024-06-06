import s from "./styles.module.css";

const stats = [
  "React.js",
  "Python",
  "TypeScript",
  "Prisma",
  "PostgreSQL",
  "Next.js",
  "CSS",
  "Tailwind",
  "SCSS",
  "Git",
  "Netlify",
  "Firebase",
];

const Stats = () => {
  return (
    <div
      className={`stats stats-vertical lg:stats-horizontal shadow ${s.statsContainer}`}
    >
      <div className="stat w-[250px]">
        <div className="stat-title">Projects Built</div>
        <div className="stat-value">12</div>
        <div className="stat-desc">Nov '22 - Current</div>
      </div>

      <div className="stat w-[250px]">
        <div className="stat-title">Avg. Hours Coding</div>
        <div className="stat-value">11</div>
        <div className="stat-desc">per day</div>
      </div>

      <div className="stat">
        <div className="stat-title">Skills</div>
        <div className="stat-value flex flex-wrap gap-2">
          {stats.map((stat, i) => {
            if (i % 2 === 0) {
              return (
                <div key={i} className="badge badge-secondary badge-outline">
                  {stat}
                </div>
              );
            }

            return (
              <div key={i} className="badge badge-accent badge-outline">
                {stat}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;
