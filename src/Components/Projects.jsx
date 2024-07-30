import React from 'react';
import SkillBox from './SkillBox';
import { skin, html, css, react1, tailwind, project2, project3, nodeJs, mongooDb1, redux1 } from '../assets/images';
import { Link } from 'react-router-dom';
import Certificates from './Certificates';

const Projects = () => {
    return (
        <div className='w-full h-auto pb-[6rem] flex justify-center items-center flex-col mt-[7rem] sm:mt-[7rem] md:mt-[10rem]'>
            <div className="w-[95%] h-auto rounded-2xl md:w-[80%] lg:w-[80%] -z-0 backdrop-blur-sm bg-black/1 flex flex-col gap-9">
                <div className="w-auto flex justify-start items-center mt-2 ml-5 text-2xl md:text-4xl lg:text-5xl rounded-md">
                    <h1 className="font-semibold text-white tracking-[2px]">
                        <span className='rounded-md bg-[#c59b5c] p-1 sm:p-2 text-black font-bold'>
                            Projects
                        </span>
                    </h1>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    {/* Project 1 */}
                    <div className="w-[95%] h-auto border-2 border-[#6a522f] my-3 flex flex-col md:flex-row justify-between items-start rounded-3xl sm:w-[80%] lg:w-[70%] lg:py-6 shadow-lg">
                        <div className="w-full h-fit p-3 sm:px-10 md:p-3 flex justify-center items-center">
                            <img src={skin} alt='img' className="lg:h-[18rem] hover:cursor-pointer" />
                        </div>
                        <div className='w-full h-full px-3 lg:pr-10'>
                            <div className="py-2 text-lg flex justify-start items-center">
                                <h1 className='text-2xl font-bold lg:text-4xl lg:py-3 lg:font-bold'>Skin Scan: AI-Powered Lesion Classifier</h1>
                            </div>
                            <div className='w-auto h-10 flex gap-3 justify-start items-center py-6'>
                                <h1 className='font-bold lg:text-[14px] text-[#c59b5c]'>Tech Stack</h1>
                                <p>Python, Deep learning, HTML, CSS, Javascript</p>
                            </div>
                            <div className='py-2'>
                                <p className="max-w-md text-[0.9rem] sm:text-base md:text-base lg:text-[16px] font-light text-left tracking-wider">
                                    Implemented data augmentation techniques to enhance the diversity of the training dataset and improve model robustness. Utilized image preprocessing methods to ensure optimal input quality for the model. Leveraged transfer learning by utilizing the MobileNet architecture as a base model. Fine-tuned the pre-trained layers and added a custom Dense layer with a softmax activation function to predict seven categories of skin lesions, optimizing the model for high accuracy in skin condition classification.
                                </p>
                            </div>
                            <div className="w-full h-auto py-3 flex flex-col gap-3">
                                <div className="flex justify-center items-start w-full h-full border-2 border-[#6a522f] p-2 rounded-3xl font-bold tracking-wider transition duration-150 ease-in-out hover:-translate-y-1 cursor-pointer bg-[#c59b5c] hover:bg-transparent group">
                                    <a href='https://skin-scan-lesion-classifier.vercel.app/' className="group-hover:text-white text-lg text-black" target="_blank" rel="noopener noreferrer">Preview</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="w-[95%] h-auto border-2 border-[#6a522f] my-3 flex flex-col md:flex-row justify-between items-start rounded-3xl sm:w-[80%] lg:w-[70%] lg:py-6 shadow-lg">
                        <div className="w-full h-fit p-3 sm:px-10 md:p-3 flex justify-center items-center">
                            <img src={project2} alt='img' className="lg:h-[18rem] hover:cursor-pointer" />
                        </div>
                        <div className='w-full h-full px-3 lg:pr-10'>
                            <div className="py-2 text-lg flex justify-start items-center">
                                <h1 className='text-2xl font-bold lg:text-4xl lg:py-3 lg:font-bold'>Estate Square</h1>
                            </div>
                            <div className='w-auto h-10 flex gap-3 justify-start items-center py-6'>
                                <h1 className='font-bold lg:text-[14px] text-[#c59b5c]'>Tech Stack</h1>
                                <p>MERN</p>
                            </div>
                            <div className='py-2'>
                                <p className="max-w-md text-[0.9rem] sm:text-base md:text-base lg:text-[16px] font-light text-left tracking-wider">
                                    Implemented cutting-edge authentication methods like JWT, Firebase, and Google OAuth for secure access. Skilled in MongoDB CRUD operations, enabling seamless creation, reading, updating, and deletion of property listings. Adept at enriching user experience with intuitive features like image uploads, search functionality, and property listing management.
                                </p>
                            </div>
                            <div className="w-full h-auto py-3 flex flex-col gap-3">
                                <div className="flex justify-center items-start w-full h-full border-2 border-[#6a522f] p-2 rounded-3xl font-bold tracking-wider transition duration-150 ease-in-out hover:-translate-y-1 cursor-pointer bg-[#c59b5c] hover:bg-transparent group">
                                    <a href='https://mern-estatesquare.onrender.com/' className="group-hover:text-white text-lg text-black" target="_blank" rel="noopener noreferrer">Preview</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="w-[95%] h-auto border-2 border-[#6a522f] my-3 flex flex-col md:flex-row justify-between items-start rounded-3xl sm:w-[80%] lg:w-[70%] lg:py-6 shadow-lg">
                        <div className="w-full h-fit p-3 sm:px-10 md:p-3 flex justify-center items-center">
                            <img src={project3} alt='img' className="lg:h-[18rem] hover:cursor-pointer" />
                        </div>
                        <div className='w-full h-full px-3 lg:pr-10'>
                            <div className="py-2 text-lg flex justify-start items-center">
                                <h1 className='text-2xl font-bold lg:text-4xl lg:py-3 lg:font-bold'>Social Media Platform</h1>
                            </div>
                            <div className='w-auto h-10 flex gap-3 justify-start items-center py-6'>
                                <h1 className='font-bold lg:text-[14px] text-[#c59b5c]'>Tech Stack</h1>
                                <p>Django, HTML, CSS, JavaScript, db.sqlite3, Bootstrap</p>
                            </div>
                            <div className='py-2'>
                                <p className="max-w-md text-[0.9rem] sm:text-base md:text-base lg:text-[16px] font-light text-left tracking-wider">
                                    Developed using Django framework, inspired by Instagram. It allows users to share posts, like posts, view posts, search for users, and perform account management tasks such as login, sign up, delete account, and change email.
                                </p>
                            </div>
                            <div className="w-full h-auto py-3 flex flex-col gap-3">
                                <div className="flex justify-center items-start w-full h-full border-2 border-[#6a522f] p-2 rounded-3xl font-bold tracking-wider transition duration-150 ease-in-out hover:-translate-y-1 cursor-pointer bg-[#c59b5c] hover:bg-transparent group">
                                    <a href='https://github.com/nisargaa20/Social-Media' className="group-hover:text-white text-lg text-black" target="_blank" rel="noopener noreferrer">Preview</a>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>


                <div className='w-full flex justify-center items-center'>
                    <a className=' group w-[70%] flex justify-center items-center gap-3 bg-[#c59b5c] hover:bg-transparent border-2 border-[#6a522f] rounded-full font-bold tracking-wider transition duration-150 ease-in-out hover:translate-y-2 cursor-pointer' href="https://github.com/nisargaa20?tab=repositories">
                        <h1 className='text-lg font-bold text-black py-3 rounded-full w-auto  group-hover:bg-transparent group-hover:text-white'>
                            VIEW MORE
                        </h1>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="mr-1 text-sm md:text-[16px] lg:text-lg group-hover:text-white" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path><path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path></svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects;
