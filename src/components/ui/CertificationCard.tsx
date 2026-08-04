"use client";

import Image from "next/image";
import { MapPin, Calendar, Clock3 } from "lucide-react";
import type { Certification } from "@/data/certifications";

interface CertificationCardProps {
    certification: Certification;
    onImageOpen: (image: string) => void;
}

export default function CertificationCard({
    certification,
    onImageOpen,
}: CertificationCardProps) {
    return (
        <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-xl">

            <div className="grid items-center gap-8 p-8 lg:grid-cols-[340px_1fr]">

                {/* Certificate */}

                <div className="flex justify-center">

                    <button
                        onClick={() => onImageOpen(certification.image)}
                        className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm"
                    >
                        <Image
                            src={certification.image}
                            alt={certification.title}
                            width={340}
                            height={480}
                            className="h-auto w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                    </button>

                </div>

                {/* Content */}

                <div>

                    <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
                        Professional Certification
                    </span>

                    <h3 className="mt-6 text-3xl font-bold text-slate-900">
                        {certification.title}
                    </h3>

                    <p className="mt-2 text-lg font-semibold text-slate-700">
                        {certification.issuer}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-6 text-slate-600">

                        <div className="flex items-center gap-2">
                            <Clock3 size={18} />
                            <span>{certification.duration}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Calendar size={18} />
                            <span>{certification.year}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <MapPin size={18} />
                            <span>{certification.location}</span>
                        </div>

                    </div>

                    <p className="mt-8 leading-8 text-slate-600">
                        {certification.description}
                    </p>

                    {/* Skills */}

                    <div className="mt-8">

                        <h4 className="font-semibold text-slate-900">
                            Skills Covered
                        </h4>

                        <div className="mt-4 flex flex-wrap gap-3">

                            {certification.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
                                >
                                    {skill}
                                </span>
                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </article>
    );
}