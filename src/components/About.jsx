import React from 'react'
import img from '../assestes/02.jpg'

function About() {
  return (

    
      <div  className='w-full h-full relative'>
        {/* background Images and abstracts */}
         <img className='w-full md:h-screen h-full lg:object-cover lg:rounded-3xl  ' src={img} alt="" /> 
         
         <div className='w-full flex flex-col items-center text-center absolute top-[80px] left-[50%]  -translate-x-[50%] '>
          <div className='w-full'>
            <h1 className='md:text-4xl text-3xl font-bold text-white my-2'>Testimonials That</h1>
            <h1 className='md:text-4xl text-3xl font-bold text-white  my-2'>Speak to <span className='text-[#FD853A]'>My Results</span></h1>
            <p className='text-[#b6b6b6] md:max-w-[720px]  max-w-[350px] mt-6 mx-auto text-sm md:text-lg'>🌟 Hear from satisfied clients who've experienced my results firsthand. These testimonials speak to the quality and impact of my work. Discover why clients trust me for their front-end development, web design, and photography needs.</p>
          </div>
          <div className='w-full h-full flex justify-center my-[50px] md:my-[80px] md:flex-nowrap flex-wrap'>
            <div className='md:w-[550px] w-[60%] h-[40vh] md:h-[200px] bg-[#ffffff1c] rounded-xl m-2'></div>
            <div className='md:w-[550px] md:h-[200px] w-[60%] h-[40vh] bg-[#ffffff1c] rounded-xl m-2'></div>
            <div className='md:w-[550px] md:h-[200px] w-[60%] h-[40vh] bg-[#ffffff1c] rounded-xl m-2 '></div>
          </div>
         </div>
           
{/* bg-image in tablet screen */}
<img className='md:hidden w-full -mt-4 h-[700px]  object-cover rounded-b-3xl ' src={img} alt="" /> 

      </div>

   
  )
}

export default About