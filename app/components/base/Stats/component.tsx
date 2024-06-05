import s from "./styles.module.css";

const Stats = () => {
  return (
    <div
      className={`stats stats-vertical lg:stats-horizontal shadow ${s.statsContainer}`}
    >
      <div className="stat">
        <div className="stat-title">Projects Built</div>
        <div className="stat-value">31K</div>
        <div className="stat-desc">Jan 1st - Feb 1st</div>
      </div>

      <div className="stat">
        <div className="stat-title">Avg. Hours Coding</div>
        <div className="stat-value">10</div>
        <div className="stat-desc">per day</div>
      </div>

      <div className="stat">
        <div className="stat-title">Undecided Stat</div>
        <div className="stat-value">1,200,000</div>
        <div className="stat-desc">↘︎ 90 (14%)</div>
      </div>
    </div>
  );
};

export default Stats;
