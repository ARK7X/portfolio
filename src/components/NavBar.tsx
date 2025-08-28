import { useContext } from "react";
import "../styles/NavBar.css";
import { LangContext } from "../context/LangContext";

export const NavBar = () => {

  const {langState , setLang} = useContext(LangContext)

  return (
    <nav
      className="navbar navbar-expand-lg navBar"
    >
      <div className="container container-fluid">
        <a className="navbar-brand visual" href="#topPage">
          Francisco Santamaría
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link visual" aria-current="page" href="#aboutMe">
                {langState.menu1}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link visual" href="#projects">
              {langState.menu2}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link visual" href="#education">
              {langState.menu3}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link visual" href="#skills">
              {langState.menu4}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link visual" href="#contact">
              {langState.menu5}
              </a>
            </li>
            <li className="nav-item dropdown language">
              <a
                className="nav-link dropdown-toggle visual"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {langState.menu6}
              </a>
              <ul className="dropdown-menu custom-dropdown-bg">
                <li>
                  <button onClick={() => setLang('es')} className="dropdown-item">
                  {langState.spanish}
                  </button>
                </li>
                <li>
                  <button onClick={() => setLang('en')} className="dropdown-item">
                  {langState.english}
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
