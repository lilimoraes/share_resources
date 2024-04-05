import React from "react";
import { FooterArea } from "./styled";
import { FiInstagram, FiFacebook, FiTwitter, FiYoutube, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
  <FooterArea>
    <div>
    All rights reserved. 
    </div>
    <div className="icons-social">
      <FiFacebook className="face"/>
      <FiYoutube className="youtube"/>
      <FiLinkedin className="link"/>
      <FiInstagram className="insta"/>
      <FiTwitter className="twitter"/>
    </div>
    
  </FooterArea>
  ); 
  
  
  
};

export default Footer;
