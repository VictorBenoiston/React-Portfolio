import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa'

import { navBarLinks } from '../../data/ProjectData'
import { socialLinksData } from "../../data/ProjectData";
import { Link } from "react-scroll"

const NavBar = () => {

    const links = navBarLinks;
    const [nav, setNav] = useState(false);

    return (

        <div className="flex justify-between items-center w-full h-20 px-4 text-white
        bg-black fixed">
            <div className="text-purple">
                <h1 className="text-5xl font-signature ml-2 mt-2 hover:scale-105 duration-200 
                cursor-pointer">Victor</h1>
            </div>

            <ul className="hidden md:flex">
                {links.map(({ id, link }) => (
                    <li key={id} className="px-4 cursor-pointer
                    font-medium text-gray-500 hover:scale-110 duration-200">
                        <Link to={link} duration={500} smooth>
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>
            <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 
            md:hidden">
                {nav ? <FaTimes size={30} />
                    : <FaBars size={30} />}
            </div>

            {/* Mobile */}
            {nav && (<>
                <ul className="flex flex-col justify-center place-items-center fixed top-0 left-0 
            w-2/3 h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 transition-transform duration-400 ">
                    {/* <li className="text-3xl mb-10 font-bold border-b-4 border-white-500">➡️ Go to:</li> */}
                    <li className="text-6xl font-signature fixed top-10">Victor</li>
                    {links.map(({ id, link, icon }) => (
                        <li key={id} className="text-2xl px-4 cursor-pointer
                    font-medium text-gray-500 hover:scale-110 duration-200 my-[5%]">
                            <Link to={link} smooth duration={500}
                                onClick={() => setNav(!nav)}>
                                {icon} {link}
                            </Link>

                        </li>

                    ))}
                    <ul className="flex flex-line fixed bottom-10 ">
                        {socialLinksData.map(({id, download, icon, href,color}) => (
                            <li key={id} className='m-1'>
                            <a href={href} target='_blank' 
                        className={`flex justify-between items-center 
                        hover:rounded-lg duration-300 w-full text-white ${color} p-1`}
                        rel="noreferrer"
                        download={download}>
                            {icon}
                        </a></li>
                            
                        ))}
                    </ul>


                </ul>

            </>
            )}


        </div>
    )
}

export default NavBar;

