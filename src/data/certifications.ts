export interface Certification {
    id: number;

    title: string;

    issuer: string;

    duration: string;

    year: string;

    location: string;

    description: string;

    skills: string[];

    image: string;
}

export const certifications: Certification[] = [
    {
        id: 1,

        title: "MERN Stack Development",

        issuer: "NexSkills",

        duration: "6 Months",

        year: "2025",

        location: "Arfa Kareem Tower, Lahore",

        description:
            "Successfully completed an intensive six-month MERN Stack Development program covering frontend and backend development, RESTful APIs, database design, authentication, deployment, and modern development workflows through practical projects.",

        skills: [
            "MongoDB",
            "Express.js",
            "React.js",
            "Node.js",
        ],

        image: "/certificates/nexskills-mern.jpeg",
    },
];