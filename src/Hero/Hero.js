import React from "react";
import "./Hero.css";
import { TypeAnimation } from "react-type-animation";
import contactInfo from "./contacyinfo";
import { Link } from "react-scroll";
import { ArrowDown } from "./icons";


export default function Hero() {
  const work = [
    "Frontend Development",
    2000,
    "Backend Development",
    2000,
    "Android Development",
    2000,
  ];
  return (
    <>
      <section className="hero-container">
        <div className="hero-content">
          <span className="text-3xl">Hi There,</span>
          <h1>
            <span className="text-3xl">I'm{" "}</span>
            
            <span className="text-transparent bg-gradient-to-br from-cyan-300 to-blue-600 bg-clip-text text-4xl">
              Satyendra
            </span>
          </h1>
          <p className="text-gray-400 text-3xl font-extrabold py-4 min-w-[16rem] xs:min-w-[25rem] max-w-[26rem]">
            <span className="block xs:inline text-xl"> I am into</span>
            <span className="text-cyan-400 xs:pl-2 text-xl">
              <TypeAnimation
                sequence={work}
                speed={1}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </span>
          </p>
          <ul className="flex items-center z-40 gap-3 md:gap-8 lg:gap-4 justify-start ">
            {contactInfo.map(({ id, link, name, icon, download }) => {
              return (
                <li
                  key={id}
                  link={link}
                  className={`group relative w-8 h-8 flex justify-center items-center rounded-full p-1 sm:grayscale  cursor-pointer duration-[450ms] transition ease-in hover:grayscale-0 hover:scale-105 focus:grayscale-0 focus:scale-105 active:grayscale-0 active:scale-105`}
                >
                  <a
                    href={link}
                    download={download}
                    target="_blank"
                    rel="nonoopener noreferrer"
                  >
                    {icon}
                  </a>
                  <div className="flex scale-0 sm:group-hover:scale-100 group-focus:scale-100 transition ease-out duration-300 delay-100 origin-center justify-center items-center absolute z-50 -bottom-10 w-auto h-6 py-2 px-3 bg-gray-900 text-sm text-gray-300">
                    {name}
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="py-5 mt-8">
            <Link
              to="About"
              smooth
              duration={500}
              className="z-30 group bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center gap-3 px-6 py-3  rounded-lg ease-linear duration-300 delay-75 transition-all cursor-pointer w-40 relative "
            >
              <span className="pr-6 sm:pr-0 sm:group-hover:-translate-x-5 sm:transition-transform delay-[400ms] ease-out">
                About Me
              </span>
              <span className="absolute z-30 right-5 sm:-translate-y-7 sm:group-hover:translate-y-0 sm:scale-0 transition-all group-hover:scale-125 ease-in delay-200 animate-pulse duration-500 ">
                <ArrowDown />
              </span>
            </Link>
          </div>
        </div>
        <div className="hero-img">
          <div>
            <div className="tech-icon">
              <img
                src="assets/react-logo-1.png"
                width={70}
                height={70}
                alt=""
              />
            </div>
            <img
              className="handsome"
              src="assets/handsome.jpg"
              width={300}
              height={350}
              alt=""
            />
          </div>
          <div>
            <div className="tech-icon">
              <img src="assets/html-logo-1.png" width={70} height={70} alt="" />
            </div>

            <div className="tech-icon">
              <img src="assets/css-logo-1.png" width={70} height={70} alt="" />
            </div>

            <div className="tech-icon">
              <img src="assets/js-logo-1.png" width={70} height={70} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
