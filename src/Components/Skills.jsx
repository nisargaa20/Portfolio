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
    django,
    mongooDb1,
    AIandML,
    python,
    java1,
    Api
} from '../assets/images/index';

const Skills = () => {
    // sm	640px	
    // md	768px	
    // lg	1024px	
    // xl	1280px
    // 2xl	1536px

    return (
        <div id="skills" className='w-full lg:h-[auto] flex justify-center items-center mt-[7rem] sm:mt-[7rem] md:mt-[10rem]'>
            <section className="  w-[95%] h-[auto] flex flex-col gap-6 rounded-2xl md:w-[80%] lg:w-[80%]">
                <div className=" w-auto h-auto flex justify-start items-center p-2  mt-2 ml-5 text-2xl md:text-4xl lg:text-5xl  rounded-md ">
                    <h1 className="font-semibold text-white tracking-[2px]">  <span className=' rounded-md bg-[#c59b5c] p-1 sm:p-2  text-black font-bold'>
                        Skills
                    </span></h1>
                </div>
                <div className="flex flex-col justify-center items-center gap-3 pb-8 md:flex-row md:items-baseline md:px-5 md:py-5">
                    <div className=" w-[95%] flex justify-center items-center flex-col border-2 border-[#6a522f] rounded-3xl pb-3 backdrop-blur-sm bg-black/10 shadow-lg transition duration-150 ease-in-out hover:-translate-y-2">
                        <div className=" flex justify-center items-center p-2 mt-2 text-lg">
                            <h1 className=" font-light tracking-[3px]">Frontend</h1>
                        </div>
                        <div className=''>
                            <div className='w-[95%] h-auto px-1 py-1 flex flex-wrap justify-center items-center  lg:gap-2'>
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
                    <div className=" w-[95%] flex justify-center items-center flex-col border-2 border-[#6a522f] rounded-3xl pb-3 backdrop-blur-sm bg-black/10 shadow-lg transition duration-150 ease-in-out hover:-translate-y-2">
                        <div className=" flex justify-center items-center p-2 mt-2 text-lg">
                            <h1 className=" font-light tracking-[3px] ">Other</h1>
                        </div>
                        <div className='w-[95%] h-auto px-1 py-1 flex flex-wrap justify-center items-center lg:gap-2'>
                            <div className="p-1 m-1">
                                <SkillBox icon={git} name={"git"} />
                            </div>
                            <div className="p-1 m-1">
                                <SkillBox icon={github} name={"github"} />
                            </div>
                            <div className="p-1 m-1">
                                <SkillBox icon={AIandML} name={"AIandML"} />
                            </div>
                            <div className="p-1 m-1">
                                <SkillBox icon={postMan} name={"postMan"} />
                            </div>
                            <div className="p-1 m-1">
                                <SkillBox icon={vsCode} name={"vsCode"} />
                            </div>
                            <div className="p-1 m-1">
                                <SkillBox icon={npm} name={"npm"} />
                            </div>

                        </div>
                    </div>
                    <div className=" w-[95%] flex justify-center items-center flex-col border-2 border-[#6a522f] rounded-3xl pb-3 backdrop-blur-sm bg-black/10 shadow-lg transition duration-150 ease-in-out hover:-translate-y-2">
                        <div className=" flex justify-center items-center p-2 mt-2 text-lg">
                            <h1 className=" font-light tracking-[3px]">Backend</h1>
                        </div>
                        <div className='w-[95%] h-auto px-1 pt-1 flex flex-wrap justify-center items-center md:h-[auto] lg:h-auto  lg:gap-2'>
                            <div className="p-1 m-1">
                                <SkillBox icon={java1} name={"java1"} />
                            </div>
                            <div className="p-1 m-1">
                                <SkillBox icon={django} name={"django"} />
                            </div>
                            <div className="p-1 m-1">
                                <SkillBox icon={nodeJs} name={"nodeJs"} />
                            </div>
                            <div className="p-1 m-1">
                                <SkillBox icon={express1} name={"express1"} />
                            </div>
                            <div className="p-1 m-1">
                                <SkillBox icon={mongooDb1} name={"mongooDb1"} />
                            </div>
                            <div className="p-1 m-1">
                                <SkillBox icon={Api} name={"Api"} />
                            </div>
                            <div className="p-1 m-1">
                                <SkillBox icon={python} name={"python"} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Skills;