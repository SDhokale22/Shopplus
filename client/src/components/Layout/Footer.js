import React from "react";
import { Link } from "react-router-dom"; 
import { FaInstagram, FaTwitter, FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <h3 className="text-center">All Right Reserved &copy; Shopplus</h3>
      <h5 style={{color:"white", textAlign:"center"}}><FaInstagram /> <FaTwitter /> <FaLinkedin />  </h5>
      <p className="text-center mt-3">
        <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
        <Link to="/policy">Privacy Policy</Link>
      </p>
    </div>
  );
};

export default Footer;