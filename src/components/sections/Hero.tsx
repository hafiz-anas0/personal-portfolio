"use client";

import profile from "../../assets/images/profile.jpeg";
import Image from "next/image";
import { FaGithub, FaLinkedinIn, FaWhatsapp, } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const socialLinks = [
    {
        icon: FaGithub,
        href: "https://github.com/hafiz-anas0",
        label: "GitHub",
    },
    {
        icon: FaLinkedinIn,
        href: "https://www.linkedin.com/in/hafiz-m-anas-majid-256359300",
        label: "LinkedIn",
    },
    {
        icon: SiGmail,
        href: "https://mail.google.com/mail/?view=cm&fs=1&to=hafizanasmajid2006@gmail.com",
        label: "Email",
    },
    {
        icon: FaWhatsapp,
        href: "https://wa.me/923224536877",
        label: "WhatsApp",
    },
];

export default function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/70 to-cyan-50 pt-32 lg:pt-20"
        >
            {/* Background Mesh */}

            <div className="absolute inset-0 -z-10 overflow-hidden">

                {/* Blue */}

                <div className="absolute -left-32 -top-32 h-[34rem] w-[34rem] rounded-full bg-blue-300/30 blur-[140px]" />

                {/* Cyan */}

                <div className="absolute right-0 top-24 h-[28rem] w-[28rem] rounded-full bg-cyan-300/30 blur-[140px]" />

                {/* Indigo */}

                <div className="absolute bottom-0 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-indigo-200/25 blur-[160px]" />

            </div>
            {/* Grid Overlay */}

            <div
                className="absolute inset-0 -z-10 opacity-[0.05]"
                style={{
                    backgroundImage: `
            linear-gradient(to right, rgb(15 23 42 / .18) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(15 23 42 / .18) 1px, transparent 1px)
        `,
                    backgroundSize: "48px 48px",
                }}
            />
            {/* Floating Social Icons */}
            <div className="fixed left-6 top-1/2 hidden -translate-y-1/2 flex-col gap-5 lg:flex">
                {socialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                        <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className="group flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white shadow-md transition-all duration-300 hover:scale-110 hover:shadow-xl"
                        >
                            <Icon
                                size={20}
                                className="text-slate-600 transition-transform duration-300 group-hover:scale-110"
                            />
                        </a>
                    );
                })}
            </div>
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-12 lg:pl-20 lg:pr-8">

                {/* Left Side */}
                <div className="space-y-5 text-center lg:space-y-6 lg:text-left">

                    <div className="flex justify-center lg:justify-start">
                        <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
                            Building AI-Powered Solutions
                        </span>
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-base font-medium tracking-wide text-slate-500">
                            Hi, I'm
                        </h2>

                        <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-tight text-slate-900">
                            Hafiz Muhammad
                            <br />
                            <span className="text-blue-600">Anas Majid</span>
                        </h1>
                    </div>

                    <h3 className="text-xl lg:text-2xl font-semibold text-slate-700">
                        AI & Full-Stack Developer
                    </h3>

                    <p className="mx-auto max-w-2xl text-lg leading-7 text-slate-600 lg:mx-0">
                        I build intelligent web applications by combining modern frontend technologies, scalable backend systems, and Generative AI to deliver impactful digital experiences.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 lg:justify-start">

                        <button className="flex items-center gap-2 rounded-xl cursor-pointer bg-blue-600 px-10 py-4 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg">
                            View My Work
                        </button>

                        <button className="flex items-center gap-2 rounded-xl cursor-pointer bg-black px-10 py-4 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg">
                            Download CV
                        </button>

                    </div>



                </div>

                {/* Right Side */}

                <div className="mt-8 flex justify-center lg:mt-0 lg:justify-end">
                    <div className="w-full max-w-sm rounded-4xl border border-slate-200 bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

                        <div className="overflow-hidden rounded-3xl">

                            <Image
                                src={profile}
                                alt="Hafiz Muhammad Anas"
                                width={500}
                                height={600}
                                className="h-auto w-full object-cover"
                            />

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}