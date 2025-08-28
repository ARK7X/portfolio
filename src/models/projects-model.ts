import projectBetterSales from '../assets/tienda-bettersales.png'
import projectBalanceHidrico from '../assets/balance.png'
import projectPorfolio from '../assets/portfolio.png'
import projectCarrito from '../assets/Carrito Compras.png'
/*import imgDefault from '../assets/pagina-web.png'*/

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
        img: projectBalanceHidrico,
        title: 'Balance Hídrico',
        description: 'Esta página web ofrece el cálculo y seguimiento del balance hídrico en pacientes en diálisis peritoneal.',
        tag: [{title: 'Angular'}, {title: 'HTML'}, {title: 'CSS'}, {title: 'Bootstrap'}, {title: 'TypeScript'}],
        url: 'https://balancehidrico.netlify.app/',
        urlGitHub: 'https://github.com/ARK7X/balance-hidrico'
    },
    {
        img: projectPorfolio,
        title: 'Portafolio',
        description: 'Portafolio digital, donde se presentan proyectos, habilidades y experiencia profesional de manera organizada y visual.',
        tag: [{title: 'React'}, {title: 'HTML'}, {title: 'CSS'}, {title: 'Bootstrap'}, {title: 'TypeScript'}],
        url: 'https://franciscosantamaria.netlify.app/',
        urlGitHub: 'https://github.com/ARK7X/portfolio'
    },
    {
        img: projectCarrito,
        title: 'Carrito de compras',
        description: 'Esta página web está enfocada en un carrito de compras, permitiendo a los usuarios seleccionar, gestionar y adquirir productos de manera rápida, sencilla y segura.',
        tag: [{title: 'React'}, {title: 'HTML'}, {title: 'CSS'}, {title: 'Bootstrap'}, {title: 'Javascript'}, {title: 'FakeStore API'}],
        url: 'https://carritodecompraspage.netlify.app/',
        urlGitHub: 'https://github.com/ARK7X/carrito-de-compras'
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