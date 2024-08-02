import React from 'react';

const Education = () => {
    return (
        <div id="education" className='w-full lg:h-[auto] flex justify-center items-center mt-[7rem] sm:mt-[7rem] md:mt-[10rem]'>
            <section className="w-[95%] h-[auto] flex flex-col gap-6 rounded-2xl md:w-[80%] lg:w-[80%]">
                <div className="w-auto h-auto flex justify-start items-center p-2 mt-2 ml-5 text-2xl md:text-4xl lg:text-5xl rounded-md">
                    <h1 className="font-semibold text-white tracking-[2px]">
                        <span className='rounded-md bg-[#c59b5c] p-1 sm:p-2 text-black font-bold'>
                            Education
                        </span>
                    </h1>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 pb-8 md:gap-4">
                    {/* Education Entry 1 */}
                    <div className="w-[95%] max-w-[800px] flex flex-col items-center border-2 border-[#6a522f] rounded-3xl backdrop-blur-sm bg-black/10 shadow-lg transition duration-150 ease-in-out hover:-translate-y-2">
                        <div className="flex flex-col justify-center items-center p-4 mt-2 text-lg text-center">
                            <h1 className="font-light tracking-[3px]">PES College of Engineering, 
                                Mandya</h1>
                            <div className='w-[95%] mt-4 text-center'>
                                <h4 className='text-xl font-semibold text-[#c59b5c]'>2021-2025 | Pursuing</h4>
                                <span className="text-md">Information Science and Engineering</span>
                            </div>
                        </div>
                    </div>
                    {/* Education Entry 2 */}
                    <div className="w-[95%] max-w-[800px] flex flex-col items-center border-2 border-[#6a522f] rounded-3xl backdrop-blur-sm bg-black/10 shadow-lg transition duration-150 ease-in-out hover:-translate-y-2">
                        <div className="flex flex-col justify-center items-center p-4 mt-2 text-lg text-center">
                            <h1 className="font-light tracking-[3px]">Mahesh PU College, Mandya</h1>
                            <div className='w-[95%] mt-4 text-center'>
                                <h4 className='text-xl font-semibold text-[#c59b5c]'>2019-2021</h4>
                                <span className="text-md">Pre-University Education</span>
                            </div>
                        </div>
                    </div>
                    {/* Education Entry 3 */}
                    <div className="w-[95%] max-w-[800px] flex flex-col items-center border-2 border-[#6a522f] rounded-3xl backdrop-blur-sm bg-black/10 shadow-lg transition duration-150 ease-in-out hover:-translate-y-2">
                        <div className="flex flex-col justify-center items-center p-4 mt-2 text-lg text-center">
                            <h1 className="font-light tracking-[3px]">Concorde International School, Mandya</h1>
                            <div className='w-[95%] mt-4 text-center'>
                                <h4 className='text-xl font-semibold text-[#c59b5c]'>2009-2019</h4>
                                <span className="text-md">X CBSE</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Education;
