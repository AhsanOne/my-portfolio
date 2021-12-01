import React from 'react'

const AboutMe = () => {
    return (
        <section className="bg-white about-section">
            <div className="container">
                <div className="d-flex justify-between align-center">
                    <header className="w-40">
                        <h3 className="text-black">About Me</h3>
                        <p className="text-black">In id nulla magna. Nullam posuere fermentum mattis. Nunc id dui at sapien faucibus fermentum ut vel diam. Nullam tempus, nunc id efficitur sagittis, urna est ultricies eros, ac porta sem turpis</p>
                        <div className="mt-20"><button className="btn">DOWNLOAD CV</button></div>
                    </header>
                    <div className="w-40"><img className="img-fluid" src="images/about_ahsan.png" alt=""/></div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
