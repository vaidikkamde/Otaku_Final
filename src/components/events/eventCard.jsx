import React,{useState} from "react"
import Modal from 'react-modal';
const images = require.context('../../images/events', true)
const imagePath = name => images(name, true)
Modal.setAppElement(`#___gatsby`);
const EventCard = (props) =>{
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
    const registration = props.registration
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
        <div className="event-cards">             
        <div class="event-card-outer">
            <div class="event-card">
                <div class="image" style={{
                    "background": `url(${imagePath('./'+'ENIGMA.jpeg')})`,
                    "backgroundPosition":"top center","imageRendering":"optimizeSpeed","height":"60%","width":"100%","backgroundSize":"cover","borderRadius":"30px 30px 0 0"
                }}>
                </div>
                <div class="content">
                    <h2>Event Name</h2>
                    <h4>Event Head</h4>
                    <div class="registration-links">
                        <a style={{
                            display:registration?"block":"none"
                        }} className="register-btn" href="">Register</a>
                        <div onClick={openModal} className="know-more-btn">Know More</div>
                        <Modal
                            isOpen={modalIsOpen}
                            onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Event Information"
                        >   
                            <div className="eventModal">
                                <i class="fas fa-window-close fa-lg close-btn" onClick={closeModal}></i>
                                <div class="modal-image" style={{
                                    "background": `url(${imagePath('./'+'ENIGMA.jpeg')})`,
                                    "backgroundPosition":"top center","imageRendering":"optimizeSpeed","height":"15rem","width":"30rem","backgroundSize":"cover"
                                }}>
                                </div>
                                <h2 className="modal-heading">Event Name</h2>
                                <h4 className="modal-subHeading">Event Category</h4>
                                <p className="modal-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur exercitationem doloremque, animi repellendus dignissimos minus sit eum maxime, voluptatum, officia harum cupiditate expedita nemo dolorem molestiae delectus ducimus! Itaque rerum aliquid harum modi ducimus qui quod labore error? Laborum at, aspernatur molestias similique, omnis velit sunt voluptates dolorem amet mollitia asperiores reprehenderit tempora quidem dignissimos nulla fugit? Perspiciatis deleniti ipsam amet aliquid aperiam. Sequi soluta ad corrupti inventore qui laudantium totam repellendus, tempore delectus assumenda iste doloribus accusantium in? Eum voluptatem aperiam repellendus nihil dolorem sed cum enim culpa consectetur, hic nulla recusandae natus veritatis iure. Ipsa doloremque eum quo et aspernatur ullam saepe veritatis itaque. Enim officia eveniet quas quo ducimus ullam facere tenetur impedit? Totam corrupti ut odit, in quod et neque, ipsa veritatis amet sapiente facilis debitis rerum nam assumenda temporibus vitae dolores. Officiis, cupiditate tempore veniam ullam odit rem labore vel mollitia odio! Maiores quia autem voluptate, cum unde ea aliquam sint eaque similique minus reprehenderit alias nisi rerum rem amet! Cumque doloribus deleniti aperiam blanditiis, consectetur voluptatibus excepturi pariatur alias beatae veritatis incidunt illo molestias expedita necessitatibus iusto architecto eos nobis aut impedit accusantium nisi dignissimos earum accusamus? Eum consequatur hic aperiam, similique molestiae quam?</p>
                                <br/>
                                <h4 className="modal-days">July 6 2020 to July 12 2020</h4>
                                <h4 className="modal-timings">5:00 PM to 7:00 PM</h4>
                                <h4 className="registration-fees">Rs -/ 100</h4>
                                <a href="" style={{
                            display:registration?"block":"none"
                        }} className="register-btn">Register</a>
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default EventCard;