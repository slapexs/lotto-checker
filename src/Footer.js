import React, { Component } from "react";
import { FaGithub, FaFacebook } from "react-icons/fa";

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="mt-5 text-center">
          <p>
            ขอบคุณ API จาก{" "}
            <a
              href="https://github.com/rayriffy/thai-lotto-api"
              target="_blank"
              className="text-decoration-none"
            >
              <FaGithub /> rayriffy
            </a>{" "}
            | Develop by{" "}
            <a
              href="https://www.facebook.com/tinngritS77/"
              target="_blank"
              className="text-decoration-none"
            >
              <FaFacebook /> onze
            </a>
          </p>
        </div>
      </>
    );
  }
}
