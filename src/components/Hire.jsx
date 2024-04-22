import React, { useEffect } from 'react'
import backFootage from '../assestes/footages/codding-front-end.mov'


function Hire() {

  
  useEffect(()=>{
    const vid = document.getElementById("vid");
    vid.play();
    },[])

  return (
    
      <div id='Hire' className='w-full md:h-screen  h-full bg-[#F2F4F7]'>
      <div className='w-full h-full flex justify-around flex-wrap md:flex-nowrap'>
        <div className='w-full h-full max-w-[90%] md:max-w-[40%] pt-20 md:pt-[180px]  object-cover'>
        <video id='vid' controlsList='nodownload' className='rounded-3xl shadow-md ' autoPlay muted loop >
          <source src={backFootage} type='video/mp4' />
        </video>
        </div>

        <div className='w-full h-screen md:w-auto flex flex-col justify-center items-start px-4 md:px-0 md:mt-0 sm:-mt-[340px] -mt-[230px]'>
          <h1 className='md:text-5xl text-3xl font-bold md:mb-10 sm:mb-[300px] mb-[250px]'>Why <span className='text-[#FD853A]'>Hire Me?</span></h1>
          <p className='mb-10 max-w-[500px] text-[#3b3b3b]'>Front-End Developer, Web Designer, and Photographer.Passionate about delivering exceptional digital experiences. <br /> With a keen eye for detail and a commitment to excellence, I bring creativity, expertise, and dedication to every project. <br /> Let's turn your vision into reality together!</p>

          <div className='w-full flex justify-between'>
            <div>
              <h1 className='text-3xl font-semibold'>10+</h1>
              <p>React Project-complete</p>
            </div>
            <div>
              <h1 className='text-3xl font-semibold'>10+</h1>
              <p>JavaScript Project-complete</p>
            </div>
          </div>
          <a href="https://www.linkedin.com/in/amikhodabande/" target="_blank" rel="noreferrer">
          <button 
          className='my-10 text-2xl font-semibold border border-[#1a1a1a] rounded-3xl px-[130px] md:px-10 py-4 hover:bg-[#FD853A] duration-200 ease-in-out hover:text-white hover:border-[#FD853A] hover:shadow-md hover:scale-105'>
            Hire me
            </button>
          </a>
        </div>
        
      </div>
      
    </div>
    
  )
}

export default Hire