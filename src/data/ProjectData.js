import html from '../assets/html.png'
import css from '../assets/css.png'
import react from '../assets/react.png'
import redux from '../assets/redux.png'
import javascript from '../assets/javascript.png'
import python from '../assets/python.png'
import tailwind from '../assets/tailwind.png'
import github from '../assets/github.png'
import node from '../assets/node.png'
import firebase from '../assets/firebase.png'
import sass from '../assets/sass.png'
import reactRouter from '../assets/reactRouter.svg'
import typescript from '../assets/typescript.png'
import stripe from '../assets/stripe.png'
import insomnia from '../assets/insomnia.png'
import styledComponents from '../assets/styledComponents.png'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsPaperclip } from 'react-icons/bs'

import cart from '../assets/portfolio/cart.png'
import recommender from '../assets/portfolio/recommender.png'
import eCommerce from '../assets/portfolio/eCommerce.png'
import signInPage from '../assets/portfolio/signInPage.png'
import waiterapp from '../assets/portfolio/waiterapp.png'

export const skillsData = [
    {
        id: 1,
        src: html,
        title: 'HTML',
        style: 'shadow-orange-500'
    },
    {
        id: 2,
        src: css,
        title: 'CSS',
        style: 'shadow-blue-500'
    },
    {
        id: 3,
        src: javascript,
        title: 'JavaScript',
        style: 'shadow-yellow-500'
    },
    {
        id: 4,
        src: typescript,
        title: 'TypeScript',
        style: 'shadow-blue-400'
    },
    {
        id: 5,
        src: react,
        title: 'React',
        style: 'shadow-blue-400'
    },
    {
        id: 6,
        src: redux,
        title: 'Redux',
        style: 'shadow-purple-500'
    },
    {
        id: 7,
        src: styledComponents,
        title: 'StyledComponents',
        style: 'shadow-pink-300'
    },
    {
        id: 8,
        src: sass,
        title: 'Scss',
        style: 'shadow-pink-500'
    },
    {
        id: 9,
        src: tailwind,
        title: 'Tailwind',
        style: 'shadow-blue-400'
    },
    {
        id: 10,
        src: react,
        title: 'React Native',
        style: 'shadow-blue-400'
    },
    {
        id: 11,
        src: firebase,
        title: 'Firebase',
        style: 'shadow-yellow-400'
    },
    {
        id: 12,
        src: reactRouter,
        title: 'React Router',
        style: 'shadow-red-600'
    },
    {
        id: 13,
        src: node,
        title: 'NodeJS',
        style: 'shadow-green-400'
    },
    {
        id: 14,
        src: python,
        title: 'Python',
        style: 'shadow-blue-500'
    },
    {
        id: 15,
        src: stripe,
        title: 'Stripe Payments',
        style: 'shadow-purple-700'
    },
    
    {
        id: 16,
        src: insomnia,
        title: 'Insomnia',
        style: 'shadow-purple-500'
    },
    {
        id: 17,
        src: github,
        title: 'Github',
        style: 'shadow-white'
    },
]


export const navBarLinks = [
    {
        id: 1,
        link: 'Home',
        icon: '🏠'
    },
    {
        id: 2,
        link: 'About',
        icon: '🔭'
    },
    {
        id: 3,
        link: 'Portfolio',
        icon: '👨🏻‍💻'
    },
    {
        id: 4,
        link: 'Skills',
        icon: '💪🏻'
    },
    {
        id: 5,
        link: 'Contact',
        icon: '✉️'
    },
]

export const socialLinksData = [
    {
        id: 1,
        child: (
            <>
                Linkedin <FaLinkedin size={30} />
            </>
        ),
        href: 'https://www.linkedin.com/in/victorbjo/',
        style: 'rounded-tr-md',
        color: 'bg-blue-500',
        icon: <FaLinkedin size={30} />
    },
    {
        id: 2,
        child: (
            <>
                Github <FaGithub size={30} />
            </>
        ),
        href: 'https://github.com/VictorBenoiston',
        color: 'bg-black',
        icon: <FaGithub size={30} />
    },
    {
        id: 3,
        child: (
            <>
                Mail <HiOutlineMail size={30} />
            </>
        ),
        href: 'mailto:victorbjo10@gmail.com',
        style: 'rounded-tr-md',
        color: 'bg-green-700',
        icon: <HiOutlineMail size={30} />
    },
    {
        id: 4,
        child: (
            <>
                Resume <BsPaperclip size={30} />
            </>
        ),
        href: '/resume_Victor_Oliveira.pdf',
        style: 'rounded-br-md',
        download: true,
        color: 'bg-red-500',
        icon: <BsPaperclip size={30} />
    },
]

export const portfoliProjects = [
    {
        id: 1,
        src: recommender,
        previewUrl: null,
        githubUrl: 'https://github.com/VictorBenoiston/recommender_system',
    },
    {
        id: 2,
        src: eCommerce,
        previewUrl: 'https://spiffy-croissant-1a7315.netlify.app/shop',
        githubUrl: 'https://github.com/VictorBenoiston/clothe-ecommerce'
    },
    {
        id: 3,
        src: signInPage,
        previewUrl: 'https://spiffy-croissant-1a7315.netlify.app/auth',
        githubUrl: 'https://github.com/VictorBenoiston/clothe-ecommerce'
    },
    {
        id: 4,
        src: cart,
        previewUrl: 'https://spiffy-croissant-1a7315.netlify.app/checkout',
        githubUrl: 'https://github.com/VictorBenoiston/clothe-ecommerce'
    },
    {
        id: 5,
        src: waiterapp,
        previewUrl: 'https://www.linkedin.com/posts/victorbjo_juninho-javascript-react-activity-7013606415273476096-fXa5?utm_source=share&utm_medium=member_ios',
        githubUrl: 'https://github.com/VictorBenoiston/WaitersAPP'
    }
]