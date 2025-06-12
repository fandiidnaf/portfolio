import React from "react";

const AboutSection = ({scrollToSection}) => {
    return (
        <section id="about" className="py-16 md:py-24">
        <div className="rounded-2xl bg-white p-8 shadow-xl dark:bg-gray-800 dark:shadow-2xl">
          <h2 className="mb-8 text-4xl font-bold text-gray-900 text-center dark:text-white">
            About Me
          </h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-full md:w-1/3 flex justify-center">
              <img
                src="/assets/images/photo-profile.jpg"
                alt="Moh. Dwi Afandi"
                className="rounded-full border-4 border-indigo-300 shadow-lg object-cover w-48 h-48 md:w-64 md:h-64 dark:border-indigo-500"
              />
            </div>
            <div className="w-full md:w-2/3 text-lg text-gray-700 leading-relaxed dark:text-gray-300">
              <p className="mb-4">
                Hello! My name is Moh. Dwi Afandi. I’m a passionate{" "}
                <b>Mobile Developer</b> with a strong background in software
                development, specializing in building beautiful and functional
                mobile apps using <b>Flutter</b>. I'm always eager to learn
                and explore new technologies.
              </p>
              <p className="mb-4">
                I enjoy turning complex ideas into user-friendly and efficient
                solutions. This portfolio showcases some of the projects I’ve
                worked on, highlighting my skills in UI/UX development, API
                integration, and state management.
              </p>
              <p>
                When I’m not coding, I love learning new things or diving into
                my hobbies. I'm always open to interesting collaborations or
                new opportunities. Feel free to reach out!
              </p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default AboutSection;