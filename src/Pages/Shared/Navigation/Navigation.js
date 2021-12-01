import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
    const menuToggler = () => {
        const togglerIcon = document.getElementById('menu-toggler-icon')
        const menu = document.getElementById('main-menu')
        togglerIcon.classList.toggle('fa-times')
        menu.classList.toggle('show-main-menu')
    }
    return (
        <header className="header bg-primary">
            <div className="container">
                <section className="navbar d-flex justify-between align-center">
                    <div className="logo-section">
                        <h1 className="logo mb-0"><a href="/">ahsan</a></h1>
                    </div>
                    <nav id="main-menu" className="menu-section">
                        <ul className="menu d-flex">
                            <li><a href="/">Home</a></li>
                            <li><Link to="/about">About</Link></li>
                            <li><a href="/">Portfolio</a></li>
                            <li><Link to="/blogs">Blogs</Link></li>
                            <li><a href="/">Let's Talk</a></li>
                        </ul>
                    </nav>
                    <div id="menu-toggler">
                        <i onClick={menuToggler} id="menu-toggler-icon" className="fas fa-bars"></i>
                    </div>
                </section>
            </div>
        </header>
    )
}

export default Navigation
