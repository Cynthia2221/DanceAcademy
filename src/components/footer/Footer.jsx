import React from 'react';
import "../footer/Footer.css";
import fb from "../../assets/fb.png";
import ig from "../../assets/ig.png";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";

const Footer = () => {
    return (

        <div className="footer">
            <div className="sb-footer section-padding">
                <div className="sb-footer-links">
                    <div className="sb-footer-links-div">
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
                    </div>
                    <div className="sb-footer-links-div">
                        <h4>Adiosito</h4>
                        <a href="/thirteen">
                            <p>Thirteen</p>
                        </a>
                        <a href="/fourteen">
                            <p>Fourteen</p>
                        </a>
                        <a href="/fiveteen">
                            <p>Fiveteen</p>
                        </a>
                    </div>
                    <div className="sb-footer-links-div">
                        <h4>Holita</h4>
                        <div className="socialMedia">
                            <p><img src={fb} alt=""></img></p>
                            <p><img src={twitter} alt=""></img></p>
                            <p><img src={linkedin} alt=""></img></p>
                            <p><img src={ig} alt=""></img></p>
                        </div>
                    </div>

                    <div className="sb-footer">
                        <div className="sb-footer-copy">
                            <p>
                                @{new Date().getFullYear()} CodeInn. All rigth reserved.
                            </p>
                        </div>
                        <div className="sb-footer-links-terms">
                            <a href="/terms"><div>
                                <p>Terms & Conditions</p>
                            </div></a>
                            <a href="/privacy"><div>
                                <p>Privacy</p>
                            </div></a>
                            <a href="/security"><div>
                                <p>Security</p>
                            </div></a>
                            <a href="/cockie"><div>
                                <p>Cockie Declaration</p>
                            </div></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;