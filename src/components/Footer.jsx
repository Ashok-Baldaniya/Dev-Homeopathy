import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="bg-backgroundColor text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold text-xl pb-4">Contact Us</h1>
        </div>

        <div className="w-full md:w-3/4 flex flex-col md:flex-row md:gap-8">
          <div className="md:w-1/2 flex flex-col">
            <div className="mb-4 flex items-center">
              <FontAwesomeIcon icon={faLocationDot} color="white" className="mr-2 flex-shrink-0" />
              <span>134, 135 Bhagirath Soc 2, Nr Mangalam School, Opp. Abhayanagar Soc., Maruti Chowk, Gayatri , Surat, Gujarat 395006, India</span>
            </div>
            <div className="mb-4 flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 flex-shrink-0" />
              <a href="mailto:abc@gmail.com">abc@gmail.com</a>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faPhone} className="mr-2 flex-shrink-0" />
              <span>+123-456-7890</span>
            </div>
          </div>
          <div className="md:w-1/2">
            <Link to="/" spy={true} smooth={true} duration={500}>
              <iframe
                id="inlineFrameExample"
                title="Inline Frame Example"
                width="100%"
                height="300"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d232.4742251629296!2d72.8645273810198!3d21.20853544560286!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f99cc1dd81d%3A0x41a405a4bb428a02!2sBhagirath%20Society%20V-2!5e0!3m2!1sen!2sin!4v1715598973629!5m2!1sen!2sin">
              </iframe>

            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

