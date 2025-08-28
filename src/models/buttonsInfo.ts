import gitHubLogo from '../assets/github-mark.png'
import whatsappLogo from '../assets/Digital_Glyph_Black.png'
import instagramLogo from '../assets/Instagram_Glyph_Gradient.png'
import linkedinLogo from '../assets/LI-In-Bug.png'

export const ButtonsInfo:ButtonsInfo[] = [
    {
        id: 1,
        name: 'gitHubLogo',
        url: 'https://github.com/ARK7X?tab=repositories',
        img: gitHubLogo
    },
    {
        id: 2,
        name: 'instagramLogo',
        url: 'https://www.instagram.com/arkham7x/',
        img: instagramLogo
    },
    {
        id: 3,
        name: 'linkedinLogo',
        url: 'https://www.linkedin.com/in/francisco-santamar%C3%ADa-ba005a262/',
        img: linkedinLogo
    },
    {
        id: 4,
        name: 'whatsappLogo',
        url: 'https://wa.me/50765253251',
        img: whatsappLogo
    }
]

export interface ButtonsInfo {
    id: number,
    name: string,
    url: string,
    img: string
}