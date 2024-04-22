import React from 'react'
import circleImg from '../assestes/Frame 11.png'


function Works() {
  return (
    
      <div id='Resume' className='w-full md:h-screen h-full bg-white'>
             
             <h1 className='text-black font-bold md:text-5xl text-4xl pt-20 text-center '>My <span className='text-orange-500'>Work Exprience</span></h1>


             <div className='w-full text-center md:text-start  h-full flex md:justify-around justify-center md:items-start flex-wrap py-10'>
              
             <ul className=''>
                <a href="">
                <li className='my-6 md:my-10 py-2 rounded-xl box-shadow ' >
                  <h1 className='sm:text-3xl text-2xl font-bold text-[#344054]  hover:cursor-pointer hover:text-[#555] duration-200 ease-in-out '>UserManagement in React</h1>
                  <p className='text-lg text-[#98A2B3]'>React | Bootstarap | Axios | Loading-Skeleton </p>
                </li>
                </a>
                <a href="">
                <li className='my-6 md:my-10  py-2 rounded-xl box-shadow' >
                  <h1 className='sm:text-3xl text-2xl font-bold text-[#344054] hover:cursor-pointer hover:text-[#555] duration-200 ease-in-out'>AI Summarizer in React</h1>
                  <p className='text-lg text-[#98A2B3]'>Vite.js | Tailwind | Redux | Responsive | GPT-4</p>
                </li>
                </a>
                <a href="">
                <li className='my-6 md:my-10  py-2 rounded-xl box-shadow' >
                  <h1 className='sm:text-3xl text-2xl font-bold text-[#344054] hover:cursor-pointer hover:text-[#555] duration-200 ease-in-out'>Netflix in React</h1>
                  <p className='text-lg text-[#98A2B3]'>React | Tailwind | Responsive </p>
                </li>
                </a>
              </ul>
            
             <div>
               <img className='my-0 md:my-10 md:flex hidden' src={circleImg} alt="" style={{width:'40px'}} />
             </div>
             
              <ul className=''>
                <a href="">
                <li className='mb-6 md:my-10  py-2 rounded-xl box-shadow' >
                  <h1 className='sm:text-3xl text-2xl font-bold text-[#344054] hover:cursor-pointer hover:text-[#555] duration-200 ease-in-out'>Weekaway</h1>
                  <p className='text-lg text-[#98A2B3]'>React | Tailwind | Responsive </p>
                </li>
                </a>
                <a href="">
                <li className='my-6 md:my-10  py-2 rounded-xl box-shadow' >
                  <h1 className='sm:text-3xl text-2xl font-bold text-[#344054] hover:cursor-pointer hover:text-[#555] duration-200 ease-in-out'>OnlinShop in React</h1>
                  <p className='text-lg text-[#98A2B3]'>React | Bootstarap | Axios | Loading-Skeleton </p>
                </li>
                </a>
                <a href="">
                <li className='my-6 md:my-10 py-2 rounded-xl box-shadow' >
                  <h1 className='sm:text-3xl text-2xl font-bold text-[#344054] hover:cursor-pointer hover:text-[#555] duration-200 ease-in-out'>30-JavaScript Projects</h1>
                  <p className='text-lg text-[#98A2B3]'>April 2024</p>
                </li>
                </a>
              </ul>

             </div>
             
    </div>
  
  )
}

export default Works