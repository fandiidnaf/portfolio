import React from "react";
import ContactLink from "../components/ContactLink";
import { Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

const ContactSection = ({scrollToSection}) => {
    return (
        <section id="contact" className="py-16 md:py-24">
        <div className="rounded-2xl bg-white p-8 shadow-xl text-center">
          <h2 className="mb-8 text-4xl font-bold text-gray-900">
            Contact Me
          </h2>
          <p className="mb-8 text-lg text-gray-700">
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
          <p className="mt-12 text-base text-gray-500">
            I’ll do my best to respond as soon as possible.
          </p>
        </div>
      </section>
    );
};

export default ContactSection;
