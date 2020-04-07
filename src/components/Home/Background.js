import background from "../../images/background.jpg";
import background2 from "../../images/background2.jpg";
import background3 from "../../images/background3.png";
import React from 'react';


const Background = () => {
  return (
    <div id="slides" className="carousel slide" data-ride="carousel">
      <ul className="carousel-indicators">
        <li data-target="#slides" data-slide-to="0" className="active"></li>
        <li data-target="#slides" data-slide-to="1"></li>
        <li data-target="#slides" data-slide-to="2"></li>
      </ul>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={background} alt="background" />
          <div className="carousel-caption">
            <h1 className="display-2">Master your algorithm</h1>
            <h3>Completely free for everyone</h3>
          </div>
        </div>
        <div className="carousel-item">
          <img src={background2} alt="background2" />
        </div>
        <div className="carousel-item">
          <img src={background3} alt="background3" />
        </div>
      </div>
    </div>
  );
};

export default Background;
