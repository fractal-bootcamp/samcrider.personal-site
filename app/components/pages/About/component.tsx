const Component = () => {
  return (
    <div>
      <div>HELLO! GREAT TO MEET YOU.</div>
      <div>
        <img src="" alt="" />
        <div>
          <p>
            I graduated from North Carolina State University with honors in
            Spring '24. My degree is in Human Biology. Currently I am enrolled
            in the Fractal Software Engineering Bootcamp in Brooklyn, NY. I've
            been studing CS and writing code since 2022.
          </p>
          <p>
            When I'm not in at the computer, I am ususally stretching as my
            entire body is broken for coding all day. Otherwise I'm likely to be
            found touching grass and sometimes day dreaming about becoming one
            with the grass on a sunny day.
          </p>
        </div>
      </div>
      <div className="stats stats-vertical lg:stats-horizontal shadow">
        <div className="stat">
          <div className="stat-title">Downloads</div>
          <div className="stat-value">31K</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-title">New Users</div>
          <div className="stat-value">4,200</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-title">New Registers</div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default Component;
