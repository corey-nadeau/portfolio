import React from 'react'
import bg from '../assets/bg1.jpg'
import family from '../assets/cm.jpg'
import cloud from '../assets/fam.jpg'
import hunt from '../assets/hunt.jpg'

function Landing() {

  // styled with tailwindcss
  return (
    <div>
      <div className=''>
      <img src={bg} alt="" className='fixed -z-10'/>
      <div className='pt-64 items-center'>
        {/* bio */}
        <div className='flex'>
          <div className='text-white w-full text-center my-48 mx-44 bg-opacity-70 p-8 bg-black rounded-xl flex'>My Name is Corey Nadeau, and I am a full stack software 
          engineer with a focus 
          on HTML, CSS, Python, Flask, JavaScript, SQL, and React. I completed my education at Coding Temple, where I gained expertise in various programming languages and 
          frameworks. I am passionate about developing creative solutions to complex problems and have a proven track record of delivering high-quality code that meets project 
          requirements. I am a team player who enjoys collaborating with others to achieve common goals. I enjoy exploring new technologies and 
          programming languages to expand my skills as a developer.</div>
            
            <div className='my-auto items-center mr-48'>
              <img src={family} alt="" className=' border-2 p-2 rounded-full w-full items-center limg'/>
            </div>
          </div>
        </div>


        {/* fam */}
        <div className=' pt-24 pl-24 items-center'>
          <div className='flex'>
            <div className='my-auto items-center ml-48'>
              <img src={cloud} alt="" className='  border-2 p-2 rounded-full limg'/>
            </div>

          <div className='text-white w-full text-center my-48 mx-44 bg-opacity-70 p-6 bg-black rounded-xl flex'>I am a proud husband and father of four children. 
          My wife, Kayleen, is a medical insurance specialist with extensive experience in the healthcare industry. Kayleen is passionate about helping people navigate the 
          complex world of medical insurance and ensuring that they receive the care they need. Kayleen and I have four children: Marrissa, Corey Jr., Isaac, and Cloud. 
          Marrissa is an avid reader and enjoys writing her own stories. Corey Jr. is a talented musician who plays the trumpet and writes his own songs. Isaac is a budding artist 
          who loves to draw and paint, while Cloud is a curious toddler who loves to explore his surroundings. As a family, the Nadeaus enjoy spending time together, whether 
          it's playing board games, going camping, or simply enjoying each other's company.</div>
        </div>


        {/* about */}
        <div className='flex'>
          <div className='text-white w-full text-center my-48 mx-44 bg-opacity-70 p-8 bg-black rounded-xl flex'>I am an avid outdoorsman who enjoys spending 
          time hunting, mountain biking, and exploring nature with my family. I am passionate about the great outdoors and believe that spending time in nature is 
          essential for maintaining a healthy mind and body. When I'm not working as a full stack software engineer, I can often be found embarking on outdoor 
          adventures with my wife and children. As a family, we enjoy hunting for deer and other game in the fall, mountain biking on local trails, and hiking in the 
          nearby woods. I am also an experienced camper and enjoy taking my family on camping trips to explore new areas and experience the wonders of the great 
          outdoors. Through my outdoor activities, I have developed a deep appreciation for nature and the beauty of the world around us. I believe that spending time 
          outdoors is not only good for the body, but also for the soul, and I encourage everyone to get outside and explore the natural world around you.
</div>
            
            <div className='my-auto items-center mr-48'>
              <img src={hunt} alt="" className=' border-2 p-2 rounded-full w-full items-center limg'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
