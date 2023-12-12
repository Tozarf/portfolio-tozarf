import React from "react";
import GithubIcon from "@/public/github-icon.svg";
import LinkedInIcon from "@/public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 blur-lg z-0 absolute top-full -left-0 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect!</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          My inbox is always open, I am open to new opportunities or just to
          connect :)
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href={"https://github.com/Tozarf"}>
            <Image src={GithubIcon} alt="Github icon" />
          </Link>
          <Link href={"https://www.linkedin.com/in/fausto-zaruma-4659751b0/"}>
            <Image src={LinkedInIcon} alt="LinkedIn icon" />
          </Link>
        </div>
      </div>
      <div className="z-10">
        <form className="flex flex-col" action="">
          <div className="mb-3">
            <label
              htmlFor="email"
              className="text-white mb-2 block text-sm font-medium mt-2 md:mt-3"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full px-2"
              required
              placeholder="your.email@mail.com"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="subject"
              className="text-white mb-2 block text-sm font-medium mt-2 md:mt-3"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full px-2"
              required
              placeholder="Subject title"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="message"
              className="text-white mb-2 block text-sm font-medium mt-2 md:mt-3"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full px-2"
              placeholder="Message"
            />
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full mt-4"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export { EmailSection };
