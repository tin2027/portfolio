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
    <section
      id="skills"
      className="w-full overflow-hidden px-4 md:px-40 py-5 md:py-10 mt-15"
    >
      <div className="mb-10 flex items-center justify-center gap-4">
        <h2 className="title">My Skills</h2>
      </div>
      <div className="marquee">
        <div className="marquee-track flex w-max">
          {skills.map((s) => (
            <SkillCard key={s.name} {...s} />
          ))}
          {skills.map((s) => (
            <div key={`dup-${s.name}`} aria-hidden="true">
              <SkillCard {...s} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
