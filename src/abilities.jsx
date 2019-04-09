import React from "react";
import Crumb from "./crumb";
import mlsJpg from "../assets/mls.jpg";

export default () => {
  return (
    <div>
      <section
        className="hero is-fullheight is-dark has-text-centered"
        style={{
          backgroundImage: `url('${mlsJpg}')`,
          backgroundSize: "cover"
        }}
      >
        <Crumb />
        <div className="hero-body">
          <div className="container">
            <div className="title">Different Abilities</div>
            <div className="subtitle">I blah blah blah...</div>
          </div>
        </div>
      </section>
    </div>
  );
};
