import React from 'react'

const About = () => {
    return (
        <section className="bg-secondary about-section">
            <div className="container">
                <div className="d-flex justify-between align-center">
                    <div className="w-40"><img className="img-fluid" src="images/Ahsan.png" alt=""/></div>
                    <header className="w-40">
                        <h3 className="text-white">About Me</h3>
                        <p className="text-default">In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis</p>
                        <div className="mt-20"><button className="btn">DOWNLOAD CV</button></div>
                    </header>
                </div>
                <div className="contact-form">
                    <form>
                        <div className="text-right"><i className="fas fa-times"></i></div>
                        <label htmlFor="lname">Last Name</label>
                        <input type="text" id="name" name="name" placeholder="Your name.."/>

                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Your name.."/>

                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" name="subject" placeholder="Your name.."/>
                    
                        <label htmlFor="message">Your Message</label>
                        <textarea id="message" name="message" placeholder="Write something.."></textarea>
                    
                        <input className="btn" type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default About
