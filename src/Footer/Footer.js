
import React from "react";
import { GMail, Map, CopyRight } from "../Projects/Icons";
import { Link } from "react-scroll";
import navLinks from "../Footer/Navlinks";
import contactInfo from "../Hero/contacyinfo";

const Footer = () => {
  const year = new Date().getFullYear().toString();

  return (
    <div className="bg-gradient-to-t from-[#130f2a] to-[#1a1535] text-gray-300 p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-8">
          <div className="w-full md:w-1/3">
            <h3 className="text-white text-2xl font-bold pb-2">
              Satyendra Singh
            </h3>
            <p className="text-lg text-cyan-400 pb-3">FullStack Developer</p>
            <p className="text-sm md:text-base">Thank you for visiting my Personal Portfolio.</p>
            <p className="text-sm md:text-base">Let's connect over socials.</p>
            <p className="text-sm md:text-base">Open to any Feedback</p>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-white text-xl font-bold pb-3">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map(({ link, id }) => (
                <div key={id} className="group">
                  <Link to={link} smooth duration={500}>
                    <div className="text-sm md:text-base font-semibold text-white cursor-pointer">
                      <span className="bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:text-transparent duration-500">
                        {link}
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <h3 className="text-white text-xl font-bold pb-3">Contact info</h3>
            <div className="space-y-4">
              <div className="text-sm md:text-base">
                <p className="flex items-center gap-2 mb-1">
                  <GMail /> seenu5180singh@gmail.com
                </p>
                <p className="flex items-center gap-2">
                  <Map />
                  <span>Allahabad, Uttar Pradesh, India</span>
                </p>
              </div>
              <ul className="flex flex-wrap items-center gap-4">
                {contactInfo.map(({ id, link, name, icon, download }) => (
                  <li
                    key={id}
                    className="group relative w-8 h-8 flex justify-center items-center rounded-full p-1 cursor-pointer transition duration-300 ease-in hover:scale-110"
                  >
                    <a
                      href={link}
                      download={download}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {icon}
                    </a>
                    <div className="hidden md:flex scale-0 group-hover:scale-100 transition ease-out duration-300 delay-100 origin-center justify-center items-center absolute -bottom-10 w-auto h-6 py-2 px-3 bg-gray-900 text-xs text-gray-300">
                      {name}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center">
          <p className="text-xs md:text-sm text-gray-300 flex justify-center items-center">
            <span className="px-1 pb-[0.2rem]"><CopyRight /></span>
            {`2022 - ${year}`} | All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;