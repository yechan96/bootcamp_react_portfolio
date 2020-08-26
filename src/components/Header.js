
import React, {useState} from "react";
import Body from "./Body";

function Header() {
    const [pageStatus, setPageStatus] = useState("about");
        return(
            <div>
                <div className="main-header">
                    <nav className="navbar col-sm-8">
                        <ul className="nav float-left">
                            <li className="nav-item">
                                <a className="nav-link" href="#about" onClick={()=>setPageStatus("about")}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about" onClick={()=>setPageStatus("about")}>About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#portfolio" onClick={()=>setPageStatus("portfolio")}>Portfolio</a>                        
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact" onClick={()=>setPageStatus("contact")}>Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>

            <div className="flexer">
                <div className="content-container col-sm-8">
                        <Body 
                            status ={pageStatus}
                        />
                </div>
            </div>
        
        </div>
           
        
        );
}

export default Header;