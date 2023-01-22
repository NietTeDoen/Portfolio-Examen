import React from "react";
import ActVariables from "./Activities";
import AboutCSS from "./About.css";
import ExperienceCSS from './Experience.css';

function Experience() {
  return (
    <div>
      <div className="Experience__Gridbox">
        <div className="Experience__Flexbox">
          <div className="Experience__Item">
            <img className="Experience__Img" src="https://www.freeiconspng.com/uploads/c-logo-icon-18.png" />
          </div>
        </div>
        <div className="About__RightBar">
          <p>Recent Activities</p>
          <ActVariables />
        </div>
      </div>
    </div>
  );
}
export default Experience;
