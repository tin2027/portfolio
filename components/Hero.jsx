"use client";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section
      id="hero"
      className="w-full flex justify-between gap-10 px-6 md:px-50 py-10 md:py-30 mt-15 md:flex-row flex-col items-center"
    >
      <div className="flex flex-col justify-center gap-7">
        <h1 className="text-6xl font-bold text-primary md:text-left text-center">
          Hi, I am Tinhinane
        </h1>
        <p className="text-2xl text-gray-600 md:text-left text-center">
          A junior developer who loves building clean functional web apps
        </p>
        <div className="flex justify-center md:justify-start">
          <a
            href="#projects"
            className="btn-primary w-60 py-3 text-lg font-semibold rounded-4xl hover:bg-secondary transition-colors text-center"
          >
            View My Projects
          </a>
        </div>
      </div>
      <div>
        <Image
          src="/me.png"
          alt="Profile Picture"
          width={500}
          height={500}
          className="rounded-full object-cover"
        />
      </div>
    </section>
  );
}
