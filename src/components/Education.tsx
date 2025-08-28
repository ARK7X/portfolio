import "../styles/education.css";
import utpLogo from "../assets/logo_utp-rgb_2022.png"
import { useContext } from "react";
import { LangContext } from "../context/LangContext";

export const Education = () => {

  const {langState} = useContext(LangContext)

  return (
    <>
    <div className="container" id="education">
      <h2 className="visualHeadTitle">{langState.menu3}</h2>
    </div>
    <div className="container education-content">
      <div className="education-info">
        <div className="education-titles">
          <h4>
            {langState.education1}
          </h4>
          <p>
            <i>Universidad Tecnológica de Panamá</i>
          </p>
          <h4>{langState.education2}</h4>
          <p>
            <i>Universidad Tecnológica de Panamá</i>
          </p>
        </div>
        <div className="education-img">
      	  <img src={utpLogo} alt="Logo universidad" />
        </div>
      </div>
    </div>
    </>
  );
};
