import { BookOpen, GraduationCap, School } from "lucide-react";

export interface Education {
    icon: typeof GraduationCap;
    degree: string;
    institute: string;
    duration: string;
    description: string;
    coursework?: string[];
}

export const education: Education[] = [
    {
        icon: GraduationCap,

        degree: "Bachelor of Science in Computer Science",

        institute: "University of Management and Technology (UMT)",

        duration: "2023 - 2027",

        description:
            "Currently pursuing a Bachelor's degree in Computer Science with a focus on Artificial Intelligence, Machine Learning, Data Science, and modern Full-Stack Web Development.",

        coursework: [
            "Artificial Intelligence",
            "Machine Learning",
            "Data Science",
            "Data Mining",
            "Advanced Web Technologies",
            "Database Systems",
            "Data Structures and Algorithms",
            "Software Engineering",
        ],
    },

    {
        icon: School,

        degree: "FSc (Pre-Engineering)",

        institute: "Government Islamia College, Civil Lines, Lahore",

        duration: "2021 - 2023",

        description:
            "Built a strong foundation in Mathematics, Physics, and analytical problem-solving.",
    },

    {
        icon: BookOpen,

        degree: "Matriculation (Science)",

        institute: "Government High School Shahdara",

        duration: "2019 - 2021",

        description:
            "Completed secondary education with a science background.",
    },
];