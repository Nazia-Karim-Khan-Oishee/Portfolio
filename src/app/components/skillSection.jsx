"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import SkillTag from "./SkillTag";
import { skillsData } from "./skillsData";

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAllSkills, setShowAllSkills] = useState(false);

  const categories = [
    "All",
    "Database",
    "Language",
    "ML and AI",
    "Backend",
    "Service",
  ];

  const filteredSkills = skillsData.filter(
    (skill) => selectedCategory === "All" || skill.category === selectedCategory
  );

  const skillsToDisplay = showAllSkills
    ? filteredSkills
    : filteredSkills.slice(0, 5);

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="skills">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Skills
      </h2>
      <div className="flex flex-row justify-center items-center gap-2 text-white my-6">
        {categories.map((category) => (
          <SkillTag
            key={category}
            name={category}
            onClick={setSelectedCategory}
            isSelected={selectedCategory === category}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {skillsToDisplay.map((skill, index) => (
          <motion.div
            key={skill.id}
            className="bg-[#181818] p-4 rounded-lg text-center w-full"
            variants={cardVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.3, delay: index * 0.1 }} // Staggered animation
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="mx-auto mb-2 h-12 w-12"
            />
            <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
            <a
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline">
              Learn More
            </a>
          </motion.div>
        ))}
      </div>
      {filteredSkills.length > 5 && (
        <div className="flex justify-center mt-8 ml-4">
          <button
            onClick={() => setShowAllSkills(!showAllSkills)}
            className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-xl">
            {showAllSkills ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
      <br />
    </section>
  );
};

export default SkillsSection;
