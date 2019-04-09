import React from "react";
import { Link } from "react-router-dom";
import logoPng from "../assets/logo.png";

export default () => {
  return (
    <section className="hero is-white is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="title">
            <img src={logoPng} alt="#OL19" />
          </div>
          <div className="title">Journey Project #2</div>
          <div className="subtitle">
            By Tobe Osakwe, a 2019 FSU Orientation Leader
          </div>
          <Link to="/mls">
            <div className="button is-medium is-primary">
              Begin Journey &raquo;
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
