import React from "react";
import TechStackCard from "../components/TechStackCard"; // Make sure TechStackCard also supports dark mode

const TechStackSection = ({scrollToSection}) => {
 return (
    <section
    id="tech-stack"
    className="py-16 md:py-24 bg-indigo-50 rounded-2xl my-8 dark:bg-gray-900"
  >
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Tech Stack</h2>
      <p className="mt-4 text-gray-600 text-lg max-w-xl mx-auto dark:text-gray-300">
        Here are some technologies I’ve worked with recently:
      </p>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto px-4">

      <TechStackCard
        icon={<i className="devicon-dart-plain"></i>}
        name="Dart"
        link="https://dart.dev"
      />
      <TechStackCard
        icon={<i className="devicon-flutter-plain"></i>}
        name="Flutter"
        link="https://flutter.dev"
      />
        <TechStackCard
        icon={<i className="devicon-firebase-plain"></i>}
        name="Firebase"
        link="https://firebase.google.com"
      />
       <TechStackCard
        icon={<i className="devicon-python-plain"></i>}
        name="Python"
        link="https://python.org"
      />
      <TechStackCard
        icon={<i className="devicon-rust-plain"></i>}
        name="Rust"
        link="https://rust-lang.org"
      />
       <TechStackCard
        icon={<i className="devicon-kotlin-plain"></i>}
        name="Kotlin"
        link="https://kotlinlang.org"
      />
      <TechStackCard
        icon={<i className="devicon-html5-plain"></i>}
        name="HTML5"
        link="https://developer.mozilla.org/en-US/docs/Web/HTML"
      />
      <TechStackCard
        icon={<i className="devicon-css3-plain"></i>}
        name="CSS3"
        link="https://developer.mozilla.org/en-US/docs/Web/CSS"
      />


    </div>
  </section>
 );
};

export default TechStackSection;