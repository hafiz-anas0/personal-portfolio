"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, ArrowRight, Loader2 } from "lucide-react";

import AuthInput from "./AuthInput";
import PasswordInput from "./PasswordInput";

import { login } from "@/services/auth";
import { useAuth } from "@/context/AuthContext";


export default function LoginForm() {

    const router = useRouter();

    const { refreshUser } = useAuth();


    const [form, setForm] = useState({
        email: "",
        password: "",
    });


    const [remember, setRemember] = useState(false);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");



    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();

        setError("");

        setLoading(true);


        try {

            console.log("Sending login data:", form);

            const response = await login(form);

            console.log("Login response:", response);


            if (!response.success) {

                setError(
                    response.message || "Login failed."
                );

                return;
            }


            // Update global auth state
            await refreshUser();


            // Redirect to portfolio
            router.push("/");


        } catch (error) {

            console.error(error);

            setError(
                "Something went wrong. Please try again."
            );


        } finally {

            setLoading(false);

        }
    };



    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-6"
        >

            {error && (
                <p className="rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-400">
                    {error}
                </p>
            )}


            <AuthInput
                label="Email Address"
                icon={Mail}
                name="email"
                type="email"
                value={form.email}
                onChange={(e) =>
                    setForm({
                        ...form,
                        email: e.target.value,
                    })
                }
                placeholder="Enter your email"
                autoComplete="email"
            />


            <PasswordInput
                label="Password"
                name="password"
                value={form.password}
                onChange={(e) =>
                    setForm({
                        ...form,
                        password: e.target.value,
                    })
                }
                placeholder="Enter your password"
                autoComplete="current-password"
            />



            <div className="flex items-center justify-between">

                <label className="flex cursor-pointer items-center gap-3 text-sm text-slate-400">

                    <input
                        type="checkbox"
                        checked={remember}
                        onChange={(e) =>
                            setRemember(e.target.checked)
                        }
                        className="h-4 w-4 rounded border-slate-700 bg-slate-900 accent-blue-600"
                    />

                    Remember me

                </label>


                <Link
                    href="/forgot-password"
                    className="text-sm font-medium text-blue-500 transition hover:text-blue-400"
                >
                    Forgot Password?
                </Link>

            </div>



            <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-2 rounded-xl cursor-pointer bg-blue-600 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
            >

                {loading ? (
                    <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Signing In...
                    </>
                ) : (
                    <>
                        Sign In

                        <ArrowRight
                            size={18}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </>
                )}

            </button>


        </form>
    );
}