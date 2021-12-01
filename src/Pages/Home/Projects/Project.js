import React from 'react'
import { Link } from 'react-router-dom'

const Project = (props) => {
    const { title, image, description } = props.project
    return (
        <div className="slider-card portfolio">
            <img className="img-fluid" src={image} alt="" />
            <h3 className="text-white mt-10">{title}</h3>
            <p className="text-default">{description.slice(0, 50)}</p>
            <Link to={`/explore/${props.project.id}`}><button className="btn mt-20">Explore</button></Link>
        </div>
    )
}

export default Project
