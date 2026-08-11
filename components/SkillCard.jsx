"use client";

export default function SkillCard({ skill }) {
  return (
    <div>
      <div className="bg-primary text-light rounded-lg p-4">{skill.name}</div>
      <div className="text-gray-600 bg-gray-100 p-4 rounded-lg mt-2">
        <ul className="border border-dashed border-primary/50 rounded-lg p-4 space-y-2">
          {skill.items.map((item) => (
            <li
              key={item}
              className="text-primary font-semibold flext items-center gap-2"
            >
              <span className="text-primary">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
