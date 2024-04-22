import React from 'react'
import rent from '../assestes/rent.png'
import portfolio from '../assestes/portfolio.png'

function Resume() {

  const handlePortfolio =()=>{
    console.log('hello here')
  }
  return (
  
      <div id='Portfolio' className='mb-[80px] w-full h-full bg-white'>


      <div className='flex flex-col mx-8 my-10 mt-20'>
      <h1 className='md:text-5xl sm:text-3xl text-2xl text-[#344054] font-bold'>Lets have a look at </h1>
        <div className='flex justify-between md:'>
          <h1 className='md:text-5xl text-[#344054] font-bold sm:text-3xl text-2xl '><span className='text-[#FD853A]'>my Portfolio</span> </h1>
          <button onClick={handlePortfolio} 
          className='text-white bg-[#FD853A] font-semibold md:py-2 md:px-6 md:text-base rounded-full text-sm sm:px-4 px-6 py-2 hover:bg-[#fc8f4b] hover:shadow-md '>See all</button>
        </div>



        <div className='h-full flex justify-center items-center flex-wrap my-10'>

        <div className='mx-4 hover:scale-105 duration-200 ease-in-out hover:cursor-pointer hover:z-50 hover:shadow-2xl shadow-black rounded-3xl relative '>
        <a href="">
        <div className='absolute top-0 w-full md:w-[500px] h-full md:h-[280px] lg:h-[350px] bg-gradient-to-t from-[#000000bf] rounded-3xl text-[#dfdfdf] p-6 md:text-4xl text-2xl content-end font-bold  hover:backdrop-blur-sm duration-500 hover:cursor-pointer'>My Oldest Portfolio</div>
        </a>
          <img className=' md:h-[280px] lg:h-[350px] border rounded-3xl object-cover ' src={portfolio} style={{width:'500px'}} alt="" />
        </div>
        
        <div className='mx-4 mt-2 sm:mt-0  hover:scale-105 duration-200 ease-in-out hover:cursor-pointer hover:z-50 hover:shadow-2xl shadow-black rounded-3xl relative '>
        <a href="">
        <div className='absolute top-0 h-full w-full md:w-[500px] md:h-[280px] lg:h-[350px] bg-gradient-to-t from-[#000000bf] rounded-3xl text-[#dfdfdf] p-6 md:text-4xl text-2xl content-end font-bold hover:backdrop-blur-sm duration-500 hover:cursor-pointer '>WEEKAWAY</div>
        </a>
          <img className='md:h-[280px] lg:h-[350px] border rounded-3xl object-cover' src={rent} style={{width:'500px'}} alt="" />
          </div>
        </div>



        <div>
          <div className='flex '>
          </div>
          <div className='w-full max-w-[500px] md:min-w-full flex justify-center items-center text-xs flex-wrap md:flex-nowrap md:text-base'>
            <button className='my-2 md:my-0 mx-2 bg-[#F2F4F7] py-2 px-4 rounded-full hover:bg-[#ffffff] shadow-sm hover:shadow-md' >Landing Page</button>
            <button className='my-2 md:my-0 mx-2 bg-[#F2F4F7] py-2 px-4 rounded-full  hover:bg-[#ffffff] shadow-sm hover:shadow-md' >Product Design</button>
            <button className='mx-2 bg-[#F2F4F7] py-2 px-4 rounded-full hover:bg-[#ffffff] shadow-sm hover:shadow-md' >Animation</button>
            <button className=' mx-2 bg-[#F2F4F7] py-2 px-4 rounded-full hover:bg-[#ffffff] shadow-sm hover:shadow-md' >Cards</button>
            <button className='my-2 mx-2 bg-[#F2F4F7] py-2 px-4 rounded-full hover:bg-[#ffffff] shadow-sm hover:shadow-md' >Glassmorphism</button>
          </div>
        </div>
        <div className='my-10 flex flex-col items-center justify-center '>
          <h1 className='text-2xl font-bold text-center'>WEEKAWAY - Seamless escapes to unforgettable moments</h1>
          <p className='max-w-[500px] md:max-w-[700px] text-wrap break-words text-center mt-4 text-[#3b3b3b]'>"Welcome to WeekAway, your go-to destination for hassle-free travel planning. At WeekAway, we specialize in curating unforgettable experiences, whether you're seeking a relaxing retreat or an adventure-packed getaway. Our user-friendly platform offers a wide range of options for booking tours and hotels, ensuring that every aspect of your trip is taken care of with ease. Say goodbye to the stress of travel planning and hello to seamless adventures with WeekAway.".</p>
        </div>
      </div>

    </div>
 
  )
}

export default Resume