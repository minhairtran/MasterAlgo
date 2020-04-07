import React from "react";
import about from "../../images/about.jpeg";

import "../../style.css";

const About = () => {
  return (
    <div className="container">
      <div className="row padding ">
        <div className="col-sm-12 col-lg-8">
          <h2>About the project</h2>
          <p>
            MasterAlgo is a project targeting at students in Information
            Technology
          </p>
          <p>
            As algorithm keeps being more concerned by IT company, IT students
            pay more time studying the complex algorithm or solving practical
            problems given by leetcode, etc... But it might be struggling when
            it comes to imagine how a certain algorithm runs behind the scene.
            That's why in this project, we attempt to handle this issue for a
            fast and forward learning algorithm effort of students.
          </p>
          <p>
            In this project, we provide the visualization and programming
            practice environment for algorithms such as ....
          </p>
        </div>
        <div className="col-sm-12 col-lg-4">
          <img src={about} alt="desk" className="img-fluid" />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default About;
