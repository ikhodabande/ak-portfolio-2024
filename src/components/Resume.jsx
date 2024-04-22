import React from 'react'
import rent from '../assestes/rent.png'
import portfolio from '../assestes/portfolio.png'

function Resume() {

  const handlePortfolio =()=>{
    console.log('hello here')
  }
  return (
  
      <div id='Portfolio' className='mb-[80px] w-full h-full bg-white'>

        
      <div className='flex flex-col mx-8 my-10'>
      <h1 className='md:text-5xl text-3xl text-[#344054] font-bold'>Lets have a look at </h1>
        <div className='flex justify-between md:'>
          <h1 className='md:text-5xl text-[#344054] font-bold text-3xl '><span className='text-[#FD853A]'>my Portfolio</span> </h1>
          <button onClick={handlePortfolio} 
          className='text-white bg-[#FD853A] font-semibold md:py-2 md:px-6 md:text-base rounded-full text-sm px-4 py-2 hover:bg-[#fc8f4b] hover:shadow-md '>See all</button>
        </div>



        <div className='h-full flex justify-center items-center flex-wrap my-10'>

        <div className='mx-4 hover:scale-105 duration-200 ease-in-out hover:cursor-pointer hover:z-50 hover:shadow-2xl shadow-black rounded-3xl '>
        <div className='absolute  w-[500px] md:h-[280px] lg:h-[350px] bg-gradient-to-t from-[#000000bf] rounded-3xl text-[#dfdfdf] p-6 text-4xl content-end font-bold'>My Oldest Portfolio</div>
          <img className=' md:h-[280px] lg:h-[350px] border rounded-3xl object-cover ' src={portfolio} style={{width:'500px'}} alt="" />
        </div>
        
        <div className='mx-4 hover:scale-105 duration-200 ease-in-out hover:cursor-pointer hover:z-50 hover:shadow-2xl shadow-black rounded-3xl '>
        <div className='absolute  w-[500px] md:h-[280px] lg:h-[350px] bg-gradient-to-t from-[#000000bf] rounded-3xl text-[#dfdfdf] p-6 text-4xl content-end font-bold'>My Oldest Portfolio</div>
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
            <button className='mx-2 bg-[#F2F4F7] py-2 px-4 rounded-full hover:bg-[#ffffff] shadow-sm hover:shadow-md' >Glassmorphism</button>
          </div>
        </div>
        <div className='my-10 flex flex-col items-center justify-center '>
          <h1 className='text-2xl font-bold text-center'>WEEKAWAY - Lorem ipsum dolor sit amet.</h1>
          <p className='max-w-[500px] line-clamp-3 text-wrap break-words text-center mt-4 text-[#3b3b3b]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, aliquid maiores sequi obcaecati eos dignissimos adipisci nam numquam quasi sapiente ex, quod sunt ducimus voluptates deserunt nesciunt beatae aspernatur delectus eveniet corporis? Recusandae laborum ex quaerat fuga repudiandae quia asperiores. Quibusdam incidunt aliquam, deleniti omnis quidem voluptas optio animi tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem est blanditiis quae minus nam asperiores quisquam sapiente sed harum ipsa.</p>
        </div>
      </div>

    </div>
 
  )
}

export default Resume