import React from 'react'

function Nav() {
    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar__container">
                    <ul className="navbar__left">
                        <div className="navbar__left-logo">
                            <label className="icon">mukesh.me</label>
                        </div>
                    </ul>
                    <ul className="navbar__right">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Blogs</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Nav
