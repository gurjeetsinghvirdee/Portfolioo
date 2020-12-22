import React from 'react';
import './Contacts.css';
import { IoLogoLinkedin } from "react-icons/io";
import { ImGithub } from 'react-icons/im';
import { MdLocationOn } from "react-icons/md";
import { AiOutlineShareAlt, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";

function Contacts() {
    return (
        <div className="contacts" >
            <div className="title">
                <h2>CONTACTS</h2>
                <p>CONTACT ME</p>
            </div>

            <div className="contact__row">
                <div className="contact__block contact__icons">
                    <MdLocationOn className="big__icons"/>
                    <div>
                        <h3>My Address</h3>
                        <p>Bilaspur, Chhattisgarh, INDIA</p>
                    </div>
                </div>

                <div className="contact__block contact__icons">
                    <AiOutlineShareAlt className="big__icons"/>
                    <div>
                        <h3>Profiles</h3>
                        <a href="https://www.linkedin.com/in/gurjeet-singh-virdee-25a476199/" alt="Linkedin" className="logo"><IoLogoLinkedin/></a>
                        <a href="https://github.com/gurjeetsinghvirdee" alt="Github" className="logo"><ImGithub /></a>
                    </div>
                </div>

                <div className="contact__block contact__icons"> 
                    <AiOutlineMail className="big__icons"/>
                    <div>
                        <h3>Email Me</h3>
                        <a href= "mailto: gurjeetsinghvirdee@gmail.com" alt="email">gurjeetsinghvirdee@gmail.com</a>
                    </div>
                </div>

                <div className="contact__block contact__icons">
                    <BiPhoneCall className="big__icons"/>
                    <div>
                        <h3>Call Me</h3>
                        <p>+91 9009191209</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts 
