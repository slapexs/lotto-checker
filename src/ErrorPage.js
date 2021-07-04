import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import errorImg from "./pixeltrue-error-1.svg";
import "./App.css";
import maintenanceImg from './pixeltrue-web-development-1.svg'

export default class ErrorPage extends Component {
  render() {
    return (
      <div className="container text-center vh-100 d-flex flex-column align-items-center justify-content-center">
        <div className=" ">
          <img src={maintenanceImg} className="img-fluid width50" />
          <h1 className="mb-0">ขออภัย เว็บไซต์กำลังอยู่ในช่วงปรับปรุง </h1>
        </div>
      </div>
    );
  }
}
