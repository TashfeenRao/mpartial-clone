import React from "react";
import { Button } from "react-bootstrap";
import "../../css/HowItWork.css";

export default function HowItWork() {
  return (
    <div className="container-fluid howit__container mt-5">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1 className="display-3">How It Works</h1>
        </div>
        <div className="col-md-4">
          <div className="d-flex align-items-center ">
            <h1 className="howit__1 display-1 font-weight-bold">1</h1>
            <p>
              Perform pre-mitigation and post-mitigation scans with a Matterport
              Pro Series camera.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="d-flex align-items-center ">
            <h1 className="howit__1 display-1 font-weight-bold">2</h1>
            <p>
              Perform pre-mitigation and post-mitigation scans with a Matterport
              Pro Series camera.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="d-flex align-items-center ">
            <h1 className="howit__1 display-1 font-weight-bold">3</h1>
            <p>
              Perform pre-mitigation and post-mitigation scans with a Matterport
              Pro Series camera.
            </p>
          </div>
        </div>
        <div className="col-md-12 text-center mt-5">
          <Button className="Compare__btn">Get Started</Button>
        </div>
      </div>
    </div>
  );
}
