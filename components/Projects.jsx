import ProjectCard from "./ProjectCard";

const projects = [
  {
    image: "kunuz.png",
    title: "Kunuz",
    link: "https://kunuz.com",
    description:
      "A community platform for sharing stories and knowledge about Algerian heritage and culture.",
  },
  {
    image: "promptopia.png",
    title: "Promptopia",
    link: "https://promptopia-opti.vercel.app/",
    description:
      "A full-stack app for discovering, creating, and sharing AI prompts, with Google sign-in and searchable profiles.",
  },
  {
    image: "hidaya.jpeg",
    title: "Hidaya store",
    description:
      "An online storefront designed to make browsing and discovering products simple.",
  },
];
export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="section-content">
        <h2 className="title">My Projects</h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
