import React from 'react'
import "./Header.css"

function Header() {
    return (
        <header className="header">
            <h1>Gurjeet Singh</h1>
            <div className="nav">
                <nav className="header__nav">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#resume">Resume</a>
                    <a href="#works">Works</a>
                    <a href="#contact">Contacts</a>
                </nav>
            </div>
            
        </header>
    )
}

export default Header
