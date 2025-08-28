import { useContext } from "react";
import { FrontEndLogos, BackEndLogos, FrameWorksLogos} from "../models/tech-logos-model";
import "../styles/skills.css";
import { LangContext } from "../context/LangContext";

export const Skills = () => {

  const {langState} = useContext(LangContext)
  return (
    <>
      <div className="container" id="skills">
        <h2 className="visualHeadTitle">{langState.menu4}</h2>
      </div>
      <div className="container skills-box">
        <h3>{langState.techFrontEnd}</h3>
        <div className="frontEnd-tech">
          {FrontEndLogos.map((logo, index) => {
            return <img key={index} src={logo.img} alt={logo.name} />;
          })}
        </div>
        <h3>{langState.techFramework}</h3>
        <div className="frameworks-tech">
          {FrameWorksLogos.map((logo, index) => {
            return <img key={index} src={logo.img} alt={logo.name} />;
          })}
        </div>
        <h3>{langState.techBackEnd}</h3>
        <div className="backEnd-tech">
          {BackEndLogos.map((logo, index) => {
            return <img key={index} src={logo.img} alt={logo.name} />;
          })}
        </div>
      </div>
    </>
  );
};
