import React from "react";
import { useTranslation } from "react-i18next";


import HeroImage from '../../assets/memoji.jpg'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { BsPaperclip } from 'react-icons/bs'

import { Link } from 'react-scroll'


const Home = () => {
    const { t } = useTranslation();
    return (
        <div name="Home" 
        className="h-screen w-full bg-gradient-to-b pt-20
        from-black to-gray-800">

            <div className="max-w-screen-lg mx-auto flex flex-col
            items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-7xl
                    font-bold text-white
                    ">{t('home_title')}</h2>
                    <p className="text-gray-500 py-4 max-w-md">
                    {t('home_description')}
                    </p>
                    <div className="flex">
                        <Link to='Portfolio' duration={500} smooth
                        className="group text-white w-fit px-6 py-3
                        my-2 flex items-center rounded-md bg-gradient-to-r
                        from-cyan-500 to-blue-500 cursor-pointer mr-4 hover:bg-gradient-to-bl">
                            {t('title_portfolio')}
                            <span
                            className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={25}
                                className="ml-1"/>
                            </span>
                        </Link>

                        <a 
                        href='/resume_Victor_Oliveira.pdf'
                            target='_blank' 
                            rel="noreferrer"
                            download={true}
                        className="group text-white w-fit px-6 py-3
                        my-2 flex items-center rounded-md bg-gradient-to-r
                        from-blue-500 to-cyan-500 cursor-pointer hover:bg-gradient-to-bl">
                            {t('home_resume_button')}
                            <span className="group-hover:rotate-45 duration-300">
                                <BsPaperclip size={25}
                                className="ml-1"/>
                            </span>
                        </a>
                    </div>
                </div>

                <Link to="About" duration={500} smooth>
                    <img src={HeroImage} alt="my profile" 
                    className="rounded-2xl mx-auto w-2/3 md:w-full lg:hover:scale-110 
                    duration-200 cursor-pointer"/>
                </Link>
            </div>
        </div>
    );
}

export default Home;
