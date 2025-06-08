import React, { useState, useEffect } from 'react';
import { Mail, Smartphone, Monitor } from 'lucide-react';
import { SiGithub, SiLinkedin } from 'react-icons/si';

import NavItem from './components/NavItem';
import ProjectCard from './components/ProjectCard';
import ContactLink from './components/ContactLink';

const App = () => {
  const [showMobileWarning, setShowMobileWarning] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const checkMobile = () => {
      setShowMobileWarning(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 font-inter text-gray-800">
      {/* Mobile Warning Overlay */}
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

      {/* Header / Navbar */}
      <nav className="fixed top-0 z-40 w-full bg-white bg-opacity-90 shadow-md backdrop-blur-sm rounded-b-xl">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="text-2xl font-extrabold text-indigo-700">
            Moh. Dwi Afandi
          </div>
          <div className="hidden space-x-6 md:flex">
            <NavItem id="home" active={activeSection === 'home'} onClick={() => scrollToSection('home')} label="Home" />
            <NavItem id="about" active={activeSection === 'about'} onClick={() => scrollToSection('about')} label="About Me" />
            <NavItem id="projects" active={activeSection === 'projects'} onClick={() => scrollToSection('projects')} label="Projects" />
            <NavItem id="contact" active={activeSection === 'contact'} onClick={() => scrollToSection('contact')} label="Contact" />
          </div>
          <div className="md:hidden">
            {/* Add hamburger menu here if needed */}
          </div>
        </div>
      </nav>

      <main className="container mx-auto p-4 pt-20">
        {/* Home Section */}
        <section id="home" className="flex min-h-[calc(100vh-80px)] items-center justify-center py-16">
          <div className="text-center">
            <h1 className="mb-4 text-5xl font-extrabold leading-tight text-gray-900 animate-fade-in-down">
              Hi, I'm <span className="text-indigo-600">Moh. Dwi Afandi</span>
            </h1>
            <p className="mb-8 text-xl text-gray-600 animate-fade-in-up">
              A passionate <span className="font-semibold text-purple-600">Mobile Developer</span>
              <br />
              focused on <span className="font-semibold text-blue-600">Flutter</span>.
            </p>
            <button
              onClick={() => scrollToSection('projects')}
              className="transform rounded-full bg-indigo-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 animate-fade-in"
            >
              View My Projects
            </button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24">
          <div className="rounded-2xl bg-white p-8 shadow-xl">
            <h2 className="mb-8 text-4xl font-bold text-gray-900 text-center">About Me</h2>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="w-full md:w-1/3 flex justify-center">
                <img
                  src='/assets/images/photo-profile.jpg'
                  alt="Moh. Dwi Afandi"
                  className="rounded-full border-4 border-indigo-300 shadow-lg object-cover w-48 h-48 md:w-64 md:h-64"
                />
              </div>
              <div className="w-full md:w-2/3 text-lg text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Hello! My name is Moh. Dwi Afandi. I’m a passionate <b>Mobile Developer</b> with a strong background in software development, specializing in building beautiful and functional mobile apps using <b>Flutter</b>. I'm always eager to learn and explore new technologies.
                </p>
                <p className="mb-4">
                  I enjoy turning complex ideas into user-friendly and efficient solutions. This portfolio showcases some of the projects I’ve worked on, highlighting my skills in UI/UX development, API integration, and state management.
                </p>
                <p>
                  When I’m not coding, I love learning new things or diving into my hobbies. I'm always open to interesting collaborations or new opportunities. Feel free to reach out!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 md:py-24">
          <h2 className="mb-12 text-4xl font-bold text-gray-900 text-center">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-stretch px-4 max-w-5xl mx-auto">
            <ProjectCard
              title="Project Attendance"
              description="A Flutter-based attendance app for employee time management."
              iframeSrc="https://erp-attendance-1.web.app/"
              showMobileWarning={showMobileWarning}
            />
            <ProjectCard
              title="Project Hausjo-Ewallet"
              description="A digital wallet app for transaction and financial management."
              iframeSrc="https://hausjo-ewallet.web.app/"
              showMobileWarning={showMobileWarning}
            />
            {/* Add more projects here if needed */}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="rounded-2xl bg-white p-8 shadow-xl text-center">
            <h2 className="mb-8 text-4xl font-bold text-gray-900">Contact Me</h2>
            <p className="mb-8 text-lg text-gray-700">
              Interested in collaborating or just want to say hi? Feel free to reach out through any of the channels below:
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <ContactLink icon={<Mail size={28} />} href="https://mailto:fandigit7@gmail.com" text="fandigit7@gmail.com" />
              <ContactLink icon={<SiGithub size={28} />} href="https://github.com/fandiidnaf" text="GitHub" />
              <ContactLink icon={<SiLinkedin size={28} />} href="https://linkedin.com/in/moh-dwi-afandi" text="LinkedIn" />
            </div>
            <p className="mt-12 text-base text-gray-500">
              I’ll do my best to respond as soon as possible.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 p-6 text-center text-white rounded-t-xl">
        <p>&copy; {new Date().getFullYear()} Moh. Dwi Afandi. All rights reserved.</p>
        <p className="text-sm mt-2 text-gray-400">Built with ❤️ and Flutter.</p>
      </footer>
    </div>
  );
};

export default App;
