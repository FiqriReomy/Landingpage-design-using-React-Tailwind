import React from "react";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#031B34]">
      <div className="container mx-auto py-10">
        <div className="flex flex-col items-center gap-10">
          <h2 className="text-gradient2 text-[40px] leading-[50px] text-center">Do you want to step in to the future before others</h2>
          <button className="p-3 border border-white">Request Early Access</button>
          <div>
            <h2 className="mb-5">Follow us for more on :</h2>
            <div className="flex justify-center gap-5">
              <FaTwitter className="cursor-pointer" size={25} />
              <FaInstagram className="cursor-pointer" size={25} />
              <FaFacebook className="cursor-pointer" size={25} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 bg-[#040C18] py-5">
        <p>© 2021 GPT-3. All rights reserved.</p>
        <p className="text-[12px]">This design created by JSmaster with figma and some improvement by Fiqri oemry </p>
      </div>
    </div>
  );
};

export default Footer;
