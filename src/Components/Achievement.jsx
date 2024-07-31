import React from 'react';

const Achievements = () => {
    return (
        <div id="achievements" className='w-full lg:h-[auto] flex justify-center items-center mt-[7rem] sm:mt-[7rem] md:mt-[10rem]'>
            <section className="w-[95%] h-[auto] flex flex-col gap-6 rounded-2xl md:w-[80%] lg:w-[80%]">
                <div className="w-auto h-auto flex justify-start items-center p-2 mt-2 ml-5 text-2xl md:text-4xl lg:text-5xl rounded-md">
                    <h1 className="font-semibold text-white tracking-[2px] text-3xl md:text-5xl lg:text-6xl">
                        <span className='rounded-md bg-[#c59b5c] p-1 sm:p-2 text-black font-bold text-3xl md:text-4xl lg:text-5xl'>
                            Achievements
                        </span>
                    </h1>
                </div>
                <div className="flex flex-col justify-center items-center gap-3 pb-8">
                    <div className="w-[95%] flex flex-col justify-center items-center border-2 border-[#6a522f] rounded-3xl pb-3 backdrop-blur-sm bg-black/10 shadow-lg transition duration-150 ease-in-out hover:-translate-y-2">
                        <div className="flex justify-center items-center p-2 mt-2 text-xl md:text-2xl lg:text-3xl">
                            <h1 className="font-light tracking-[3px] text-2xl md:text-3xl lg:text-4xl">Hackathon Awards</h1>
                        </div>
                        <div className='w-[95%] h-auto px-1 py-1'>
                            <ul className="list-disc list-inside text-white text-xl md:text-2xl lg:text-3xl">
                                <li>
                                    First prize in Infothon, a 24-hour National Level Hackathon held at VVCE. <br />
                                    <span className="block ml-10">
                                        Access to the project -
                                        <a 
                                            href="https://nisargaa20.github.io/Elearning_Platform/" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="text-blue-400 hover:underline"
                                        >
                                             Elearning platform.
                                        </a>
                                    </span>
                                </li>
                                <li>Third prize in EduCathon held on Devpost.</li>
                                <li>Best in Web Development in TechxNova Hacks.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Achievements;
