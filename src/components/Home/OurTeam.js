import React from "react";
import hai from "../../images/hai.jpg";
import hung from "../../images/hung.jpg";

const OurTeam = () => {
  return (
    <>
      <div className="container">
        <div className="welcome text-center padding">
          <h2 className="display-4">Meet the team</h2>
        </div>
      </div>
      {/* <!--- Cards --> */}
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <img className="card-img-top" src={hai} />
            <h4 className="card-title">Hai</h4>
            <p className="card-text">
              Hai is a frontend developer who initialized the idea of the
              application with Hung. During the time of studying algorithm, he
              found it would be beneficial for students if there's application
              supporting algorithm visualization.
            </p>
            <a href="https://www.facebook.com/joehai.joehai">
              <button className="btn btn-outline-secondary">See more</button>
            </a>
          </div>

          <div className="col-sm-6">
            <img className="card-img-top" src={hung} />
            <h4 className="card-title">Hung</h4>
            <p className="card-text">
              Hung is a fullstack developer who has a deep foundation in
              information technology. It's Hung idea to build this project
              aiming at students in information technology
            </p>
            <a href="https://www.facebook.com/hungvd12/timeline?lst=100004667045578%3A100009984438836%3A1586103094">
              <button className="btn btn-outline-secondary">See more</button>
            </a>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default OurTeam;
