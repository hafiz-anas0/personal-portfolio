"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, Mail, ArrowRight, Loader2 } from "lucide-react";

import AuthInput from "./AuthInput";
import PasswordInput from "./PasswordInput";

import { signup } from "@/services/auth";
import { useAuth } from "@/context/AuthContext";


export default function SignupForm() {

    const router = useRouter();

    const { refreshUser } = useAuth();


    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });


    const [agree, setAgree] = useState(false);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");



    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();

        setError("");


        if (!agree) {
            setError(
                "Please accept the Terms and Privacy Policy."
            );
            return;
        }


        if (form.password !== form.confirmPassword) {
            setError(
                "Passwords do not match."
            );
            return;
        }


        setLoading(true);


        try {

            const response = await signup(form);


            if (!response.success) {

                setError(
                    response.message || "Signup failed."
                );

                return;
            }


            // Refresh authentication state
            await refreshUser();


            // Go back to portfolio
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
            className="space-y-5"
        >

            {error && (
                <p className="rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-400">
                    {error}
                </p>
            )}



            <AuthInput
                label="Full Name"
                name="name"
                icon={User}
                placeholder="Enter your full name"
                autoComplete="name"
                value={form.name}
                onChange={(e) =>
                    setForm({
                        ...form,
                        name: e.target.value,
                    })
                }
            />


            <AuthInput
                label="Email Address"
                name="email"
                type="email"
                icon={Mail}
                placeholder="Enter your email"
                autoComplete="email"
                value={form.email}
                onChange={(e) =>
                    setForm({
                        ...form,
                        email: e.target.value,
                    })
                }
            />



            <PasswordInput
                label="Password"
                name="password"
                placeholder="Create a password"
                autoComplete="new-password"
                value={form.password}
                onChange={(e) =>
                    setForm({
                        ...form,
                        password: e.target.value,
                    })
                }
            />



            <PasswordInput
                label="Confirm Password"
                name="confirmPassword"
                placeholder="Confirm your password"
                autoComplete="new-password"
                value={form.confirmPassword}
                onChange={(e) =>
                    setForm({
                        ...form,
                        confirmPassword: e.target.value,
                    })
                }
            />



            <label className="flex cursor-pointer items-start gap-3 text-sm text-slate-400">

                <input
                    type="checkbox"
                    checked={agree}
                    onChange={(e) =>
                        setAgree(e.target.checked)
                    }
                    className="mt-1 h-4 w-4 accent-blue-600"
                />

                <span>
                    I agree to the{" "}
                    <Link
                        href="#"
                        className="text-blue-500 hover:text-blue-400"
                    >
                        Terms
                    </Link>{" "}
                    and{" "}
                    <Link
                        href="#"
                        className="text-blue-500 hover:text-blue-400"
                    >
                        Privacy Policy
                    </Link>.
                </span>

            </label>



            <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-2 rounded-xl cursor-pointer bg-blue-600 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
            >

                {loading ? (
                    <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Creating Account...
                    </>
                ) : (
                    <>
                        Create Account

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