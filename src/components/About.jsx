import React from 'react'
import img from '../assestes/02.jpg'
import salehprofile from '../assestes/persons-img/salehBayat.jpg'
import alirezaprofile from '../assestes/persons-img/alirezadashti.jpg'
import esiprofile from '../assestes/persons-img/mhesfahani.jpg'
import stars from '../assestes/icons/stars.png'
import quotDown from '../assestes/icons/quote-down.png'

function About() {
  return (

    
      <div name="About"  className='w-full h-full relative'>
        {/* background Images and abstracts */}
         <img className='w-full md:h-screen h-full lg:object-cover lg:rounded-3xl  ' src={img} alt="" /> 
         
         <div className='w-full flex flex-col items-center text-center absolute top-[80px] left-[50%]  -translate-x-[50%] '>
          <div className='w-full'>
            <h1 className='md:text-4xl text-3xl font-bold text-white my-2'>Testimonials That</h1>
            <h1 className='md:text-4xl text-3xl font-bold text-white  my-2'>Speak to <span className='text-[#FD853A]'>My Results</span></h1>
            <p className='text-[#b6b6b6] md:max-w-[720px]  max-w-[350px] mt-6 mx-auto text-sm md:text-lg'>🌟 Hear from satisfied clients who've experienced my results firsthand. These testimonials speak to the quality and impact of my work. Discover why clients trust me for their front-end development, web design, and photography needs.</p>
          </div>

          {/* peoples comment and feedbacks */}
          <div className='w-full h-full flex justify-center my-[40px] md:my-[80px] md:flex-nowrap flex-wrap'>
          
            {/* cardfeed one */}
            <div className='md:w-[550px] sm:w-[60%] w-[90%] h-[55vh] md:h-[250px] bg-[#ffffff1c] rounded-xl m-2 grid grid-flow-row grid-rows-2 hover:scale-105 duration-200 ease-in-out backdrop-blur-sm'>
              <div className='w-full flex justify-between items-center'>
                <div className='flex flex-col'>
                   <div className='flex items-center pt-8 '>
                   <img className='w-[60px] rounded-full mx-4' src={salehprofile} alt="profile-img" />
                      <div className='text-start'>
                      <a target='_blank' href="https://www.linkedin.com/in/salehbayat/">
                        <h6 className='font-bold text-lg hover:cursor-pointer text-[#ffffff] hover:text-[#ffffffc0] duration-300 ease-out'>Saleh Bayat</h6>
                        </a>
                        <p className='text-[#ffffff]'>AR/VR</p>
                      </div>
                   </div>
                   <div className='flex items-center px-4 py-2 '>
                   <img className='w-[120px]' src={stars} alt="" />
                   <p className='text-white'>5.0</p>
                   </div>
                </div>
                <img className='w-[100px]' src={quotDown} alt="" />
              </div>
              
                <p className='text-white text-sm p-4 text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, deserunt. Minima, fugiat adipisci explicabo ipsam hic eos, cum reiciendis eveniet rerum accusantium temporibus iste. Nostrum hic necessitatibus veniam voluptas laboriosam.</p>
              
            </div>

            
            {/* cardfeed two */}
            <div className='md:w-[550px] sm:w-[60%] w-[90%] h-[55vh] md:h-[250px] bg-[#ffffff1c] rounded-xl m-2 grid grid-flow-row grid-rows-2 hover:scale-105 duration-200 ease-in-out backdrop-blur-sm'>
              <div className='w-full flex justify-between items-center'>
                <div className='flex flex-col'>
                  
                  <div className='flex items-center pt-8 '>
                   <img className='w-[60px] rounded-full mx-4' src={alirezaprofile} alt="profile-img" />
                      <div className='text-start'>
                      <a target='_blank' href="https://www.linkedin.com/in/ardashti/">
                        <h6 className='font-bold text-lg hover:cursor-pointer text-[#ffffff] hover:text-[#ffffffc0] duration-300 ease-out'>Alireza Dashti1</h6>
                        </a>
                        <p className='text-[#ffffff]'>Construction Management engineer</p>
                      </div>
                   </div>
                   <div className='flex items-center px-4 py-2 '>
                   <img className='w-[120px]' src={stars} alt="" />
                   <p className='text-white'>5.0</p>
                   </div>
                </div>
                <img className='w-[100px]' src={quotDown} alt="" />
              </div>
              
                <p className='text-white text-sm p-4 text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, deserunt. Minima, fugiat adipisci explicabo ipsam hic eos, cum reiciendis eveniet rerum accusantium temporibus iste. Nostrum hic necessitatibus veniam voluptas laboriosam.</p>
              
            </div>

           
            {/* cardfeed three */}
            <div className='md:w-[550px] sm:w-[60%] w-[90%] h-[55vh] md:h-[250px] bg-[#ffffff1c] rounded-xl m-2 grid grid-flow-row grid-rows-2 hover:scale-105 duration-200 ease-in-out backdrop-blur-sm'>
              <div className='w-full flex justify-between items-center'>
                <div className='flex flex-col'>
                   <div className='flex items-center pt-8 '>
                   <img className='w-[60px] rounded-full mx-4' src={esiprofile} alt="profile-img" />
                      <div className='text-start'>
                      <a target='_blank' href="https://www.linkedin.com/in/mhesfahani97/">
                        <h6 className='  font-bold text-lg hover:cursor-pointer text-[#ffffff] hover:text-[#ffffffc0] duration-300 ease-out'>Mohammad Hosein Esfahani</h6>
                        </a>
                        <p className='text-[#ffffff] '>DevOps engineer</p>
                      </div>
                   </div>
                   <div className='flex items-center px-4 py-2 '>
                   <img className='w-[120px]' src={stars} alt="" />
                   <p className='text-white'>5.0</p>
                   </div>
                </div>
                <img className='w-[100px]' src={quotDown} alt="" />
              </div>
              
                <p className='text-white text-sm p-4 text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, deserunt. Minima, fugiat adipisci explicabo ipsam hic eos, cum reiciendis eveniet rerum accusantium temporibus iste. Nostrum hic necessitatibus veniam voluptas laboriosam.</p>
              
            </div>
          </div>
         </div>
           
{/* bg-image in tablet screen */}
<img className='md:hidden w-full -mt-4 h-[1000px]  object-cover rounded-b-3xl ' src={img} alt="" /> 

      </div>

   
  )
}

export default About