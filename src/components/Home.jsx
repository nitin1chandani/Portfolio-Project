import React from "react";
import HeroImage from "../assets/heroImage.jpeg";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Computer Nerd
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          I am a hopeless romantic about technology. Everything and anything new around and about tech excites me. From not knowing about programming languages until university to working on Web Development projects, I have come a long way on this journey. The URL you're currently on is one of my love letters to tech. 

Explore the blog to have more insights!
          </p>

          
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;