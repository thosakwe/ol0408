import React from "react";
import { Link } from "react-router-dom";
import logoPng from "../assets/logo.png";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { burger: false };
  }

  render() {
    return (
      <nav
        className="navbar is-primary"
        role="navigation"
        aria-label="main navigation"
        style={{ backgroundColor: "transparent" }}
      >
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src={logoPng} width="112" height="28" />
          </Link>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={() => this.setState({ burger: !this.state.burger })}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div
          className={"navbar-menu" + (this.state.burger ? " is-active" : "")}
        >
          <div className="navbar-start">
            <Link className="navbar-item" to="/mls">
              MLS
            </Link>

            <Link className="navbar-item" to="/global_cafe">
              Global Cafe
            </Link>

            <Link className="navbar-item" to="/what_the_x">
              What the X
            </Link>

            <Link className="navbar-item" to="/abilities">
              Different Abilities
            </Link>

            <Link className="navbar-item" to="/wheel">
              Identity Wheels
            </Link>

            <Link className="navbar-item" to="/responsibility">
              My Responsibility
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Github</strong>
                </a>
                <a className="button is-light">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
