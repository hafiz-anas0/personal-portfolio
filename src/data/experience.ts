export interface Experience {
    id: number;
    company: string;
    role: string;
    duration: string;
    employmentType: string;
    location: string;
    status: string;
    website: string;
    logo: string;
    description: string;
    achievements: string[];
    technologies: string[];
}

export const experiences: Experience[] = [
    {
        id: 1,

        company: "ML Bench",

        role: "MERN Developer Intern",

        duration: "Present",

        employmentType: "Internship",

        location: "Hybrid",

        status: "Current",

        website: "https://ml-bench.com/",

        logo: "/companies/mlbench.png",

        description:
            "Working as a MERN Developer Intern, building modern, responsive web applications while following industry-standard development workflows, reusable component architecture, and collaborative Git practices.",

        achievements: [
            "Developed responsive user interfaces using React, Next.js, and Tailwind CSS.",
            "Built reusable components to improve maintainability and consistency across projects.",
            "Collaborated using Git-based workflows with feature branches, pull requests, and code reviews.",
            "Converted modern UI designs into responsive, production-ready web pages.",
            "Worked in an Agile development environment while collaborating with the development team through Discord.",
        ],

        technologies: [
            "React",
            "Next.js",
            "Tailwind CSS",
            "JavaScript",
            "TypeScript",
            "Git",
            "GitHub",
            "Vite",
        ],
    },

    {
        id: 2,

        company: "P2P Clouds",

        role: "Frontend Developer Intern",

        duration: "Jul 2025 - Sep 2025",

        employmentType: "Internship",

        location: "Remote",

        status: "Completed",

        website: "https://p2pclouds.net/",

        logo: "/companies/p2pclouds.png",

        description:
            "Completed a Frontend Development internship focused on building scalable web applications using Next.js and modern frontend technologies while working on a Medium-inspired blogging platform.",

        achievements: [
            "Developed a Medium-inspired blogging platform using Next.js and Firebase.",
            "Implemented authentication, rich text editing, and cloud-based image uploads.",
            "Integrated Editor.js to provide an intuitive content writing experience.",
            "Built reusable UI components following responsive design principles.",
            "Managed application state efficiently using Redux Toolkit.",
        ],

        technologies: [
            "Next.js",
            "React",
            "Tailwind CSS",
            "Firebase",
            "Cloudinary",
            "Redux Toolkit",
            "Editor.js",
            "Git",
            "GitHub",
        ],
    },
];