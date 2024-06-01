"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import TabButton from "./TabButton";
import EducationSlider from "./EducationSlider";
const TAB_DATA = [
  {
    title: "Achievements",
    id: "Achievements",
    content: (
      <ul className="list-disc pl-2">
        <li>
          re:cruit Presents Hackathon- SUST CSE Carnival 2024- Team IUT Dev
          Mavericks, 2nd Runner-up{" "}
        </li>
        <li>
          Dohatec presents IUT ICT Fest 2024 DevOps Hackathon- Team IUT_ALT_F4,
          Finalist
        </li>

        <li>Code Samurai 2024-Team IUT_ALT_F4, Finalist</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const currentTab = TAB_DATA.find((t) => t.id === tab);

  return (
    <section id="about" className="text-white">
      <div className="gap-8 items-center py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="About Me"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-white text-base md:text-lg">
            I am Nazia Karim Khan Oishee, a Software Engineering student at the
            Islamic University of Technology.
          </p>
          <p className="text-white text-base md:text-lg">
            My passion lies in software development and programming, and I am
            committed to expanding my expertise every day through dedicated
            study and practice.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}>
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Achievements")}
              active={tab === "Achievements"}>
              Achievements
            </TabButton>
          </div>
          <div className="mt-8">
            {tab === "education" && <EducationSlider />}
            {tab === "Achievements" && currentTab?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
