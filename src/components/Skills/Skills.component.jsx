import React from "react";

import Title from "../Title";
import { useTranslation } from "react-i18next";


import { skillsData } from '../../data/ProjectData'

import SkillsItem from "./SkillsItem";

const Skills = () => {
    const techs = skillsData;
    const { t } = useTranslation();

    return <div name='Skills' className="bg-gradient-to-b 
    from-gray-800 to-black w-full h-110">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col
        justify-center w-full h-full text-white">
            <div className="py-6">
                <Title title='Skills' />
                <p className="py-6 mt-2">{t('skills_text')}</p>
            </div>
            <div className="w-full grid grid-cols-2 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-8 text-center
            py-8 px-12 sm:px-0">
                {techs.map(item =>
                    <SkillsItem key={item.id} item={item} />
                )}
            </div>

        </div>
    </div>
}

export default Skills;

