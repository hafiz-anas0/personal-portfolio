"use client";

import { education } from "@/data/education";

export default function EducationTimeline() {
    return (
        <div className="relative mx-auto mt-20 max-w-4xl">

            {education.map((item, index) => {
                const Icon = item.icon;
                const isLast = index === education.length - 1;
                const isUniversity = index === 0;

                return (
                    <div
                        key={item.degree}
                        className="relative flex gap-8 pb-16 last:pb-0"
                    >
                        {/* Timeline */}

                        <div className="flex flex-col items-center">

                            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm">
                                <Icon
                                    size={28}
                                    className="text-blue-600"
                                />
                            </div>

                            {!isLast && (
                                <div className="mt-3 h-full w-px bg-slate-300" />
                            )}

                        </div>

                        {/* Content */}

                        <div className="flex-1 pb-2">

                            <span className="text-sm font-medium text-blue-600">
                                {item.duration}
                            </span>

                            <h3
                                className={`mt-2 font-bold text-slate-900 ${isUniversity
                                        ? "text-3xl"
                                        : "text-2xl"
                                    }`}
                            >
                                {item.degree}
                            </h3>

                            <p className="mt-2 text-lg font-semibold text-slate-700">
                                {item.institute}
                            </p>

                            <p className="mt-5 max-w-3xl leading-8 text-slate-600">
                                {item.description}
                            </p>

                            {item.coursework && (
                                <>
                                    <h4 className="mt-8 text-lg font-semibold text-slate-900">
                                        Relevant Coursework
                                    </h4>

                                    <div className="mt-5 grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">

                                        {item.coursework.map((course) => (
                                            <div
                                                key={course}
                                                className="flex items-center gap-3"
                                            >
                                                <div className="h-2 w-2 rounded-full bg-blue-600" />

                                                <span className="text-slate-700">
                                                    {course}
                                                </span>
                                            </div>
                                        ))}

                                    </div>
                                </>
                            )}

                        </div>
                    </div>
                );
            })}

        </div>
    );
}