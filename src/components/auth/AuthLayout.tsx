"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface AuthLayoutProps {
    title: string;
    subtitle: string;
    children: ReactNode;
    footerText: string;
    footerLinkText: string;
    footerLinkHref: string;
}

export default function AuthLayout({
    title,
    subtitle,
    children,
    footerText,
    footerLinkText,
    footerLinkHref,
}: AuthLayoutProps) {
    return (
        <section className="min-h-screen bg-slate-950 text-white">

            <div className="grid min-h-screen lg:grid-cols-2">

                {/* ================= LEFT ================= */}

                <div className="relative hidden flex-col justify-between overflow-hidden border-r border-slate-800 bg-slate-950 px-8 py-12 lg:flex lg:px-16 lg:py-12">
                    {/* Background Blur */}

                    <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />

                    <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[150px]" />

                    {/* Logo */}

                    <div className="relative z-10">

                        <Link
                            href="/"
                            className="text-4xl font-bold tracking-tight"
                        >
                            HAM<span className="text-blue-500">.</span>
                        </Link>

                    </div>

                    {/* Intro */}

                    <div className="relative z-10 max-w-xl">

                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
                            AI & Full Stack Developer
                        </p>

                        <h1 className="text-4xl font-bold leading-tight lg:text-6xl">
                            Hafiz Muhammad
                            <br />
                            Anas Majid
                        </h1>

                        <p className="mt-8 max-w-lg text-lg leading-8 text-slate-400">
                            Crafting modern web experiences with clean code, scalable
                            architecture, and AI-powered solutions. Passionate about turning
                            ideas into products that people love to use.
                        </p>

                        {/* Stats */}

                        <div className="mt-12 grid grid-cols-2 gap-6">

                            <div>
                                <h3 className="text-3xl font-bold text-white">
                                    10+
                                </h3>

                                <p className="mt-1 text-sm uppercase tracking-widest text-slate-500">
                                    Projects
                                </p>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-white">
                                    2
                                </h3>

                                <p className="mt-1 text-sm uppercase tracking-widest text-slate-500">
                                    Internships
                                </p>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-white">
                                    MERN
                                </h3>

                                <p className="mt-1 text-sm uppercase tracking-widest text-slate-500">
                                    Stack
                                </p>
                            </div>

                            <div>
                                <h3 className="text-3xl font-bold text-white">
                                    AI
                                </h3>

                                <p className="mt-1 text-sm uppercase tracking-widest text-slate-500">
                                    Enthusiast
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Footer */}

                    <div className="relative z-10 text-sm text-slate-500">
                        © 2026 Hafiz Muhammad Anas Majid
                    </div>

                </div>

                {/* ================= RIGHT ================= */}

                <div className="flex items-center justify-center bg-slate-900 px-8 py-8 lg:py-10">

                    <div className="w-full max-w-md">
                        <h2 className="text-4xl font-bold">
                            {title}
                        </h2>

                        <p className="mt-2 leading-7 text-slate-400">
                            {subtitle}
                        </p>

                        <div className="mt-6">

                            {children}

                        </div>

                        <div className="mt-6 border-t border-slate-800 pt-8 text-center text-slate-400">

                            {footerText}{" "}

                            <Link
                                href={footerLinkHref}
                                className="font-semibold text-blue-500 transition hover:text-blue-400"
                            >
                                {footerLinkText}
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}