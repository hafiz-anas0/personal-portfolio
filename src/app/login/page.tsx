"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import AuthLayout from "@/components/auth/AuthLayout";
import LoginForm from "@/components/auth/LoginForm";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {

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
            title="Welcome Back"
            subtitle="Sign in to continue building amazing products."
            footerText="Don't have an account?"
            footerLinkText="Create one"
            footerLinkHref="/signup"
        >
            <LoginForm />
        </AuthLayout>
    );
}