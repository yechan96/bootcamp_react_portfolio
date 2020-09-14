import React from "react";
import Items from "./Items";

function Body(){
    const profilePic = require("../assets/faceShot.jpg");
    const portfolioArr =[
        {
        name:"EduStation",
        image:require("../assets/EduStation.png"),
        summary: "A MERN based platform for teachers, students, and parents for effective communication. Teachers can make announcements and set events to remind parents. Parents and student then can communicate on a thread that's dynamically generated on each announcements and events.",
        role: "",
        tech: "",
        github: "https://github.com/gwenniegwen/eduStation/",
        live: "https://murmuring-oasis-74308.herokuapp.com/",
        },
        {
        name:"WeTrivia",
        image:require("../assets/WeTrivia.png"),
        summary: "",
        role: "",
        tech: "",
        github: "https://github.com/nickrayj45/WeTrivia/",
        live: "https://intense-earth-41726.herokuapp.com/",
        },
        {
        name:"Book Search",
        image:require("../assets/Book.png"),
        summary: "",
        role: "",
        tech: "",
        github: "https://github.com/yechan96/bootcamp_project1/",
        live: "https://yechan96.github.io/bootcamp_project1/",
        },
        {
        name:"Particle Simulator",
        image:require("../assets/Particle Simulator.png"),
        summary: "",
        role: "",
        tech: "",
        github: "https://github.com/intro-graphics-master/term-project-5/",
        live: "https://intro-graphics-master.github.io/term-project-5/",
        },
    ];
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
                <br></br>
                Full stack web developer with a background in computational biology and digital humanities, aspiring to develop applications that will interweave liberal arts with modern technology. Recently graduated from a full stack bootcamp at UCLA Extension with refined skills in HTML, CSS, JavaScript, and MySQL. Inspired to create innovative and engaging web services through working collaboratively with like-minded team members. Equipped with time management and critical thinking skills acquired from research experience that can offer a novel aspect when tackling issues on any given project. 
                <br></br>
                <br></br>
                This site was built using React.js.
                </div>
                </div>


                <div className="content-container col-sm-10">
                <div className="anchor" id="projects"></div>
                    <div className="row gallery">
                        {portfolioArr.map( item => {
                            return(
                                <Items name={item.name} image={item.image} summary={item.summary} role={item.role} tech={item.tech} github={item.github} live={item.live}></Items>
                            )
                        })}
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