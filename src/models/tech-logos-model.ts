import htmlLogo from '../assets/html5-48.png'
import cssLogo from '../assets/css-48.png'
import javaScriptLogo from '../assets/javascript-48.png'
import typeScriptLogo from '../assets/typescript-48.png'
import mySqlLogo from '../assets/mysql-48.png'
import oracleLogo from '../assets/oracle-logo-48.png'
import reactLogo from '../assets/react-native-48.png'
import angularLogo from '../assets/angular-48.png'
import springLogo from '../assets/spring-boot.png'
import djangoLogo from '../assets/django-48.png'
import bootstrapLogo from '../assets/bootstrap-48.png'

export const FrontEndLogos:TechLogos[] = [
    {
        name: 'HTML',
        img: htmlLogo
    },
    {
        name: 'CSS',
        img: cssLogo
    },
    {
        name: 'JavaScript',
        img: javaScriptLogo
    },
    {
        name: 'TypeScript',
        img: typeScriptLogo
    }
]

export const BackEndLogos:TechLogos[] = [
    {
        name: 'MySQL',
        img: mySqlLogo
    },
    {
        name: 'Oracle',
        img: oracleLogo
    }
]

export const FrameWorksLogos:TechLogos[] = [
    {
        name: 'React',
        img: reactLogo
    },
    {
        name: 'Angular',
        img: angularLogo
    },
    {
        name: 'Spring',
        img: springLogo
    },
    {
        name: 'Django',
        img: djangoLogo
    },
    {
        name: 'BootStrap',
        img: bootstrapLogo
    },
]

export interface TechLogos {
    name: string,
    img: string
} 