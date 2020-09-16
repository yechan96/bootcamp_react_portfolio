import React from "react";
import Items from "./Items";

function Body(){
    const profilePic = require("../assets/faceShot.jpg");
    const portfolioArr =[
        {
        name:"EduStation",
        image:require("../assets/EduStation.png"),
        summary: "A MERN based platform for teachers, students, and parents for effective communication. Teachers can make announcements and set events to remind parents. Parents and students then can communicate on a thread that's dynamically generated on each announcements and events.",
        role: "Dynamically populated nested React components and implemented real-time updates to users viewing identical posts. Responsible for reviewing team members' codes for bug catches and merging for a working demo.",
        tech: "HTML, CSS, Javascript, MongoDB, Express, React.js, Node.js, Socket.io, Full Calendar, Bootstrap",
        github: "https://github.com/gwenniegwen/eduStation/",
        live: "https://murmuring-oasis-74308.herokuapp.com/",
        },
        {
        name:"WeTrivia",
        image:require("../assets/WeTrivia.png"),
        summary: "An online platform for users to come together for quick games of Trivia and chat amongst each other. While the games are played individually, the users can discuss and share information on a server-wide chat system.",
        role: "Contributed as a back-end developer to implement a chat feature to accommodate an online trivia game. Used Express, MySQL, and Socket.io to display and retrieve real-time inputs to all users on the site. Assisted other team members in catching bugs and implementing their features.",
        tech: "HTML, CSS, Javascript, Express, MySQL, Node.js, Socket.io, Passport.js, Open Trivia API, Bulma",
        github: "https://github.com/nickrayj45/WeTrivia/",
        live: "https://intense-earth-41726.herokuapp.com/",
        },
        {
        name:"Book Search",
        image:require("../assets/Book.png"),
        summary: "A client only platform where users can discover music playlist for books they wish to read. The selection is affected by the weather of their current location, or a location of their choice.",
        role: "Oversaw the project as the acting PM and streamlined and allocated work to team members. Implemented the search algorithm that allowed users to receive music suggestions based on book and current weather.",
        tech: "HTML, CSS, Javascript, Open Library API, Open Weather API, iTunes API, Bulma",
        github: "https://github.com/yechan96/bootcamp_project1/",
        live: "https://yechan96.github.io/bootcamp_project1/",
        },
        {
        name:"Particle Simulator",
        image:require("../assets/Particle Simulator.png"),
        summary: "A simulator based on a 3D physics engine to that mimmics particle movements for differently themed elements. The users can interact with the particles through actions such as adding or removing removing particles and changing the elements.",
        role: "Programmed custom shader to create rock-like particles and implemented distance-based color gradient to mimic fire.",
        tech: "Javascript, OpenGL, 3D Math and Linear Algebra",
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
                    <p>
                    Full stack web developer with a background in computational biology and digital humanities, aspiring to develop applications that will interweave liberal arts with modern technology. Recently graduated from a full stack bootcamp at UCLA Extension with refined skills in HTML, CSS, JavaScript, and MySQL. Inspired to create innovative and engaging web services through working collaboratively with like-minded team members. Equipped with time management and critical thinking skills acquired from research experience that can offer a novel aspect when tackling issues on any given project. 
                    </p>
                    <p>
                    Proficient in JavaScript, Python, R, C++, and C#. <br></br>Experience in MySQL, MongoDB, Express, React.js, Node.js, and Unity. <br></br>Fluent in English, Korean, and Japanese; professional experience in translation and transcription work.
                    </p>
                    <p>
                    This site was built using React.js. Click on the projects to see the details.   
                    </p>
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