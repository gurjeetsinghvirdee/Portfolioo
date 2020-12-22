import React from 'react';
import './About.css';
import myself from '../assets/myself.png';
import { RiArrowRightSFill } from "react-icons/ri";

function About() {
    return (
        <div className="about">
            <div className="title">
                <h2>ABOUT</h2>
                <p>LEARN MORE ABOUT ME</p>
            </div>

            <div className="about__row" >
                <div className="about__images" >
                    <img src={myself} alt="Gurjeet Singh"/>
                </div>
                <div className="about__row__info" >
                    <h3>Full Stack Web Developer</h3>
                    <p>Skilled React on JavaScript full stack web developer eager to join a creative, problem solving team. Ability to learn and implement new technologies quickly. My skills include React on JavaScript, HTML5, CSS3, Sass, Node.js ,Redux ,BootStrap and MongoDB. These skills were learned at Web Development Intermediate program.</p>
                    <ul className="grid">
                        <li className="grid__icon"><RiArrowRightSFill/><strong className="grid__item">Birthday:</strong><p className="grid__item"> 05 May 2000</p></li>
                        <li className="grid__icon"><RiArrowRightSFill/><strong className="grid__item">Phone:</strong><p className="grid__item"> +91 9009191209</p></li>
                        <li className="grid__icon"><RiArrowRightSFill/><strong className="grid__item">Email:</strong><p className="grid__item"> gurjeetsinghvirdee@gmail.com</p></li>
                        <li className="grid__icon"><RiArrowRightSFill/><strong className="grid__item">Freelance:</strong><p className="grid__item"> Available</p></li>
                    </ul>
                    <p>Dedicated and efficient full stack developer with 6+ years experience in application layers, presentation layers, and databases. Certified in both F/E and B/E technologies. Spearheaded successful transition from LAMP stack to MEAN which cut latency by 40% and increased effectiveness of database administrators by 20%. Seeking to further improve HTML5 and CSS3 skills as the future full stack developer at Atmospheric Solutions.</p>
                </div>
            </div>
        </div>
    )
}

export default About
