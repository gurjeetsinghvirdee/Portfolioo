import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import {BsCardText} from 'react-icons/bs'; 

function Home() {
    return (
        <div className="home">
            <div>
                <h1>Hello,<span></span></h1>
                <h1>I'm Gurjeet Singh<span></span></h1>
                <div className="home__nav">
                    <nav className="header__nav">
                        <Link to='/' className="underlineEffect">Home</Link>
                        <Link to='/about' className="underlineEffect">About</Link>
                        <Link to='/resume' className="underlineEffect">Resume</Link>
                        <Link to='/works' className="underlineEffect">Works</Link>
                        <Link to='/blogs' className="underlineEffect">Blogs</Link>
                        <Link to='/contacts' className="underlineEffect">Contacts</Link>
                    </nav>
                </div>
                <a className="home__button" href="https://drive.google.com/file/d/1uaw5qe-nCQgdBfAdg29axhQL_P3wC8nc/view?usp=sharing" type="button"><BsCardText className="icons"/>Download Resume</a>
            </div>
        </div>
    )
}

export default Home

