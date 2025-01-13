import { ProjectItem } from "../types";

export const projectsData: ProjectItem[] = [
  {
    title: "Transform London Dashboard",
    description:
      "A data visualization dashboard for monitoring user interactions.",
    image: "transform.png",
    tech: ["HTML/CSS", "Node.js", "Express"],
    github: "",
    live: "",
    details: {
      problem:
        "Need for a centralized platform to monitor user interactions",
      solution:
        "Developed a custom dashboard with real-time data visualization",
      features: [
        "User activity tracking",
        "Performance analytics",
        "Interactive charts",
        "Advanced search filters",
        "Customizable reports",
      ],
      impact: "Increased user engagement.",
    },
  },
  {
    title: "Job Dashboard",
    description: "A job board platform for job seekers and employers",
    image: "job-dash-dark.png",
    tech: ["Reactjs", "Django", "CloudSQL"],
    github: "",
    live: "",
    details: {
      problem: "Need for a centralized platform to manage job searching",
      solution:
        "Developed a custom dashboard with real-time job visualization and job search",
      features: [
        "Job Searches",
        "Job Filtering based on Regions/Industries",
        "Advanced search filters based on Timeline/Salary",
        "Graphical representation of job applications",
      ],
      impact: "Ease of job searching for job seekers and employers",
    },
  },
  // {
  //   title: "Zcrum",
  //   description: "A Jira-inspired project management solution",
  //   image: "zcrum.png",
  //   tech: ["React", "Redux", "Node.js", "PostgreSQL"],
  //   github: "https://youtu.be/R5dBYINNouY?si=9x7lSDuqwJ0ojtIg",
  //   live: "https://youtu.be/R5dBYINNouY?si=9x7lSDuqwJ0ojtIg",
  //   details: {
  //     problem: "Need for a simplified project management tool for small teams",
  //     solution:
  //       "Developed a streamlined alternative to complex enterprise tools",
  //     features: [
  //       "Kanban and Scrum boards",
  //       "Sprint planning",
  //       "Time tracking",
  //       "Performance analytics",
  //     ],
  //     impact: "Helping teams increase productivity by 40%",
  //   },
  // },
  // {
  //   title: "Reflct",
  //   description: "A minimalist journaling application",
  //   image: "reflct.png",
  //   tech: ["Next.js", "Tailwind CSS", "Supabase"],
  //   github: "https://youtu.be/R5dBYINNouY?si=9x7lSDuqwJ0ojtIg",
  //   live: "https://youtu.be/R5dBYINNouY?si=9x7lSDuqwJ0ojtIg",
  //   details: {
  //     problem: "Digital journaling apps are often cluttered and complex",
  //     solution:
  //       "Created a clean, focused writing experience with powerful features",
  //     features: [
  //       "Markdown support",
  //       "Daily prompts",
  //       "Mood tracking",
  //       "Privacy-focused design",
  //     ],
  //     impact: "Helping users maintain consistent journaling habits",
  //   },
  // },
];
