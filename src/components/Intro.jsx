import ParticleBackground from "./ParticleBackground";

export default function Intro() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-start px-10 md:px-20 gap-6 
      bg-bgLight dark:bg-bgDark text-textDark dark:text-textLight font-sans overflow-hidden"
    >
      {/* Particle Background — BEHIND the content */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticleBackground />
      </div>

      {/* Text Content — ABOVE the effect */}
      <div className="relative z-10">
        <h1 className="text-6xl font-extrabold">
          Hi, I'm <span className="text-primary">Amit Rai</span>
        </h1>

        <p className="text-xl max-w-xl mt-4">
          A passionate Full-Stack Developer specializing in MERN, backend APIs,
          UI development, and real-world applications.
        </p>

        <button
          className="mt-5 px-6 py-3 rounded-xl bg-primary text-textDark 
        dark:bg-secondary dark:text-textDark text-lg hover:opacity-80 shadow-lg"
        >
          Download Resume
        </button>
      </div>
    </section>
  );
}
