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
    <div className="font-terminal">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="terminal-stat border-2 border-primary p-4 bg-neutral text-center">
          <div className="text-primary text-sm mb-1">
            $ cat projects_count.txt
          </div>
          <div className="text-secondary text-3xl font-bold">24</div>
          <div className="text-primary text-sm mt-1">Nov '22 - Current</div>
        </div>

        <div className="terminal-stat border-2 border-primary p-4 bg-neutral text-center">
          <div className="text-primary text-sm mb-1">
            $ cat companies_built_for.txt
          </div>
          <div className="text-secondary text-3xl font-bold">4</div>
          <div className="text-primary text-sm mt-1">May '24 - Current</div>
        </div>

        <div className="terminal-stat border-2 border-primary p-4 bg-neutral text-center">
          <div className="text-primary text-sm mb-1">
            $ cat avg_coding_hours.txt
          </div>
          <div className="text-secondary text-3xl font-bold">11</div>
          <div className="text-primary text-sm mt-1">per day</div>
        </div>
      </div>

      <div className="terminal-skills border-2 border-primary p-4 bg-neutral">
        <div className="text-primary text-sm mb-2">
          $ ls -la /usr/local/skills/
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`px-3 py-1 border-2 ${
                i % 2 === 0
                  ? "border-primary text-secondary"
                  : "border-secondary text-primary"
              } text-sm inline-block`}
            >
              {stat}
              {i % 2 === 0 ? ".exe" : ".sh"}
            </div>
          ))}
        </div>
      </div>

      <div className="text-xs text-primary mt-4 text-center animate-pulse">
        <code>[System Status: ONLINE] [Memory: 640K] [CPU: 75MHz]</code>
      </div>
    </div>
  );
};

export default Stats;
