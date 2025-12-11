"use client";

import { motion } from "framer-motion";

const timelineItems = [
  {
    title: "Full-Stack Development Intern — Nuptse Technology",
    date: "Nov 2024 – Feb 2025",
    description:
      "Worked on developing asset management modules, subscription plans, member systems, API integration, bug fixing, and frontend–backend coordination using Next.js and Spring Boot.",
  },
  // Add more items here...
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-10 md:px-32 bg-bgLight dark:bg-bgDark text-textDark dark:text-textLight font-sans"
    >
      <h2 className="text-4xl font-bold mb-16 text-center">Experience</h2>

      <div className="relative mx-auto max-w-3xl">
        {/* CENTER GROWING LINE */}
        {/* CENTER GROWING + PULSE LINE */}
        <motion.div
          initial={{ height: 0, scaleX: 1 }}
          whileInView={{
            height: "100%",
            scaleX: [1, 1.4, 1], // subtle pulse
            opacity: [0.7, 1, 0.9], // micro brightness change
          }}
          transition={{
            height: { duration: 1.2, ease: "easeInOut" },
            scaleX: { duration: 0.45, ease: "easeOut", delay: 1.2 },
            opacity: { duration: 0.45, ease: "easeOut", delay: 1.2 },
          }}
          viewport={{ once: true }}
          className="
    absolute left-1/2 top-0 
    -translate-x-1/2
    w-[3px]
    bg-primary dark:bg-secondary
    rounded-full
  "
        />

        {timelineItems.map((item, i) => (
          <TimelineItem key={i} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}

function TimelineItem({ item, index }) {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative mb-24 flex">
      {/* LEFT / RIGHT SIDE */}
      <div
        className={`
          w-1/2 
          ${isLeft ? "pr-10 text-right" : "pl-10 ml-auto text-left"}
        `}
      >
        {/* CONTENT RISE-UP */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: index * 0.15,
          }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-primary dark:text-secondary">
            {item.title}
          </h3>

          <p className="text-textDark dark:text-textLight mt-1">{item.date}</p>

          <p className="mt-3 text-textDark dark:text-textLight leading-relaxed">
            {item.description}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
