import React from 'react'
import img from '../assestes/02.jpg'
import frontImg from '../assestes/projects/rent.png'
import WebImg from '../assestes/projects/netflix.png'
import userImg from '../assestes/projects/user.png'
import arrowIcon from '../assestes/icons/arrowIcon.png'
import Slides from './Slides'
import cobit from '../assestes/projects/CoBit preview.png'
import weekaway from '../assestes/projects/Weekaway.png'
import usermanagement from '../assestes/projects/Usermanagement.png'


const slides = [
  WebImg ,
  usermanagement,
  weekaway,
  cobit,
]

function Services() {
  return (
     <>
    {/* Mobile view services */}
    <div id='Services'  name='Services' className='w-full h-screen  bg-white relative sm:hidden -mt-[100px]'>
    <h1 className='absolute left-5 top-0 z-10 text-white font-bold md:text-5xl text-4xl sm:pt-4 pt-10'>My <span className='text-orange-500'>Services</span></h1>
         <main className='App absolute top-[55%] -translate-y-[50%]'>
            <div className='max-w-lg'>
              <Slides  autoSlide={false} autoSlideInterval={1000}>
                
              {
                slides.map((s)=>(
                 <img className='rounded-3xl p-2' src={s} />
                ))
              }
              </Slides>
            </div>
          </main> 

          {/* bg-image in tablet screen */}
<img className=' lg:hidden w-full h-full object-cover rounded-b-3xl ' src={img} alt="" /> 


    </div>


     <div id='Services'name='Services' className='hidden sm:block w-full sm:h-full h-screen relative lg:-mt-10 -mt-[100px]'>

{/* background Images and abstracts */}
<img className='w-full  lg:h-screen h-screen lg:object-cover lg:rounded-b-3xl' src={img} alt="" /> 

{/* title and paragraphs  */}
<div className='w-full  flex absolute top-4 justify-between px-8 lg:px-[80px] '>
<h1 className='text-white font-bold md:text-5xl text-4xl sm:pt-4 pt-10'>My <span className='text-orange-500'>Services</span></h1>
<p className='text-white pt-4  text-sm hidden sm:flex'>Crafting visually stunning websites,<br /> intuitive interfaces, and captivating visuals to elevate your digital presence. <br /> Let's collaborate to bring your vision to life!</p>
</div>

<Slides></Slides>


{/* cards and abstracts */}
<div className='flex w-full max-w-[1200px]  h-[50%]  justify-around lg:flex-nowrap flex-wrap items-center absolute top-[50%] -translate-y-[80%]  lg:-translate-y-[40%] left-[50%] -translate-x-[50%] bg-transparent '>

  {/* card 1 */}
 <div className='w-[80%] md:w-[416px] sm:h-[400px] h-[350px] lg:h-[508px] bg-[#ffffff16] backdrop-blur-sm rounded-[5%] text-white border border-[#ffffff60] my-4 mx-2 sm:hover:scale-105 duration-200 ease-in hover:cursor-pointer hover:backdrop-blur-md hover:shadow-xl relative'>
   <h2 className='text-xl p-8'>Front-end Developer</h2>
   <div className='border border-[#ffffff5c]'></div>
   <div className='w-[18vw] h-[20vh] absolute bottom-[47%] translate-y-[30%] bg-[#ffffff68] rounded-3xl left-[50%] -translate-x-[50%] md:flex hidden' >
   </div>
   <div className='w-[22vw] h-[20vh] absolute bottom-[50%] translate-y-[50%] bg-[#ffffffe7] rounded-3xl left-[50%] -translate-x-[50%] md:flex hidden' >
   </div>
   <div className='w-full object-cover mx-auto absolute bottom-0 rounded-3xl left-[50%] -translate-x-[50%]' >
     <img className='rounded-3xl shadow-md' src={userImg} alt="" /> 
     <img className='absolute right-1 bottom-1 hover:animate-pulse' src={arrowIcon} style={{width:'80px'}} alt="" />
   </div>
 </div>

  {/* card 2 */}
 <div className='w-[80%] md:w-[416px] h-[400px] lg:h-[508px] bg-[#ffffff16] backdrop-blur-sm rounded-[5%] text-white border border-[#ffffff60] my-4 mx-2 sm:hover:scale-105 duration-200 ease-in hover:cursor-pointer hover:backdrop-blur-md hover:shadow-xl relative'>
   <h2 className='text-xl p-8'>Web Design</h2>
   <div className='border border-[#ffffff5c]'></div>
   <div className='w-[18vw] h-[20vh] absolute bottom-[50%] translate-y-[40%] bg-[#ffffff68] rounded-3xl left-[50%] -translate-x-[50%] md:flex hidden' >
   </div>
   <div className='w-[22vw] h-[20vh] absolute bottom-[50%] translate-y-[50%] bg-[#ffffffe7] rounded-3xl left-[50%] -translate-x-[50%] md:flex hidden ' >
   </div>
   <div className='w-full  object-cover mx-auto absolute bottom-0 rounded-3xl left-[50%] -translate-x-[50%] ' >
     <img className='w-full h-[300px] object-cover rounded-3xl shadow-md' src={WebImg} alt="" /> 
     <img className='absolute right-1 bottom-1 hover:animate-pulse' src={arrowIcon} style={{width:'80px'}} alt="" />
   </div>
 </div>

  {/* card 3 */}
 <div className='w-[80%] md:w-[416px] sm:h-[400px] h-[350px] lg:h-[508px] bg-[#ffffff16] backdrop-blur-sm rounded-[5%] text-white border border-[#ffffff60] my-4 mx-2 sm:hover:scale-105 duration-200 ease-in hover:cursor-pointer hover:backdrop-blur-md hover:shadow-xl relative'>
   <h2 className='text-xl p-8 '>UI Design</h2>
   <div className='border border-[#ffffff5c]'></div>
   <div className='w-[18vw] h-[20vh] absolute bottom-[47%] translate-y-[30%] bg-[#ffffff68] rounded-3xl left-[50%] -translate-x-[50%] md:flex hidden' >
   </div>
   <div className='w-[22vw] h-[20vh] absolute bottom-[50%] translate-y-[50%] bg-[#ffffffe7] rounded-3xl left-[50%] -translate-x-[50%] md:flex hidden' >
   </div>
   <div className='w-full object-cover mx-auto absolute bottom-0 rounded-3xl left-[50%] -translate-x-[50%] ' >
     <img className='rounded-3xl shadow-md' src={frontImg} alt="" /> 
     <img className='absolute right-1 bottom-1 hover:animate-pulse' src={arrowIcon} style={{width:'80px'}} alt="" />
   </div>
 </div>

</div>

{/* bg-image in tablet screen */}
<img className='hidden sm:flex lg:hidden w-full md:h-[400px] h-[920px] object-cover rounded-b-3xl ' src={img} alt="" /> 


 </div> 
  </>
  )
}

export default Services