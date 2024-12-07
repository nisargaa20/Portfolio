import React from 'react'

const About = () => {
    return (
        <section className='w-full h-auto pb-[6rem]  flex justify-center items-center flex-col mt-[7rem] sm:mt-[7rem] md:mt-[10rem]'>
            <div className=" w-[85%] h-[auto] rounded-2xl  md:w-[80%] lg:w-[80%] -z-0 backdrop-blur-sm bg-black/1 flex flex-col gap-6 lg:gap-10">
                {/* <div className='w-full align-baseline'> */}
                <div className=' group align-baseline w-[15rem] sm:w-[20rem] flex justify-center items-center bg-[#c59b5c]  border-2 border-[#6a522f] rounded-full font-bold tracking-wider p-2 '>
                    <h1 className='text-lg font-bold text-black  tracking-widest lg:text-xl'>
                        Know about me ...!
                    </h1>
                </div>
                <div className=' ml-[10%] sm:ml-[15%]'>
                    <p className='text-justify md:text-lg text-[#d5d3d3] '>
                        Hey there!<br /> <br /> I'm <span className='text-[#ffef88] font-semibold'>Nisarga G R</span>, With a strong passion for technology and problem-solving, I have cultivated hands-on experience in front-end and back-end development. My dedication to continuous learning and collaboration equips me to contribute effectively to innovative projects and deliver impactful solutions.

My interest in artificial intelligence inspires me to explore cutting-edge technologies, and I am eager to collaborate with like-minded professionals to make a meaningful difference in the software development domain.
                    </p>
                </div>
                <div className=' ml-[10%] sm:ml-[15%]'>
                    
                   
                    <div className=''>
                    <a href="https://drive.google.com/file/d/1M7md00gUlufhQEdJHLMSKeNCkfW4OvSe/view?usp=drivesdk">
                            <button className="w-auto h-10 px-2 py-3 sm:px-4 sm:py-5 flex justify-center items-center tracking-widest text-md border-2 border-[#6a522f] rounded-xl  cursor-pointer font-bold transition duration-150 ease-in-out hover:-translate-y-2
                              text-black hover:text-white bg-[#c59b5c] hover:bg-transparent shadow-lg text-sm">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className=" mr-2 text-[16px] " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19.903 8.586a.997.997 0 0 0-.196-.293l-6-6a.997.997 0 0 0-.293-.196c-.03-.014-.062-.022-.094-.033a.991.991 0 0 0-.259-.051C13.04 2.011 13.021 2 13 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-.021-.011-.04-.013-.062a.952.952 0 0 0-.051-.259c-.01-.032-.019-.063-.033-.093zM16.586 8H14V5.414L16.586 8zM6 20V4h6v5a1 1 0 0 0 1 1h5l.002 10H6z"></path><path d="M8 12h8v2H8zm0 4h8v2H8zm0-8h2v2H8z"></path></svg>
                                Resume
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
