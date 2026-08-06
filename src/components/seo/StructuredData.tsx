export default function StructuredData() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",

        name: "Hafiz Muhammad Anas Majid",

        alternateName: "Hafiz Anas",

        url: "https://your-domain.vercel.app",

        image: "https://your-domain.vercel.app/og/og-image.png",

        jobTitle: "AI Engineer & Full-Stack Developer",

        description:
            "AI & Full-Stack Developer specializing in React, Next.js, Node.js, MongoDB, TypeScript, MERN Stack and AI-powered web applications.",

        email: "mailto:hafizanasmajid2006@gmail.com",

        sameAs: [
            "https://github.com/hafiz-anas0",
            "https://www.linkedin.com/in/hafiz-m-anas-majid-256359300/",
        ],

        alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "University of Management and Technology (UMT)",
        },

        knowsAbout: [
            "Artificial Intelligence",
            "Machine Learning",
            "Full Stack Development",
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Firebase",
            "Tailwind CSS",
            "REST APIs",
            "JWT Authentication",
            "Git",
            "GitHub",
        ],

        worksFor: [
            {
                "@type": "Organization",
                name: "ML Bench",
            },
            {
                "@type": "Organization",
                name: "P2P Clouds",
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(jsonLd),
            }}
        />
    );
}