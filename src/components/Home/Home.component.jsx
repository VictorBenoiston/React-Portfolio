import React from "react";
import HeroImage from '../../assets/memoji.jpg'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { Link } from 'react-scroll'

const Home = () => {
    return (
        <div name="Home" 
        className="h-screen w-full bg-gradient-to-b 
        from-black to-gray-800">

            <div className="max-w-screen-lg mx-auto flex flex-col
            items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-7xl
                    font-bold text-white
                    ">I am a Full-Stack Developer!</h2>
                    <p className="text-gray-500 py-4 max-w-md">
                    I am a Full-Stack developer, specializing in building (hence, designing as well)
                    cool, and most importantly, useful tools to fulfil needs.
                    </p>
                    <div>
                        <Link to='Portfolio' duration={500} smooth
                        className="group text-white w-fit px-6 py-3
                        my-2 flex items-center rounded-md bg-gradient-to-r
                        from-cyan-500 to-blue-500 cursor-pointer">
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={25}
                                className="ml-1"/>
                            </span>
                        </Link>
                    </div>
                </div>

                <Link to="About" duration={500} smooth className="sm:my-30">
                    <img src={HeroImage} alt="my profile" 
                    className="rounded-2xl mx-auto w-2/3 md:w-full lg:hover:scale-110 
                    duration-200 cursor-pointer"/>
                </Link>
            </div>
        </div>
    );
}

export default Home;
