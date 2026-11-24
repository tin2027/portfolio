import SkillCard from "./SkillCard";

const skills = [
  { name: "HTML", img: "/html.png" },
  { name: "CSS", img: "/css.png" },
  { name: "JavaScript", img: "/javascript.webp" },
  { name: "React", img: "/react.png" },
  { name: "Next.js", img: "/nextjs.png" },
  { name: "Tailwind", img: "/Tailwind.webp" },
  { name: "Node.js", img: "/node-js.svg" },
  { name: "MongoDB", img: "/mongodb.png" },
  { name: "Python", img: "/python.webp" },
  { name: "Django", img: "/django.webp" },
  { name: "Java", img: "/java.png" },
  { name: "C", img: "/c.png" },
  { name: "Git", img: "/git.png" },
  { name: "GitHub", img: "/github.jpg" },
  { name: "Postman", img: "/postman.png" },
  { name: "Figma", img: "/figma.png" },
];

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="section-content">
        <h2 className="title">My Skills</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} {...skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
