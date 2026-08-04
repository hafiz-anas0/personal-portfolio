"use client";

import { useState } from "react";

import { certifications } from "@/data/certifications";

import CertificationCard from "../ui/CertificationCard";
import ProjectImageModal from "../ui/ProjectImageModal";

export default function Certifications() {
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState("");

    const handleImageOpen = (imagePath: string) => {
        setImage(imagePath);
        setOpen(true);
    };

    return (
        <section
            id="certifications"
            className="bg-slate-50 py-20 border-t border-slate-200"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Heading */}

                <div className="mb-20 text-center">

                    <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
                        CERTIFICATIONS
                    </span>

                    <h2 className="mt-6 text-3xl font-bold text-slate-900 lg:text-4xl">
                        Professional Certifications
                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-600">
                        Continuous learning has always been part of my journey.
                        These certifications reflect my commitment to mastering
                        modern web development technologies and building
                        production-ready applications.
                    </p>

                </div>

                {/* Cards */}

                <div className="space-y-10">

                    {certifications.map((certification) => (
                        <CertificationCard
                            key={certification.id}
                            certification={certification}
                            onImageOpen={handleImageOpen}
                        />
                    ))}

                </div>

                {/* Image Modal */}

                <ProjectImageModal
                    images={[image]}
                    initialIndex={0}
                    open={open}
                    onClose={() => setOpen(false)}
                />

            </div>
        </section>
    );
}