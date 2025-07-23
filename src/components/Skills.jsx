import React from 'react'

function Skills() {
  return (

    // combined tailwindcss with w3 css 
    <div className='md:p-12 md:pt-36' id='skills'>
    <div className="bg-black lg:shadow-black lg:shadow-2xl border-2 border-black text-white bg-opacity-70 md:rounded-3xl">
        <div className="concert-container w3-container w3-content w3-padding-64">
            <h1 className='text-4xl pb-10 justify-center flex'>I.T. Skills</h1>
            <table>
                <tr>
                    <th>Technology</th>
                    <th>Skills</th>
                </tr>
                <tr>
                    <td>Proxmox</td>
                    <td>Server Deployment, Backups, Migrations, Network and storage management, Cloning, and VM Deployment</td>
                </tr>
                <tr>
                    <td>TrueNAS, Synology</td>
                    <td>Deployment of Network accessed storage</td>
                </tr>
                <tr>
                    <td>Aruba, Aruba AIO, and Cisco Switches</td>
                    <td>Experience in layer3 Switching and Vlan's</td>
                </tr>
                <tr>
                    <td>Watchguard</td>
                    <td>Watchguard Cloud, EPDR, AP configuration and Deployment</td>
                </tr>
                <tr>
                    <td>Active directory</td>
                    <td>User management, Computer management, Group Policy's, and Security Groups</td>
                </tr>
                <tr>
                    <td>Network +</td>
                    <td>Currently studying for the certification, Extensive experience in cabling, tracing, terminating, and management</td>
                </tr>
                <tr>
                    <td>PC repair</td>
                    <td>Extensive knowledge of PC components, repair and laptop repair</td>
                </tr>
            </table>
        </div>
    </div>
    <div className="mt-20 bg-black lg:shadow-black lg:shadow-2xl border-2 border-black text-white bg-opacity-70 md:rounded-3xl">
        <div className="concert-container w3-container w3-content w3-padding-64">
            <h1 className='text-4xl pb-10 justify-center flex'>Development Skills</h1>
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
