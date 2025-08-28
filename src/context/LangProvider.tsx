import { useState } from "react";
import { LangContext } from "./LangContext";
import { LanguageEnglish } from "../models/languge-english-model";
import { LanguageSpanish } from "../models/language-spanish-model";
import { Language } from "../interfaces/interfaces";

const initialState:Language = LanguageSpanish

interface props {
  children: JSX.Element | JSX.Element[];
}

export const LangProvider = ({ children }: props) => {
  const [langState, setLangState] = useState(initialState as Language);

  const setLang = (value: string) => {
    if (value === 'en') {
      setLangState(LanguageEnglish);
    } else {
      setLangState(LanguageSpanish);
    }
  };

  return (
    <LangContext.Provider value={{ langState, setLang }}>
      {children}
    </LangContext.Provider>
  );
};
