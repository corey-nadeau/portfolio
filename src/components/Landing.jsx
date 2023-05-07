import React from 'react'
import bg from '../assets/bg1.jpg'
import family from '../assets/family.jpg'
import cloud from '../assets/cloud.jpg'
import hunt from '../assets/hunt.jpg'
function Landing() {
  return (
    <div>
    <div></div>
    <div className=''>
      <img src={bg} alt="" className='fixed -z-10'/>
    
      <div className='pt-64 items-center'>


        {/* family */}
        <div className='flex'>
          <div className='text-white w-full text-center my-56 mx-72 bg-opacity-70 pt-8 bg-black rounded-xl flex'>Hi, My name is Corey, and this is my family. My wife Kayleen,
                and 3 of our 4 kids. We have a baby as well, he will be 
                pictured below.</div>
            <div className=' w-full pr-32'>
              <img src={family} alt="" className=' border-2 p-2 rounded-full'/>
            </div>
          </div>
        </div>
        {/* cloud */}
        <div className=' pt-24 pl-24 items-center'>
          <div className='flex'>
            <div className=' w-full pr-32'>
              <img src={cloud} alt="" className=' border-2 p-2 rounded-full'/>
            </div>
          <div className='text-white w-full text-center my-56 mx-72 bg-opacity-70 pt-6 bg-black rounded-xl flex'>This is Cloud. He is our youngest of 4. The photo above
                was our engagement photo, he was born after we married.</div>
        </div>
        {/* hunting */}
        <div className='flex py-24'>
          <div className='text-white w-full text-center my-56 mx-72 bg-opacity-70 pt-6 bg-black rounded-xl flex'>In my free time I really enjoy being outdoors. Hunting, 
                camping, hiking, bike riding are all fun to me.</div>
            <div className=' w-full pr-32'>
              <img src={hunt} alt="" className=' border-2 p-2 rounded-full'/>
            </div>
          </div>
        </div>
      </div>
    </div>
        
  )
}

export default Landing
