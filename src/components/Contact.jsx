export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-10 md:px-20 bg-bgLight dark:bg-bgDark text-textDark dark:text-textLight font-sans"
    >
      <h2 className="text-4xl font-bold mb-10">Contact</h2>
      <form className="space-y-4 max-w-lg">
        <input
          type="text"
          placeholder="Name"
          className="w-full px-4 py-3 rounded-lg bg-card-light dark:bg-card-dark text-textDark dark:text-textLight border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 rounded-lg bg-card-light dark:bg-card-dark text-textDark dark:text-textLight border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <textarea
          placeholder="Message"
          className="w-full px-4 py-3 rounded-lg bg-card-light dark:bg-card-dark text-textDark dark:text-textLight h-32 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
        ></textarea>
        <button className="px-6 py-3 bg-primary text-textDark dark:bg-secondary dark:text-textDark font-semibold rounded-lg hover:opacity-80 shadow-lg">
          Send Message
        </button>
      </form>
      <div className="mt-10 space-y-2 text-lg text-textDark dark:text-textLight">
        <p>Email: daemonrai@example.com</p>
      </div>
    </section>
  );
}
