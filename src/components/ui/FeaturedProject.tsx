"use client";


import Link from "next/link";
import ProjectCarousel from "./ProjectCarousel";
import type { Project } from "@/data/projects";
import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { CheckCircle2 } from "lucide-react";

interface FeaturedProjectProps {
    project: Project;
    reverse?: boolean;
    onImageOpen: (project: Project, index: number) => void;
}

export default function FeaturedProject({
    project,
    onImageOpen,
}: FeaturedProjectProps) {

    return (
        <article
            className="grid items-center gap-8 lg:gap-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl lg:grid-cols-2">
            
            {/* Project Images */}
            <ProjectCarousel
                images={project.images}
                title={project.title}
                onOpen={(i) => onImageOpen(project, i)}
            />
            {/* Content */}

            <div>

                {/* Top */}

                <div className="flex flex-wrap items-center gap-3">

                    <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
                        {project.category}
                    </span>

                    <span className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600">
                        {project.year}
                    </span>

                    <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
                        {project.status}
                    </span>

                </div>

                {/* Title */}

                <h3 className="mt-6 text-2xl lg:text-3xl font-bold text-slate-900">
                    {project.title}
                </h3>

                {/* Description */}

                <p className="mt-4 line-clamp-3 leading-7 text-slate-600">
                    {project.description}
                </p>

                {/* Highlights */}

                <div className="mt-8">

                    <h4 className="font-semibold text-slate-900">
                        Key Highlights
                    </h4>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">

                        {project.highlights.map((highlight) => (
                            <div
                                key={highlight}
                                className="flex items-center gap-3"
                            >
                                <CheckCircle2
                                    size={18}
                                    className="shrink-0 text-blue-600"
                                />

                                <span className="text-slate-700">
                                    {highlight}
                                </span>
                            </div>
                        ))}

                    </div>

                </div>

                {/* Technologies */}

                <div className="mt-8">

                    <h4 className="font-semibold text-slate-900">
                        Tech Stack
                    </h4>

                    <div className="mt-4 flex flex-wrap gap-3">

                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                            >
                                {tech}
                            </span>
                        ))}

                    </div>

                </div>

                {/* Buttons */}

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
                    ) }

                </div>

            </div>

        </article>
    );
}