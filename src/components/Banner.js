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
                                    <li><a href="https://www.facebook.com/kaizerRMK"><FaFacebookF/></a></li>
                                    <li><a href="https://twitter.com/MukeshK40951914"><FaTwitter/></a></li>
                                    <li><a href="https://www.linkedin.com/in/mukesh-kumar-288b1819b/"><FaLinkedin/></a></li>
                                    <li><a href="https://www.instagram.com/krazy_kaizer/"><FaInstagram/></a></li>
                                    <li><a href="https://github.com/kaizer-rmk"><FaGithub/></a></li>
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
