import React from "react";
import { Row } from "react-bootstrap";
import '../../css/Ground.css';

export default function GroundTruth() {
  return (
    <div className="ground__container mt-5">
      <Row>
        <div className="col-md-6 col-sm-12">
          <h1 className="ground__h1">GROUND-TRUTH DATA EVERYONE TRUSTS</h1>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="ground__text">
            We have combined the best-of-breed technology platforms with an eye
            towards relieving you of administrative burden. Matterport 3D scans
            augmented by TrueSketch PLUS are used to generate consistent
            Xactimate sheets that are delivered in accord with Actionable
            Insights compliance rule sets. Each mpartial is produced with full
            transparency, unprecedented forensic photography, and infallible
            geospatial data that collectively result in rapid approvals.
          </div>
        </div>
      </Row>
    </div>
  );
}
