export interface Skill {
  name: string;
  category: string;
  icon: string;
}

export const skills: Skill[] = [
  // Languages
  { name: "Python", category: "Languages", icon: "SiPython" },
  { name: "JavaScript", category: "Languages", icon: "SiJavascript" },
  { name: "TypeScript", category: "Languages", icon: "SiTypescript" },
  { name: "C/C++", category: "Languages", icon: "SiCplusplus" },
  // Backend
  { name: "Node.js", category: "Backend", icon: "SiNodedotjs" },
  { name: "Spring Boot", category: "Backend", icon: "SiSpringboot" },
  { name: "PHP", category: "Backend", icon: "SiPhp" },
  { name: "REST APIs", category: "Backend", icon: "SiSwagger" },
  { name: "FastAPI", category: "Backend", icon: "SiFastapi" },
  { name: "Django", category: "Backend", icon: "SiDjango" },
  // Frontend
  { name: "React", category: "Frontend", icon: "SiReact" },
  { name: "Next.js", category: "Frontend", icon: "SiNextdotjs" },
  { name: "TailwindCSS", category: "Frontend", icon: "SiTailwindcss" },
  { name: "HTML", category: "Frontend", icon: "SiHtml5" },
  { name: "CSS", category: "Frontend", icon: "SiCss" },
  // Databases
  { name: "PostgreSQL", category: "Databases", icon: "SiPostgresql" },
  { name: "MySQL", category: "Databases", icon: "SiMysql" },
  { name: "MongoDB", category: "Databases", icon: "SiMongodb" },
  { name: "Redis", category: "Databases", icon: "SiRedis" },
  // AI / ML
  { name: "TensorFlow", category: "AI / ML", icon: "SiTensorflow" },
  { name: "PyTorch", category: "AI / ML", icon: "SiPytorch" },
  { name: "Scikit-learn", category: "AI / ML", icon: "SiScikitlearn" },
  { name: "Pandas", category: "AI / ML", icon: "SiPandas" },
  { name: "NumPy", category: "AI / ML", icon: "SiNumpy" },
  { name: "Matplotlib", category: "AI / ML", icon: "SiPlotly" },
  { name: "NLP", category: "AI / ML", icon: "SiHuggingface" },
  { name: "LangGraph", category: "AI / ML", icon: "SiLanggraph" },
  { name: "Ollama", category: "AI / ML", icon: "SiOllama" },
  { name: "LLM", category: "AI / ML", icon: "SiOpenai" },
  { name: "RAG", category: "AI / ML", icon: "SiLangchain" },
  // Cloud / DevOps
  { name: "Docker", category: "Cloud / DevOps", icon: "SiDocker" },
  { name: "Kubernetes", category: "Cloud / DevOps", icon: "SiKubernetes" },
  { name: "Jenkins", category: "Cloud / DevOps", icon: "SiJenkins" },
  { name: "Rancher", category: "Cloud / DevOps", icon: "SiRancher" },
  { name: "CI/CD Pipelines", category: "Cloud / DevOps", icon: "SiGithubactions" },
  { name: "AWS", category: "Cloud / DevOps", icon: "FaAws" },
  { name: "Azure", category: "Cloud / DevOps", icon: "FaMicrosoft" },
  { name: "Linux", category: "Cloud / DevOps", icon: "SiLinux" },
  { name: "Git", category: "Cloud / DevOps", icon: "SiGit" },
  { name: "GitHub", category: "Cloud / DevOps", icon: "SiGithub" },
  { name: "Vercel", category: "Cloud / DevOps", icon: "SiVercel" },
  // IoT & Security
  { name: "Arduino", category: "IoT & Security", icon: "SiArduino" },
  { name: "OOK / FSK / PWM", category: "IoT & Security", icon: "SiSignal" },
  { name: "ESP32", category: "IoT & Security", icon: "SiEspressif" },
  { name: "Embedded C", category: "IoT & Security", icon: "SiC" },
  { name: "WSN", category: "IoT & Security", icon: "SiSignal" },
  { name: "OAuth2", category: "IoT & Security", icon: "SiAuth0" },
  { name: "Cryptography", category: "IoT & Security", icon: "SiCryptomator" },
  // Tools
  { name: "VS Code", category: "Tools", icon: "SiVscodium" },
  { name: "Postman", category: "Tools", icon: "SiPostman" },
  { name: "Jupyter", category: "Tools", icon: "SiJupyter" },
  { name: "Figma", category: "Tools", icon: "SiFigma" },
];
