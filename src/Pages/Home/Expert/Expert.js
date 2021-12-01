import React from 'react'

const Expert = () => {
    document.addEventListener('scroll', function () {
        const progressData = [88, 81, 70, 90]
        const progressCount = document.querySelectorAll('.progress-count');
        const progress = document.querySelectorAll('.progress');
        const progressPosition = document.getElementById('progress')?.offsetTop;
        const progressHeight = document.getElementById('progress')?.offsetHeight;
        if (window.scrollY >= (progressPosition - progressHeight)) {
            for (const data in progressData) {
                progress[data].style.width = progressData[data] + '%';
                progress[data].style.transition = "all 1s ease";
                progressCount[data].style.right = '0%';
                progressCount[data].innerText = progressData[data] + '%';
            }
        }
    })
    
    return (
        <section id="progress" className="bg-primary expert-section">
            <div className="container">
                <div className="d-flex justify-between align-center">
                    <header className="w-40">
                        <div className="mb-20"><span className="text-primary">I,M EXPERT ON</span></div>
                        <h3 className="text-white">Let,s Work Together</h3>
                        <p className="text-default">Phasellus accumsan scelerisque dolor, quis mattis justo bibendum non. Nulla sollicitudin turpis in elementum varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae</p>
                        <div className="mt-20"><button className="btn">Hire Me</button></div>
                    </header>
                    <div className="w-40">
                        <div className="progress-bar mb-20">
                            <p className="title mb-20 text-white">Node JS</p>
                            <div className="progress">
                                <span className="progress-count"></span>
                            </div>
                        </div>
                        <div className="progress-bar mb-20">
                            <p className="title mb-20 text-white">Python</p>
                            <div className="progress">
                                <span className="progress-count"></span>
                            </div>
                        </div>
                        <div className="progress-bar mb-20">
                            <p className="title mb-20 text-white">Laravel</p>
                            <div className="progress">
                                <span className="progress-count"></span>
                            </div>
                        </div>
                        <div className="progress-bar mb-20">
                            <p className="title mb-20 text-white">SEO</p>
                            <div className="progress">
                                <span className="progress-count"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Expert
