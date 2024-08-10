const stats = [
  "TypeScript",
  "Go",
  "React.js",
  "Next.js",
  "Firebase",
  "SCSS",
  "Tailwind",
  "Git",
  "PostgreSQL",
];

const Stats = () => {
  return (
    <div
      className={`stats stats-vertical lg:stats-horizontal mx-6 sm:mx-auto  shadow`}
    >
      <div className="stat text-center ">
        <div className="stat-title">Projects Built</div>
        <div className="stat-value">24</div>
        <div className="stat-desc">Nov '22 - Current</div>
      </div>
      <div className="stat text-center ">
        <div className="stat-title">Companies Built For</div>
        <div className="stat-value">4</div>
        <div className="stat-desc">May '24 - Current</div>
      </div>

      <div className="stat text-center ">
        <div className="stat-title">Avg. Hours Coding</div>
        <div className="stat-value">11</div>
        <div className="stat-desc">per day</div>
      </div>
      <div className="stat max-w-md">
        <div className="stat-title text-center">Skills</div>
        <div className="stat-value flex justify-center flex-wrap gap-2">
          {stats.map((stat, i) => {
            if (i % 2 === 0) {
              return (
                <div key={i} className="badge badge-secondary badge-outline">
                  {stat}
                </div>
              );
            } else {
              return (
                <div key={i} className="badge badge-accent badge-outline">
                  {stat}
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;
