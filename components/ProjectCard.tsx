import React from "react";
import { Project } from "../types";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  project: Project;
}
const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, tags, imageUrls, liveUrl, sourceUrl } = project;

  return (
    <div className="group rounded-xl overflow-hidden bg-secondary/50 backdrop-blur-sm border border-gray-700/50 transition-all duration-300 hover:shadow-2xl hover:border-accent hover:-translate-y-2">
      {/* Container utama untuk gambar dibuat relative dan overflow-hidden */}
      <div className="relative w-full h-56 overflow-hidden">
        {/*
        Jika hanya ada satu gambar, tampilkan seperti biasa.
        Jika lebih dari satu, tampilkan dalam layout flex.
      */}
        {imageUrls.length > 1 ? (
          <div className="flex h-full w-full">
            {imageUrls.map((url, index) => (
              <img
                key={index}
                src={"../" + url}
                alt={`${title} screenshot ${index + 1}`}
                className="flex-1 h-full w-auto object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
            ))}
          </div>
        ) : (
          <img
            src={imageUrls[0]}
            alt={title}
            className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-light mb-2">{title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-accent/20 text-accent text-xs font-semibold px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-medium mb-6">{description}</p>
        <div className="flex items-center justify-end gap-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-medium hover:text-accent transition-colors duration-300 flex items-center gap-2"
            >
              <FaExternalLinkAlt /> Demo
            </a>
          )}
          {sourceUrl && (
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-medium hover:text-accent transition-colors duration-300 flex items-center gap-2"
            >
              <FaGithub /> Kode
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
