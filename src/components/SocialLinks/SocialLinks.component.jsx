import React from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsPaperclip } from 'react-icons/bs'

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    Linkedin <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/victor-oliveira-3424101a7/',
            style: 'rounded-tr-md',
            color: 'bg-blue-500'
        },
        {
            id: 2,
            child: (
                <>
                    Github <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/VictorBenoiston',
            color: 'bg-black'
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
            color: 'bg-green-700'
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
            color: 'bg-red-500'
        },
    ]
    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
            <ul>
                {links.map(({id, href, child, color, download}) =>
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

