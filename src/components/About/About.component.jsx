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
                <div className="pb-8 ">
                    <Title title={t('title_about')}/>
                </div>
                <p className="text-justify font-bold text-3xl mt-10">
                {t('about_title')} &#127463;&#127479;!
                </p>

                <br />

                <p className="text-justify sm:text-xl">
                    I am thrilled to be working with tech! I discovered this world during a trip
                    to the USA. More specifically, to San Francisco. Yeah, you're right, out of the sudden
                    I left my countryside home in Brazil, and found muyself in the middle of the Silicon Valley.
                    Once I was there, I had the chance to realize the power of tech. I had the amazing once in a lifeitme
                    chance to visit the Facebook (now, Meta&#174;) Headquarters.
                    Since then, I've been studying. My first programming language was Python. I fell in love
                    for it! The syntax is great, and easy to learn. Once I discovered the AI branch, that feeling was back.
                    I had the chance to develop an amazing work using a KNN algorithm, to create a recommender system.
                    Now, I am focousing on the Front-End branch. Currently working with React, JS, Redux and Tailwind.
                </p>
            </div>
        </div>
    )
}

export default About;

