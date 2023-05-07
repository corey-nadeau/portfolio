import React from 'react'

function Skills() {
  return (
    <div>
      <section className="w3-black" id="skills">
    <div className="concert-container w3-container w3-content w3-padding-64">
        <h1 className='text-4xl pb-10 justify-center flex'>Technical Skills</h1>
        <table>
            <tr>
                <th>Certification</th>
                <th>Skills</th>
            </tr>
            <tr>
                <td id="">HTML</td>
                <td id="">HTML5, Deployment, Github, Version Control, VS Code</td>
            </tr>
            <tr>
                <td id="">CSS</td>
                <td id="">CSS, Bootstrap, Tailwind, W3CSS</td>
            </tr>
            <tr>
                <td id="">JavaScript</td>
                <td id="">ES6, Async functions, Await, JSON</td>
            </tr>
            <tr>
                <td id="">React</td>
                <td id="">NPM, Hooks, Components, API's</td>
            </tr>
            <tr>
                <td id="">Python</td>
                <td id="">Algorithms, Anaconda, Data Structures, Jupyter Notebook, Python3, OOP</td>
            </tr>
            <tr>
                <td id="">SQL</td>
                <td id="">MySQL, PostgreSQL, Entity Relationship Models</td>
            </tr>
            <tr>
                <td id="">Flask</td>
                <td id="">Crud, Jinja2, MVC, Pypi, REST API development, SQLAlchemy</td>
            </tr>
        </table>
    </div>
</section>
    </div>
  )
}

export default Skills
