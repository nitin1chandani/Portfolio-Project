import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Hi, 

My name is Nitin and I am a third-year undergrad pursuing a Computer Science degree. Unlike most Indians, I did not land up doing engineering under parental pressure. It was my curiosity that led me to where I am today.

        </p>

        <br />

        <p className="text-xl">
        I practice DSA, networking, cyber security, and web and Android development.I am a full-stack web developer, ethical hacker, network defender, and open-source enthusiast, with a bit of hands-on Android development. 
I am actively learning Machine Learning, and DevOps, and contributing to open-source projects. 

I am still carving out my niche, currently comfortable in any of the mentioned domains.
        </p>
      </div>
    </div>
  );
};

export default About;