import React, { useRef, useEffect, useState } from "react";

const skills = [
  { label: "HTML", image: "/img/html.png" },
  { label: "CSS", image: "/img/css.png" },
  { label: "JavaScript", image: "/img/js.png" },
  { label: "React", image: "/img/react.png" },
  { label: "Node.js", image: "/img/node.png" },
  { label: "MongoDB", image: "/img/mongodb.png" },
  { label: "SQL", image: "/img/sql.png" },
  { label: "Python", image: "/img/python.png" },
  { label: "Git", image: "/img/git.png" },
  { label: "Php", image: "/img/php.png" },
];

export default function SkillsSection() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect(); // fire once only
        }
      },
      { threshold: 0.3 } // trigger when 30% enters view
    );

    observer.observe(sectionRef.current);
  }, []);

  return (
    <section
      id="skill"
      ref={sectionRef}
      className="py-20 transition duration-300 bg-white dark:bg-dark"
    >
      <h2 className="text-4xl font-bold text-text-light dark:text-text-dark text-center mb-12">
        Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-16 place-items-center">
        {skills.map((skill, i) => (
          <div
            key={i}
            className={`
              relative group flex flex-col items-center cursor-pointer select-none
              ${visible ? "animate-fadeInUp opacity-0" : "opacity-0"} 
              animate-float
            `}
            style={{
              animationDelay: visible ? `${i * 0.18}s, ${i * 0.12}s` : "0s",
              animationFillMode: "forwards",
            }}
          >
            {/* Icon */}
            <img
              src={skill.image}
              alt={skill.label}
              className="
                w-20 h-20 
                object-contain 
                transition duration-300
                group-hover:scale-125
                group-hover:drop-shadow-[0_0_15px_rgba(16,185,129,0.75)]
              "
            />

            {/* Label */}
            <span
              className="
                absolute -bottom-9 text-sm font-semibold
                text-text-light dark:text-text-dark
                opacity-0 group-hover:opacity-100
                transition duration-300
              "
            >
              {skill.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
