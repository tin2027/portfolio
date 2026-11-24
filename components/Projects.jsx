"use client";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    image: "kunuz.png",
    title: "Kunuz",
    link: "https://kunuz.com",
    description:
      "A social media platform dedicated to passionates about algerian heritage and culture, where they can share their experiences, stories, and knowledge with others.A social media platform dedicated to passionates about algerian heritage and culture, where they can share their experiences, stories, and knowledge with others.A social media platform dedicated to passionates about algerian heritage and culture, where they can share their experiences, stories, and knowledge with others.A social media platform dedicated to passionates about algerian heritage and culture, where they can share their experiences, stories, and knowledge with others.A social media platform dedicated to passionates about algerian heritage and culture, where they can share their experiences, stories, and knowledge with others.",
  },
  {
    image: "promptopia.png",
    title: "Promptopia",
    link: "https://promptopia-opti.vercel.app/",
    description:
      "Promptopia is a full-stack, open-source web app where users can discover, create, and share AI-powered prompts. Built with Next.js, it features Google authentication, a searchable prompt feed (by tag or username), and a simple one-click copy feature so users can quickly grab prompts to use in tools like ChatGPT or other AI models. Each user has a profile showcasing the prompts they've shared with the community, and they have the ability to edit or delete them. The app is designed to be responsive and user-friendly, making it easy for users to engage with the content and contribute their own prompts.",
  },
  {
    image: "hidaya.jpeg",
    title: "Hidaya store",
    description:
      "A social media platform dedicated to passionates about algerian heritage and culture, where they can share their experiences, stories, and knowledge with others.",
  },
];
export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full flex flex-col gap-10 px-6 md:px-50 py-5 md:py-10 mt-15"
    >
      <div>
        <h2 className="title">My Projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
