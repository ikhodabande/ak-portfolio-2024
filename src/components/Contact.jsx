import React from 'react'
import Logo from '../assestes/Frame 55.png'
import sendIcon from '../assestes/icons/Frame 332.png'
import { Link } from 'react-scroll'

function Contact() {
  return (
    
      <div id='Contact' className='w-full md:h-[90vh] h-full rounded-t-3xl bg-[#272727] flex flex-col items-center'>
        <div className='flex flex-col justify-between'>
           <div className='w-full max-w-[90%] flex justify-between items-center  my-20 mx-10 md:mx-0'>
            <h1 className='md:text-5xl text-2xl font-bold text-white'>Lets Connect there</h1>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/amikhodabande/">
            <button className='bg-[#FD853A] md:text-xl text-xs py-3 md:px-10 px-7 mx-4 md:mx-0 rounded-full  text-white hover:bg-white duration-200 ease-in hover:text-[#272727] hover:shadow-md'>Hire me</button>
            </a>
           </div>
           <div className='max-w-[1400px] w-full h-full md:h-[45vh] grid md:grid-cols-4 grid-cols-1 gap-8 text-center text-white border-t border-b py-12 '>
            {/* col1 */}
            <div className='pt-8 px-10 md:px-0' > 
              <div className='flex items-center '>
              <img src={Logo} alt="" style={{width:'40px'}}/>
             <h1 className='text-xl ml-2 font-bold'>iKHODABANDE</h1>
              </div>
               <p className='py-4 text-start text-sm max-w-[350px]'>🔍 On the lookout for opportunities to collaborate, grow, and contribute to innovative projects. Let's connect and explore how we can create impactful solutions together. Whether it's refining existing projects or venturing into new territories, I'm ready to bring creativity, dedication, and a hunger for learning to the table. Let's code the future together! 💡💻</p>

               {/* icons */}
               <div></div> 
            </div>

            {/* col2 */}
            <div className='md:block hidden'>
              <h6 className='font-semibold  text-[#FD853A] px-5 pb-4 text-end '>Navigations</h6>
              <div className='flex justify-end'>
              <ul className='text-start leading-[8px]'>
                <li>Home</li>
                <li>About Us</li>
                <li>Service</li>
                <li>Resume</li>
                <li>Project</li>
              </ul>
              </div>
            </div>
             {/* col3 */}
             <div className=''>
              <h6 className='font-semibold text-start text-[#FD853A] px-10 pb-2 md:pb-4'>Contact</h6>
              <ul className='text-start leading-[8px]'>
                <li><a href="tel:+98919-661-0079" className='hover:text-[#ffffffb5]'>&#9743; Call Me</a></li>
                <li >Amimhmkh@gmail.com</li>
                <li><a className='hover:text-[#ffffffb5]' href="https://ikhodabande.ir">www.ikhodabande.ir</a></li>
              </ul>

              <h6 className='font-semibold text-start text-[#FD853A] px-10 pb-2 mt-10 md:hidden'>Navigations</h6>
              
              <ul className='text-start leading-[8px] md:hidden'>
              <Link className='hover:cursor-pointer' activeClass='active' to='Home' spy={true} duration={500} smooth={true} offset={-150} >
                <li>Home</li>
                 </Link>
                 <Link className='hover:cursor-pointer' activeClass='active' to='About' spy={true} duration={500} smooth={true}>
                <li>About Us</li>
                </Link>
                <Link className='hover:cursor-pointer' activeClass='active' to='Services' spy={true} duration={500} smooth={true} >
                <li>Service</li>
                </Link>
                <Link className='hover:cursor-pointer' activeClass='active' to='Resume' spy={true} duration={500} smooth={true} >
                <li>Resume</li>
                </Link>
                <Link className='hover:cursor-pointer' activeClass='active' to='Project' spy={true} duration={500} smooth={true} >
                <li>Project</li>
                </Link>
              </ul>
             
            </div>

            {/* col4 */}
            <div className='text-start'>
              <p className='font-semibold text-[#FD853A] pb-6 px-10 md:px-0'>Get the latest information</p>
              <div className='px-10 md:px-0 flex'>
                <input className='outline-none bg-[#fffffff1] py-2 pl-4 pr-20 rounded-xl text-black placeholder-black' type="email" placeholder='Email Address'/>
                <a href="www.amimhmdkh@gmail.com" target="_blank" rel="noreferrer">
                <img className='-ml-4 h-full w-[80px]' src={sendIcon}  alt="" />
                </a>
              </div>
            </div>
           </div>
           <div className='w-full md:max-w-[1500px] grid grid-cols-2 md:gap-8'>
            <p className='text-white pl-2 py-10 md:pt-20 md:text-start text-center text-sm md:text-base  max-w-[180px] sm:max-w-full'>Copyright  2024 Khodabande. All Rights Reserved.</p>

            <p className='text-white py-10 md:pt-20  md:text-end text-center text-sm max-w-[180px] sm:max-w-full'>User Terms & Conditions | Privacy Policy
            </p>
           </div>
        </div>
      </div>

    
  )
}

export default Contact