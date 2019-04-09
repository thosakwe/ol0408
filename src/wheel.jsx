import React from "react";
import Crumb from "./crumb";
import wheelStillJpg from "../assets/wheel_still.jpg";
import wheelPdf from "../assets/wheel.pdf";

export default () => {
  return (
    <div>
      <section
        className="hero is-medium is-dark has-text-centered"
        style={{
          backgroundImage: `url('${wheelStillJpg}')`,
          backgroundSize: "cover"
        }}
      >
        <Crumb />
        <div className="hero-body">
          <div className="container">
            <div className="title">Personal/Social Identity Wheels</div>
            <div className="subtitle">
              I completed the Personal and Social Identity wheels to better
              understand my own identity.
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <a href={wheelPdf}>Click here</a> to download my identity wheels.
        </div>
      </section>
    </div>
  );
};
