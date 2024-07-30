import React from 'react';
import { Link } from 'react-router-dom';
import SkillBox from './SkillBox'

const Experience = () => {
    return (
        <section className="experience-section w-full h-auto pb-[6rem] flex justify-center items-center flex-col mt-[7rem] sm:mt-[7rem] md:mt-[10rem]" id="experience">
            <div className="container w-[95%] md:w-[80%] lg:w-[80%] flex flex-col gap-9 backdrop-blur-sm">
                <div className="heading w-auto flex justify-start items-center mt-2 ml-5 text-2xl md:text-4xl lg:text-5xl rounded-md">
                    <h1 className="font-semibold text-white tracking-[2px]">
                        <span className='rounded-md bg-[#c59b5c] p-1 sm:p-2 text-black font-bold'>
                            Experience
                        </span>
                    </h1>
                </div>
                <div className="timeline relative flex flex-col items-center gap-9 w-full">
                    <div className="line absolute w-0.5 h-full bg-[#6a522f] left-1/2 transform -translate-x-1/2 z-1"></div>
                    
                    <div className="ex-container right w-5/6 md:w-[45%] border-2 border-[#6a522f] flex justify-between items-start rounded-3xl p-4 shadow-lg relative z-2 ml-auto">
                        <div className="arrow absolute w-0 h-0 border-t-[10px] border-t-transparent border-r-[10px] border-r-[#6a522f] border-b-[10px] border-b-transparent left-[-10px] top-1/2 transform -translate-y-1/2"></div>
                        <div className="content flex flex-col justify-start items-start">
                            <div className="tag text-xl font-bold text-[#c59b5c]">
                                <h2>BitsGate</h2>
                            </div>
                            <div className="desc flex flex-col gap-2">
                                <h3 className="font-semibold text-[#c59b5c]">Software Development Engineer</h3>
                                <p>May 2024 - Present</p>
                                <p>Collaborating closely with the development team to architect and develop customized software solutions focusing on 
                                functionality and user experience.</p>
                              
                                <h3 className="font-semibold text-[#c59b5c]">Full Stack Developer | Internship</h3>
                                <p>Jan 2024 - Feb 2024</p>
                                <p>Developed and implemented a full-stack blogging website utilizing web development technologies, ensuring seamless user 
                                    experience and efficient content management. Also, worked on a React portfolio website and rigorously tested using APIs with 
                                    Postman for seamless functionality.</p>
                            </div>
                        </div>
                    </div>

                    <div className="ex-container left w-5/6 md:w-[45%] border-2 border-[#6a522f] flex justify-between items-start rounded-3xl p-4 shadow-lg relative z-2 mr-auto">
                        <div className="arrow absolute w-0 h-0 border-t-[10px] border-t-transparent border-l-[10px] border-l-[#6a522f] border-b-[10px] border-b-transparent right-[-10px] top-1/2 transform -translate-y-1/2"></div>
                        <div className="content flex flex-col justify-start items-start">
                            <div className="tag text-xl font-bold text-[#c59b5c]">
                                <h2>GirlScript Code of Summer (GSSoC'24)</h2>
                            </div>
                            <div className="desc flex flex-col gap-2">
                                <h3 className="font-semibold text-[#c59b5c]">Open Source Contributor</h3>
                                <p>May 2024 - Present</p>
                                <p>I received 455 points and made 21 PRs right from the start. Out of 1900+ active contributors and 17000+ participants, I am proud to have obtained the Summit Seeker Badge🏅</p>
                            </div>
                        </div>
                    </div>

                    <div className="ex-container right w-5/6 md:w-[45%] border-2 border-[#6a522f] flex justify-between items-start rounded-3xl p-4 shadow-lg relative z-2 ml-auto">
                        <div className="arrow absolute w-0 h-0 border-t-[10px] border-t-transparent border-r-[10px] border-r-[#6a522f] border-b-[10px] border-b-transparent left-[-10px] top-1/2 transform -translate-y-1/2"></div>
                        <div className="content flex flex-col justify-start items-start">
                            <div className="tag text-xl font-bold text-[#c59b5c]">
                                <h2>Suvidha Foundation</h2>
                            </div>
                            <div className="desc flex flex-col gap-2">
                                <h3 className="font-semibold text-[#c59b5c]">Web Developer | Internship</h3>
                                <p>Nov 2023 - Dec 2023</p>
                                <p>Spearheading the development of digital summarizer project aimed at enhancing information accessibility for the organization, 
                                    leveraging advanced technologies to ensure optimal performance and user satisfaction.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
