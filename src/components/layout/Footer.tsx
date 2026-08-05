"use client";

import Link from "next/link";

import {
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaInstagram,
} from "react-icons/fa";
import { ArrowUp } from "lucide-react";

export default function Footer() {
    const socialLinks = [
        {
            icon: FaGithub,
            href: "https://github.com/hafiz-anas0",
            label: "GitHub",
        },
        {
            icon: FaLinkedin,
            href: "https://www.linkedin.com/in/hafiz-m-anas-majid-256359300",
            label: "LinkedIn",
        },
        {
            icon: FaFacebook,
            href: "https://www.facebook.com/anas.majid.9235/",
            label: "Facebook",
        },
        {
            icon: FaInstagram,
            href: "https://www.instagram.com/its_anas_goraya/",
            label: "Instagram",
        },
    ];


    return (
        <footer className="border-t border-slate-200 bg-slate-900 text-white">
            <div className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8">
                <Link
                    href="#home"
                    className="group absolute right-6 top-6 hidden items-center gap-2 rounded-full border border-slate-700 bg-slate-800/60 px-5 py-2 text-sm font-medium text-slate-300 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-400 md:flex"
                >
                    <ArrowUp
                        size={16}
                        className="transition-transform duration-300 group-hover:-translate-y-1"
                    />
                    Back to Top
                </Link>

                <div className="flex flex-col items-center gap-8">

                    {/* Logo */}

                    <Link
                        href="/"
                        className="text-4xl font-bold tracking-tight"
                    >
                        HAM<span className="text-blue-500">.</span>
                    </Link>

                    <p className="max-w-lg text-center leading-7 text-slate-400">
                        Thank you for visiting my portfolio.
                        I appreciate your time and look forward to
                        connecting with you.
                    </p>

                    {/* Social */}

                    <div className="flex gap-5">

                        {socialLinks.map(({ icon: Icon, href, label }) => (
                            <Link
                                key={label}
                                href={href}
                                target="_blank"
                                aria-label={label}
                                className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-600"
                            >
                                <Icon size={20} />
                            </Link>
                        ))}

                    </div>
                    <div className="h-px w-full bg-slate-800" />

                    <div className="flex w-full flex-col items-center justify-between gap-3 text-sm text-slate-500 md:flex-row">

                        <p>
                            © 2026 Hafiz Muhammad Anas Majid. All rights reserved.
                        </p>

                        <p>
                            Built with Next.js • TypeScript • Tailwind CSS
                        </p>

                    </div>
                </div>

            </div>
        </footer>
    );
}