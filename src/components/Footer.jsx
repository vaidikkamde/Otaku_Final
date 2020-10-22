import React,{useState} from "react"
import {Link} from "gatsby"
import Modal from 'react-modal';
import Privacy from "./Privacy"
Modal.setAppElement(`#___gatsby`);
function Footer(){
    const customStyles = {
        content : {
            top                   : '55%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)',
            height                : '85vh',
            backgroundColor       : '#f4f4f4',
        },
        overlay:{
            backgroundColor: 'rgba(0, 0, 0, 0.9)'
        }
    };
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal(){
    setIsOpen(true);
    document.body.classList.add("stop-scrolling");
    }
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
      }
     
      function closeModal(){
        setIsOpen(false);
        document.body.classList.remove("stop-scrolling");
      }
    return(
        <footer>
            <div className="links">
                <div className="footer-links">
                    <h2>CLUB OTAKU</h2>
                    <div className="footer-nav">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/events">Events</Link></li>
                        <li><Link to="/eventwinners">Event Winners</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/contactus">Contact Us</Link></li>
                    </ul>
                    </div>
                </div>
                <div className="address">
                    <h2>Visit Us</h2>
                    <p>
                        Block - 13,
                        <br/>
                        Lovely Professional University,
                        <br/>
                        Delhi G.T.Road (NH-1),
                        <br/>
                        Phagwara, Punjab,144411
                        <br/>
                        INDIA
                    </p>
                </div>
            </div>
            <div className="extras">
                <Link to="/sitemap.xml">Sitemap</Link>
                <span>&#169; Student Organization Otaku</span>
                <span style={{
                    cursor:"pointer"
                }} onClick={openModal}>Privacy Policy</span>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                     contentLabel="Event Information"
                >
                    <div className="privacy">
                        <i class="fas fa-window-close fa-lg close-btn" onClick={closeModal}></i>
                        <Privacy/>                        
                    </div>
                </Modal>   
            </div>
            <div className="madeBy">
                <span>Designed And Developed By <a href="https://vaidikkamde.tk">Vaidik Kamde</a></span>
            </div>
        </footer>
    )
}

export default Footer;