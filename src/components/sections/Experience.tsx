"use client";

import Link from "next/link";
import Image from "next/image";
import { experiences } from "@/data/experience";
import { Building2, MapPin, BriefcaseBusiness, CheckCircle2, } from "lucide-react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Experience() {
    return (
        <section
            id="experience"
            className="bg-white py-20"
        >
            <div className="mx-auto max-w-6xl px-6">

                {/* Heading */}

                <div className="mb-20 text-center">

                    <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
                        EXPERIENCE
                    </span>

                    <h2 className="mt-6 text-3xl font-bold text-slate-900 lg:text-4xl">
                        Professional Journey
                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-600">
                        My Professional experiences building modern web
                        applications, collaborating with development teams,
                        and continuously improving my software engineering
                        skills.
                    </p>

                </div>

                {/* Timeline */}

                <div className="relative">

                    {/* Vertical Line */}

                    <div className="absolute left-5 top-0 hidden h-full w-0.5 bg-slate-200 md:block" />

                    <div className="space-y-20">

                        {experiences.map((experience) => (

                            <div
                                key={experience.id}
                                className="relative md:pl-20"
                            >

                                {/* Timeline Dot */}

                                <div className="absolute left-5 top-4 hidden -translate-x-1/2 md:flex">

                                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-blue-600 shadow-lg">

                                        <Building2
                                            size={18}
                                            className="text-white"
                                        />

                                    </div>

                                </div>

                                {/* Header */}

                                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">

                                    <div className="flex gap-5">

                                        <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50">

                                            <Image
                                                src={experience.logo}
                                                alt={experience.company}
                                                width={54}
                                                height={54}
                                                className="object-contain"
                                            />

                                        </div>

                                        <div>

                                            <h3 className="text-2xl font-bold text-slate-900">
                                                {experience.role}
                                            </h3>

                                            <h4 className="mt-1 text-lg font-semibold text-blue-600">
                                                {experience.company}
                                            </h4>

                                            <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-600">

                                                <span className="flex items-center gap-2">
                                                    <BriefcaseBusiness size={16} />
                                                    {experience.employmentType}
                                                </span>

                                                <span className="flex items-center gap-2">
                                                    <MapPin size={16} />
                                                    {experience.location}
                                                </span>

                                                <span>
                                                    {experience.duration}
                                                </span>

                                            </div>

                                        </div>

                                    </div>

                                    <Link
                                        href={experience.website}
                                        target="_blank"
                                        className="flex h-12 w-12 items-center justify-center rounded-xl border hover:border-slate-200 hover:bg-white hover:text-black transition border-slate-900 bg-slate-900 text-white"
                                    >
                                        <FaArrowUpRightFromSquare />
                                    </Link>

                                </div>

                                {/* Description */}

                                <p className="mt-8 max-w-4xl leading-8 text-slate-600">
                                    {experience.description}
                                </p>

                                {/* Achievements */}

                                <div className="mt-8 grid gap-4 md:grid-cols-2">

                                    {experience.achievements.map((item) => (

                                        <div
                                            key={item}
                                            className="flex gap-3"
                                        >

                                            <CheckCircle2
                                                size={18}
                                                className="mt-1 shrink-0 text-blue-600"
                                            />

                                            <span className="text-slate-700">
                                                {item}
                                            </span>

                                        </div>

                                    ))}

                                </div>

                                {/* Tech */}

                                <div className="mt-8 flex flex-wrap gap-3">

                                    {experience.technologies.map((tech) => (

                                        <span
                                            key={tech}
                                            className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-900 hover:bg-slate-900 hover:text-white"
                                        >
                                            {tech}
                                        </span>

                                    ))}

                                </div>

                                <div className="mt-16 border-b border-slate-200" />
                            </div>


                        ))}


                    </div>

                </div>

            </div>
        </section>
    );
}