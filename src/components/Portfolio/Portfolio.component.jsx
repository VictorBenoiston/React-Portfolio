import React from "react";

import Title from "../Title";
import { useTranslation } from "react-i18next";


import { portfoliProjects } from "../../data/ProjectData";



const Portfolio = () => {
    const { t } = useTranslation();

    return <div 
    id="Portfolio" 
    title="Portfolio"
    className="bg-gradient-to-b from-black to-gray-800 
    w-full h-100 text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
            <div className="py-8" >
                <Title title={t('title_portfolio')}/>
                <p className="py-6 mt-2">{t('portfolio_text')}</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
                {
                    portfoliProjects.map(({ id, src, githubUrl, previewUrl }) =>
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img src={src} alt="" className="rounded-md
                    duration-200 hover:scale-105 cursor-pointer" />
                            <div className="flex items-center justify-between">

                                <a href={previewUrl} target='_blank' rel="noreferrer" className="w-1/2 m-4">
                                    {previewUrl ? <button className="w-full px-5 py-1 duration-200 hover:scale-105 
                        text-white bg-gradient-to-r from-cyan-500 to-blue-500 
                        hover:bg-gradient-to-bl rounded font-bold">Demo</button>
                                        : <button className="w-full px-5 py-1 bg-gray-500 rounded font-bold cursor-not-allowed">Demo</button>}
                                </a>


                                <a href={githubUrl} target='_blank' rel="noreferrer" className="w-1/2 m-4">
                                    <button className="w-full px-5 py-1 duration-200 hover:scale-105 
                        text-white bg-gradient-to-r from-cyan-500 to-blue-500 
                        hover:bg-gradient-to-bl rounded font-bold">{t('portfolio_btn_2')}</button>
                                </a>

                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    </div>

}

export default Portfolio;
