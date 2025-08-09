import React from 'react'

function Navbar() {


    // styled with w3css
    return (
        <div class="w3-top w-full">
            <div class="w3-black w3-card text-center text-md">
                <a href="#" class="w3-bar-item w3-button w3-padding-large md:text-sm"><b>Corey Nadeau</b> - I.T. / Developer / Tech Enthusiast / Net Admin</a>
                
                {/* NEW PROJECT BANNER */}
                <div class="w3-red w3-animate-opacity w3-padding-small w3-margin-top w3-margin-bottom" style={{background: 'linear-gradient(45deg, #ff6b35, #f7931e)'}}>
                    <a href="https://football-squares.netlify.app/" target="_blank" class="w3-text-white w3-hover-text-yellow" style={{textDecoration: 'none'}}>
                        <i class="fa fa-star w3-spin"></i> 🚀 <strong>NEW PROJECT ALERT!</strong> 🚀 Check out my latest creation: Football Squares Game! <i class="fa fa-star w3-spin"></i>
                        <tiny className="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></tiny>
                    </a>
                </div>
                
                <a href="#skills" class="w3-bar-item w3-button w3-padding-large w3-hide-small md:text-sm">Skills</a>
                <a href="#contact" class="w3-bar-item w3-button w3-padding-large w3-hide-small md:text-sm">Contact Me</a>
                <a href="#bottom" class="w3-bar-item w3-button w3-padding-large w3-hide-small md:text-sm">Social Media</a>
                <a href="https://docs.google.com/document/d/1nRvs6z0LdcZE1pg9YNyJfxC5bHJz8WeA/edit?usp=sharing&ouid=103717855117776831745&rtpof=true&sd=true" target="_blank" class="w3-bar-item w3-button 
                        w3-padding-large text-sm">Resume <tiny className=" fa-solid fa-arrow-up-right-from-square text-xs"></tiny></a>
                
                
            <div class="w3-dropdown-hover">
            <button class="w3-padding-large w3-button text-sm" title="More" style={{background:'#fffde7',color:'#d32f2f',fontWeight:'bold',borderRadius:'6px',boxShadow:'0 0 6px #ff9800',position:'relative'}}>Projects <span style={{background:'#ffeb3b',color:'#d32f2f',fontWeight:'bold',borderRadius:'6px',padding:'2px 6px',marginLeft:'6px',fontSize:'0.8em',boxShadow:'0 0 6px #ff9800'}}>NEW!</span> <i class="fa fa-caret-down"></i></button> 

            <div class="w3-dropdown-content w3-bar-block w3-card-4">
                <a href="https://minneapolis-music-flexbox.netlify.app/" target="_blank" class="w3-bar-item w3-button md:text-sm">Minneapolis Music Flexbox <tiny className=" fa-solid fa-arrow-up-right-from-square text-xs"></tiny></a>
                <a href="https://minneapolis-music.netlify.app/" target="_blank" class="w3-bar-item w3-button md:text-sm">Minneapolis Music <tiny className=" fa-solid fa-arrow-up-right-from-square text-xs"></tiny></a>
                <a href="https://mmw3.netlify.app/" target="_blank" class="w3-bar-item w3-button md:text-sm">Minneapolis Music W3CSS <tiny className=" fa-solid fa-arrow-up-right-from-square text-xs"></tiny></a>
                <a href="https://kayleens-llama-farm.netlify.app/" target="_blank" class="w3-bar-item w3-button md:text-sm">Llama Farm <tiny className=" fa-solid fa-arrow-up-right-from-square text-xs"></tiny></a>
                <a href="https://football-squares.netlify.app/" target="_blank" class="w3-bar-item w3-button md:text-sm">Football Squares <span style={{background:'#ffeb3b',color:'#d32f2f',fontWeight:'bold',borderRadius:'6px',padding:'2px 6px',marginLeft:'6px',fontSize:'0.8em',boxShadow:'0 0 6px #ff9800'}}>NEW!</span> <tiny className=" fa-solid fa-arrow-up-right-from-square text-xs"></tiny></a>
                <a href="https://kidschoretracker.netlify.app/" target="_blank" class="w3-bar-item w3-button md:text-sm">Chore-Tracker <span style={{background:'#ffeb3b',color:'#d32f2f',fontWeight:'bold',borderRadius:'6px',padding:'2px 6px',marginLeft:'6px',fontSize:'0.8em',boxShadow:'0 0 6px #ff9800'}}>NEW!</span> <tiny className=" fa-solid fa-arrow-up-right-from-square text-xs"></tiny></a>
                <a href="https://smoke-stats.netlify.app/" target="_blank" class="w3-bar-item w3-button md:text-sm">Smoke-Stats <span style={{background:'#ffeb3b',color:'#d32f2f',fontWeight:'bold',borderRadius:'6px',padding:'2px 6px',marginLeft:'6px',fontSize:'0.8em',boxShadow:'0 0 6px #ff9800'}}>NEW!</span> <tiny className=" fa-solid fa-arrow-up-right-from-square text-xs"></tiny></a>
            </div>
            </div>
            <a href="https://www.codewars.com/users/djcjn16" target='_blank' class="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-small">
                <img src="https://www.codewars.com/users/djcjn16/badges/small" className='flex' alt="" /></a>
            
        </div>
        </div>
    )
}

export default Navbar
