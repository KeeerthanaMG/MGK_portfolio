import { SiDjango, SiReact, SiJavascript, SiHtml5, SiCss3, SiTailwindcss,
         SiFlutter, SiBootstrap, SiNodedotjs, SiExpress, SiPython, SiC,
         SiFlask, SiPostgresql, SiFirebase, SiMysql, SiMongodb, SiTensorflow,
         SiOpenai, SiPandas, SiOpencv, SiDocker, SiGit, SiGithub, SiVercel,
         SiNetlify, SiFigma, SiCanva, SiPostman, SiSlack, SiJira } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import {FaJava} from "react-icons/fa";

export const skillsData = {
  frontend: [
    { name: "React", level: 90, description: "Building dynamic user interfaces", icon: SiReact },
    { name: "JavaScript", level: 85, description: "ES6+ features and modern JS", icon: SiJavascript },
//     //{ name: "TypeScript", level: 80, description: "Type-safe JavaScript development", icon: "🔷" },
    { name: "HTML5", level: 95, description: "Semantic markup and accessibility", icon: SiHtml5  },
    { name: "CSS3", level: 88, description: "Modern styling and animations", icon: SiCss3 },
    { name: "Tailwind CSS", level: 92, description: "Utility-first CSS framework", icon: SiTailwindcss },
    { name: "Flutter", level: 85, description: "Cross-platform mobile development", icon: SiFlutter },
    { name: "Bootstrap", level: 80, description: "Responsive design framework", icon: SiBootstrap }
  ],
  backend: [
    { name: "Node.js", level: 85, description: "Server-side JavaScript runtime", icon: SiNodedotjs },
    { name: "Express.js", level: 88, description: "Web application framework", icon: SiExpress },
    { name: "Django", level: 75, description: "Python web framework", icon: SiDjango },
    { name: "Python", level: 82, description: "Backend development and scripting", icon: SiPython },
    { name: "Java", level: 78, description: "Object-oriented programming", icon: FaJava },
    { name: "C", level: 80, description: "System programming", icon: SiC },
    { name: "Flask", level: 70, description: "Lightweight Python framework", icon: SiFlask }
  ],
  database: [
    { name: "PostgreSQL", level: 85, description: "Relational database management", icon: SiPostgresql },
    { name: "MySQL", level: 80, description: "Popular relational database", icon: SiMysql },
    { name: "MongoDB", level: 75, description: "NoSQL document database", icon: SiMongodb },
    { name: "Firebase", level: 78, description: "Real-time database platform", icon: SiFirebase }
  ],
  aiml: [
    // { name: "Machine Learning", level: 75, description: "Scikit-learn and model building", icon: "🤖" },
    { name: "TensorFlow", level: 65, description: "Deep learning framework", icon: SiTensorflow },
    { name: "OpenAI", level: 80, description: "AI integration and automation", icon: SiOpenai },
    { name: "Pandas", level: 82, description: "Data analysis and manipulation", icon: SiPandas },
    { name: "OpenCV", level: 70, description: "Computer vision library", icon: SiOpencv }
  ],
  cloud: [
    // { name: "AWS", level: 70, description: "Cloud computing platform", icon: "☁️" },
    { name: "Docker", level: 75, description: "Containerization technology", icon: SiDocker },
    { name: "Git", level: 90, description: "Version control system", icon: SiGit },
    { name: "GitHub", level: 88, description: "Code collaboration platform", icon: SiGithub },
    { name: "Vercel", level: 85, description: "Frontend deployment platform", icon: SiVercel },
    { name: "Netlify", level: 80, description: "Static site hosting", icon: SiNetlify }
  ],
  tools: [
    { name: "VS Code", level: 95, description: "Primary code editor", icon: VscVscode },
    { name: "Postman", level: 85, description: "API development and testing", icon: SiPostman },
    { name: "Figma", level: 75, description: "UI/UX design tool", icon: SiFigma },
    { name: "Canva", level: 90, description: "Design tool", icon: SiCanva },
    { name: "Slack", level: 85, description: "Team communication", icon: SiSlack },
    { name: "Jira", level: 70, description: "Project tracking", icon: SiJira }
   ]
 };