import ParticleBackground from "./ParticleBackground";

export default function Intro() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-start px-10 md:px-20 gap-6 
      bg-light dark:bg-dark text-text-light dark:text-text-dark font-sans overflow-hidden"
    >
      {/* Particle Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticleBackground />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full">
        {/* Left Text */}
        <div className="text-content md:w-1/2 flex flex-col items-start gap-4">
          <h1 className="text-6xl font-extrabold text-primary">
            Hi, I'm <span className="text-primary">Amit Rai</span>
          </h1>

          <p className="text-xl max-w-xl mt-4 text-muted">
            A passionate Full-Stack Developer based in Kathmandu specializing in
            MERN, backend APIs, UI development, and real-world applications.
          </p>

          {/* <button
            className="mt-5 px-6 py-3 rounded-xl bg-primary text-text-light 
            dark:bg-secondary dark:text-text-dark text-lg hover:opacity-80 shadow-lg"
          >
            Download Resume */}
          {/* </button> */}
        </div>

        {/* Right Profile Image (bigger) */}
        <div className="profile-image md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src="/img/profile.jpg"
            alt="Amit Rai"
            className="w-96 h-96 object-cover rounded-full shadow-xl"
          />
        </div>
      </div>

      {/* Scroll Down (Perfect Center) */}
      <div className="absolute bottom-6 inset-x-0 flex justify-center z-10">
        <div className="flex items-center gap-3 animate-bounce">
          {/* Arrow */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            className="text-primary dark:text-secondary"
            fill="currentColor"
          >
            <path d="M12 16.5l-6-6h12l-6 6z" />
          </svg>

          {/* Text */}
          <span className=" text-md text-muted dark:text-light">
            Scroll Down
          </span>
        </div>
      </div>
    </section>
  );
}
