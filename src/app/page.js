import Image from "next/image";

import HeaderSection from "./components/HeaderSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/skillSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto mt-24 px-12 py-4">
        <HeaderSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
