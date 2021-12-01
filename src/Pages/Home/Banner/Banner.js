import React from 'react'

const Banner = () => {
    return (
        <div className="banner-section bg-primary">
            <div className="container">
                <section className="banner d-flex align-center">
                    <div className="slogan w-50">
                        <h4 className="text-secondary">Hi There</h4>
                        <h1 className="text-white">I'm <span className="text-primary">Ahsan Habib</span></h1>
                        <h2 className="text-white">I am a Web Developer</h2>
                        <div className="button"><a target="_blank" href="https://drive.google.com/file/d/1Aut3_fbVNzaYTnJiOCr9BA_Hzpro7UR8/view?usp=sharing"><button className="btn">download resume</button></a></div>
                    </div>
                    <div className="banner-img w-50">
                        <img className="img-fluid" src="images/banner_image.svg" alt="" />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Banner
