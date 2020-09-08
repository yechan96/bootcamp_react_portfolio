import React from "react";

function Body(){
    const profilePic = require("../assets/faceShot.jpg");
            return(
                <div className="bodyCont">

                <div className="content-container col-sm-8"id="faceshotCont">
                <div className="anchor" id="home"></div>
                <div className="wrapper">
                    <img id="faceshot" alt="faceshot" src={profilePic}></img>
                    <div className="name">Ye Chan Lee <br></br> Staff Research Associate | Full Stack Developer</div>
                </div>
                </div>
                
                
                <div className="content-container col-sm-8">
                <div className="anchor" id="about"></div>

                <div className="contents" id="aboutText">
                    <br>
                    </br>
                Full stack web developer with a background in computational biology and digital humanities, aspiring to develop applications that will interweave liberal arts with modern technology. Recently graduated from a full stack bootcamp at UCLA Extension with refined skills in HTML, CSS, JavaScript, and MySQL. Inspired to create innovative and engaging web services through working collaboratively with like-minded team members. Equipped with time management and critical thinking skills acquired from research experience that can offer a novel aspect when tackling issues on any given project. 
                <br></br>
                <br></br>
                This site was built using React.js. 
                </div>
                </div>


                <div className="content-container col-sm-8">
                <div className="anchor" id="projects"></div>

                    <br></br>
                    <div className="row gallery">

                        <figure className="col-sm-6 gallery-item">
                                <a href="https://murmuring-oasis-74308.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                    <img className="img-fluid roundImg"  alt="EduStation" src={require("../assets/EduStation.png")}></img>
                                    <div className="text-block">
                                        EduStation
                                    </div>
                                </a>
                            </figure>

                            <figure className="col-sm-6 gallery-item">
                                <a href="https://intense-earth-41726.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                    <img className="img-fluid roundImg" alt="WeTrivia" src={require("../assets/WeTrivia.png")}></img>
                                    <div className="text-block">
                                        We Trivia
                                    </div>
                                </a>
                            </figure>

                            <figure className="col-sm-6 gallery-item">
                                <a href="https://yechan96.github.io/bootcamp_project1/" target="_blank" rel="noopener noreferrer">
                                    <img className="img-fluid roundImg" alt="Book Search" src={require("../assets/Book.png")}></img>
                                    <div className="text-block">
                                        Book Search
                                    </div>
                                </a>
                            </figure>

                            <figure className="col-sm-6 gallery-item">
                                <a href="https://intro-graphics-master.github.io/term-project-5/" target="_blank" rel="noopener noreferrer">
                                    <img className="img-fluid roundImg" alt="Particle Simulator" src={require("../assets/Particle Simulator.png")}></img>
                                    <div className="text-block">
                                        Particle Simulator
                                    </div>
                                </a>
                            </figure>

                    </div>
                </div>


                <div className="contacts-container col-sm-8">
                <div className="anchor" id="contact"></div>
                    <br></br>
                
                    <div className="contents text-center">
                        <h6>
                            <a id="mail" href="mailto:yechanlee96@gmail.com">yechanlee96@gmail.com</a>
                        </h6>
                        

                        <a href="https://github.com/yechan96" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github fa-3x"></i>
                        </a>

                        <a href="https://www.linkedin.com/in/ye-chan-lee-250228139/" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-linkedin fa-3x"></i>
                        </a>
                    
                    </div>

                </div>

                </div>
            );
}

export default Body;