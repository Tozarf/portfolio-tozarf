"use client";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12  font-mono">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-3xl sm:text-5xl font-extrabold">
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              HELLO WORLD!{" "}
            </div>
            I'm{" "}
            <TypeAnimation
              sequence={[
                "Fausto",
                1500,
                "a Software Developer",
                1500,
                "a Web Developer",
                1500,
              ]}
              wrapper="span"
              speed={20}
              repeat={Infinity}
              className="text-3xl sm:text-5xl"
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            This is my supercool intro for my hero page of my portfolio
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full sm:mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white ">
              HIRE ME!
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-4 lg:mt-0 ">
              <span className="block bg-[#121212] rounded-full px-5 py-2 hover:bg-slate-800">
                DOWNLOAD CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[200px] h-[200px] lg:w-[350px] lg:h-[350px] relative">
            <Image
              className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src={"/images/profile-pic-removebg.png"}
              alt="profile-picture"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
