import React from 'react'
import getRandomColor from '../config/RandomColor'
import sl10 from '../assets/slide2/sl10.jpg'
import sl11 from '../assets/slide2/sl11.jpg'
import sl12 from '../assets/slide2/sl12.jpg'
import sl13 from '../assets/slide2/sl13.jpg'
import sl16 from '../assets/slide3/sl16.jpg'
import sl15 from '../assets/slide3/sl15.jpg'

// styled in css 
function Cubed() {
    function Change() {
    const faces = document.querySelectorAll('.change', '#change');
    
        faces.forEach(face => {
            face.addEventListener('click', () => {
                face.style.backgroundColor = getRandomColor();
                
            });
        });}
        
  return (
    <div className='pl-20 pt-20 md:pr-72 md:pt-72 bg-black md:bg-inherit'>
      <div id="cube" className=''>
        <div className="cuface cufront"><div className="intext1 change" id='change' onClick={Change}>Junior</div><img src={sl12} className=' h-full w-full'></img></div>
        <div className="cuface cuback"><div className="intext2 change" id='change' onClick={Change}>Dad</div><img src={sl16} className=' h-full w-full'></img></div>
        <div className="cuface curight"><div className="intext3 change" id='change' onClick={Change}>Cloud</div><img src={sl13} className=' h-full w-full'></img></div>
        <div className="cuface culeft"><div className="intext4 change" id='change' onClick={Change}>Marrissa</div><img src={sl11} className=' h-full w-full'></img></div>
        <div className="cuface cutop"><div className="intext5 change " id='change' onClick={Change}>Mom</div><img src={sl15} className=' h-full w-full'></img></div>
        <div className="cuface cubottom"><div className="intext6 change" id='change' onClick={Change}>Isaac</div><img src={sl10} className=' h-full w-full'></img></div>
    </div>
    <div>
        <h3 className="bg-black opacity-75 text-center text-white p-3 md:rounded-lg pr-20 md:pr-3">Click a name on the cube to change colors!</h3>
    </div>
    </div>
  )
}

export default Cubed
