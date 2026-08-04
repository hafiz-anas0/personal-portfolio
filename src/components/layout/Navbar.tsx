"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.25,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);
    return (
        <>
            <header className={`fixed left-0 z-50 w-full transition-all duration-300`}>
                <div className={`mx-auto flex h-20 max-w-full items-center justify-between border border-slate-200/80 bg-white/80 px-6 backdrop-blur-xl transition-all duration-300 lg:px-8 ${isScrolled ? "shadow-sm md:shadow-lg" : "shadow-sm"
                    }`}>

                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-3xl font-bold tracking-tight text-slate-900"
                    >
                        HAM<span className="text-blue-600">.</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden items-center gap-8 lg:flex">
                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setActiveSection(item.href.substring(1))}
                                className={`font-medium transition-colors duration-300 ${activeSection === item.href.substring(1)
                                    ? "text-blue-600 underline decoration-0 underline-offset-6"
                                    : "text-slate-500 hover:text-slate-900"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Right */}
                    <div className="hidden items-center gap-4 lg:flex">
                        <button className="flex items-center gap-2 rounded-full cursor-pointer bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg">
                            <Download size={18} />
                            Resume
                        </button>
                    </div>

                    {/* Mobile */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`mx-4 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg transition-all duration-300 lg:hidden
          ${isOpen
                            ? "opacity-100"
                            : "max-h-0 border-0 opacity-0"
                        }`}
                >
                    <div className="flex flex-col p-5">
                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => {
                                    setActiveSection(item.href.substring(1));
                                    setIsOpen(false);
                                }}
                                className={`rounded-lg px-3 py-3 transition-colors ${activeSection === item.href.substring(1)
                                    ? "text-blue-600 underline decoration-0 underline-offset-6"
                                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"}`} >
                                {item.name}
                            </Link>
                        ))}

                        <button className="mt-4 flex items-center justify-center gap-2 rounded-full bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700">
                            <Download size={18} />
                            Download Resume
                        </button>
                    </div>
                </div>
            </header >
        </>
    );
}