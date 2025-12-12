import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar() {
  // Initialize darkMode state directly from localStorage
  const storedTheme =
    typeof window !== "undefined" ? localStorage.getItem("theme") : null;
  const initialDarkMode = storedTheme === "dark";

  const [darkMode, setDarkMode] = useState(initialDarkMode);
  const [activeSection, setActiveSection] = useState("home");

  // Load stored theme on mount (only if not already set)
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Intersection Observer to detect section visibility
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      threshold: 0.5, // Adjust based on how much of the section should be visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.id;
        if (entry.isIntersecting) {
          setActiveSection(sectionId); // Update active section
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-11/12 md:w-4/5 bg-light/80 dark:bg-dark/80 backdrop-blur-lg rounded-xl shadow-lg dark:shadow-white/25 z-50 px-4 md:px-8 py-4 flex justify-between items-center text-text-light dark:text-text-dark transition-colors duration-300">
      {/* Navigation Links */}
      <div className="hidden md:flex flex-1 justify-evenly text-lg">
        {[
          { id: "home", label: "Home" },
          { id: "skill", label: "Skills" },
          { id: "experience", label: "Experience" },
          { id: "projects", label: "Projects" },
          { id: "contact", label: "Get In Touch" },
        ].map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`hover:text-primary dark:hover:text-secondary transition-colors duration-200 ${
              activeSection === item.id
                ? "text-primary dark:text-secondary"
                : ""
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Toggle Theme */}
      <div
        onClick={() => setDarkMode(!darkMode)}
        className={`relative ml-2 w-14 h-7 md:w-16 md:h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
          darkMode ? "bg-gray-700" : "bg-gray-300"
        }`}
      >
        {/* Sun Icon (dark mode ON) */}
        <FaSun
          className={`absolute left-1 md:left-2 text-yellow-400 transition-opacity duration-300 ${
            darkMode ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Moon Icon (dark mode OFF) */}
        <FaMoon
          className={`absolute right-1 md:right-2 text-gray-100 transition-opacity duration-300 ${
            darkMode ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Slider Button */}
        <div
          className={`bg-white w-5 h-5 md:w-6 md:h-6 rounded-full shadow-md transform transition-transform duration-300 ${
            darkMode ? "translate-x-7 md:translate-x-8" : ""
          }`}
        />
      </div>
    </nav>
  );
}
