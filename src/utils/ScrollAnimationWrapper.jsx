// ScrollAnimateWrapper.jsx
import { useEffect } from "react";

const ScrollAnimateWrapper = ({ children }) => {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-scroll-animate]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return children;
};

export default ScrollAnimateWrapper;
