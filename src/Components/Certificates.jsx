import React from 'react';
import { badge } from '../assets/images/index'
const Certificates = () => {

  const tech = ["Postman", "DevOps","Selenuim", "JavaScript", "AWS", "Hackathons", "+10"];
  return (
    <div className='w-full h-auto flex justify-center items-center mt-[5%] mb-[5%]'>
      <div className=" mt-5 w-[95%] h-[auto] rounded-2xl  md:w-[80%] lg:w-[80%] -z-0 backdrop-blur-sm bg-black/1 flex flex-col gap-9">
        <article className=" w-auto flex justify-start items-start mt-2 ml-5 text-2xl md:text-4xl lg:text-5xl  rounded-md ">
          <h1 className="font-semibold text-white tracking-[2px]">Certified <span className='  rounded-md bg-[#c59b5c] p-1 sm:p-2 text-black font-bold'>
            Technology's
          </span></h1>
        </article>
        <div className='w-full flex justify-center items-center'>
          <div className=' w-[80%] lg:w-[60%] backdrop-blur-sm bg-black/1  flex flex-wrap justify-center items-center gap-3 px-3 py-6 mt-2 border-solid border-2 border-[#6a522f] rounded-xl shadow-lg 
           sm:py-10 md:py-12 '>
            {
              tech.map((item, index) => (
                item === "+4" ?
                  <span key={index} className=' backdrop-blur-sm b bg-white/5  sm:my-[5px] px-5 py-1 rounded-lg lg:px-8 lg:py-3 tracking-wider cursor-default shadow-xl text-[#ffbd5b]'>
                    {item}
                  </span> :
                  <span key={index} className=' backdrop-blur-sm b bg-white/5  sm:my-[5px] px-5 py-1 rounded-lg lg:px-8 lg:py-3 tracking-wider cursor-default shadow-xl'>{item}</span>
              ))
            }
            <img src={badge} alt="" width={60} height={60} className=' absolute -top-5 -right-5' />
          </div>
        </div>
        <div className='w-full flex justify-center items-center'>
          <div className=' group w-[15rem] sm:w-[40%] flex justify-center items-center bg-[#c59b5c] hover:bg-transparent border-2 border-[#6a522f] rounded-full font-bold tracking-wider transition duration-150 ease-in-out hover:translate-y-2 cursor-pointer'>
            <a href="https://github.com/nisargaa20/Portfolio/tree/main/src/assets/certificates" className=' py-3 rounded-full w-auto flex justify-center items-center  gap-3'>
              <h1 className='text-lg font-bold text-black  group-hover:bg-transparent group-hover:text-white tracking-widest'>
                Certificates
              </h1>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="mr-1 text-sm md:text-[16px] lg:text-lg text-black group-hover:text-white" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path><path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificates;