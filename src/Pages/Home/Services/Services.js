import React from 'react'

const Services = () => {
    return (
        <section className="bg-primary service-section">
            <div className="container">
                <header className="w-50 m-auto text-center">
                    <div><span className="text-primary">SERVICES</span></div>
                    <h2 className="text-white">My Services</h2>
                    <p className="text-default">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.</p>
                </header>
                <div className="services">
                    <div className="service">
                        <div className="title">
                            <i className="fab fa-github"></i>
                            <h3>Web Development</h3>
                        </div>
                        <p className="text-default">Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy</p>
                    </div>
                    <div className="service">
                        <div className="title">
                            <i className="fas fa-camera"></i>
                            <h3>Photography</h3>
                        </div>
                        <p className="text-default">Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy</p>
                    </div>
                    <div className="service">
                        <div className="title">
                            <i className="fab fa-codepen"></i>
                            <h3>Web Design</h3>
                        </div>
                        <p className="text-default">Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
