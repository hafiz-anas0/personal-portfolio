"use client";

import Image from "next/image";
import {
    ChevronLeft,
    ChevronRight,
    X,
} from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
    images: string[];
    initialIndex: number;
    open: boolean;
    onClose: () => void;
}

export default function ProjectImageModal({
    images,
    initialIndex,
    open,
    onClose,
}: Props) {
    const [current, setCurrent] = useState(initialIndex);

    useEffect(() => {
        setCurrent(initialIndex);
    }, [initialIndex]);

    useEffect(() => {
        if (!open) return;

        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();

            if (e.key === "ArrowRight")
                setCurrent((c) => (c + 1) % images.length);

            if (e.key === "ArrowLeft")
                setCurrent((c) =>
                    c === 0 ? images.length - 1 : c - 1
                );
        };

        window.addEventListener("keydown", handler);

        return () =>
            window.removeEventListener("keydown", handler);
    }, [open, images.length, onClose]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6">

            {/* Close */}

            <button
                onClick={onClose}
                className="absolute right-8 top-8 rounded-full bg-white p-3"
            >
                <X />
            </button>

            {/* Previous */}

            {images.length > 1 && (
                <button
                    onClick={() =>
                        setCurrent((c) =>
                            c === 0 ? images.length - 1 : c - 1
                        )
                    }
                    className="absolute left-6 rounded-full bg-white p-3"
                >
                    <ChevronLeft />
                </button>
            )}

            {/* Image */}

            <Image
                src={images[current]}
                alt=""
                width={1600}
                height={900}
                className="max-h-[90vh] w-auto rounded-xl object-contain"
            />

            {/* Next */}

            {images.length > 1 && (
                <button
                    onClick={() =>
                        setCurrent((c) =>
                            (c + 1) % images.length
                        )
                    }
                    className="absolute right-6 rounded-full bg-white p-3"
                >
                    <ChevronRight />
                </button>
            )}

            {/* Counter */}

            <div className="absolute bottom-8 rounded-full bg-white px-5 py-2 text-sm font-semibold">

                {current + 1} / {images.length}

            </div>
        </div>
    );
}