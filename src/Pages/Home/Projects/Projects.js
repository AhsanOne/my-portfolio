import React, { useEffect, useState } from 'react'
import Project from './Project'

const Projects = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('./projects.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    }, [])
    // console.log(projects)
    return (
        <section className="bg-secondary portfolio-section">
            <div className="container">
                <header className="w-50 m-auto text-center portfolio-header">
                    <h2 className="text-white">Latest Working Projects</h2>
                </header>
                <div className="portfolio-section">
                    <div className="portfolios">
                        {
                            projects.map(project => <Project key={project.id} project={project}></Project>)
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
