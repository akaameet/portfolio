import { useState, useEffect } from "react";
import { FaLinkedin, FaTwitter, FaSun, FaMoon } from "react-icons/fa";
import { SiBehance } from "react-icons/si";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  // Load theme from localStorage on first render
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Update theme whenever darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-11/12 md:w-4/5 bg-gray-100 dark:bg-gray-900 rounded-xl z-50 shadow-lg px-4 md:px-8 py-4 flex justify-between items-center text-gray-800 dark:text-gray-300 transition-colors duration-300">
      {/* Logo */}
      {/* <h1 className="text-2xl font-bold">Daemon</h1> */}

      {/* Navigation links */}
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
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* Social icons + Toggle */}
      <div className="flex items-center gap-3 md:gap-4">
        {/* <a
          href="#"
          className="hover:text-blue-500 transition-colors text-lg md:text-xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="#"
          className="hover:text-blue-500 transition-colors text-lg md:text-xl"
        >
          <SiBehance />
        </a>
        <a
          href="#"
          className="hover:text-blue-500 transition-colors text-lg md:text-xl"
        >
          <FaTwitter />
        </a> */}

        {/* Responsive Animated Toggle Switch */}
        <div
          onClick={() => setDarkMode(!darkMode)}
          className={`relative ml-2 w-14 h-7 md:w-16 md:h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
            darkMode ? "bg-gray-700" : "bg-gray-300"
          }`}
        >
          {/* Sun Icon */}
          <FaSun
            className={`absolute left-1 md:left-2 text-yellow-400 transition-opacity duration-300 ${
              darkMode ? "opacity-100" : "opacity-0"
            }`}
          />
          {/* Moon Icon */}
          <FaMoon
            className={`absolute right-1 md:right-2 text-gray-100 transition-opacity duration-300 ${
              darkMode ? "opacity-0" : "opacity-100"
            }`}
          />
          {/* Sliding Circle */}
          <div
            className={`bg-white w-5 h-5 md:w-6 md:h-6 rounded-full shadow-md transform transition-transform duration-300 ${
              darkMode ? "translate-x-7 md:translate-x-8" : ""
            }`}
          ></div>
        </div>
      </div>
    </nav>
  );
}
