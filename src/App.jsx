import React, { useState, useEffect } from "react";
import { Smartphone, Monitor, Sun, Moon } from "lucide-react"; // Import Sun and Moon icons

import NavItem from "./components/NavItem.jsx"; // Added .jsx extension
import HomeSection from "./sections/HomeSection.jsx"; // Added .jsx extension
import AboutSection from "./sections/AboutSection.jsx"; // Added .jsx extension
import TechStackSection from "./sections/TechStackSection.jsx"; // Added .jsx extension
import ProjectsSection from "./sections/ProjectsSection.jsx"; // Added .jsx extension
import ContactSection from "./sections/ContactSection.jsx"; // Added .jsx extension
import ResumeViewer from "./sections/ResumeViewer.jsx";
// import CertificateCourses from "./sections/Certificates.jsx";

const App = () => {
  const [showMobileWarning, setShowMobileWarning] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  // State untuk mengelola tema, default-nya 'light' atau dari localStorage
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') { // Pastikan window tersedia sebelum mengakses localStorage
      const savedTheme = localStorage.getItem("theme");
      return savedTheme ? savedTheme : "light";
    }
    return "light"; // Default to light if window is not defined (e.g., during SSR)
  });

  // Efek untuk menyimpan tema ke localStorage setiap kali 'theme' berubah
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("theme", theme);
      // Terapkan atau hapus kelas 'dark' pada elemen HTML root
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, [theme]);

  // Fungsi untuk beralih tema
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const checkMobile = () => setShowMobileWarning(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // const sections = ["home", "about", "projects", "certificates" ,"contact", "resume"];
    const sections = ["home", "about", "projects", "contact", "resume"];
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
    // Terapkan kelas Tailwind CSS 'dark' secara kondisional pada elemen root
    <div className={`min-h-screen font-inter ${theme === "dark" ? "bg-gray-900 text-gray-200" : "bg-gradient-to-br from-indigo-50 to-purple-50 text-gray-800"}`}>
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
      <nav className={`fixed top-0 z-40 w-full shadow-md backdrop-blur-sm rounded-b-xl ${theme === "dark" ? "bg-gray-800 bg-opacity-90" : "bg-white bg-opacity-90"}`}>
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className={`text-2xl font-extrabold ${theme === "dark" ? "text-indigo-400" : "text-indigo-700"}`}>Moh. Dwi Afandi</div>
          <div className="flex items-center space-x-6"> {/* Menambahkan flex dan space-x untuk toggle */}
            <div className="hidden space-x-6 md:flex">
              {/* {["home", "about", "projects",  "certificates", "contact", "resume"].map((id) => ( */}
              {["home", "about", "projects", "contact", "resume"].map((id) => (
                <NavItem
                  key={id}
                  id={id}
                  active={activeSection === id}
                  onClick={() => scrollToSection(id)}
                  label={id.charAt(0).toUpperCase() + id.slice(1).replace("-", " ")}
                />
              ))}
            </div>
            {/* Tombol Light/Dark Mode */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors duration-300
                ${theme === "dark" ? "bg-gray-700 text-yellow-300 hover:bg-gray-600" : "bg-gray-200 text-indigo-700 hover:bg-gray-300"}`}
              aria-label="Toggle light/dark mode"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto p-4 pt-20">
        <HomeSection scrollToSection={scrollToSection} />
        <AboutSection />
        <TechStackSection />
        <ProjectsSection showMobileWarning={showMobileWarning} />
        {/* <CertificateCourses /> */}
        <ContactSection />
        <ResumeViewer />
      </main>

    </div>
  );
};

export default App;
