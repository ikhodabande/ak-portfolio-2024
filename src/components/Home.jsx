import React, { useState } from 'react'
import profile from '../assestes/profileImg.png'
import img from '../assestes/02.jpg'
import hoverImg from '../assestes/Frame 68.png'
import { Link } from 'react-scroll'
import arrow from '../assestes/icons/up right.png'
import stars from '../assestes/icons/stars.png'
import quotup from '../assestes/icons/quote-up.png'
import { TypeAnimation } from 'react-type-animation'

function Home() {
 const[Portfolio, setPortfolio] = useState(false)
 const[Portfolio2, setPortfolio2] = useState(false)
 const[ProfileImg, setProfileImg] = useState(false)
  
 const handlePortfolio2 = () => setPortfolio2(!Portfolio2);
 const handlePortfolio = () => setPortfolio(!Portfolio);
 const handleProfileImg = () => setProfileImg(!ProfileImg);

  return (

 <section>
     <div  id='Home' className='w-full sm:h-screen h-[610px] bg-white relative'>

{/* my name and titles */}
<div className={`w-full flex flex-col justify-center items-center md:mt-[40px] sm:mt-4  ${ProfileImg?'translate-y-[50vh] scale-50 duration-500 ease-in-out':'translate-y-[0vh] scale-100 duration-300 ease-in-out'}`}  >
<p className='border-2 hidden sm:flex border-gray-600 rounded-full py-1 px-5 '>Hello!</p>
<h1 className='hidden sm:flex md:text-6xl sm:text-4xl text-3xl font-bold sm:mt-4 '>I`m <span className='text-orange-500'>Amir Khodabande</span>,</h1>
<h1 className='hidden sm:flex md:text-7xl sm:text-4xl text-2xl font-bold'>
<TypeAnimation
      sequence={[
        'Front-end Developer',
        5000, 
        'Photographer',
        1000,
        'Web Design & Develope',
        1000,
        'Javascript Developer',
        1000
      ]}
      wrapper="span"
      speed={5}
      repeat={Infinity}
    />
</h1>

</div>


<div className={`'w-full grid grid-cols-1 md:grid-cols-3 text-center px-2 md:px-20 absolute left-0 right-0' ${ProfileImg?'top-[40%] md:top-60 left-0 right-0 duration-200 ease-in-out':'top-[50%] md:top-80 left-0 right-0 duration-200 ease-in-out'}`}>
  <div className='max-w-[250px] hidden md:flex flex-col items-start'>
    <img src={quotup} style={{width:'20px'}} alt="" />
    <p className='text-start line-clamp-3 pt-2'>Amir Mohammad's exceptional website design guarantees the success of our website.</p>
  </div>
  <div className='md:flex hidden'></div>
  <div className=' flex-col justify-center items-end z-50 hidden md:flex'>
    <img src={stars} alt="" style={{width:'100px'}} />
    <h6 className='font-bold text-4xl pt-2'>1 Year</h6>
    <p className='font-bold text-sm '> Exprience</p>
  </div>
</div>




{/* orange background and profile-image and portfolio and hireMe option */}

   <div className='w-full absolute top-[35%]'>
    
   <div className='w-[90%] h-[345px] md:w-[50%] md:h-[345px] lg:w-[45%] lg:h-[345px] bg-orange-400 mx-auto rounded-t-full '>
 
  <div onMouseEnter={handleProfileImg} onMouseLeave={handleProfileImg}  className='w-full rounded-t-full'>
  <img className={`absolute -top-[50%]  left-[48%] -translate-x-[50%] object-cover  ${ProfileImg?'opacity-100 scale-100 duration-300 ':'transition duration-300  transform scale-50 opacity-0'}`}  src={hoverImg} style={{width:'900px'}} alt="" />

 
  </div>
{/* Profile Image */}
   
  <img className=' absolute sm:-top-[40%] -top-[50%] right-[51%]  translate-x-[50%]' src={profile} alt="" style={{width:'360px'}} />
  

  {/*name in mobile view  */}
  <div className='absolute top-[20%] text-center sm:hidden'>
<p className='text-start font-semibold'>Hello!</p>
<h1 className='text-3xl font-bold'>I`m <span className='text-orange-500'>Amir Khodabande</span>,</h1>
<h1 className='text-2xl font-bold'>
<TypeAnimation
      sequence={[
        'Front-end Developer',
        5000, 
        'Photographer',
        1000,
        'Web Design & Develope',
        1000,
        'Javascript Developer',
        1000
      ]}
      wrapper="span"
      speed={5}
      repeat={Infinity}
    />
</h1>

</div>

  


  <div className='w-[300px] md:w-[500px] h-[60px]  backdrop-blur-sm rounded-full flex justify-around items-center border-[#0000002b] border-2 absolute bottom-[50%] right-[50%]  translate-x-[50%] translate-y-[50%]'>



<Link onMouseEnter={handlePortfolio} onMouseLeave={handlePortfolio} className=' text-xl rounded-full py-3 px-12 hover:bg-orange-400 hover:flex-1 text-black  duration-200 ease-in flex items-center hover:justify-end  hover:cursor-pointer'  to='Portfolio' duration={500} spy={true} smooth={true}>   
      Portfolio 
     <img src={arrow} className={`${Portfolio?'flex':'hidden'}`}   style={{width:"30px"}} alt="" />
</Link>

<Link  onMouseEnter={handlePortfolio2} onMouseLeave={handlePortfolio2}
  className=' text-xl rounded-full py-3 px-12 hover:bg-orange-400 hover:flex-1 text-black duration-200 ease-in hover:cursor-pointer flex' to='Hire' duration={500} spy={true} smooth={true}>
      Hire
      <img src={arrow} className={`${Portfolio2?'flex':'hidden'}`}   style={{width:"30px"}} alt="" />
 </Link>
 </div>
 
</div>

<div className='w-full h-[150px] rounded-t-3xl'>
  <img className='w-full h-full object-cover rounded-t-3xl ' src={img} alt="" />
</div>
</div>
</div>
 </section>
  )
}

export default Home