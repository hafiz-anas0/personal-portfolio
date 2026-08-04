"use client";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import ProjectCarousel from "./ProjectCarousel";

import type { Project } from "@/data/projects";

interface ProjectCardProps {
    project: Project;
    onImageOpen: (project: Project, index: number) => void;
}

export default function ProjectCard({
    project,
    onImageOpen,
}: ProjectCardProps) {

    return (
        <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300  hover:border-blue-200 hover:shadow-xl">

            {/* Project Image */}

            <ProjectCarousel
                images={project.images}
                title={project.title}
                onOpen={(i) => onImageOpen(project, i)}
            />

            <div className="p-6">

                {/* Category & Status */}

                <div className="flex items-center justify-between">

                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                        {project.category}
                    </span>

                    <span className="text-sm text-slate-500">
                        {project.year}
                    </span>

                </div>

                {/* Title */}

                <h3 className="mt-5 text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                    {project.title}
                </h3>

                {/* Description */}

                <p className="mt-3 line-clamp-3 leading-7 text-slate-600">
                    {project.description}
                </p>

                {/* Tech Stack */}

                <div className="mt-6 flex flex-wrap gap-2">

                    {project.technologies.slice(0, 4).map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                        >
                            {tech}
                        </span>
                    ))}

                    {/* {project.technologies.length > 5 && (
                        <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-500">
                            +{project.technologies.length - 5}
                        </span>
                    )} */}

                </div>


                {/* Actions */}

                <div className="mt-10 flex flex-wrap gap-4">

                    {project.github && (
                        <Link
                            href={project.github}
                            target="_blank"
                            className="flex items-center gap-2 rounded-xl border  px-6 py-3 font-medium transition-all duration-300 border-slate-900 bg-slate-900 text-white hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg"
                        >
                            <FaGithub size={18} />
                            GitHub
                        </Link>
                    )}

                    {project.live && (
                        <Link
                            href={project.live}
                            target="_blank"
                            className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg"
                        >
                            <FaArrowUpRightFromSquare size={15} />
                            Live Demo
                        </Link>
                    )}

                </div>

            </div>

        </article>
    );
}