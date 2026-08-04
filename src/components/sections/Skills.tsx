"use client";

import { skillCategories } from "../../data/skills";

export default function Skills() {
    return (
        <section
            id="skills"
            className="overflow-hidden bg-white py-20">

                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    {/* Heading */}

                    <div className="mb-16 text-center">

                        <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
                            MY SKILLS
                        </span>

                        <h2 className="mt-6 text-3xl font-bold text-slate-900 lg:text-4xl">
                            Technologies I Work With
                        </h2>

                        <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-600">
                            A collection of technologies, frameworks, and tools I use to build
                            scalable web applications, AI-powered solutions, and modern digital
                            experiences.
                        </p>

                    </div>

                    {/* Skill Cards */}

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                        {skillCategories.map((category, index) => {
                            const Icon = category.icon;

                            return (
                                <div
                                    key={category.title}
                                    className={`group rounded-3xl border border-slate-200 bg-white px-3 py-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl text-center justify-items-center cursor-pointer
                                ${index === skillCategories.length - 1
                                            ? "md:col-span-2 lg:col-span-3 max-w-xl justify-self-center "
                                            : ""
                                        }`}
                                >
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                                        <Icon size={24} />
                                    </div>

                                    <h3 className="mt-5 text-xl font-semibold text-slate-900">
                                        {category.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-6 text-slate-600">
                                        {category.description}
                                    </p>
                                    <div className="mt-5 h-px w-full bg-slate-100" />

                                    <div className="mt-6 flex flex-wrap gap-3 items-baseline justify-center">
                                        {category.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className=" rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-900 hover:bg-slate-900 hover:text-white"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}

                    </div>

                </div>
        </section>
    );
}