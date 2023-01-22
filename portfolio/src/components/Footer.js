import React from "react";
import FooterCSS from './Footer.css';
import Twitter from './img/Social/Twitter.png';
import Skype from './img/Social/Skype.png';
import LinkedIn from './img/Social/LinkedIn.png';

function Footer(){
    return(
        <div>
            <div className="Footer">
                <div className="Footer__Name">
                    Harm Haandrikman
                </div>
                <div className="Footer__Social">
                    <img className="Footer__S__Icon" src={Twitter}></img>
                    <img className="Footer__S__Icon" src={Skype}></img>
                    <img className="Footer__S__Icon" src={LinkedIn}></img>
                </div>
                <div className="Footer__Contact">
                    <div className="Footer__Number">06-43464167</div>
                    <div className="Footer_Email">...@gmail.com</div>
                </div>
            </div>
        </div>
    )
}
export default Footer;