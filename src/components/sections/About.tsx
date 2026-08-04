"use client";
import Image from "next/image";
import profile from "@/assets/images/profile2.jpeg";
import { Brain, Code2, ChartColumn, Rocket, MapPin, GraduationCap, BriefcaseBusiness, Languages, Download, ArrowRight, Database, Palette, Sparkles, LaptopMinimal, BadgeCheck, } from "lucide-react";

const expertise = [
    {
        icon: Code2,
        title: "Full-Stack Development",
        description:
            "Building responsive, scalable web applications with React, Next.js, Node.js, Express, and MongoDB.",
    },
    {
        icon: Brain,
        title: "AI Development",
        description:
            "Integrating LLMs, prompt engineering, and AI-powered features into real-world web applications.",
    },
    {
        icon: ChartColumn,
        title: "Machine Learning",
        description:
            "Developing predictive models, data analysis workflows, and ML solutions using Python and scikit-learn.",
    },
    {
        icon: Database,
        title: "Backend & APIs",
        description:
            "Designing RESTful APIs, authentication systems, databases, and scalable backend architectures.",
    },
    {
        icon: Palette,
        title: "UI / UX Development",
        description:
            "Crafting modern, responsive interfaces with Tailwind CSS while focusing on accessibility and user experience.",
    },
    {
        icon: Rocket,
        title: "Deployment & Optimization",
        description:
            "Deploying applications with Vercel, Render, and GitHub while optimizing performance and maintainability.",
    },
];
const info = [
    {
        icon: MapPin,
        label: "Location",
        value: "Lahore, Pakistan",
    },
    {
        icon: GraduationCap,
        label: "Education",
        value: "BS Computer Science",
    },
    {
        icon: BriefcaseBusiness,
        label: "Status",
        value: "Open to Opportunities",
    },
    {
        icon: Languages,
        label: "Languages",
        value: "English & Urdu",
    },
];

export default function About() {
    return (
        <section
            id="about"
            className="bg-slate-50 py-20"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Heading */}

                <div className="mb-20 text-center mt-10">

                    <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
                        ABOUT ME
                    </span>

                    <h2 className="mt-6 text-3xl font-bold text-slate-900 lg:text-4xl">
                        The Story Behind the Code
                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl text-medium leading-8 text-slate-600">
                        Passionate about building intelligent software that combines
                        Artificial Intelligence with modern full-stack development.
                    </p>

                </div>

                {/* Content */}

                <div className="grid items-center gap-16 lg:grid-cols-[40%_60%]">

                    {/* Portrait Card */}

                    <div className="flex justify-center lg:justify-start">

                        <div className="w-full max-w-sm overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

                            {/* Image */}

                            <Image
                                src={profile}
                                alt="Hafiz Muhammad Anas Majid"
                                width={450}
                                height={550}
                                className="h-107.5 w-full object-cover"
                            />

                            {/* Content */}

                            <div className="space-y-4 p-7">

                                <div>
                                    <p className="mt-1 font-medium text-lg text-black">
                                        AI & Full-Stack Developer
                                    </p>

                                </div>

                                <div className="space-y-3">

                                    <div className="flex items-center gap-2 text-slate-600">

                                        <MapPin
                                            size={18}
                                            className="text-blue-600"
                                        />

                                        <span>Lahore, Pakistan</span>

                                    </div>

                                    <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">

                                        <span className="h-2 w-2 rounded-full bg-green-500"></span>

                                        Open to Opportunities

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Right - My Journey */}

                    <div className="flex flex-col justify-center">

                        {/* Header */}

                        <div className="border-l-[3px] border-blue-500 pl-6">

                            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                                My Journey
                            </span>

                            <h3 className="mt-3 text-3xl font-bold leading-tight text-slate-900">
                                Building Intelligent
                                <br />
                                Digital Experiences
                            </h3>

                        </div>

                        {/* Timeline Content */}

                        <div className="mt-8 space-y-6">

                            <div className="flex items-start gap-4">
                                <span className="mt-3 h-2.5 w-2.5 rounded-full bg-blue-600 shrink-0"></span>

                                <p className="text-lg leading-8 text-slate-600">
                                    I'm{" "}
                                    <span className="font-semibold text-blue-600">
                                        Hafiz Muhammad Anas Majid
                                    </span>
                                    , an
                                    <span className="font-semibold text-slate-900">
                                        {" "}AI & Full-Stack Developer
                                    </span>{" "}
                                    passionate about creating modern web applications that combine
                                    beautiful user experiences with scalable backend systems and
                                    Generative AI.
                                </p>
                            </div>

                            <div className="flex items-start gap-4">
                                <span className="mt-3 h-2.5 w-2.5 rounded-full bg-blue-600 shrink-0"></span>

                                <p className="text-lg leading-8 text-slate-600">
                                    Currently pursuing a BS in Computer Science, I've built
                                    production-ready applications, AI-powered tools, and machine
                                    learning projects while continuously expanding my expertise in
                                    emerging technologies.
                                </p>
                            </div>

                            <div className="flex items-start gap-4">
                                <span className="mt-3 h-2.5 w-2.5 rounded-full bg-blue-600 shrink-0"></span>

                                <p className="text-lg leading-8 text-slate-600">
                                    My goal is simple — transform complex ideas into clean,
                                    scalable, and impactful software that solves real-world
                                    problems.
                                </p>
                            </div>

                        </div>

                        {/* Badges */}

                        <div className="mt-8 flex flex-wrap gap-3">

                            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                                <Sparkles size={16} className="text-blue-600" />
                                <span>AI Focused</span>
                            </div>

                            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                                <LaptopMinimal size={16} className="text-blue-600" />
                                <span>Full-Stack Developer</span>
                            </div>

                            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                                <GraduationCap size={16} className="text-blue-600" />
                                <span>Computer Science Student</span>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Expertise */}

                <div className="mt-24">

                    <div className="mb-12 text-center">

                        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                            Expertise
                        </span>

                        <h3 className="mt-3 text-3xl font-bold text-slate-900">
                            What I Bring to the Table
                        </h3>

                        <p className="mt-3 text-slate-600">
                            From AI-powered applications to scalable full-stack solutions, these are the technologies and domains I specialize in.
                        </p>

                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                        {expertise.map((item) => {
                            const Icon = item.icon;

                            return (

                                <div
                                    key={item.title}
                                    className="group rounded-3xl border border-slate-200 bg-white py-6 px-4 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl justify-items-center text-center"
                                >

                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                                        <Icon size={24} />
                                    </div>

                                    <h4 className="mt-5 font-semibold text-slate-900">
                                        {item.title}
                                    </h4>

                                    <p className="mt-4 text-sm leading-6 text-slate-600">
                                        {item.description}
                                    </p>

                                </div>

                            );
                        })}

                    </div>

                </div>

                {/* CTA */}

                <div className="mt-20 rounded-3xl bg-linear-to-r from-blue-50 to-white border border-blue-100 p-10 justify-center text-center shadow-lg justify-items-center">

                    <h3 className="text-2xl font-bold text-slate-900">
                        Let's Build Something Amazing
                    </h3>

                    <p className="mt-2 text-slate-600">
                        Whether it's an AI solution, a modern web application, or a collaborative project, I'm always excited to connect.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4 justify-center">
                        <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg cursor-pointer">

                            <Download size={18} />

                            Download CV

                        </button>

                        <button className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-8 py-4 font-medium text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">

                            Contact Me

                            <ArrowRight size={18} />

                        </button>

                    </div>

                </div>

            </div>
        </section>
    );
}