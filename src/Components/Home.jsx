
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import profile from '../assets/nishii.jpg';
import Skills from './Skills';
import Projects from './Projects';
import { github1, linkdin, twitter } from '../assets/images/index';
import Certificates from './Certificates';
import About from './About';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Experience from './Experience';
import Education from './Education';
import Achievements from './Achievement';

const Home = () => {
    const typingRef = useRef(null);

    useEffect(() => {
        const options = {
            strings: ["Software Development", "Full Stack Development", "Artificial Intelligence"],
            typeSpeed: 50,
            backSpeed: 25,
            backDelay: 500,
            loop: true,
        };

        const typed = new Typed(typingRef.current, options);

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section className="home-section w-full h-auto pb-[6rem] flex justify-center items-center flex-col mt-[7rem] sm:mt-[7rem] md:mt-[10rem]" id="home">
            <div className="container w-[95%] md:w-[80%] lg:w-[80%] flex flex-col gap-9 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-12 p-5">
                    <div className="flex flex-col justify-start items-start gap-6 sm:gap-8 md:gap-10 lg:max-w-md xl:max-w-2xl xl:p-5" style={{ flex: '1 1 auto' }}>
                        <div>
                            <p className="font-bold md:text-4xl lg:text-5xl xl:text-6xl">Hello,</p>
                            <br />
                            <h1 className="font-bold md:text-4xl lg:text-5xl xl:text-6xl">
                                I'm <span className="text-3xl text-[#c59b5c] font-bold md:text-4xl lg:text-5xl xl:text-6xl">Nisarga G R</span>
                            </h1>
                            <h2 className='text-2xl font-[700] text-[#c59b5c] tracking-[1px] md:text-3xl lg:text-4xl xl:text-5xl'>
                                <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl">I am into </span>
                                <span ref={typingRef} style={{ marginBottom: '1rem', display: 'inline-block' }} className="typing-text text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#c59b5c]"></span>
                            </h2>
                        </div>
                        <div className='w-full flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4'>
                            <a href="https://drive.google.com/file/d/1rNlNQ59TGkhBCnIe8BdxXolm9bX8YHiO/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
                                <button className="w-auto h-10 px-4 py-2 sm:px-4 sm:py-3 flex justify-center items-center text-md border-2 border-[#6a522f] rounded-xl cursor-pointer font-bold transition duration-150 ease-in-out hover:-translate-y-2 text-black hover:text-white bg-[#c59b5c] hover:bg-transparent shadow-lg">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="mr-2 text-[16px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.903 8.586a.997.997 0 0 0-.196-.293l-6-6a.997.997 0 0 0-.293-.196c-.03-.014-.062-.022-.094-.033a.991.991 0 0 0-.259-.051C13.04 2.011 13.021 2 13 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-.021-.011-.04-.013-.062a.952.952 0 0 0-.051-.259c-.01-.032-.019-.063-.033-.093zM16.586 8H14V5.414L16.586 8zM6 20V4h6v5a1 1 0 0 0 1 1h5l.002 10H6z"></path>
                                        <path d="M8 12h8v2H8zm0 4h8v2H8zm0-8h2v2H8z"></path>
                                    </svg>
                                    Resume
                                </button>
                            </a>
                            <a href="mailto:nisargagowda141@gmail.com">
                                <button className="w-auto h-10 px-4 py-2 sm:px-4 sm:py-3 flex justify-center items-center text-md border-2 border-[#6a522f] rounded-xl cursor-pointer font-bold transition duration-150 ease-in-out hover:-translate-y-2 text-black hover:text-white bg-[#c59b5c] hover:bg-transparent shadow-lg">
                                    Mail Me
                                </button>
                            </a>
                        </div>
                        <div className='flex justify-center items-center w-auto h-auto mt-4'>
                            <ul className="flex gap-3">
                                <li className="p-2 border-2 rounded-full border-slate-400 bg-slate-200 transition duration-150 ease-in-out hover:-translate-y-2">
                                    <a href="https://github.com/nisargaa20" target="_blank" rel="noopener noreferrer">
                                        <img src={github1} alt="github" width={30} height={30} />
                                    </a>
                                </li>
                                <li className="p-2 border-2 rounded-full border-slate-400 bg-slate-200 transition duration-150 ease-in-out hover:-translate-y-2">
                                    <a href="https://www.linkedin.com/in/nisarga-g-r-856806242/" target="_blank" rel="noopener noreferrer">
                                        <img src={linkdin} alt="linkedin" width={30} height={30} />
                                    </a>
                                </li>
                                <li className="p-2 border-2 rounded-full border-slate-400 bg-slate-200 transition duration-150 ease-in-out hover:-translate-y-2">
                                    <a href="https://x.com/nisargaa20" target="_blank" rel="noopener noreferrer">
                                        <img src={twitter} alt="twitter" width={30} height={30} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="profile-image-container max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-full overflow-hidden mt-6 md:mt-0" style={{ maxWidth: '550px', width: '450px', height: '450px' }}>
                        <img src={profile} alt='Nisarga' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                </div>
            </div>
            <Experience />
            <Education />
            <Skills />
            <Projects />
            <Certificates />
            <Achievements />
        </section>
    );
}

export default Home;


