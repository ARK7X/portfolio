export interface Language {
    menu1: string,
    menu2: string,
    menu3: string,
    menu4: string,
    menu5: string,
    menu6: string,
    titleWelcome: string,
    cvButton: string,
    descriptionSection1: string,
    education1: string,
    education2: string,
    techFrontEnd: string,
    techFramework: string,
    techBackEnd: string,
    socialMedias: string,
    mail: string,
    spanish: string,
    english: string
}

export interface contextProps {
    langState: Language,
    setLang: (value: string) => void
}