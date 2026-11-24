"use client";
import Image from "next/image";
export default function SkillCard({ name, img }) {
  return (
    <div className="mr-6 flex w-36 shrink-0 flex-col items-center gap-3 rounded-2xl border border-neutral-500/30 p-6 bg-(--color-background)">
      <Image
        src={img}
        alt={name}
        width={64}
        height={64}
        className="h-16 w-16 object-contain"
      />
      <p className="text-sm font-medium">{name}</p>
    </div>
  );
}
