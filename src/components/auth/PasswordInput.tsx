"use client";

import { useState, InputHTMLAttributes } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";

interface PasswordInputProps
    extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
    
}


export default function PasswordInput({
    label,
    error,
    ...props
    
}: PasswordInputProps) {
    const [showPassword, setShowPassword] = useState(false);
    

    return (
        <div className="space-y-2">

            <label className="text-sm font-medium text-slate-300">
                {label}
            </label>

            <div
                className={`
                    group flex items-center rounded-xl border bg-slate-950/60
                    transition-all duration-300
                    ${error
                        ? "border-red-500"
                        : "border-slate-700 focus-within:border-blue-500"
                    }
                `}
            >
                <Lock
                    size={20}
                    className="ml-4 text-slate-500 transition-colors group-focus-within:text-blue-500"
                />

                <input
                    {...props}
                    type={showPassword ? "text" : "password"}
                    autoComplete={props.autoComplete}
                    className="w-full bg-transparent px-4 py-4 rounded-xl text-white placeholder:text-slate-500 outline-none"
                />

                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="mr-4 text-slate-500 transition hover:text-blue-500"
                >
                    {showPassword ? (
                        <EyeOff size={20} />
                    ) : (
                        <Eye size={20} />
                    )}
                </button>
            </div>

            {error && (
                <p className="text-sm text-red-400">
                    {error}
                </p>
            )}

        </div>
    );
}