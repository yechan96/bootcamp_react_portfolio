
import React, {useState} from "react";
import Body from "./Body";

function Header() {
    const [pageStatus, setPageStatus] = useState("about");
        return(
            <div>
                <div className="main-header col-sm-12">
                    <div className="p-2" id="header-left">
                        <h3 className="align-middle">Ye Chan Lee</h3>
                    </div>
                    <nav className="navbar float-right">
                        <ul className="nav mr-auto">
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
                <div className="content-container row">
                    <div className="col-sm-12">
                        <Body 
                            status ={pageStatus}
                        />
                    </div>
                </div>
            </div>
        
        </div>
           
        
        );
}

export default Header;