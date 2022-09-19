import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <>
        <footer>
          <div className="code">
            <a href="https://github.com/rush-tea/Covid19Tracker">
              {" "}
              <div>
                {" "}
                <i className="fa fa-code" aria-hidden="true"></i>
                <p>Contribute to this site</p>{" "}
              </div>
            </a>
            <a href="https://api.covid19india.org/">
              {" "}
              <div>
                <i className="fa fa-database" aria-hidden="true"></i>
                <p>API</p>
              </div>{" "}
            </a>
          </div>
          <div className="salutation">
            <p>Stay Home, Stay Safe</p>
          </div>
          <div className="contact">
            <div>
              {" "}
              <a href="https://github.com/vaibhavgupta04">
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
            </div>
            <div>
              {" "}
              <a href="https://www.linkedin.com/in/vaibhav-04/">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </div>
            <div>
              {" "}
              <a href="https://www.instagram.com/vaibhav.gupta3659/">
                {" "}
                <i className="fa fa-instagram" aria-hidden="true"></i>{" "}
              </a>{" "}
            </div>
            <div>
              {" "}
              <a href="https://www.facebook.com/vaibhav.gupta.90260/">
                {" "}
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
export default Footer;
