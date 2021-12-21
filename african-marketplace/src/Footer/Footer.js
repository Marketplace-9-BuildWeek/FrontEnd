import React from "react";
import "./Footer.css";
import { Twitter, Instagram, Facebook, Dribbble } from "react-feather";

const Footer = () => {
  return (
    <div className="footer">
      <Twitter size={30} />
      <Instagram size={30} />
      <Facebook size={30} />
      <Dribbble size={30} />
    </div>
  );
};

export default Footer;
