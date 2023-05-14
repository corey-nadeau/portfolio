import React from 'react'
import bg from '../assets/bg1.jpg'
import SimpleImageSlider from "react-simple-image-slider"
import { slider1, slider2, slider3 } from './SliderData'

function Landing() {
  

  // styled with tailwindcss
  return (
    <div>
      <div>
      <img src={bg} className='md:fixed -z-10'/>
      <div className='md:pt-64 items-center'>
        {/* bio */}
        <div className='md:flex'>
          <div className='text-white md:w-full text-center md:my-48 md:mx-44 bg-opacity-70 p-8 bg-black md:rounded-xl flex'>My Name is Corey Nadeau, and I am a full stack software 
          engineer with a focus 
          on HTML, CSS, Python, Flask, JavaScript, SQL, and React. I completed my education at Coding Temple, where I gained expertise in various programming languages and 
          frameworks. I am passionate about developing creative solutions to complex problems and have a proven track record of delivering high-quality code that meets project 
          requirements. I am a team player who enjoys collaborating with others to achieve common goals. I enjoy exploring new technologies and 
          programming languages to expand my skills as a developer.</div>
            <div className='md:my-auto md:items-center md:mr-48 bg-black'>
            <SimpleImageSlider
            style={{ margin: '0 auto', maxWidth: '100%' }}
            width={360}
            height={500}
            images={slider1}
            showBullets={true}
            showNavs={true}
            autoPlay={true} 
               autoPlayDelay = {3}
         />
            </div>
          </div>
        </div>


        {/* fam */}
        <div className=' md:pt-36 md:pl-24 md:items-center'>
          <div className='md:flex'>
            <div className='my-auto items-center md:ml-48 bg-black'>
            <SimpleImageSlider
            style={{ margin: '0 auto', maxWidth: '100%' }}
            width={360}
            height={500}
            images={slider2}
            showBullets={true}
            showNavs={true}
            autoPlay={true} 
               autoPlayDelay = {3}
         />
            </div>

          <div className='text-white md:w-full text-center md:my-48 md:mx-44 bg-opacity-70 p-6 bg-black md:rounded-xl flex'>I am a proud husband and father of four children. 
          My wife, Kayleen, is a medical insurance specialist with extensive experience in the healthcare industry. Kayleen is passionate about helping people navigate the 
          complex world of medical insurance and ensuring that they receive the care they need. Kayleen and I have four children: Marrissa, Corey Jr., Isaac, and Cloud. 
          Marrissa is an avid reader and enjoys writing her own stories. Corey Jr. is a talented musician who plays the trumpet and writes his own songs. Isaac is a budding artist 
          who loves to draw and paint, while Cloud is a curious toddler who loves to explore his surroundings. As a family, the Nadeaus enjoy spending time together, whether 
          it's playing board games, going camping, or simply enjoying each other's company.</div>
        </div>


        {/* about */}
        <div className='md:flex md:pt-12'>
          <div className='text-white md:w-full text-center md:my-64 md:mx-44 bg-opacity-70 p-8 bg-black md:rounded-xl flex'>I am an avid outdoorsman who enjoys spending 
          time hunting, mountain biking, and exploring nature with my family. I am passionate about the great outdoors and believe that spending time in nature is 
          essential for maintaining a healthy mind and body. When I'm not working as a full stack software engineer, I can often be found embarking on outdoor 
          adventures with my wife and children. As a family, we enjoy hunting for deer and other game in the fall, mountain biking on local trails, and hiking in the 
          nearby woods. I am also an experienced camper and enjoy taking my family on camping trips to explore new areas and experience the wonders of the great 
          outdoors. Through my outdoor activities, I have developed a deep appreciation for nature and the beauty of the world around us. I believe that spending time 
          outdoors is not only good for the body, but also for the soul, and I encourage everyone to get outside and explore the natural world around you.
          </div>
            
          <div className='md:my-auto md:items-center md:mr-48 bg-black'>
            <SimpleImageSlider
            style={{ margin: '0 auto', maxWidth: '100%' }}
            width={360}
            height={500}
            images={slider3}
            showBullets={true}
            showNavs={true}
            autoPlay={true} 
               autoPlayDelay = {3}
         />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing