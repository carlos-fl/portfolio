import { useState, useEffect } from "react";
import "../../styles/global.css";
import { Tag } from "./Tag";
import type { Project, URL } from "../../interfaces/interfaces";

export function Carousel({ projects }: { projects: Array<Project> }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = projects.length;

  const goTo = (index: number) => setCurrentIndex(index);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + total) % total);
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % total);

  return (
    <div className="relative sm:w-4/5 w-full mx-auto p-3 rounded-lg overflow-hidden">
      <div className="relative h-70 md:h-96">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={project.link}
              className="object-cover w-full h-full rounded-lg"
              alt={project.title}
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 rounded opacity-0 hover:opacity-90 transition-opacity duration-300 flex flex-col items-center justify-around p-5">
              <h3 className="text-[var(--title-color)] font-title text-xl">{project.title}</h3>
              <h5 className="text-[var(--span-color)] font-text text-xl font-bold">{project.desc}</h5>
              <div className="grid grid-flow-col grid-rows-2 gap-4">
                {project.stack.map((tech, i) => (
                  <Tag tag={tech} key={i} />
                ))}
              </div>
              <div className="flex justify-around w-2/5">
                <div>
                  <a href={project.github} target="_blank" key={project.github} rel="noopener noreferrer" title="github">
                    <i className="fa-brands fa-github text-[var(--bg-tag)] text-4xl mb-2"></i>
                  </a>
                </div>
                  {
                    project.urls.map((url: URL, i: number) => (
                      <div>
                        <a href={url.link} target="_blank" key={i} rel="noopener noreferrer" title={ url.title }>
                          <i className="fa-solid fa-arrow-up-right-from-square text-4xl mb-2 text-white"></i>
                        </a>
                      </div>
                    ))
                  }
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-[var(--title-color)]" : "bg-[var(--span-color)]"
            }`}
          ></button>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--title-color)] group-hover:bg-white/50">
          <svg className="w-4 h-4 text-white" viewBox="0 0 6 10" fill="none">
            <path d="M5 1L1 5l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--title-color)] group-hover:bg-white/50">
          <svg className="w-4 h-4 text-white" viewBox="0 0 6 10" fill="none">
            <path d="m1 9 4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}

