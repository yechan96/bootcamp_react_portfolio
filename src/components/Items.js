import React from "react"
import Modal from "react-modal"

function Items(props){

    const [modalIsOpen,setIsOpen] = React.useState(false);
    function openModal(){
        setIsOpen(true);
    }

    function afterOpenModal(){
        document.body.style.overflow = 'hidden';
    }
    function closeModal(){
        setIsOpen(false);
        document.body.style.overflow = 'unset';
    }
    const customStyles = {
        content : {
          top: '15%',
          width: '80%',
          marginRight: 'auto',
          marginLeft: 'auto',
          color: '#ffffff',
          backgroundColor: '#47748f',
        }
      };
    return(
        <div className="col-sm-6 gallery-item">
            <div className="btn portfolioBtn" onClick={openModal}>
                <img className="img-fluid roundImg" alt={props.name} src={props.image}></img>
                <div className="text-block">
                    {props.name}
                </div>
            </div>

        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel={props.name+" Modal"}
        >

        <h3 className="float-left">{props.name}</h3>
        <button className="btn float-right" onClick={closeModal}><i className="fa fa-window-close"></i></button>
        <br></br>
        <br></br>
        <p><b>Summary:</b> {props.summary}</p>
        <p><b>Role:</b> {props.role}</p>
        <p><b>Technology Used:</b> {props.tech}</p>
        <p><b>Github Repo:</b> <a className="linking" href={props.github} target="_blank" rel="noopener noreferrer">{props.github}</a></p>
        <p><b>Live Version:</b> <a className="linking" href={props.live} target="_blank" rel="noopener noreferrer">{props.live}</a></p>
        </Modal>
        </div>
    );
}

export default Items;