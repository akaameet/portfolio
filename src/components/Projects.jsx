import { FiGithub } from "react-icons/fi";

export default function Projects() {
  const projects = [
    {
      title: "WearWare – Clothing Ecommerce Platform",
      tech: "Next.js · MongoDB",
      desc: "A stylish clothing ecommerce store featuring product filters, inventory tracking, and admin dashboard analytics.",
      img: "/img/wearware.png",
      github: "https://github.com/Dinanath99/Bloodspot",
    },
    {
      title: "Bloom – Plant Ecommerce Store",
      tech: "PHP, MySQL, HTML, CSS, JavaScript",
      desc: "A modern plant-selling ecommerce platform with product listings, cart, authentication, and order management.",
      img: "/images/bloom.png",
      github: "https://github.com/akaameet/Bloom",
    },
    {
      title: "BloodSpot – Blood Donation Platform",
      tech: "PHP, MySQL, HTML, CSS, JavaScript",
      desc: "A donor–receiver platform that connects people needing blood with donors in real time.",
      img: "/img/bloodspot.png",
      github: "https://github.com/Dinanath99/Bloodspot",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-10 md:px-20 bg-light dark:bg-dark text-text-light dark:text-text-dark font-sans"
    >
      <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((p) => (
          <div
            key={p.title}
            className="group relative overflow-hidden rounded-2xl p-6 
                      bg-gray-200 dark:bg-card-dark 
                      transition-transform duration-300 
                     shadow-lg hover:shadow-xl shd hover:scale-105 hover:opacity-90 dark:hover:shadow-white/10"
          >
            {/* Project Image */}
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-40 object-cover rounded-xl mb-4 
                         transform group-hover:scale-105 transition duration-500"
            />

            {/* Title */}
            <h3 className="text-2xl font-semibold text-primary dark:text-secondary">
              {p.title}
            </h3>

            <p className="text-muted mt-2 text-sm">{p.tech}</p>

            <p className="mt-3 text-text-light dark:text-text-dark text-base">
              {p.desc}
            </p>

            {/* GitHub Icon */}
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 z-20 
                         p-2 rounded-full 
                         bg-gray-200 dark:bg-gray-800
                         hover:bg-primary dark:hover:bg-secondary
                         hover:scale-110 transition-all duration-300
                         text-text-light dark:text-text-dark hover:text-white"
            >
              <FiGithub size={22} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
