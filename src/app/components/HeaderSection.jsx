"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { TypeAnimation } from "react-type-animation";

const HeaderSection = () => {
  const handleDownloadCV = () => {
    const cvURL = "/Nazia_Karim_Khan_Oishee_cv.pdf"; // Adjust the path as needed
    const link = document.createElement("a");
    link.href = cvURL;
    link.download = "Nazia_Karim_Khan_CV.pdf"; // Change the filename if needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h3 className="text-white max-w-2xl mb-4 lg:text-6xl text-4xl font-extrabold">
            <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm Nazia Karim Khan
            </span>
          </h3>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
            <h5 className="text-white max-w-2xl mb-4 lg:text-6xl text-4xl font-extrabold">
              <span className="text-transparent text-5xl bg-clip-text bg-gradient-to-r  from-blue-500 via-purple-500 to-pink-400">
                I am a{" "}
              </span>
              <span className="text-white text-4xl bg-clip-text bg-gradient-to-r">
                <TypeAnimation
                  sequence={[
                    "Web Developer",
                    1000,
                    "Mobile App Developer",
                    1000,
                    "Full Stack Developer",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h5>
          </motion.div>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl">
            A software engineering aspirant.
          </p>
          <div>
            <button
              className="m-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 px-1 py-1 text-white rounded-full"
              onClick={handleDownloadCV}>
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download My Resume
              </span>
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="bg-[#181818] lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-full relative">
              <Image
                src="/images/oishee.jpeg"
                alt="hero image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={260}
                height={300}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeaderSection;
