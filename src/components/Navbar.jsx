import React, { useState } from 'react'
import Logo from '../assestes/Frame 55.png'
import { Link } from 'react-scroll'



function Navbar() {
  const[Profile, setProfile] = useState(false)

  const handleLogo = () => setProfile(!Profile);

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

      <div className='flex sm:hidden pt-8 justify-between items-center'>
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
      <div className='mr-6'>hsdf</div>
      </div>

    </div>

    
  )
}

export default Navbar