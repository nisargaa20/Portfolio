import React from 'react';
import { Link } from 'react-router-dom';
import { github1, linkdin, twitter } from '../assets/images'; 

const Footer = () => {
  return (
    <div className='w-full h-full py-3 flex flex-col justify-center items-center mt-16 bg-[#c8964b] clip'>
      <div className='flex w-full flex-col sm:flex-row justify-center items-center md:justify-evenly'>
        <div className='p-4 tracking-wider w-auto text-start'>
          <h1 id='font' className='text-4xl lg:text-6xl text-gray-800'>Contact info</h1><br />
          <a href="mailto:nisargagowda141@gmail.com" className='text-md text-gray-800 hover:text-[ text-gray-800]'>
          📧 nisargagowda141@gmail.com
          </a>
          <h3 id='font' className='text-xl text-gray-800 lg:text-md font-thin'></h3>
        </div>
        <div className='flex justify-center items-center w-auto h-auto mt-8'>
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
        <div className='w-auto'>
          <span className='tracking-wider text-white font-sans'>
            Please don't hesitate to reach out!
          </span>
          <div className='w-auto h-auto p-4 flex justify-center text-center gap-5 tracking-wider text-white text-[18px] font-extralight'>
            <a href="mailto:nisargagowda141@gmail.com">
              <button className="w-auto h-10 px-2 py-3 sm:px-4 sm:py-5 flex justify-center items-center text-md border-2 border-[#6a522f] rounded-xl cursor-pointer transition duration-150 ease-in-out hover:-translate-y-2 text-white backdrop-blur-sm bg-black/10 shadow-lg tracking-widest hover:text-black hover:bg-[#c59b5c]">
                Mail Me
              </button>
            </a>
            <Link to='/about'>
              <button className="w-auto h-10 px-2 py-3 sm:px-4 sm:py-5 flex justify-center items-center text-md border-2 border-[#6a522f] rounded-xl cursor-pointer transition duration-150 ease-in-out hover:-translate-y-2 text-white backdrop-blur-sm bg-black/10 shadow-lg tracking-widest hover:text-black hover:bg-[#c59b5c]">
                About
              </button>
            </Link>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Footer;
