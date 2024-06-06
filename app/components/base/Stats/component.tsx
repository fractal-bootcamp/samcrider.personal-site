import s from "./styles.module.css";

const Stats = () => {
  return (
    <div
      className={`stats stats-vertical lg:stats-horizontal shadow ${s.statsContainer}`}
    >
      <div className="stat">
        <div className="stat-title">Projects Built</div>
        <div className="stat-value">12</div>
        <div className="stat-desc">Nov '22 - Current</div>
      </div>

      <div className="stat">
        <div className="stat-title">Avg. Hours Coding</div>
        <div className="stat-value">10</div>
        <div className="stat-desc">per day</div>
      </div>

      <div className="stat">
        <div className="stat-title">Skills</div>
        <div className="stat-value">1,200,000</div>
        <div className="stat-desc">↘︎ 90 (14%)</div>
      </div>
    </div>
  );
};

export default Stats;
