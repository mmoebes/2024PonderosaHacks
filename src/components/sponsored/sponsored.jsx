import React from "react";
//import { sponserData } from "./data";
//import SponserList from "./SponserList";
import "./sponsored.css";

const Sponsors = () => {
  return (
    <div className="sponsor-section" id="Sponsors">
    <div className="sponsor-head-section">
      <h1 className="heading-tag-line1">Donate/Sponsor</h1>
      <hr className="heading-underline1" />
    </div>
    <div className="sponsor-subsection">
    <div className="sponsor-left-section">
        {/*<h2 className="sponsor-heading">
        We need your help! 
        </h2>*/}
        <h2 className="sponsor-heading">
        This event is being organized by high school students - please support us!
        </h2>
        <p>No donation is too small! We could use help with money, food, supplies, prizes, 
        and/or give-away items. We also have several sponsorship packages available with different benefits, starting 
        with your logo on all our materials to having a representative speak at our opening ceremony 
        or giving out materials. By sponsoring Ponderosa Hacks, you will get your brand in front of 
        60-100 emerging developers and encourage coding + creativity into the future. Plus, marketing 
        exposure to 2000+ students in local Flagstaff High Schools along with their families. This event will also be 
        promoted on social media for all BASIS high schools in Arizona and advertised nationally at Hackclub.com 
        and devpost.com. 
        </p>
        <h2 className="sponsor-heading">
        Contact us at <a href="mailto:ponderosa-hacks@gmail.com?body=My custom mail body">ponderosa-hacks@gmail.com</a>
        </h2>
      </div>
      </div>
  </div>
  );
};
export default Sponsors;
