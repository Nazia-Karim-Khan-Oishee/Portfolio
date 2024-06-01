"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "AgrowCulture",
    overview: "A project developed for the Software Project Lab I Course.",
    description:
      "Our goal was to develop a platform that addresses challenges within the agricultural sector, facilitating connections between individuals, funders and customers. Successfully implemented features using php, HTML and CSS.",
    image: "/images/agroeculture.JPG",
    tag: ["All", "Web"],
    gitURL: "https://github.com/Nazia-Karim-Khan-Oishee/AgrowCulture.git",
  },
  {
    id: 2,
    title: "BookShelf",
    overview:
      "A project developed for Database Management Systems II Lab Course",
    description:
      "BookShelf is an online platform for a mobile library service. The primary objective of this project is to demonstrate our proficiency in managing relational databases and applying various CRUD operations on them.",
    image: "/images/books.webp",
    tag: ["All", "Web"],
    gitURL: "https://github.com/Nazia-Karim-Khan-Oishee/BookShelf.git",
  },
  {
    id: 3,
    title: "DocLinkr",
    overview: "A project developed for the Design Pattern I Course.",
    description:
      "The project strives to enhance healthcare accessibility by simplifying the traditional appointment booking, assisting patients in effective health management, enabling virtual consultations and offering special services to address the emergency needs of patients.",
    image: "/images/doc.JPG",
    tag: ["All", "Mobile"],
    gitURL: "https://github.com/Nazia-Karim-Khan-Oishee/DP-I.git",
  },
  {
    id: 4,
    title: "Duck Simulator",
    overview:
      "A console-based project developed for the Design Patterns Lab course",
    description:
      "The DuckSimulator project integrates a variety of design patterns including Adapter, Decorator, Factory, Composite, and Observer. The primary objective of the project was to implement multiple design patterns effectively.",
    image: "/images/duck.jpeg",
    tag: ["All", "Console-based"],
    gitURL: "https://github.com/Nazia-Karim-Khan-Oishee/Duck_Simulator.git",
  },
  {
    id: 5,
    title: "Equery",
    overview:
      "A backend-only project developed for Server Programming Lab Course.",
    description:
      "Equery is a platform for students to share concerns, questions, and insights about academic topics. Developed using Node.js, Express, and MongoDB. The project demonstrates proficiency in backend development.",
    image: "/images/eq.JPG",
    tag: ["All", "Backend-only"],
    gitURL: "https://github.com/Nazia-Karim-Khan-Oishee/Equery.git",
  },
  {
    id: 6,
    title: "GitHub-Issue-Taxonomy",
    overview: "A project developed for Machine Learning Lab Course",
    description:
      "The project automates the categorization of GitHub issues into bugs, features, or questions. We have used BERT model for issue classification. To train and evaluate our model, we have used a data set sourced from Kaggle obtaining an accuracy score of 73%",
    image: "/images/gitub.JPG",
    tag: ["All", "Machine Learning"],
    gitURL:
      "https://github.com/Nazia-Karim-Khan-Oishee/GitHub-Issue-Taxonomy.git",
  },
  {
    id: 7,
    title: "Spectrum",
    overview: "A project developed for the Software Project Lab II Course",
    description:
      "Spectrum holds the basic properties of an e-commerce website along with an addition built-in chat system that allows the customers to communicate with the respective business owner. It is developed using MERN stack technology.",
    image: "/images/spec.JPG",
    tag: ["All", "Web"],
    gitURL: "https://github.com/Nazia-Karim-Khan-Oishee/Spectrum.git",
  },
  {
    id: 8,
    title: "SmartAid",
    overview:
      "SmartAid, and AI assisted healthcare app developed for the hackathon segment of SUST CSE Carnival 2024.",
    description:
      "This project aims to help patients dealing with chronic diseases such as chronic kidney disease. We have used Flutter as technology for our project and Android Studio as development environment.",
    image: "/images/doc.JPG",
    tag: ["All", "Mobile"],
    gitURL: "https://github.com/Nazia-Karim-Khan-Oishee/SmartAid.git",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [visibleProjectsCount, setVisibleProjectsCount] = useState(3);

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const handleTagChange = (newTag) => {
    setTag(newTag);
    setVisibleProjectsCount(3);
  };

  const handleShowMore = () => {
    setVisibleProjectsCount(filteredProjects.length);
  };

  const handleShowLess = () => {
    setVisibleProjectsCount(3);
  };

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="flex flex-row justify-center items-center gap-2 text-white my-6">
        <ProjectTag
          name="All"
          onClick={() => handleTagChange("All")}
          isSelected={tag === "All"}
        />
        <ProjectTag
          name="Backend-only"
          onClick={() => handleTagChange("Backend-only")}
          isSelected={tag === "Backend-only"}
        />
        <ProjectTag
          name="Console-based"
          onClick={() => handleTagChange("Console-based")}
          isSelected={tag === "Console-based"}
        />
        <ProjectTag
          name="Machine Learning"
          onClick={() => handleTagChange("Machine Learning")}
          isSelected={tag === "Machine Learning"}
        />
        <ProjectTag
          name="Mobile"
          onClick={() => handleTagChange("Mobile")}
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          name="Web"
          onClick={() => handleTagChange("Web")}
          isSelected={tag === "Web"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects
          .slice(0, visibleProjectsCount)
          .map((project, index) => (
            <motion.div
              key={project.id} // Ensure unique key prop here
              variants={cardVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.3, delay: index * 0.2 }}>
              <ProjectCard
                title={project.title}
                overview={project.overview}
                description={project.description}
                imgUrl={project.image}
                gitURL={project.gitURL}
              />
            </motion.div>
          ))}
      </div>
      <div className="flex justify-center mt-8">
        {filteredProjects.length > 3 && visibleProjectsCount <= 3 ? (
          <button
            onClick={handleShowMore}
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-xl">
            Show More
          </button>
        ) : visibleProjectsCount > 3 ? (
          <button
            onClick={handleShowLess}
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-xl">
            Show Less
          </button>
        ) : null}
      </div>
    </section>
  );
};

export default ProjectsSection;
