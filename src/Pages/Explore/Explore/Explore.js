import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navigation from '../../Shared/Navigation/Navigation'
import './Explore.css'

const Explore = () => {
    const { id } = useParams()
    const [projects, setProjects] = useState([])
    const [project, setProject] = useState({})
    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [id])

    useEffect(() => {
        if (projects.length) {
            const findProject = projects.find(project => project.id === parseInt(id))
            setProject(findProject)
        }
    }, [projects])
    const imageUrls = ['images/slides/slide-1.jpg', 'images/slides/slide-2.jpg', 'images/slides/slide-3.jpg', 'images/slides/slide-4.jpg']
    const slides = document.getElementById('slides');
    const [url, setUrl] = useState(false)
    let slideIndex = 0;
    // const prev = document.getElementById('prev');
    // const next = document.getElementById('next');
    // next.addEventListener('click', () => {
    //     slider(slideIndex += 1)
    // })
    // prev.addEventListener('click', () => {
    //     slider(slideIndex -= 1)
    // })

    const slider = index => {
        if (index < 0) {
            slideIndex = imageUrls.length - 1;
            index = slideIndex
        }
        if (index >= imageUrls.length) {
            index = 0;
            slideIndex = 0;
        }
        setUrl(true)
        if (url) {
            slides.setAttribute('src', project.slides[index])
        }

    }

    setInterval(() => {
        slideIndex++
        slider(slideIndex)
    }, 5000)
    return (
        <div>
            <Navigation></Navigation>
            <img className="img-fluid" id="slides" src="" alt=""/>
            <div className="container" style={{ padding: "60px 0px" }}>
                <div className="project-info">
                    <h2 className="mb-20">{project.title}</h2>
                    <p className="mb-20">{project.description}</p>
                    <div className="link mb-20">
                        <p>Live Site Link: <Link to="/">{project.site_link}</Link></p>
                        <p>Client Side Code Link: <Link to="/">{project.csc}</Link></p>
                        {
                            project.ssc && <p>Server Side Code Link: <Link to="/">{project.ssc}</Link></p>
                        }
                    </div>
                    <div className="technologies w-50">
                        <h4>Using Technology:</h4>
                        <div className="technology">
                            {
                                project?.technology?.map(tec => <div key={tec}><button className="btn">{tec}</button></div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explore
