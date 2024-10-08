import React from "react";
import "./about.css";
import prizes from "/images/prizes.png";

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="about-head-section">
       {/*} <h1 className="heading-tag-line3">About</h1>
        <hr className="heading-underline3" />*/}
        <h1 className="about-heading2">FREE Registration: Win PRIZES + get FREE stuff!</h1>
        <h1 className="about-heading2">Limited Spots - Register Now!</h1>    
        
      </div>
      <h1 className="heading-tag-line3">About</h1>
      <hr className="heading-underline3" />
      <div className="about-subsection" id="About">

        <div className="about-left-section">
          <h2 className="about-heading">
          What is a Hackathon? 
          </h2>
          <p>
          Whether you are into Computer Science, Engineering, Art, Medicine, or anything else, a hackathon is for you! 
          It's an opportunity to create innovative solutions to challenging problems. While we will not likely find THE solution 
          to a global problem such as world hunger, water pollution, or accessibility barriers, we can workshop creative ideas 
          that may one day contribute to actual solutions. With hours 
          to brainstorm, create, and model, you will present your project to a panel of judges for a chance to win 
          cool prizes. During the day, we will provide food, snacks, activities to earn prizes, skills workshops to help 
          with your project, and free goodies from our sponsors.

          </p>
          <p>
            Even though our event is called a hackathon, your brain is the only thing you'll be hacking. 
            If you can code, feel free to write programs or program a solution for your project. And if you can't code, don't worry! 
            You'll be at no disadvantage. You can utilize any of your skills or passions to create
            your project. You can make a prototype of a physical device, build a website (we'll have a workshop teaching you 
            how), a game, or anything you can think of. We'll have volunteers and people knowledgeable in engineering, 
            computer science, and other topics to help you with your project. Come with a team or find one at the event. 
          </p>
          <p>Everything begins with an IDEA.</p>
          <h2 className="about-heading">
          A sneak peak at our prizes...
          </h2>
              <a href="/">
                    <img src={prizes} alt="Prizes" class="responsive2"/>
              </a>
        </div>

      </div>
      
    </div>
    
  );
};

export default AboutSection;
