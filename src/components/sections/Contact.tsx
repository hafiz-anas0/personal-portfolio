"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp, FaPhoneAlt, } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Link from "next/link";

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

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log(form);

        // EmailJS / Resend later
    };

    return (
        <section
            id="contact"
            className="bg-white py-20"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Heading */}

                <div className="mb-20 text-center">

                    <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
                        CONTACT
                    </span>

                    <h2 className="mt-6 text-3xl font-bold text-slate-900 lg:text-4xl">
                        Let's Build Something Together
                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-600">
                        Whether you have a project, an opportunity,
                        freelance work, or just want to connect, I'd love to
                        hear from you.
                    </p>

                </div>

                <div className="grid gap-12 lg:grid-cols-[380px_1fr]">

                    {/* LEFT */}

                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">

                        <h3 className="text-2xl font-bold text-slate-900">
                            Contact Information
                        </h3>

                        <p className="mt-3 leading-7 text-slate-600">
                            Feel free to reach out through any of the platforms
                            below.
                        </p>

                        <div className="mt-8 space-y-5">

                            <div className="flex items-center gap-4">
                                <MdEmail
                                    size={22}
                                    className="text-blue-600"
                                />
                                <div>
                                    <p className="text-sm text-slate-500">
                                        Email
                                    </p>

                                    <p className="font-medium">
                                        <Link
                                            href="https://mail.google.com/mail/?view=cm&fs=1&to=hafizanasmajid2006@gmail.com"
                                            target="_blank"
                                            className="font-medium hover:text-blue-600"
                                        >
                                            hafizanasmjid2006@gmail.com
                                        </Link>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <FaPhoneAlt
                                    size={18}
                                    className="text-blue-600"
                                />
                                <div>
                                    <p className="text-sm text-slate-500">
                                        Phone
                                    </p>

                                    <p className="font-medium">
                                        <Link
                                            href="tel:+923224536877"
                                            className="font-medium hover:text-blue-600"
                                        >
                                            +92 322 4536877
                                        </Link>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <FaWhatsapp
                                    size={22}
                                    className="text-green-500"
                                />
                                <div>
                                    <p className="text-sm text-slate-500">
                                        WhatsApp
                                    </p>

                                    <p className="font-medium">
                                        <Link
                                            href="https://wa.me/923224536877"
                                            target="_blank"
                                            className="font-medium hover:text-green-600"
                                        >
                                            +92 322 4536877
                                        </Link>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 cursor-pointer" >
                                <HiOutlineLocationMarker
                                    size={22}
                                    className="text-blue-600"
                                />

                                <div>
                                    <p className="text-sm text-slate-500">
                                        Location
                                    </p>

                                    <p className="font-medium">
                                        Lahore, Pakistan
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Social */}

                        <div className="mt-10">

                            <h4 className="font-semibold text-slate-900">
                                Follow Me
                            </h4>

                            <div className="mt-5 flex gap-4">

                                {socialLinks.map(({ icon: Icon, href, label }) => (
                                    <Link
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        aria-label={label}
                                        className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600"
                                    >
                                        <Icon size={20} />
                                    </Link>
                                ))}

                            </div>

                        </div>

                    </div>

                    {/* RIGHT */}

                    <form
                        onSubmit={handleSubmit}
                        className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
                    >

                        <div className="grid gap-6 md:grid-cols-2">

                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={form.name}
                                onChange={handleChange}
                                className="rounded-xl border border-slate-200 px-5 py-4 outline-none transition focus:border-blue-600"
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={form.email}
                                onChange={handleChange}
                                className="rounded-xl border border-slate-200 px-5 py-4 outline-none transition focus:border-blue-600"
                            />

                        </div>

                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={form.subject}
                            onChange={handleChange}
                            className="mt-6 w-full rounded-xl border border-slate-200 px-5 py-4 outline-none transition focus:border-blue-600"
                        />

                        <textarea
                            rows={8}
                            name="message"
                            placeholder="Write your message..."
                            value={form.message}
                            onChange={handleChange}
                            className="mt-6 w-full resize-none rounded-xl border border-slate-200 px-5 py-4 outline-none transition focus:border-blue-600"
                        />

                        <button
                            type="submit"
                            className="mt-8 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg"
                        >
                            Send Message →
                        </button>

                    </form>

                </div>

            </div>
        </section>
    );
}