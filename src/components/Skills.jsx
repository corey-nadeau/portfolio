import React from 'react'

function Skills() {
  return (

    // combined tailwindcss with w3 css 
    <div className='p-12 pt-36' id='skills'>
    <div className="w3-black rounded-3xl">
        <div className="concert-container w3-container w3-content w3-padding-64">
            <h1 className='text-4xl pb-10 justify-center flex'>Technical Skills</h1>
            <table>
                <tr>
                    <th>Certification</th>
                    <th>Skills</th>
                </tr>
                <tr>
                    <td>HTML</td>
                    <td>HTML5, Deployment, Github, Version Control, VS Code</td>
                </tr>
                <tr>
                    <td>CSS</td>
                    <td>CSS, Bootstrap, Tailwind, W3CSS</td>
                </tr>
                <tr>
                    <td>JavaScript</td>
                    <td>ES6, Async functions, Await, JSON</td>
                </tr>
                <tr>
                    <td>React</td>
                    <td>NPM, Hooks, Components, API's</td>
                </tr>
                <tr>
                    <td>Python</td>
                    <td>Algorithms, Anaconda, Data Structures, Jupyter Notebook, Python3, OOP</td>
                </tr>
                <tr>
                    <td>SQL</td>
                    <td>MySQL, PostgreSQL, Entity Relationship Models</td>
                </tr>
                <tr>
                    <td>Flask</td>
                    <td>Crud, Jinja2, MVC, Pypi, REST API development, SQLAlchemy</td>
                </tr>
            </table>
        </div>
    </div>
    </div>
  )
}

export default Skills
