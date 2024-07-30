import React from 'react'
import SkillBox from './SkillBox'
import {
    html, css, javaScript, react1, postMan, vsCode,
    linux,
    npm,
    tailwind,
    git,
    github,
    nodeJs,
    express1,
    mongooDb1,
    java1,
    Api
} from '../assets/images/index';
const Example = () => {

    return (
        <>
            <div className="flex flex-col justify-center items-center gap-3 pb-8 md:flex-row md:items-baseline md:px-5 md:py-5">
                <div className=" group w-[95%] flex justify-center items-center flex-col border-2 border-[#6a522f] rounded-3xl pb-3 backdrop-blur-sm bg-black/10 shadow-lg">
                    <div className=" flex justify-center items-center p-2 mt-2 text-lg">
                        <h1 className=" font-light tracking-[3px]">Frontend</h1>
                    </div>
                    <div className='absolute top-0 w-full h-full rounded-3xl'>
                    </div>
                    <div className=''>
                        <div className='w-[95%] h-auto px-1 py-1 flex flex-wrap justify-center items-center  lg:gap-2 '>
                            <div className="p-1 m-1">
                                <SkillBox icon={html} name={"html"} />
                            </div>
                            <div className="p-1 m-1">
                                <SkillBox icon={css} name={"css"} />
                            </div>
                            <div className="p-1 m-1">
                                <SkillBox icon={javaScript} name={"javaScript"} />
                            </div>
                            <div className="p-1 m-1">
                                <SkillBox icon={react1} name={"react1"} />
                            </div>
                            <div className="p-1 m-1">
                                <SkillBox icon={tailwind} name={"tailwind"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Example;
