import React from 'react'
import "./Header.css"
import {Link} from 'react-router-dom';


function Header() {
    return (
        <header className="header">
            <Link to='/' className="links"><h1>Gurjeet Singh</h1></Link>
            <div className="nav">
                <nav className="header__nav">
                    <Link to='/' className="underlineEffect">Home</Link>
                    <Link to='/about' className="underlineEffect">About</Link>
                    <Link to='/resume' className="underlineEffect">Resume</Link>
                    <Link to='/works' className="underlineEffect">Works</Link>
                    <Link to='/contacts' className="underlineEffect">Contacts</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header
