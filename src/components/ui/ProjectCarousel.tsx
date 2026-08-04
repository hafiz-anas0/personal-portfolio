"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { useState } from "react";

interface ProjectCarouselProps {
    images: string[];
    title: string;
    onOpen: (index: number) => void;
}

export default function ProjectCarousel({
    images,
    title,
    onOpen,
}: ProjectCarouselProps) {
    const [current, setCurrent] = useState(0);

    const next = () =>
        setCurrent((prev) => (prev + 1) % images.length);

    const prev = () =>
        setCurrent((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );

    return (
        <div className="group relative overflow-hidden rounded-2xl">

            <Image
                src={images[current]}
                alt={`${title} ${current + 1}`}
                width={1200}
                height={700}
                className="h-56 lg:h-60 w-full object-cover transition duration-500 group-hover:scale-105"
            />

            {/* Expand */}

            <button
                onClick={() => onOpen(current)}
                className="absolute right-4 top-4 rounded-full bg-white/90 p-2 opacity-0 shadow-lg transition group-hover:opacity-100"
            >
                <Expand size={18} />
            </button>

            {/* Prev */}

            {images.length > 1 && (
                <>
                    <button
                        onClick={prev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg"
                    >
                        <ChevronLeft />
                    </button>

                    <button
                        onClick={next}
                        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg"
                    >
                        <ChevronRight />
                    </button>

                    {/* Indicators */}

                    <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">

                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`h-2 rounded-full transition-all ${current === index
                                        ? "w-7 bg-white"
                                        : "w-2 bg-white/60"
                                    }`}
                            />
                        ))}

                    </div>
                </>
            )}
        </div>
    );
}