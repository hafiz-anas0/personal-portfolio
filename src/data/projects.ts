export interface Project {
    id: number;
    featured: boolean;
    title: string;
    slug: string;
    category: string;
    year: string;
    status: string;
    description: string;
    highlights: string[];
    technologies: string[];
    github: string;
    live: string;
    images: string[];
}

export const projects: Project[] = [
    {
        id: 1,
        featured: true,

        title: "AI Resume Analyzer & Career Coach",
        slug: "ai-resume-analyzer",

        category: "AI & Full-Stack",

        year: "2026",

        status: "Completed",

        description:
            "An AI-powered resume analysis platform that evaluates resumes against target job roles, calculates ATS compatibility, identifies skill gaps, and generates personalized career guidance using Google's Gemini AI.",

        highlights: [
            "AI-powered ATS resume analysis",
            "Role-based skill matching",
            "Gemini AI integration",
            "Resume roadmap generation",
            "Interview question generation",
            "PDF resume parsing",
        ],

        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "Gemini API",
            "Firebase",
            "Cloudinary",
            "Redux Toolkit",
        ],

        github:
            "https://github.com/hafiz-anas0/ai-resume-analyzer",

        live: "https://ai-resume-analyzer-and-career-coach.vercel.app/",

        images: [
            "/projects/resume_analyzer/1.png",
            "/projects/resume_analyzer/2.png",
            "/projects/resume_analyzer/3.png",
            "/projects/resume_analyzer/4.png",
            "/projects/resume_analyzer/5.png",
            "/projects/resume_analyzer/6.png",
        ],
    },

    {
        id: 2,
        featured: true,

        title: "Medium Blogging Platform",

        slug: "medium-blog",

        category: "Full-Stack",

        year: "2025",

        status: "Completed",

        description:
            "A modern Medium-inspired blogging platform with authentication, rich text editing, image uploads, and responsive UI.",

        highlights: [
            "Authentication",
            "Rich Text Editor",
            "Image Uploads",
            "Responsive Design",
            "CRUD Blog Management",
            "Firebase Integration",
        ],

        technologies: [
            "Next.js",
            "React",
            "Tailwind CSS",
            "Firebase",
            "Cloudinary",
            "Redux Toolkit",
            "Editor.js",
        ],

        github: "",

        live: "",

        images: [
            "/projects/medium_blogging/1.png",
            "/projects/medium_blogging/2.png",
            "/projects/medium_blogging/3.png",
            "/projects/medium_blogging/4.png",
            "/projects/medium_blogging/5.png",
        ],
    },

    {
        id: 3,

        featured: false,

        title: "Password Generator",

        slug: "password-generator",

        category: "Frontend",

        year: "2026",

        status: "Completed",

        description:
            "A responsive password generator capable of creating secure passwords with configurable length and character options.",

        highlights: [
            "Password Generation",
            "Custom Length",
            "Uppercase & Lowercase",
            "Numbers & Symbols",
            "Copy to Clipboard",
        ],

        technologies: [
            "React",
            "Vite",
            "Tailwind CSS",
            "JavaScript",
        ],

        github: "https://github.com/hafiz-anas0/password-generator",

        live: "https://password-generator-by-anas.vercel.app/",

        images: [
            "/projects/password_generator/1.png",
        ],
    },

    {
        id: 4,

        featured: false,

        title: "Diabetes Prediction using ML",

        slug: "diabetes-prediction",

        category: "Machine Learning",

        year: "2025",

        status: "Completed",

        description:
            "A comparative machine learning study on the Pima Indians Diabetes dataset implementing five traditional classifiers alongside an Artificial Neural Network for diabetes prediction.",

        highlights: [
            "Random Forest AUC: 0.83",
            "TensorFlow ANN",
            "Five ML Algorithms",
            "ROC Curve Comparison",
            "Feature Scaling",
            "Data Visualization",
        ],

        technologies: [
            "Python",
            "TensorFlow",
            "Keras",
            "Scikit-learn",
            "Pandas",
            "NumPy",
            "Matplotlib",
        ],

        github:
            "https://github.com/hafiz-anas0/diabetes-prediction-ML",

        live: "",

        images: [
            "/projects/diabetes_prediction/1.png",
            "/projects/diabetes_prediction/2.png",
            "/projects/diabetes_prediction/3.png",
            "/projects/diabetes_prediction/4.png",
        ],
    },

    {
        id: 5,

        featured: false,

        title: "One Page Agency Website",

        slug: "one-page-website",

        category: "Frontend",

        year: "2026",

        status: "Completed",

        description:
            "A fully responsive landing page developed during my MERN internship by recreating a professional design using reusable React components and Tailwind CSS.",

        highlights: [
            "Pixel-perfect UI",
            "Responsive Layout",
            "Reusable Components",
            "Tailwind CSS",
            "Modern Design",
        ],

        technologies: [
            "React",
            "Vite",
            "Tailwind CSS",
            "JavaScript",
        ],

        github: "https://github.com/hafiz-anas0/one-pager",

        live: "https://one-pager-by-anas.vercel.app/",

        images: [
            "/projects/onePager/1.png",
            "/projects/onePager/2.png",
            "/projects/onePager/3.png",
            "/projects/onePager/4.png",
            "/projects/onePager/5.png",
            "/projects/onePager/6.png",
            "/projects/onePager/7.png",
            "/projects/onePager/8.png",

        ],
    },
];