import React from "react";
import MyImage from "../assets/portfolio/profile.jpg";
import { TbCircleArrowRightFilled } from "react-icons/tb";
import { Link } from "react-scroll";

function Home() {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Websites done right
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Welcome to my portfolio website! I am a web developer with 4 years
            of experience in developing websites and console applications. I
            have extensive programming experience and am comfortable developing
            on the frontend or backend.
          </p>

          <Link
            to="experience"
            scroll
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            Experience
            <span className="group-hover:rotate-90 duration-300">
              <TbCircleArrowRightFilled size={20} className="ml-1" />
            </span>
          </Link>
        </div>

        <img
          src={MyImage}
          alt="my-profile"
          className="rounded-2xl mx-auto w-2/3 md:w-1/2"
        ></img>
      </div>
    </div>
  );
}

export default Home;
