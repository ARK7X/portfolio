import { useContext } from "react";
import "../styles/aboutMe.css"
import { LangContext } from "../context/LangContext";

export const AboutMe = () => {
  
  const {langState} = useContext(LangContext)

  return (
    <div className="container aboutMe-content" id="aboutMe">
      <h2 className="visualHeadTitle">{langState.menu1}</h2>
      <p>
        {langState.descriptionSection1}
      </p>
    </div>
  );
};
