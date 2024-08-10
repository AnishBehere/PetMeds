/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";


const Footer = () => {
return(
<>
<footer className="container" >

<div className="content">
<div>
    
   <ul>
    

   </ul>
   </div>

   
<div>
    <h4>Contact US</h4>
    <div>
     <p>    <FaWhatsapp /> +91 9881529708</p>
    </div>
    <div>
    <p>      <BiLogoGmail /> behereanish@gmail.com</p>
    </div>

</div>

<div>
    <h4> Follow US</h4>
    <div>
    <p> <FaInstagram /> <a href="https://www.instagram.com/_an.ishhh/" >https://www.instagram.com/_an.ishhh/</a> </p>
    </div>
    <div>
    <p>     <CiLinkedin /><a href="https://www.linkedin.com/in/anish-behere-229738229" >https://www.linkedin.com/in/anish-behere</a> </p>
    </div>
    <div>
   
    <p>  <IoLogoGithub /> <a href="https://github.com/AnishBehere" >https://github.com/AnishBehere</a> </p>
    </div>
</div>

</div>
<hr/>

<h1 style={{fontFamily:"sans-serif", textAlign:"center"} }>ThankYou</h1>
</footer>

</>




);

};

export default Footer;