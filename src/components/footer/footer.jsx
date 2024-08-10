import React from "react";
import "./footer.css";
import hackathonLogo from "/images/smallhackathon-logo.png";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const footer = () => {
  // get the current year dynamically
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mainContainer" id="Footer">
      
      <div className="contentContainer">
        <div className="logoContent">
          <a href="/">
            <img src={hackathonLogo} alt="Ponderosa Hacks" />
          </a>
        </div>
      {/*  <div className="socialContent">*/}
      {/*    <div className="contentText">*/}
      {/*      <ul className="socialLogo">*/}
      {/*        <li>*/}
      {/*          <a href="/" target="_blank">*/}
      {/*            <BsFacebook />*/}
      {/*          </a>*/}
      {/*        </li>*/}
      {/*        <li>*/}
      {/*          <a href="/" target="_blank">*/}
      {/*            <FaLinkedinIn />*/}
      {/*          </a>*/}
      {/*        </li>*/}
       {/*       <li className="instalogo">*/}
       {/*         <a href="/" target="_blank">*/}
       {/*           <BsInstagram />*/}
       {/*         </a>*/}
        {/*      </li>*/}
        {/*    </ul>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div className="mapContent">*/}
        {/*    <iframe title="address"*/}
        {/*        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.8324128287754!2d88.41251337500026!3d22.510470079535967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0273f14bca0c15%3A0xbd1ef59baa5eafd0!2sMeghnad%20Saha%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1687704258834!5m2!1sen!2sin"*/}
        {/*        allowFullScreen="" loading="lazy"*/}
        {/*        referrerPolicy="no-referrer-when-downgrade"></iframe>*/}
        {/*</div>*/}
      </div>
      <div className="copyContainer">
        <p>
          <span>©</span> {currentYear} PONDEROSA HACKS.<span> Fiscally sponsored by The Hack Foundation. Nonprofit EIN: 81-2908499.</span>
        </p>
      </div>
    </footer>
  );
};

export default footer;
