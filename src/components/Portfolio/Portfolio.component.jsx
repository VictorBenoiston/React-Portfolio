import React from "react";

import Title from "../Title";

import cart from '../../assets/portfolio/cart.png'
import recommender from '../../assets/portfolio/recommender.png'
import eCommerce from '../../assets/portfolio/eCommerce.png'
import signInPage from '../../assets/portfolio/signInPage.png'

const Portfolio = () => {

    const portfolios = [
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
        }
    ]
    return <div 
    id="Portfolio" 
    title="Portfolio"
    className="bg-gradient-to-b from-black to-gray-800 
    w-full h-100 text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
            <div className="pb-8" >
                <Title title='Portfolio'/>
                <p className="py-6 mt-2">Check out some of my work right here:</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
                {
                    portfolios.map(({ id, src, githubUrl, previewUrl }) =>
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
                        hover:bg-gradient-to-bl rounded font-bold">Code</button>
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
