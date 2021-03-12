import React from 'react'
import {FaFacebookF,FaTwitter,FaLinkedin,FaGithub,FaInstagram} from "react-icons/fa"

function Banner() {
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="header__content">
                            <div className="header__section">
                                <ul className="header_ul">
                                    <li><FaFacebookF/></li>
                                    <li><FaTwitter/></li>
                                    <li><FaLinkedin/></li>
                                    <li><FaInstagram/></li>
                                    <li><FaGithub/></li>
                                </ul>
                                <h1>I m' Mukesh Kumar</h1>
                                <p>
                                    Hello, World! Nice to meet you all. Lets Work together!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="banner__img">
                            <img src='/images/mukesh.png'></img>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Banner
