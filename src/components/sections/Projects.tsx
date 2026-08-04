"use client";

import { useState } from "react";
import ProjectImageModal from "../ui/ProjectImageModal";
import FeaturedProject from "../ui/FeaturedProject";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/projects";

export default function Projects() {
    const featuredProjects = projects.filter((project) => project.featured);
    const otherProjects = projects.filter((project) => !project.featured);
    const [selectedProject, setSelectedProject] = useState<
        (typeof projects)[number] | null
    >(null);

    const [selectedImage, setSelectedImage] = useState(0);

    const [modalOpen, setModalOpen] = useState(false);
    const handleImageOpen = (
        project: (typeof projects)[number],
        index: number
    ) => {
        setSelectedProject(project);
        setSelectedImage(index);
        setModalOpen(true);
    };

    return (
        <section
            id="projects"
            className="bg-slate-50 py-20"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Heading */}

                <div className="mb-20 text-center">

                    <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
                        MY PROJECTS
                    </span>

                    <h2 className="mt-6 text-3xl font-bold text-slate-900 lg:text-4xl">
                        Turning Ideas Into Real Products
                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-600">
                        A collection of AI, full-stack, frontend, and machine learning
                        projects that showcase my ability to design, build, and deploy
                        modern software solutions.
                    </p>

                </div>

                {/* Featured Projects */}

                <div className="space-y-16">

                    {featuredProjects.map((project, index) => (
                        <FeaturedProject
                            key={project.id}
                            project={project}
                            reverse={index % 2 !== 0}
                            onImageOpen={handleImageOpen}
                        />
                    ))}

                </div>

                {/* Divider */}

                <div className="my-20 flex items-center gap-6">

                    <div className="h-px flex-1 bg-slate-200" />

                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                        More Projects
                    </span>

                    <div className="h-px flex-1 bg-slate-200" />

                </div>

                {/* Other Projects */}

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {otherProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onImageOpen={handleImageOpen}
                        />
                    ))}

                </div>

                {/* Footer */}

                <div className="mt-20 text-center">

                    <p className="text-slate-500">
                        More projects are currently in development and will be added
                        soon.
                    </p>

                </div>
            </div>
            <ProjectImageModal
                open={modalOpen}
                images={selectedProject?.images ?? []}
                initialIndex={selectedImage}
                onClose={() => setModalOpen(false)}
            />
        </section>
    );
}