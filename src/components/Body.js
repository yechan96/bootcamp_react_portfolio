import React from "react";

function Body(props){
    switch(props.status){
        case "about":
            return(
                <div>
                
                <div id="content-heading">
                    <h3>About Me</h3>
                </div>

                <br></br>

                <div id="contents">
                    <img className="image-fluid" id="profile-pic" src={require("../assets/profilePic.JPG")} width="30%"></img>
                    Hello my name is Ye Chan Lee and I'm currently working as a research associate at UCLA. 
                    I'm a recent graduate with a major in Computational Biology and a double minor 
                    in Japanese and Digital Humanities. Ever since I was a kid, 
                    I always indecisive and wanted to try as many things as possible. This translated  
                    into my education as well as career path where I have invested time in multiple areas 
                    of study. I'm not sure which industry I'll have a career in the future, but I can 
                    definitely see myself moving on to different places.
                    <br></br>
                    <br></br>
                    Some of my hobbies include playing video games, watching anime/reading manga, and enjoying music. My favorite genre of 
                    games is RPG because I always found fun to be different characters and exploring whatever storylines 
                    the protagonists has to go through. Recently, I've been playing Pokémon Sword and catching shinies. For anime, I haven't 
                    been watching recently because Fall 2019 did not have the best lineup; however, I'm excited for the upcoming season. One of
                    the major reasons why I decided to minor in Japanese was due to my enjoyments in Japanese video games and other subcultures. I do think
                    it would be exciting to live in Japan one day. Finally, I like listening to music and going to concerts and karaoke. 
                    As per usual, I listen to a bunch of different genres and I do not mind listening to all of them in one playlist. 
                </div>
            </div>
            );
        case "portfolio":
            return(
                <div>
                    <div id="content-heading">
                        <h3>Portfolio</h3>
                    </div>

                    <br></br>
                    <div className="row gallery">

                            <figure className="col-sm-5 gallery-item">
                                <a href="https://intense-earth-41726.herokuapp.com/" target="_blank">
                                    <img className="img-thumbnail" src={require("../assets/WeTrivia.png")}></img>
                                    <div className="text-block">
                                        We Trivia
                                    </div>
                                </a>
                            </figure>

                            <figure className="col-sm-5 gallery-item">
                                <a href="https://yechan96.github.io/bootcamp_project1/" target="_blank">
                                    <img className="img-thumbnail" src={require("../assets/Book.png")}></img>
                                    <div className="text-block">
                                        Book Search
                                    </div>
                                </a>
                            </figure>

                            <figure className="col-sm-5 gallery-item">
                                <a href="https://yechan96.github.io/bootcamp_hw5_Day_Planner/" target="_blank">
                                    <img className="img-thumbnail" src={require("../assets/Day.png")}></img>
                                    <div className="text-block">
                                        Day Planner
                                    </div>
                                </a>
                            </figure>

                            <figure className="col-sm-5 gallery-item">
                                <a href="https://yechan96.github.io/bootcamp_hw6_WeatherDashboard/" target="_blank">
                                    <img className="img-thumbnail" src={require("../assets/Weather.png")}></img>
                                    <div className="text-block">
                                        Weather Dashboard
                                    </div>
                                </a>
                            </figure>

                    </div>

                </div>
            );
        case "contact":
            return(
                <div>
                    <div id="content-heading">
                        <h3>Contact</h3>
                    </div>

                    <br></br>
                
                    <div id="contents">
                        <p>
                            Email: yechanlee96@gmail.com
                        </p>
                        <p>
                            Phone Number: 213 505-2263
                        </p>
                        
                        
                        <h3>
                            Links
                        </h3>

                        <a href="https://github.com/yechan96" target="_blank">
                            <i className="fa fa-github fa-5x"></i>
                        </a>

                        <a href="https://www.linkedin.com/in/ye-chan-lee-250228139/" target="_blank">
                            <i className="fa fa-linkedin fa-5x"></i>
                        </a>
                        
                        <a className="btn btn-outline-dark btn-lg mb-4" href={require("../assets/YeChan_Lee_Resume.pdf")} target="_blank">
                            Resume
                        </a>
                    
                    </div>

                </div>
            );
        default:
        break;
    }
}

export default Body;