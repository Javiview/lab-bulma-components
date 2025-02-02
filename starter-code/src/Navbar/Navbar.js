import React, { Component } from "react";
import "bulma/css/bulma.css";

export default class Navbar extends Component {
  render() {
    return (
      <header>
        <nav className="navbar is-transparent">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <img
                src="https://bulma.io/images/bulma-logo.png"
                alt="Bulma: a modern CSS framework based on Flexbox"
                width="112"
                height="28"
              />
            </a>
            <div
              className="navbar-burger burger"
              data-target="navbarExampleTransparentExample"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="navbarExampleTransparentExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item" href="/">
                Home
              </a>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="field is-grouped">
                  <p className="control">
                    <a
                      className="bd-tw-button button"
                      data-social-network="Twitter"
                      data-social-action="tweet"
                      data-social-target="https://bulma.io"
                      target="_blank"
                      href="/login"
                    >
                      <span className="icon">
                        <i className="fab fa-twitter"></i>
                      </span>
                      <span>Login</span>
                    </a>
                  </p>
                  <p className="control">
                    <a
                      className="button is-primary"
                      href="https://github.com/jgthms/bulma/releases/download/0.8.0/bulma-0.8.0.zip"
                    >
                      <span className="icon">
                        <i className="fas fa-download"></i>
                      </span>
                      <span>Signup</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
