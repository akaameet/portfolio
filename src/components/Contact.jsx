"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const email = "raiamit078@gmail.com";
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Hello&body=Hi%20there!`;

  return (
    <section
      id="contact"
      className="pt-20 pb-5 md:px-20 bg-light dark:bg-dark 
                 text-text-light dark:text-text-dark font-sans 
                 flex flex-col items-center justify-center text-center"
    >
      <h2 className="text-4xl font-bold mb-6 text-text-light dark:text-text-dark">
        Contact
      </h2>

      {/* Subtext */}
      <p className="text-lg opacity-90 mb-12 max-w-lg text-text-light dark:text-text-dark">
        Feel free to reach out for collaborations, opportunities, or just to say
        hi.
      </p>

      {/* Icons Row */}
      <div className="flex items-center justify-center gap-14 mb-12">
        {/* Email */}
        <a
          href={gmailLink}
          target="_blank"
          rel="noopener noreferrer"
          className="
            group transition-all duration-300 hover:scale-110
            hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.6)]
          "
        >
          <FaEnvelope
            className="
              text-4xl text-primary dark:text-secondary
              transition-all duration-300
            "
          />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/akaameet"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group transition-all duration-300 hover:scale-110
            hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.6)]
          "
        >
          <FaGithub
            className="
              text-4xl text-text-light dark:text-text-dark
              transition-all duration-300
            "
          />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/amit-rai-54167532a/"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group transition-all duration-300 hover:scale-110
            hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.6)]
          "
        >
          <FaLinkedin
            className="
              text-4xl text-primary dark:text-secondary
              transition-all duration-300
            "
          />
        </a>
      </div>

      {/* Footer */}
      <p className="text-m opacity-60 mt-5 text-muted">
        © 2025 Amit Rai. All Rights Reserved.
      </p>
    </section>
  );
}
