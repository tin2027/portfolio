"use client";
import SkillCard from "./SkillCard";
const skills = [
  {
    name: "Frontend Skills",
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    name: "Backend Skills",
    items: ["Python", "Django", "REST APIs", "Node.js"],
  },
  {
    name: "Tools & DataBases",
    items: ["Git", "GitHub", "PostgreSQL", "MongoDB", "Figma", "Postman"],
  },
  {
    name: "Languages",
    items: ["Java", "C"],
  },
];
export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full flex flex-col gap-10 px-6 md:px-50 py-10 md:py-30 mt-15"
    >
      <div>
        <h2 className="title">My Skills</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
}
