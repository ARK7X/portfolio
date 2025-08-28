import { useContext } from "react";
import { ButtonsInfo } from "../models/buttonsInfo";
import "../styles/contact.css";
import { LangContext } from "../context/LangContext";

export const Contact = () => {

  const {langState} = useContext(LangContext)

  return (
    <div className="contact" id="contact">
      <div className="container contact-box">
      <div className="contact-info">
        <h2>{langState.menu5}</h2>
        <p>
          {langState.mail} <a href="mailto:giraldino12@gmail.com">giraldino12@gmail.com</a>
        </p>
        <p>
          WhatsApp: <a href="https://wa.me/50765253251" target="_blank">+507 6525-3251</a>
        </p>
      </div>
      <div className="contact-division"></div>
      <div className="network-buttons">
        <h2>{langState.socialMedias}</h2>
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
