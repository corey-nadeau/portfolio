import React from 'react'
import profpic from '../assets/profilePic.jpeg'
import SimpleImageSlider from "react-simple-image-slider"
import Cubed from './Cubed'
import { slider1, slider2, bgSlider } from '../config/SliderData'

function Landing() {
  
 

  // styled with tailwindcss
  return (
    <div>
      <div>
      <div className='hidden-mobile md:fixed -z-10'><SimpleImageSlider
            width={3840}
            height={2160}
            images={bgSlider}
            showBullets={false}
            showNavs={false}
            autoPlay={true} 
               autoPlayDelay = {10}
         /></div>
      <div className='md:pb-64 2xl:pt-96 items-center'>
        {/* bio */}
        <div className='md:flex'>
          <div className='text-white md:w-full text-center mt-20 md:my-48 md:mx-44 bg-opacity-70 border-2 border-black lg:shadow-black lg:shadow-2xl p-8 bg-black md:rounded-xl flex'>I’m 
            Corey Nadeau, a Network Administrator with a strong focus on delivering robust technical solutions and ensuring seamless system operations. My expertise spans a wide range 
            of IT infrastructure technologies, including Proxmox, TrueNAS, Synology, Windows, and Linux, as well as Active Directory, cable and network management, and virtual 
            machine (VM) administration. I thrive in troubleshooting complex issues and optimizing network performance to support organizational goals.
            Currently, I’m advancing my technical credentials by pursuing A+ and Network+ certifications, deepening my knowledge of hardware and networking principles. Alongside my IT 
            proficiency, I bring a solid foundation in full-stack software engineering, with skills in HTML, CSS, Python, Flask, JavaScript, SQL, and React. My training at Coding Temple 
            equipped me with the ability to build high-quality, scalable applications tailored to project needs.
           </div>
            <img src={profpic} className='lg:max-w-lg border-2 border-black lg:shadow-black lg:mr-56 lg:rounded-3xl pb-2 lg:pb-0 bg-black object-cover'></img>
            </div>
          </div>
        


        {/* fam */}
        <div className=' md:pt-36 md:pl-24 md:items-center'>
          <div className='md:flex'>
            <div className='my-auto items-center md:ml-48 bg-black border-2 border-black lg:shadow-black lg:shadow-2xl'>
            <SimpleImageSlider
            style={{ margin: '0 auto', maxWidth: '100%' }}
            width={360}
            height={500}
            images={slider1}
            showBullets={true}
            showNavs={true}
            autoPlay={true} 
               autoPlayDelay = {5}
         />
            </div>

          <div className='text-white md:w-full text-center md:m-48 md:mx-44 bg-opacity-70 p-12 bg-black md:rounded-xl flex border-2 border-black lg:shadow-black lg:shadow-2xl'>I am a proud husband and father of four children. 
          My wife, Kayleen, is a medical insurance specialist with extensive experience in the healthcare industry. Kayleen is passionate about helping people navigate the 
          complex world of medical insurance and ensuring that they receive the care they need. Kayleen and I have four children: Marrissa, Corey Jr., Isaac, and Cloud. 
          Marrissa is an avid reader and enjoys writing her own stories. Corey Jr. is a talented musician who plays the trumpet and writes his own songs. Isaac is a budding artist 
          who loves to draw and paint, while Cloud is a curious toddler who loves to explore his surroundings. As a family, the Nadeaus enjoy spending time together, whether 
          it's playing board games, going camping, or simply enjoying each other's company.
          </div><Cubed />
        </div>


        {/* about */}
        <div className='md:flex md:pt-72'>
          <div className='text-white md:w-full text-center md:my-64 md:mx-44 bg-opacity-70 p-8 bg-black md:rounded-xl flex border-2 border-black lg:shadow-black lg:shadow-2xl'>I 
            am an avid outdoorsman who enjoys spending 
          time hunting, mountain biking, and exploring nature with my family. I am passionate about the great outdoors and believe that spending time in nature is 
          essential for maintaining a healthy mind and body. When I'm not working as an I.T. Tech, or software engineer, I can often be found embarking on outdoor 
          adventures with my wife and children. As a family, we enjoy hunting for deer and other game in the fall, mountain biking on local trails, and hiking in the 
          nearby woods. I am also an experienced camper and enjoy taking my family on camping trips to explore new areas and experience the wonders of the great 
          outdoors. Through my outdoor activities, I have developed a deep appreciation for nature and the beauty of the world around us. I believe that spending time 
          outdoors is not only good for the body, but also for the soul, and I encourage everyone to get outside and explore the natural world around you.
          </div>
            
          <div className='md:my-auto md:items-center md:mr-48 bg-black border-2 border-black lg:shadow-black lg:shadow-2xl'>
            <SimpleImageSlider
            style={{ margin: '0 auto', maxWidth: '100%' }}
            width={360}
            height={500}
            images={slider2}
            showBullets={true}
            showNavs={true}
            autoPlay={true} 
               autoPlayDelay = {5}
         />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing