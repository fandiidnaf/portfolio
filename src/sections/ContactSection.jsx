import React from "react";
import ContactLink from "../components/ContactLink"; // Ensure ContactLink also supports dark mode
import { Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

const ContactSection = ({scrollToSection}) => {
    return (
        <section id="contact" className="py-16 md:py-24">
        <div className="rounded-2xl p-8 shadow-xl text-center
                    bg-white dark:bg-gray-800 dark:shadow-2xl"> {/* Dark mode for container background and shadow */}
          <h2 className="mb-8 text-4xl font-bold
                    text-gray-900 dark:text-white"> {/* Dark mode for heading */}
            Contact Me
          </h2>
          <p className="mb-8 text-lg
                    text-gray-700 dark:text-gray-300"> {/* Dark mode for description paragraph */}
            Interested in collaborating or just want to say hi? Feel free to
            reach out through any of the channels below:
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <ContactLink
              icon={<Mail size={28} />}
              href="https://mailto:fandigit7@gmail.com"
              text="fandigit7@gmail.com"
            />
            <ContactLink
              icon={<SiGithub size={28} />}
              href="https://github.com/fandiidnaf"
              text="GitHub"
            />
            <ContactLink
              icon={<SiLinkedin size={28} />}
              href="https://linkedin.com/in/moh-dwi-afandi"
              text="LinkedIn"
            />
          </div>
          <p className="mt-12 text-base
                    text-gray-500 dark:text-gray-400"> {/* Dark mode for concluding text */}
            I’ll do my best to respond as soon as possible.
          </p>
        </div>
      </section>
    );
};

export default ContactSection;