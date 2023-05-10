import React from 'react'

function Music() {
    function myFunction() {
        var x = document.getElementById("myDIV");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
  return (
    <div className='w3-bottom'>
        <button className='ml-10 mb-10 fa-solid fa-music fa-beat text-red-500 text-5xl' onClick={myFunction}></button>
        <div className='hidden w-80 border-4 rounded-lg border-red-500 ' id='myDIV'>
        {/* chicken fried */}
        <iframe className="border-radius:12px m-2" src="https://open.spotify.com/embed/track/0LQtEJt7x0s6knb6RKdRYc?utm_source=generator" width="94%" height="80"
            allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        {/* beautiful crazy */}
        <iframe className="border-radius:12px m-2" src="https://open.spotify.com/embed/track/2rxQMGVafnNaRaXlRMWPde?utm_source=generator" width="94%" height="80"
            allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        {/* thinking out loud */}
        <iframe className="border-radius:12px m-2" src="https://open.spotify.com/embed/track/34gCuhDGsG4bRPIf9bb02f?utm_source=generator" width="94%" height="80"
            allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
    </div>
  )
}

export default Music
