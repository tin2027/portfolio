"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") setIsOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={`View ${project.title} project details`}
        className="group w-full cursor-pointer overflow-hidden rounded-2xl text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
      >
        <Image
          src={`/${project.image}`}
          alt={project.title}
          width={800}
          height={480}
          className="h-48 w-full object-cover"
        />
        <div className="flex flex-col gap-2 bg-primary p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-light">
              {project.title}
            </h3>
            <span className="rounded-full border border-light/40 p-2 text-light transition-colors group-hover:border-secondary group-hover:bg-secondary group-hover:text-primary">
              <ArrowUpRight size={18} />
            </span>
          </div>
          <p className="text-light/80 text-sm line-clamp-2">
            {project.description}
          </p>
        </div>
      </button>

      {/* Popup / Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={`project-title-${project.title}`}
            className="relative flex max-h-[85vh] w-full max-w-2xl flex-col overflow-y-auto rounded-2xl bg-background shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-light text-primary transition-colors hover:bg-secondary"
            >
              ✕
            </button>

            <Image
              src={`/${project.image}`}
              alt={project.title}
              width={1000}
              height={600}
              className="h-48 w-full object-cover sm:h-56"
            />

            <div className="flex flex-col gap-3 p-6">
              <h3
                id={`project-title-${project.title}`}
                className="text-2xl font-bold text-primary"
              >
                {project.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {project.description}
              </p>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-1 w-fit"
                >
                  Visit Project
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
