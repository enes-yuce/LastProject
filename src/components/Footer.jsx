import React, { useEffect, useState } from "react";
import { FaTwitter, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";

const Footer = ({ darkMode, language, FooterData }) => {
  const [footerFetchData, setFooterFetchData] = useState(null);

  const handleClick = (link) => {
    window.open(link, "_blank");
  };


  
  useEffect(() => {
    axios
      .get("https://661eeda216358961cd932017.mockapi.io/products")
      .then((response) => {
        setFooterFetchData(response.data);
        toast.success("Footer data loaded successfully");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        toast.error("Failed to fetch footer data");
      });
  }, []);

  return (
    <footer className={darkMode ? "footer-dark" : "footer"}>
      <div className="footer-content">
        <h1 className="messageHeader">
          <span className="messageHeader-type">
            {FooterData && FooterData.header}
          </span>
        </h1>
        <div className="messageContent">{FooterData && FooterData.content}</div>
        <div className="messageMail"> {FooterData && FooterData.email}</div>
        <div className=" mt-2 social-icons flex justify-center items-center gap-2">
          <FaTwitter size={35} onClick={() => handleClick(FooterData.links.twitter)} />
          <FaGithub size={35} onClick={() => handleClick(FooterData.links.github)} />
          <FaEnvelope size={35} onClick={() => handleClick(FooterData.links.email)} />
          <FaInstagram size={35} onClick={() => handleClick(FooterData.links.instagram)} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;