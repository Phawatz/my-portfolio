"use client";

import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import profile from "../../public/profile.jpg";
import design from "../../public/design.png";
import develop from "../../public/develop.png";
import web1 from "../../public/web1.png";
import web2 from "../../public/web2.png";
import web3 from "../../public/web3.png";
import web4 from "../../public/web4.png";
import web5 from "../../public/web5.png";
import web6 from "../../public/web6.png";
import { useState, useEffect } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-gray-100 px-10 md:px-20 lg:px-40 dark:bg-gray-900 transition duration-300">
        <section className="min-h-screen">
          <nav className="py-5 px-8 mb-12 fixed flex justify-between bg-gray-100 top-0 left-0 w-full dark:bg-gray-900 transition duration-300">
            <a href="#" className="text-2xl font-medium px-4 py-2 rounded-full hover:bg-orange-400 transition duration-300 dark:text-white">
              Home
            </a>
            <ul className="flex items-center">
              <li
                className="dark:transition duration-300"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? (
                  <BsFillSunFill className="cursor-pointer text-2xl text-white" />
                ) : (
                  <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
                )}
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-orange-500 to-yellow-200 text-white px-4 py-2 rounded-full ml-8 hover:text-gray-800 transition duration-300"
                  href="/Phawat-Resume.pdf"
                  download="Phawat-Resume.pdf"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex justify-center mt-10 pt-16">
            <Image src={profile} alt="" className="w-80 h-80 rounded-full" />
          </div>
          <div className="text-center p-10">
            <h2 className="text-4xl py-2 text-orange-500 font-medium md:text-6xl">
              Phawat Phutharaporn
            </h2>
            <h3 className="text-2xl py-2 md:3xl dark:text-white">
              Software Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-100">
              I graduated from the Computer Science Department at Chiang Mai
              University and am looking for a job in a challenging environment
              that requires analytical and problem-solving skills. I'm
              interested in Front-end, Back-end, Tester, and full-stack
              developers.
            </p>
          </div>
          <div className="flex text-5xl justify-center gap-16 py-3 text-gray-600 dark:text-gray-300">
            <a
              href="https://www.facebook.com/PhawatPhutharaporn/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-gray-800 transition duration-300 rounded-md"
            >
              <AiFillFacebook className="hover:text-orange-500 transition duration-300" />
            </a>
            <a
              href="https://github.com/Phawatz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-gray-800 transition duration-300 rounded-md"
            >
              <AiFillGithub className="hover:text-orange-500 transition duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/phawat-phutharaporn-9173a3348/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-gray-800 transition duration-300 rounded-md"
            >
              <AiFillLinkedin className="hover:text-orange-500 transition duration-300" />
            </a>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 mt-10 dark:text-white">
              Services I offer
            </h3>
            <p className="text-md py-2 leading-7 text-gray-800 dark:text-gray-300">
              I'm always ready to adapt and learn new things with sincerity and
              will use those things to develop myself even further.
            </p>
            <p className="text-md py-2 leading-7 text-gray-800 dark:text-gray-300">
              If you offer me the chance to work, I'll do everything I can to
              take it and not let you down.
            </p>
          </div>

          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white">
              <div className="flex justify-center">
                <Image src={design} width={100} height={100} alt="" />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-orange-400">Design tools I use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white">
              <div className="flex justify-center">
                <Image src={develop} width={100} height={100} alt="" />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">Clean Coding</h3>
              <p className="py-2">
                Write code in a way that is easy to understand and not
                confusing.
              </p>
              
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <p className="text-xl py-2 leading-7 text-gray-800 dark:text-gray-400">
              <span>&lt;/&gt;</span>This is an example of some of my work that I have intentionally
              practiced and applied what I have learned.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                alt=""
                className="w-48 h-48 rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                alt=""
                className="w-48 h-48 rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                alt=""
                className="w-48 h-48 rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                alt=""
                className="w-48 h-48 rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                alt=""
                className="w-48 h-48 rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web6}
                alt=""
                className="w-48 h-48 rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
