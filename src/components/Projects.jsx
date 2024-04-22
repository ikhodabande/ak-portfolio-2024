import React from 'react'
import emailIcon from '../assestes/icons/Frame 325.png'
import star from '../assestes/Star 1.png'

function Projects() {
  return (
  
    <div id='Project' className='w-full h-screen bg-white flex flex-col justify-around'>
     
     <div className='md:text-6xl text-3xl font-bold text-center '>
       <h1>Have an Awesome Project</h1>
       <h1 className='my-2'>Idea?<span className='text-[#FD853A]'>Let`s Discuss</span></h1>
     </div>

     <div className='flex items-center justify-center'>
       <div className='w-[90%] md:w-[650px] h-[80px] px-2 text-lg border border-[#1a1a1a46] outline-none rounded-full text-center flex justify-between items-center relative'>
         <div></div>
         <img className='absolute left-2 z-10' src={emailIcon} style={{width:'70px'}} alt="" />
       <input className='md:pl-0 pl-20 absolute sm:text-xl text-sm right-30 md:right-[50%] z-0 border-none outline-none' type="email" placeholder='Enter Email Address' />
       <button className='border border-[#1a1a1a42] py-4 px-10 rounded-full text-white bg-[#FD853A] absolute right-2 hover:bg-[#ff8c45] hover:shadow-md'>Send</button>
       </div>
       <div>

       </div>
     </div>

     <div className='w-full h-[120px] bg-[#FB6514] rounded-3xl '>
        <div className='bg-white w-full flex items-center  overflow-x-scroll scroll md:overflow-x-hidden overflow-y-hidden h-[60px] my-6 -rotate-2 scrollvertical'>
          <img className='w-[30px]' src={star} alt="" />
          <h6 className='px-4 pt-1 text-sm md:text-3xl -rotate-1'>Next.js</h6>
          <img className='w-[30px]' src={star} alt="" />
          <h6 className='px-4 pt-1 text-sm md:text-3xl -rotate-1'> vite.js</h6>
          <img className='w-[30px]' src={star} alt="" />
          <h6 className='px-4 pt-1 text-sm md:text-3xl -rotate-1'>TypeScript</h6>
          <img className='w-[30px]' src={star} alt="" />
          <h6 className='px-4 pt-1 text-sm md:text-3xl -rotate-1'>Responsive</h6>
          <img className='w-[30px]' src={star} alt="" />
          <h6 className='px-4 pt-1 text-sm md:text-3xl -rotate-1'>React</h6>
          <img className='w-[30px]' src={star} alt="" />
          <h6 className='px-4 pt-1 text-sm md:text-3xl -rotate-1'>JavaScript</h6>
          <img className='w-[30px]' src={star} alt="" />
          <h6 className='px-4 pt-1 text-sm md:text-3xl -rotate-1'>Tailwind</h6>
          <img className='w-[30px]' src={star} alt="" />
          <h6 className='px-4 pt-1 text-sm md:text-3xl -rotate-1'>Bootstrap</h6>
          <img className='w-[30px]' src={star} alt="" />
          <h6 className='px-4 pt-1 text-sm md:text-3xl -rotate-1'>Redux</h6>
          <img className='w-[30px]' src={star} alt="" />
        </div>
     </div>
   </div>

   
  )
}

export default Projects