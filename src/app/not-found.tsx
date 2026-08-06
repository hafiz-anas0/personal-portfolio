"use client";

import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-white px-6">
            <div className="max-w-2xl text-center">

                <p className="text-lg font-semibold text-blue-600">
                    404
                </p>

                <h1 className="mt-4 text-5xl font-bold tracking-tight text-slate-900 md:text-6xl">
                    Page Not Found
                </h1>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                    The page you are looking for does not exist or may have been moved.
                </p>

                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

                    <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
                    >
                        <Home size={18} />
                        Back to Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-100"
                    >
                        <ArrowLeft size={18} />
                        Go Back
                    </button>

                </div>

            </div>
        </main>
    );
}