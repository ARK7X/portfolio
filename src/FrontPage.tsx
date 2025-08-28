import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Main } from "./components/Main";
import { NavBar } from "./components/NavBar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { LangProvider } from "./context/LangProvider";

import "./styles/FrontPage.css";

export const FrontPage = () => {
  return (
    <div className="page-content">
      <LangProvider>
        <NavBar />
        <Main />
        <AboutMe />
        <Projects />
        <Education />
        <Skills />
        <Contact />
      </LangProvider>
    </div>
  );
};
