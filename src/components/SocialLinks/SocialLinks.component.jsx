import React from "react";

import { socialLinksData } from "../../data/ProjectData";



const SocialLinks = () => {
    
    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
            <ul>
                {socialLinksData.map(({id, href, child, color, download}) =>
                    <li key={id} className={`flex justify-between items-center w-40
                    h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 ${color}`}>
                        <a href={href} target='_blank' 
                        className="flex justify-between items-center 
                        w-full text-white"
                        rel="noreferrer"
                        download={download}>
                            {child}
                        </a>
                    </li>
                )}

            </ul>

        </div>
    )
}

export default SocialLinks;

