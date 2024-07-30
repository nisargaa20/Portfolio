import React from 'react'

const SkillBox = ({ icon, name }) => {
    return (
        <div className=" w-[2.5rem] h-[2.5rem] rounded-3xl flex justify-center items-center flex-col md:w-[3rem] md:h-[3rem] lg:w-[3.5rem] lg:h-[3.5rem]">
            <img src={icon} width={100} height={100} alt={name} />
        </div>
    )
}

export default SkillBox;