export default function Projects() {
  const projects = [
    {
      title: "Course Recommendation System",
      tech: "Next.js · Node.js · MongoDB",
      desc: "Tracking, uploads, hybrid recommendation system.",
    },
    {
      title: "Asset Management System",
      tech: "Next.js · Spring Boot",
      desc: "Asset tracking, categories, assignments, plans, members.",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-10 md:px-20 bg-bgLight dark:bg-bgDark text-textDark dark:text-textLight font-sans"
    >
      <h2 className="text-4xl font-bold mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((p) => (
          <div
            key={p.title}
            className="p-6 bg-card-light dark:bg-card-dark rounded-2xl shadow hover:shadow-xl"
          >
            <h3 className="text-2xl font-semibold text-primary dark:text-secondary">
              {p.title}
            </h3>
            <p className="text-textDark dark:text-textLight mt-2">{p.tech}</p>
            <p className="mt-4 text-textDark dark:text-textLight">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
