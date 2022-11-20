import React from "react";

const SkillsItem = ({item}) => {
    const { src, title, style } = item;

    return <div className={`flex flex-col shadow-lg hover:scale-105 
    duration-500 py-2 rounded-lg cursor-pointer ${style}`}>
            <img src={src} alt={`${title}-logo`} className="w-20 mx-auto h-20 mt-2" />
            <p className="my-4">{title}</p>
        </div>

}

export default SkillsItem;
