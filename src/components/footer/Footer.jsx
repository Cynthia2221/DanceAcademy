import React from 'react';
import "../footer/Footer.css";
import fb from "../../assets/fb.png";
import ig from "../../assets/ig.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";
import rss from "../../assets/rss.png";
import { NavLink } from 'react-router-dom';

const Footer = () => {

    return (

        <div className="footer">
            <div className="sb-footer section-padding">
                <div className="sb-footer-links">
                    {/* <div className="sb-footer-links-div">
                        <h4>Hola</h4>
                        <a href="/first">
                            <p>First</p>
                        </a>
                        <a href="/second">
                            <p>Second</p>
                        </a>
                        <a href="/third">
                            <p>Third</p>
                        </a>
                    </div>
                    <div className="sb-footer-links-div">
                        <h4>Adios</h4>
                        <a href="/four">
                            <p>Four</p>
                        </a>
                        <a href="/five">
                            <p>Five</p>
                        </a>
                        <a href="/six">
                            <p>Six</p>
                        </a>
                    </div>
                    <div className="sb-footer-links-div">
                        <h4>Aur Revoir</h4>
                        <a href="/seven">
                            <p>Seven</p>
                        </a>
                        <a href="/eigth">
                            <p>Eigth</p>
                        </a>
                        <a href="/nine">
                            <p>Nine</p>
                        </a>
                    </div>
                    <div className="sb-footer-links-div">
                        <h4>Bye</h4>
                        <a href="/ten">
                            <p>Ten</p>
                        </a>
                        <a href="/eleven">
                            <p>Eleven</p>
                        </a>
                        <a href="/twelve">
                            <p>Twelve</p>
                        </a>
                    </div> */}
                    <div className="sb-footer-links-div">
                        <h4>Forma de Contactar </h4>
                        <a href="/thirteen">
                            <p>Instagram</p>
                        </a>
                        <a href="/fourteen">
                            <p>Twitter</p>
                        </a>
                        <a href="/fiveteen">
                            <p>WhatsApp: 654094312</p>
                        </a>
                    </div>
                    <div className="sb-footer-links-div">
                        <h4>Redes Sociales</h4>
                        <div className="socialMedia">
                            <a href="https://www.facebook.com/BAILAFACILGijon/" target="_blank" rel="noopener noreferrer">
                                <img src={fb} alt="Facebook" />
                            </a>
                            <a href="https://twitter.com/_clasesdebaile" target="_blank" rel="noopener noreferrer">
                                <img src={twitter} alt="Twitter" />
                            </a>
                            <a href="https://es.linkedin.com/company/clases-de-baile?trk=public_profile_experience-item_profile-section-card_image-click" target="_blank" rel="noopener noreferrer">
                                <img src={linkedin} alt="LinkedIn" />
                            </a>
                            <a href="https://www.instagram.com/up_escueladebaile/?hl=es" target="_blank" rel="noopener noreferrer">
                                <img src={ig} alt="Instagram" />
                            </a>
                            <a href="../../../public/rss/RSS.xml">
                                <img src={rss} alt="RSS"/>
                            </a>
                        </div>

                    </div>

                    <div className="sb-footer">
                        <div className="sb-footer-copy">
                            <p>
                                @{new Date().getFullYear()} CodeInn. All rigth reserved.
                            </p>
                        </div>
                        <div className="sb-footer-links-terms">
                            <NavLink to="/terms">
                                <div>
                                    <p>Terms & Conditions</p>
                                </div>
                            </NavLink>
                            <NavLink to="/privacy">
                                <div>
                                    <p>Privacy</p>
                                </div>
                            </NavLink>
                            <NavLink to="/security">
                                <div>
                                    <p>Security</p>
                                </div>
                            </NavLink>
                            <NavLink to="/cockies">
                                <div>
                                    <p>Cockie Declaration</p>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;