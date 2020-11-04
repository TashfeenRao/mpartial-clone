import React from 'react'
import '../../css/Footer.css'
import ic1 from '../../images/facebook.png'
import ic2 from '../../images/linkedin.png'
import ic3 from '../../images/instagram.png'

export default function Footer() {
  return (
    <footer className="container-fluid footer__container">
      <div className="row">
        <div className="col-md-12 col-lg-6">
          <p className="footer__text">
            mpartial, a 4D Schematics Company. Copyright 2020 all rights
            reserved.
          </p>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className="footer__social">
            <img src={ic1} alt="" />
            <img src={ic2} alt="" />
            <img src={ic3} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}
