type AppData = {
  hero: {
    title: string;
    description: string;
  };
  name: string;
  email: string;
  profileImage: string;
  github: string;
  githubLabel: string;
  linkedin: string;
  linkedinLabel: string;
  resume: string;
  projects: {
    title: string;
    description: string;
    tech: string[];
    image: string;
    code: string | null;
    demo: string;
  }[];
  techStack: {
    name: string;
    icon: string;
  }[];
  experiences: {
    role: string;
    company: string;
    location: string;
    period: string;
    description: string;
  }[];
};

export const appData: AppData = {
  hero: {
    title: "Full Stack Developer",
    description: `Hello, I build useful and accessible digital experiences for the web. 
    I have been coding for over 8 years and started loving Full Stack Development 3 years ago. 
    My style of coding is clean and fast rather than flashy. I understand that slow loading will lose users.`,
  },
  name: "Biligjargal Ganbold",
  email: "birigu@proton.me",
  profileImage: "https://avatars.githubusercontent.com/u/98158217?v=4",
  github: "https://github.com/b1rigu",
  githubLabel: "github.com/b1rigu",
  linkedin: "https://www.linkedin.com/in/biligjargal-ganbold-a9a05917a/",
  linkedinLabel: "linkedin.com/in/biligjargal-ganbold-a9a05917a",
  resume: "/files/resume.pdf",
  techStack: [
    // Frontend
    {
      name: "TypeScript",
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    },
    {
      name: "React",
      icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
      name: "Next.js",
      icon: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    },
    {
      name: "Flutter",
      icon: "https://upload.wikimedia.org/wikipedia/commons/4/44/Google-flutter-logo.svg",
    },
    // Backend
    {
      name: "Node.js",
      icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    },
    {
      name: "Express",
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
    },
    {
      name: "PostgreSQL",
      icon: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
    },
    {
      name: "Django",
      icon: "https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg",
    },
    {
      name: "Python",
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Python_logo_%28icon_only%29.svg",
    },
    {
      name: "Redis",
      icon: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Redis_logo.svg",
    },
    {
      name: "RabbitMQ",
      icon: "https://upload.wikimedia.org/wikipedia/commons/7/71/RabbitMQ_logo.svg",
    },

    // Devops
    {
      name: "Docker",
      icon: "https://upload.wikimedia.org/wikipedia/commons/7/70/Docker_logo.png",
    },
    {
      name: "AWS",
      icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    },
    {
      name: "S3 Storage",
      icon: "https://upload.wikimedia.org/wikipedia/commons/3/32/AWS_Simple_Icons_Storage_Amazon_S3.svg",
    },

    // Others
    {
      name: "Git",
      icon: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
    },
    {
      name: "C",
      icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
    },
    {
      name: "Java",
      icon: "https://education.oracle.com/file/general/p-80-java.png",
    },
    {
      name: "Jira",
      icon: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Jira_Logo.svg",
    },
  ],
  projects: [
    {
      title: "MTranslate",
      description: `A full-stack verified translation service with payment integration, 
        user authentication, file uploads, and admin dashboard. It's an ongoing SaaS 
        so am unable to provide the code.`,
      tech: [
        "Next.js",
        "Redis",
        "QPay (local payment provider)",
        "Supabase",
        "Vercel",
        "Cloudflare",
        "Digital Ocean for proxy",
      ],
      image: "/files/mtranslate.png",
      code: null,
      demo: "https://mtranslate.app/",
    },
    {
      title: "End to End Encrypted File Storage",
      description: `EEEVault is an end-to-end encrypted file storage solution 
      that allows users to securely store and share files with Zero Knowledge 
      architecture and Military-grade encryption.`,
      tech: [
        "Next.js",
        "PostgreSQL (with Drizzle ORM)",
        "VPS Management",
        "Cloudflare R2",
      ],
      image: "/files/eeevault.png",
      code: "https://github.com/b1rigu/eee-file-sharing",
      demo: "https://eee.birigu.com/",
    },
    {
      title: "Online accounting software (Baaz)",
      description: `This project is the main product of the company I have worked in called Databank. 
      It is aimed for people who has small - medium sized business and searching for 
      an easy but feature rich solution for their accounting. I have worked mostly on the 
      Front-end (Angular) and did some Back-end (Django) to maintain API's.`,
      tech: ["Django", "HTML", "CSS", "Angular", "PostgreSQL", "TypeScript"],
      image: "/files/baaz.png",
      code: null,
      demo: "https://baaz.mn/",
    },
  ],
  experiences: [
    {
      role: "Frontend Developer",
      company: "Databank LLC",
      location: "Mongolia, Ulaanbaatar",
      period: "2023 - 2024",
      description: `Worked in the online accounting app team as a frontend developer while 
                  help maintaining some backend APIs. Angular, Django and SQL were mainly used. 
                  Rewrote the frontend codebase to ensure clean code, less bugs and presented it to other 
                  teams.`,
    },
  ],
};
