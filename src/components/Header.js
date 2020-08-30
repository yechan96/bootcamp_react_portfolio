
import React from "react";
import Body from "./Body";

function Header() {
        return(
            <div>
                <div className="main-header">
                    <nav className="navbar col-sm-8">
                        <ul className="nav float-left">
                            <li className="nav-item">
                                <a className="nav-link" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#portfolio">Portfolio</a>                        
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>

            <div className="flexer">
                        <Body/>
            </div>
        
        </div>
           
        
        );
}

export default Header;