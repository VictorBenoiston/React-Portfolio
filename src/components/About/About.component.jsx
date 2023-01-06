import React from "react";
import Title from "../Title";
import { useTranslation } from "react-i18next";


const About = () => {
    const { t } = useTranslation();

    return (
        <div name="About" className="w-full h-screen bg-gradient-to-b from-gray-800
        to-black text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex
            flex-col justify-center w-full h-full">
                <div className="py-6 ">
                    <Title title={t('title_about')}/>
                </div>
                <p className="text-justify font-bold text-3xl mt-10">
                {t('about_title')} &#127463;&#127479;!
                </p>

                <br />

                <p className="text-justify sm:text-xl">
                    {t('about_text')}
                </p>
            </div>
        </div>
    )
}

export default About;

