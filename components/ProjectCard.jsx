"use client";

import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";

export default function ProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="rounded-2xl overflow-hidden shadow-sm">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="flex flex-col gap-2 bg-primary p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-light font-semibold text-lg">
              {project.title}
            </h3>
            <button
              onClick={() => setIsOpen(true)}
              aria-label="See project details"
              className="text-light border border-light/40 rounded-full p-2 hover:bg-secondary hover:text-primary hover:border-secondary transition-colors"
            >
              <ArrowUpRight size={18} />
            </button>
          </div>
          <p className="text-light/80 text-sm line-clamp-2">
            {project.description}
          </p>
        </div>
      </div>

      {/* Popup / Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-background rounded-2xl max-w-7xl w-full max-h-[85vh] overflow-y-auto overflow-hidden relative flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close"
              className="absolute top-3 right-3 bg-light rounded-full w-8 h-8 flex items-center justify-center text-primary hover:bg-secondary transition-colors z-10"
            >
              ✕
            </button>

            <img
              src={project.image}
              alt={project.title}
              className="w-full md:w-1/2 h-72 md:h-auto object-cover"
            />

            <div className="p-8 flex flex-col gap-4 md:w-1/2">
              <h3 className="text-primary font-bold text-3xl">
                {project.title}
              </h3>
              <p className="text-gray-600 text-lg">{project.description}</p>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-fit mt-2"
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
