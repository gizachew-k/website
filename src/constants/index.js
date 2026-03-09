// src/constants/index.js

// ===== YOUR PERSONAL INFORMATION - UPDATE THIS WITH YOUR DETAILS =====
export const personalInfo = {
  name: "Gizachew kassa", // Your name
  title: "web Developer",
  email: "gizachewkassa33@example.com",
  phone: "+251 972182578",
  location: "ethiopia",
  bio: "I'm a passionate developer who loves building beautiful and functional web applications. I specialize in React and modern JavaScript.",
  avatar: "https://via.placeholder.com/400x500",
  resume: "#",
  
  socialLinks: {
    github: "https://github.com/gizachew-k",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    instagram: "https://instagram.com/yourusername"
  }
};

// ===== YOUR SKILLS =====
export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React"  },
      { name: "JavaScript" },
      { name: "HTML/CSS" },
      { name: "TypeScript"}
    ]
  },
  {
    category: "Backend",
    items: [
     
      { name: "SQL", level: 65, icon: "🗄️" }
    ]
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: 85, icon: "📚" },
      { name: "VS Code", level: 90, icon: "💻" },
      { name: "Figma", level: 70, icon: "🎯" },
      { name: "Docker", level: 60, icon: "🐳" }
    ]
  }
];

// ===== EXPERIENCE =====
export const experiences = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description: "Lead developer for multiple web applications, managing a team of 3 developers. Implemented responsive designs and improved performance by 40%.",
    technologies: ["React", "TypeScript", "Redux", "Tailwind"]
  },
  {
    id: 2,
    title: "Web Developer",
    company: "Creative Agency",
    location: "New York, NY",
    period: "2020 - 2022",
    description: "Developed and maintained client websites. Collaborated with designers to create pixel-perfect implementations.",
    technologies: ["JavaScript", "React", "SASS", "WordPress"]
  },
  {
    id: 3,
    title: "Junior Developer",
    company: "StartUp Co.",
    location: "Remote",
    period: "2019 - 2020",
    description: "Built responsive websites and learned modern web development practices.",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery"]
  }
];

// ===== YOUR PROJECTS =====
// ===== YOUR PROJECTS - Replace with your actual projects =====
export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with user authentication, product management, shopping cart, and secure payment integration using Stripe.",
    image: "https://via.placeholder.com/600x400/1a1a2e/915eff?text=E-Commerce",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    github: "https://github.com/gizachew-k/ecommerce",
    live: "https://ecommerce-demo.com",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with drag-and-drop functionality, real-time updates, team workspaces, and progress tracking.",
    image: "https://via.placeholder.com/600x400/1a1a2e/915eff?text=Task+App",
    technologies: ["React", "Firebase", "Framer Motion", "Tailwind", "Redux"],
    github: "https://github.com/gizachew-k/taskmanager",
    live: "https://taskmanager-demo.com",
    featured: true
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A beautiful weather application with real-time data, 7-day forecasts, interactive maps, and location-based weather alerts.",
    image: "https://via.placeholder.com/600x400/1a1a2e/915eff?text=Weather",
    technologies: ["React", "OpenWeather API", "Chart.js", "CSS3", "Geolocation"],
    github: "https://github.com/gizachew-k/weather",
    live: "https://weather-demo.com",
    featured: false
  },
  {
    id: 4,
    title: "AI Image Generator",
    description: "An AI-powered image generation tool using OpenAI's DALL-E API. Create unique images from text descriptions with customization options.",
    image: "https://via.placeholder.com/600x400/1a1a2e/915eff?text=AI+Generator",
    technologies: ["React", "OpenAI API", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/gizachew-k/ai-generator",
    live: "https://ai-generator-demo.com",
    featured: true
  },
  {
    id: 5,
    title: "Social Media Dashboard",
    description: "A comprehensive dashboard for managing multiple social media accounts with analytics, scheduling, and performance tracking.",
    image: "https://via.placeholder.com/600x400/1a1a2e/915eff?text=Social+Dashboard",
    technologies: ["React", "Redux", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com/gizachew-k/social-dashboard",
    live: "https://social-dashboard-demo.com",
    featured: false
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "This very portfolio website! A modern, responsive portfolio built with React and Framer Motion to showcase my work and skills.",
    image: "https://via.placeholder.com/600x400/1a1a2e/915eff?text=Portfolio",
    technologies: ["React", "Framer Motion", "CSS3", "EmailJS", "React Intersection Observer"],
    github: "https://github.com/gizachew-k/portfolio",
    live: "https://gizachew-k.github.io/website",
    featured: true
  }
];

// ===== EMAILJS CONFIGURATION - UPDATE WITH YOUR CREDENTIALS =====
export const emailConfig = {
  serviceId: "service_4slt5wf", // Replace with your EmailJS service ID
  templateId: "template_d750h8l", // Replace with your EmailJS template ID
  userId: "q45u_6pMevPd2U_sK" // Replace with your EmailJS public key
};