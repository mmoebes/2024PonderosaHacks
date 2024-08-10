import React from "react";
import "../Home/home.css";
import "./judges.css";
import { cardData } from "./data";
import ReactCardCarousel from "react-card-carousel";

const Judges = () => {
  const CONTAINER_STYLE = {
    position: "relative",
    height: "100vh",
    width: "100%",
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    margin: "5px",
  };

  const CARD_STYLE = {
    height: "300px",
    width: "300px",
    textAlign: "center",
    background: "#eee",
    color: "#000",
    fontFamily: "sans-serif",
    fontSize: "14px",
    textTransform: "uppercase",
    borderRadius: "3px",
    margin: "0 200px",
    boxSizing: "border-box",
  };

  // Array of card data

  return (
    <div>
      <div className="about-head-section">
        <h1 className="heading-tag-line">Judges</h1>
        <hr className="heading-underline" />
      </div>
      <div style={CONTAINER_STYLE}>
        <ReactCardCarousel
          autoplay={true}
          autoplay_speed={2500}
          spread={"wide"}
          disable_box_shadow={true}
        >
          {cardData.map((card, index) => (
            <div key={index} style={CARD_STYLE}>
              <div className="card-one">
                <header>
                  <div className="avatar">
                    <img src={card.image} alt={card.name} />
                  </div>
                </header>

                <h3>{card.name}</h3>
                <div className="desc">{card.desc}</div>
                <div className="contacts">
                  {/* Render social icons */}
                  {card.social.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                  <div className="clear"></div>
                </div>
              </div>
            </div>
          ))}
        </ReactCardCarousel>
      </div>
    </div>
  );
};

export default Judges;
