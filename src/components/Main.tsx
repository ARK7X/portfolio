import { useContext } from "react";
import profile from "../assets/58c5b1fb-2a49-4c33-977e-5f083aa81523.png";
import { ButtonsInfo } from "../models/buttonsInfo";
import "../styles/Main.css";
import { LangContext } from "../context/LangContext";

export const Main = () => {

  const {langState} = useContext(LangContext)

  return (
    <div className="container content-box" id="topPage">
      <img src={profile} alt="francisco santamaria" />
      <div className="content-info">
        <h1 className="visualHeadTitle">Francisco Santamaría</h1>
        <p>
          {langState.titleWelcome}
        </p>
        <div className="cv-button">
          <a
            href="../assets/Francisco Santamaría.pdf"
            download="Francisco Santamaría.pdf"
          >
            {langState.cvButton}
          </a>
        </div>
        <div className="network-buttons">
          {ButtonsInfo.map((button, index) => {
            return (
              <a key={index} href={button.url} target="_blank">
                <img className="imgLogo" src={button.img} alt={button.name} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
