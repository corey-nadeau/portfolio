import React from 'react'

function Footer() {

  // used w3css 
  return (
    <div>
      <footer id="bottom" class="w3-container w3-padding-64 w3-center w3-opacity w3-black w3-xlarge md:rounded-t-3xl">
        <div className='pb-10'>Socials</div>
          <a title="LinkedIn" href="https://www.linkedin.com/in/corey-nadeau1989/" target="_blank"><i class="fab fa-linkedin pr-6"> </i></a>
          <a title="Github" href="https://github.com/corey-nadeau" target="_blank"><i class="fab fa-github pr-6"></i></a>
          <a title="Codewars" href="https://www.codewars.com/users/djcjn16" target="_blank"><i class="fa-solid fa-code pr-6"></i></a>
          <a title="Credly" href="https://www.credly.com/users/corey-nadeau" target="_blank"><i class="fa-solid fa-graduation-cap"></i></a>
        <div class="cc"><br></br> © Website by Corey Nadeau 2025</div>
      </footer>
    </div>
  )
}

export default Footer
