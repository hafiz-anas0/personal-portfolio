"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import AuthLayout from "@/components/auth/AuthLayout";
import SignupForm from "@/components/auth/SignupForm";

export default function SignupPage() {

    const router = useRouter();

    const { user, loading } = useAuth();


    useEffect(() => {

        if (!loading && user) {
            router.push("/");
        }

    }, [user, loading, router]);



    if (loading || user) {
        return null;
    }

    return (
        <AuthLayout
            title="Create Account"
            subtitle="Join and start showcasing your work."
            footerText="Already have an account?"
            footerLinkText="Sign In"
            footerLinkHref="/login"
        >
            <SignupForm />
        </AuthLayout>
    );
}