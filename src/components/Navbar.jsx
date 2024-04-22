import React, { useState } from 'react'
import Logo from '../assestes/Frame 55.png'
import { Link } from 'react-scroll'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

function Navbar() {
  const[Profile, setProfile] = useState(false);
  const[menu, setMenu] = useState(false);

  const handleLogo = () => setProfile(!Profile);

  const handleMenu = () =>{
    setMenu(!menu);
  } 

  return ( 
    <div className='w-full h-[70px]'>
      <div name='Navbar' className='w-[80%] h-[70px] hidden  bg-black mx-auto rounded-full mt-6 text-white sm:flex lg:justify-center items-center lg:text-lg z-50'>
     <ul className=' hidden lg:flex lg:mr-auto lg:ml-2'>
      
        <Link  activeClass='active' to='Home' spy={true} duration={500} smooth={true} offset={-150} ><li className='active:bg-orange-500  hover:bg-gray-500  rounded-full hover:cursor-pointer'>Home</li></Link>
      
      
         <Link activeClass='active' to='About' spy={true} duration={500} smooth={true}><li className=' active:bg-orange-500 hover:bg-gray-500  rounded-full hover:cursor-pointer'>About </li></Link>
        
      
         <Link activeClass='active' to='Services' spy={true} duration={500} smooth={true} ><li className=' active:bg-orange-500 hover:bg-gray-500  rounded-full hover:cursor-pointer'>Service</li></Link>
         
     </ul>

      <div onMouseEnter={handleLogo} onMouseLeave={handleLogo} className='hidden sm:flex justify-start ml-6 lg:justify-center items-center lg:ml-0 '>
        <img  src={Logo} alt="" style={{width:'40px'}}/>
        <div className=''>
          {
            Profile
             ?
            <a className='hover: cursor-pointer' href="https://www.linkedin.com/in/amikhodabande/" target="_blank" rel="noreferrer">
            <div className='mx-[4.5px] opacity-0 ease-in-out hover:opacity-100 duration-500'>
              <p className='text-xs text-[#b2b2b2]'>Made By</p>
              <h1 className='text-lg font-bold' >Amir Khodabande</h1>
            </div>
            </a>
            :
            <h1 className='text-xl mx-[10px] font-bold opacity-100 duration-500 ease-in-out hover:opacity-0 '>iKHODABANDE
            </h1>
          }
           </div>
          
      
     
      </div>
      


      <ul className='hidden  lg:flex ml-auto mr-2'>
        
           <Link activeClass='active' to='Resume' spy={true} duration={500} smooth={true} ><li className=' active:bg-orange-500 hover:bg-gray-500  rounded-full hover:cursor-pointer'>Resume</li></Link>
           
       
           <Link activeClass='active' to='Project' spy={true} duration={500} smooth={true} > <li className=' active:bg-orange-500 hover:bg-gray-500  rounded-full hover:cursor-pointer'>Project</li> </Link>
           
        
           <Link activeClass='active' to='Contact' spy={true} duration={500} smooth={true} ><li className=' active:bg-orange-500 hover:bg-gray-500  rounded-full hover:cursor-pointer'>Contact</li> </Link>
           
      </ul>
      </div>
      {/* on mobile view */}

      <div className='sm:hidden pt-8 items-center'>
        <div className='flex justify-between'>
           <div onMouseEnter={handleLogo} onMouseLeave={handleLogo} className='flex justify-start ml-6 lg:justify-center items-center lg:ml-0 '>
        <img  src={Logo} alt="" style={{width:'30px'}}/>
        <div className=''>
          {
            Profile
             ?
            <a className='hover: cursor-pointer' href="https://www.linkedin.com/in/amikhodabande/" target="_blank" rel="noreferrer">
            <div className='mx-[4.5px] opacity-0 ease-in-out hover:opacity-100 duration-500'>
              <p className='text-xs text-[#424242]'>Made By</p>
              <h1 className='text-md font-bold' >Amir Khodabande</h1>
            </div>
            </a>
            :
            <h1 className='text-md mx-[10px] font-bold opacity-100 duration-500 ease-in-out hover:opacity-0 '>iKHODABANDE
            </h1>
          }
           </div>
          
      
      </div>

      {/* hamberger icon */}  
     <button className='mr-6 z-20' onClick={handleMenu} >
     {
        menu ? <IoCloseSharp className='text-lg text-white' /> : <GiHamburgerMenu  className='text-lg '/>
      }
     </button>
        </div>
     


     {/* mobileMenu */}
       
        <ul className={menu?'flex flex-col w-screen h-screen bg-[#000000de] z-10 text-white text-center absolute top-0 py-[20%] text-2xl backdrop-blur-md':'hidden'}>
          <li className='py-6 px-10 hover:shadow-xl hover:outline-whitehover:scale-105 duration-200 ease-in-out hover:bg-[#0505054f] hover:cursor-pointer'>Home</li>
          <li className='py-6 px-10 hover:shadow-xl hover:outline-white hover:scale-105 duration-200 ease-in-out hover:bg-[#0505054f] hover:cursor-pointer'>About</li>
          <li className='py-6 px-10 hover:shadow-xl hover:outline-white hover:scale-105 duration-200 ease-in-out hover:bg-[#0505054f] hover:cursor-pointer'>Services</li>
          <li className='py-6 px-10 hover:shadow-xl hover:outline-whitehover:scale-105 duration-200 ease-in-out hover:bg-[#0505054f] hover:cursor-pointer'>Resume</li>
          <li className='py-6 px-10 hover:shadow-xl hover:outline-white hover:scale-105 duration-200 ease-in-out hover:bg-[#0505054f] hover:cursor-pointer'>Projects</li>
          <li className='py-6 px-10 hover:shadow-xl hover:outline-whiteorder-none outline-none  hover:scale-105 duration-200 ease-in-out hover:bg-[#0505054f] hover:cursor-pointer'>Contact</li>
        </ul>
       
      </div>

    </div>

    
  )
}

export default Navbar