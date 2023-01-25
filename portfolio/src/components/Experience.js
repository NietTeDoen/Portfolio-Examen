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
            <div>
            <img className="Experience__Img" src="https://www.freeiconspng.com/uploads/c-logo-icon-18.png" />
            <p>I have 5 years of experience with c#.</p>
            </div>
          </div>
          <div className="Experience__Item">
            <div>
            <img className="Experience__Img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" />
            <p>I have 1 year of Experience with React.js</p>
            </div>
          </div>
          <div className="Experience__Item">
            <div>
            <img className="Experience__Img" src="https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png" />
            <p>I have 2 years of experience with Java</p>
            </div>
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
