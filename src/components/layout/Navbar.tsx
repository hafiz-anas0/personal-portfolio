"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
    Menu,
    X,
    Download,
    UserCircle,
    LogOut,
} from "lucide-react";

import { useAuth } from "@/context/AuthContext";


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

    const { user, loading, logout } = useAuth();


    const [isOpen, setIsOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);

    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");


    useEffect(() => {

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };


        window.addEventListener(
            "scroll",
            handleScroll
        );


        return () =>
            window.removeEventListener(
                "scroll",
                handleScroll
            );

    }, []);



    useEffect(() => {

        const sections =
            document.querySelectorAll("section[id]");


        const observer =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {
                            setActiveSection(
                                entry.target.id
                            );
                        }

                    });

                },
                {
                    threshold: 0.25,
                }
            );


        sections.forEach((section) =>
            observer.observe(section)
        );


        return () =>
            observer.disconnect();


    }, []);

    const scrollToSection = (id: string) => {
        setActiveSection(id);

        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

        setIsOpen(false);
        setProfileOpen(false);
    };


    return (
        <header className="fixed left-0 z-50 w-full">

            <div
                className={`
                mx-auto flex h-20 items-center justify-between
                border border-slate-200/80 bg-white/80
                px-6 backdrop-blur-xl transition-all
                duration-300 lg:px-8
                ${isScrolled
                        ? "shadow-lg"
                        : "shadow-sm"
                    }
                `}
            >


                {/* Logo */}

                <button
                    onClick={() => scrollToSection("home")}
                    className="cursor-pointer text-3xl font-bold tracking-tight text-slate-900"
                >
                    HAM<span className="text-blue-600">.</span>
                </button>



                {/* Desktop Navigation */}

                <nav className="hidden items-center gap-8 lg:flex">

                    {navLinks.map((item) => (

                        <button
                            key={item.name}
                            onClick={() => scrollToSection(item.href.substring(1))}
                            className={`
                            font-medium transition-colors
                            ${activeSection === item.href.substring(1)
                                    ? "text-blue-600 underline underline-offset-6 cursor-pointer"
                                    : "text-slate-500 hover:text-slate-900 cursor-pointer"
                                }
                            `}
                        >
                            {item.name}
                        </button>

                    ))}

                </nav>



                {/* Desktop Right */}

                <div className="hidden items-center gap-4 lg:flex">

                    <a
                        href="/resume/Hafiz_Muhammad_Anas_Majid.pdf"
                        download
                        className="
    flex items-center gap-2
    rounded-full
    bg-blue-600
    px-5 py-2.5
    text-sm font-medium
    text-white
    transition
    hover:-translate-y-0.5
    hover:bg-blue-700
    hover:shadow-lg
    "
                    >
                        <Download size={18} />
                        Resume
                    </a>



                    {!loading && (

                        !user ? (

                            <Link
                                href="/login"
                                className="
                                rounded-full bg-blue-600
                                px-5 py-2.5 text-sm
                                font-medium text-white
                                transition hover:bg-blue-700 cursor-pointer
                                "
                            >
                                Login
                            </Link>

                        ) : (

                            <div className="relative">


                                <button
                                    onClick={() =>
                                        setProfileOpen(!profileOpen)
                                    }
                                    className="
                                    rounded-full border
                                    border-slate-200
                                    p-2 transition
                                    hover:bg-slate-100 cursor-pointer
                                    "
                                >

                                    <UserCircle
                                        size={30}
                                        className="text-blue-600"
                                    />

                                </button>



                                {profileOpen && (

                                    <div
                                        className="
                                        absolute right-0 top-14
                                        w-64 rounded-2xl
                                        border border-slate-200
                                        bg-white p-5 shadow-xl
                                        "
                                    >

                                        <p className="
                                        font-semibold text-slate-900
                                        ">
                                            {user.name}
                                        </p>


                                        <p className="
                                        mt-1 text-sm text-slate-500
                                        ">
                                            {user.email}
                                        </p>


                                        <button
                                            onClick={() => {
                                                logout();
                                                setProfileOpen(false);
                                            }}
                                            className="
                                            mt-4 flex w-full
                                            items-center justify-center
                                            gap-2 rounded-lg
                                            bg-slate-100 py-2
                                            text-sm font-medium
                                            transition hover:bg-red-50
                                            hover:text-red-600 cursor-pointer
                                            "
                                        >

                                            <LogOut size={16} />

                                            Logout

                                        </button>


                                    </div>

                                )}

                            </div>

                        )

                    )}

                </div>




                {/* Mobile Menu Button */}

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="
                    rounded-lg p-2 text-slate-700
                    transition hover:bg-slate-100
                    lg:hidden
                    "
                >

                    {isOpen
                        ? <X size={24} />
                        : <Menu size={24} />
                    }

                </button>


            </div>





            {/* Mobile Menu */}

            {isOpen && (

                <div
                    className="
                    mx-4 rounded-2xl border
                    border-slate-200 bg-white
                    shadow-lg lg:hidden
                    "
                >

                    <div className="flex flex-col p-5">


                        {navLinks.map((item) => (

                            <button
                                key={item.name}
                                onClick={() =>
                                    scrollToSection(item.href.substring(1))
                                }
                                className={`
        rounded-lg px-3 py-3 text-left transition-colors duration-300
        ${activeSection === item.href.substring(1)
                                        ? "bg-blue-50 text-blue-600 font-medium"
                                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                                    }
    `}
                            >
                                {item.name}
                            </button>

                        ))}

                        <a
                            href="/resume/Hafiz_Muhammad_Anas_Majid.pdf"
                            download
                            className="
    mt-4 flex w-full
    items-center justify-center
    gap-2 rounded-full
    bg-blue-600
    py-3
    font-medium
    text-white
    transition
    hover:bg-blue-700
    "
                        >
                            <Download size={18} />
                            Resume
                        </a>

                        {!loading && !user && (

                            <Link
                                href="/login"
                                className="
                            mt-3 rounded-full
                            bg-slate-900 py-3
                            text-center font-medium
                            text-white
                            "
                            >
                                Login
                            </Link>

                        )}



                        {!loading && user && (

                            <div
                                className="
                            mt-4 rounded-xl
                            bg-slate-100 p-4
                            "
                            >

                                <div className="flex items-center gap-3">

                                    <UserCircle
                                        size={32}
                                        className="text-blue-600"
                                    />


                                    <div>

                                        <p className="font-semibold text-slate-900">
                                            {user.name}
                                        </p>

                                        <p className="text-sm text-slate-500">
                                            {user.email}
                                        </p>

                                    </div>


                                </div>


                                <button
                                    onClick={logout}
                                    className="
                                    mt-3 flex w-full
                                    items-center justify-center
                                    gap-2 rounded-lg
                                    bg-white py-2
                                    text-sm font-medium
                                    hover:text-red-600
                                    "
                                >

                                    <LogOut size={16} />

                                    Logout

                                </button>

                            </div>

                        )}

                    </div>

                </div>

            )
            }

        </header >
    );
}