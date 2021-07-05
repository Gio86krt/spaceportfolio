import React from "react";

import "./style.css";
import resume from "./resume.pdf";

function Header() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "#303B37" }}
      >
        <div className="container-fluid mb-3">
          <div className="myName">
            <div className="navbar-brand name">Giovanni Orlando</div>
            <p class="tiny">Web Developer</p>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="container links">
            <a href="https://www.linkedin.com/in/giovanni-orlando-a902a472/">
              <i
                className="fa fa-linkedin-square"
                style={{ fontSize: "48px", color: "green" }}
              ></i>
            </a>
            <a href="https://github.com/Gio86krt">
              <i
                class="fa fa-github"
                style={{ fontSize: "48px", color: "white" }}
              ></i>
            </a>
            <a href={window.location.origin + resume} download>
              <i
                class="fa fa-download"
                style={{ fontSize: "48px", color: "red" }}
              ></i>
            </a>
            <a href={"mailto:webdevgiova86@gmail.com"}>
              <i
                class="fa fa-envelope-o"
                aria-hidden="true"
                style={{ fontSize: "48px", color: "whitesmoke" }}
              ></i>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
