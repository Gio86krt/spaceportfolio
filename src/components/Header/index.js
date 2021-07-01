import { NavLink, BrowserRouter } from "react-router-dom";
import React from "react";
import projects from "../../Utils/GlobalStorage";
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
            <NavLink to="/" className="navbar-brand name">
              Giovanni Orlando
            </NavLink>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/about"
                >
                  Home
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li> */}
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  My Work
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink className="dropdown-item" to="/portfolio">
                      Show all
                    </NavLink>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    {projects.map((el) => {
                      return (
                        <NavLink
                          className="dropdown-item"
                          target="_blank"
                          to={el.url.slice(el.url.indexOf("/"))}
                        >
                          {el.name}
                        </NavLink>
                      );
                    })}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="container">
            <div className="links">
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
        </div>
      </nav>
    </div>
  );
}

export default Header;
