import React from "react";
import SubmitFormCSS from "./SubmitForm.css";
import ActVariables from "./Activities";
import AboutCSS from "./About.css";

function SubmitForm() {
  return (
    <div>
      <div className="Form__Gridbox">
        <div className="Form__Info">
        <div className="Form__Info__Text">
          <h1>Contact Me</h1>
          <p>
            need to get in touch with me in a fast and reliable way? send a
            message and I'll get back to you ASAP
          </p>
        </div>
          <input className="Form__Info__Name" placeholder="Name"></input>
          <input className="Form__Info__Email" placeholder="Email"></input>
          <textarea
            className="Form__Info__MSG"
            placeholder="Message"
          ></textarea>
          <button className="Form__Info__Submit">Submit</button>
        </div>
      </div>
    </div>
  );
}
export default SubmitForm;
