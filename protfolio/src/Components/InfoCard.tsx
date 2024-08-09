import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";


const Info={
    name:"NELSON MISHRA",
    stack:["Software Engineer","Fullstack Web Developer","Competitive Programmer","Gamer"],
    bio:"Proactive front-end developer crafting compelling websites, proficient in Core Java, ReactJS, MySQL, HTML, CSS, SpringBoot,Microservice, and JavaScript. Eager to excel in competitiveenvironments, delivering impactful solutions elevating user experiences, and driving business goals!"

} 


const projectInfo=[
    {
        title: " E-commerce App",
        desc: " Developed a console-based e-commerce App using Java and MySQL.Implemented features for user authentication, product browsing, ordering, and inventory management. Utilized MySQL for efficient data storage and retrieval, ensuring seamless functionality. Demonstrated proficiency in Java programming and database management.",
        image: "E-Commerce.jpeg",
        live: false,
        technologies: ["Core Java","MySQL", "SpringBoot"],
        github:"https://github.com/NelsonMishra/Ecommerce_Site"
    },
    {
        title: " Food Ordering System",
        desc:" Developed a console-based food order system using Java and MySQL. Implemented features for online food ordering, product addition, and billing system. Integrated MySQL database for storing food items, customer orders, and generating bills. Demonstrated expertise in Java programming and database management for food service applications.",
        image:"Foodsystem.jpeg",
        live: true,
        technologies:["Core Java","MySQL"],
        github:"https://github.com/NelsonMishra/FoodOrderSystem"
    },

    {
        title:"Website Colone",
        desc:"Successfully replicated Netflix, Flipkart, and Amazon websites using Java, React.js, HTML, CSS, and JavaScript. Implemented user-friendly interfaces and functionality mirroring the original sites. Demonstrated proficiency in front-end development and applied principles of responsive design.",
        image:"Clone.jpeg",
        live: false,
        technologies:["React","HTML","CSS","node"],
        github:"https://github.com/NelsonMishra/netflix-clone"
    }

]

const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "SASS", "JavaScript", "React JS", "Angular", "Tailwind CSS", "Material UI", "Bootstrap"
        ]
    },
    {
        title: "Backend",
        skills: ["Springboot", "Node JS", "MySQL", "MongoDB", "Firebase", "PostgresSQL"]
    },
    {
        title: "Languages",
        skills: ["C++", "Core Java", "JavaScript", "TypeScript","Python"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code", "Postman", "Spring Tool Suite","Docker","Linux"]
    }
]

const socialLinks = [
    { link: "https://github.com/NelsonMishra", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/nelshan-mandan-205432197/", icon: IconBrandLinkedin },
    { link: "https://www.instagram.com/nelsonmishra?igsh=MWR0eWhtbHR4d21pYw==", icon: IconBrandInstagram }, 
    { link: "https://youtube.com", icon: IconBrandYoutube },
    { link: "https://leetcode.com/u/Nelshan/", icon: IconBrandLeetcode }
];

const ExperienceInfo = [
    {
        role: "Seo Intern",
        company: "Seoczar",
        date: "March 2024 - June 2024",
        desc: "Developed an effective SEO strategy that increased organic search engine rankings and doubled website visits Developed and implemented a search engine optimization (SEO) strategy that increased organic search engine rankings. Working on both On-page and Off-page Optimization.",
        skills: ["SEO", " On-Page", "Off-Page", "Google Search Console", "Google Ads","Web 2.O", "Content Writing"]
    },
    {
        role: "Full Stack Developer",
        company: "Skill-Lync",
        date: "Jan 2023 - Apr 2023",
        desc: " Developed and maintained full-stack web applications, contributing to the company's product portfolio. Collaborated with cross-functional teams to design and implement user-friendly and efficient software solutions. Developed full-stack web applications using Java microservices, Spring Boot, React.js, HTML5, CSS, JavaScript, and MySQL. Engaged in Agile methodologies, code reviews, and troubleshooting. Demonstrated proactive problem-solving and commitment to code quality.",
        skills: ["Java", "MySQL", "MicroServices", "SpringBoot", "ReactJs", "HTML", "CSS","JavaScript"]
    }
]

const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "dart",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];



export {Info, projectInfo, SkillInfo, socialLinks, ExperienceInfo, Slugs};