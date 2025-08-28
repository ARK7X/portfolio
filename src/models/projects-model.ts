import projectBetterSales from '../assets/tienda-bettersales.png'
import imgDefault from '../assets/pagina-web.png'

export const ProjectsList:Projects[] = [
    {
        img: projectBetterSales,
        title: 'Tienda BetterSales',
        description: 'Este proyecto es una tienda online versátil y moderna que ofrece una amplia gama de productos, incluyendo ropa, joyería y electrónicos.',
        tag: [{title: 'Angular'}, {title: 'HTML'}, {title: 'CSS'}, {title: 'Bootstrap'} , {title: 'TypeScript'}, {title: 'FakeStore API'}],
        url: 'https://bettersales.netlify.app',
        urlGitHub: 'https://github.com/ARK7X/store-angular'
    },
    {
        img: imgDefault,
        title: 'Titulo del proyecto',
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        tag: [{title: 'Angular'}, {title: 'HTML'}, {title: 'CSS'}],
        url: 'https//',
        urlGitHub: 'https//'
    },
    {
        img: imgDefault,
        title: 'Titulo del proyecto',
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        tag: [{title: 'Angular'}, {title: 'HTML'}, {title: 'CSS'}],
        url: 'https//',
        urlGitHub: 'https//'
    },
    {
        img: imgDefault,
        title: 'Titulo del proyecto',
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        tag: [{title: 'Angular'}, {title: 'HTML'}, {title: 'CSS'}],
        url: 'https//',
        urlGitHub: 'https//'
    },
    {
        img: imgDefault,
        title: 'Titulo del proyecto',
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        tag: [{title: 'Angular'}, {title: 'HTML'}, {title: 'CSS'}],
        url: 'https//',
        urlGitHub: 'https//'
    },
    {
        img: imgDefault,
        title: 'Titulo del proyecto',
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        tag: [{title: 'Angular'}, {title: 'HTML'}, {title: 'CSS'}],
        url: 'https//',
        urlGitHub: 'https//'
    },
    {
        img: imgDefault,
        title: 'Titulo del proyecto',
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        tag: [{title: 'Angular'}, {title: 'HTML'}, {title: 'CSS'}],
        url: 'https//',
        urlGitHub: 'https//'
    },
    {
        img: imgDefault,
        title: 'Titulo del proyecto',
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        tag: [{title: 'Angular'}, {title: 'HTML'}, {title: 'CSS'}],
        url: 'https//',
        urlGitHub: 'https//'
    }
]



export interface Projects {
    img: string,
    title: string,
    description: string,
    tag: Tag[],
    url: string,
    urlGitHub: string
}

export interface Tag {
    title: string
}