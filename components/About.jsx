"use client";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="w-full py-10 md:py-30 px-6 md:px-50">
      <h2 className="title">About Me</h2>
      <div className="flex gap-15 items-center">
        <Image
          src="/about.avif"
          alt="About Image"
          width={2000}
          height={2000}
          className="rounded-full object-cover hidden md:block"
        />
        <div className="flex flex-col gap-7">
          <p className="text-lg text-gray-600 md:text-left text-center">
            I'm a passionate developer, a third-year student at the Higher
            National School of Computer Science (ESI) in Algiers, currently
            focused on becoming a full-stack developer. I'm building my backend
            skills with Django and my frontend skills with Next.js, working on
            projects that help me connect both sides of an application. I enjoy
            the problem-solving side of coding, turning a messy idea into a
            structured solution that actually works and is user-friendly. I'm
            currently looking for opportunities to apply what I'm learning to
            real projects, whether that's an internship, collaboration, or
            freelance work.
          </p>
          <div className="flex justify-center md:justify-start">
            <a
              href="#contact"
              className="btn-primary w-60 py-3 text-lg font-semibold rounded-4xl hover:bg-secondary transition-colors text-center"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
