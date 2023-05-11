import React from 'react'

function Music() {
    function myMusic() {
        var x = document.getElementById("musicDrawer");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
      
  return (
    <div className='w3-bottom'>
        <button className='ml-10 mb-10 fa-solid fa-music fa-beat text-orange-700 text-5xl ' onMouseOver={myMusic} onClick={myMusic}></button>
        {/* <button className='ml-10 mb-10 fa-solid fa-arrows-up-down fa-beat text-orange-700 text-5xl ' onMouseOver={myFunction} onClick={myFunction}></button> */}
        <div className='hidden w-96 border-2 rounded-lg border-black bg-black text-white bg-opacity-70' id='musicDrawer'><div className='pt-2 text-center'></div>
        <iframe className="border-radius:12px m-2" src="https://open.spotify.com/embed/playlist/1mSL4iBf3j6LkngZKF9KIc?utm_source=generator&theme=0" width="94%" height="500"
            allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="eager"></iframe>
        </div>
    </div>
  )
}

export default Music
