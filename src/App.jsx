import React, { useState, useEffect } from "react";
import { Smartphone, Monitor } from "lucide-react";

import NavItem from "./components/NavItem";
import HomeSection from "./sections/HomeSection";
import AboutSection from "./sections/AboutSection";
import TechStackSection from "./sections/TechStackSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";

const App = () => {
  const [showMobileWarning, setShowMobileWarning] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const checkMobile = () => setShowMobileWarning(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const sections = ["home", "about", "projects", "contact"];
    const observers = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) setActiveSection(id);
            });
          },
          { rootMargin: "-50px 0px -50% 0px", threshold: 0.1 }
        );
        observer.observe(el);
        observers.push(observer);
      }
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 font-inter text-gray-800">
      {/* Mobile Warning */}
      {showMobileWarning && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4 md:hidden">
          <div className="rounded-lg bg-white p-8 text-center shadow-lg animate-fade-in-up">
            <Smartphone className="mx-auto mb-4 h-12 w-12 text-blue-500" />
            <h2 className="mb-2 text-2xl font-bold text-gray-800">Attention!</h2>
            <p className="text-lg text-gray-700">
              For the best experience, please view this portfolio on a desktop device.
              <br />
              <Monitor className="mx-auto mt-4 h-10 w-10 text-gray-600" />
            </p>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav className="fixed top-0 z-40 w-full bg-white bg-opacity-90 shadow-md backdrop-blur-sm rounded-b-xl">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="text-2xl font-extrabold text-indigo-700">Moh. Dwi Afandi</div>
          <div className="hidden space-x-6 md:flex">
            {["home", "about", "projects", "contact"].map((id) => (
              <NavItem
                key={id}
                id={id}
                active={activeSection === id}
                onClick={() => scrollToSection(id)}
                label={id.charAt(0).toUpperCase() + id.slice(1).replace("-", " ")}
              />
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto p-4 pt-20">
        <HomeSection scrollToSection={scrollToSection} />
        <AboutSection />
        <TechStackSection />
        <ProjectsSection showMobileWarning={showMobileWarning} />
        <ContactSection />
      </main>
    </div>
  );
};

export default App;
