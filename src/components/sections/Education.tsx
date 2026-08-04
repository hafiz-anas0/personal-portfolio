"use client";

import EducationTimeline from "../ui/EducationTimeline";

export default function Education() {
    return (
        <section
            id="education"
            className="bg-slate-50 py-20"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Heading */}

                <div className="mb-20 text-center">

                    <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
                        EDUCATION
                    </span>

                    <h2 className="mt-6 text-3xl font-bold text-slate-900 lg:text-4xl">
                        Academic Journey
                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-600">
                        My educational background has built a strong foundation in
                        computer science, problem-solving, and modern software
                        development while shaping my interest in Artificial
                        Intelligence and Full-Stack Development.
                    </p>

                </div>

                {/* Timeline */}

                <EducationTimeline />

            </div>
        </section>
    );
}