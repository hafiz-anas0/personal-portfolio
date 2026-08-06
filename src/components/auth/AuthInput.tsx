"use client";

import { InputHTMLAttributes } from "react";
import { LucideIcon } from "lucide-react";

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    icon: LucideIcon;
    error?: string;
}

export default function AuthInput({
    label,
    icon: Icon,
    error,
    ...props
}: AuthInputProps) {
    return (
        <div className="space-y-2">

            {/* Label */}

            <label className="text-sm font-medium text-slate-300">
                {label}
            </label>

            {/* Input */}

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
                <Icon
                    size={20}
                    className="ml-4 text-slate-500 transition-colors duration-300 group-focus-within:text-blue-500"
                />

                <input
                    {...props}
                    autoComplete={props.autoComplete}
                    className="
                        w-full bg-transparent px-4 py-4
                        text-white placeholder:text-slate-500
                        outline-none rounded-xl
                    "
                />
            </div>

            {/* Error */}

            {error && (
                <p className="text-sm text-red-400">
                    {error}
                </p>
            )}

        </div>
    );
}