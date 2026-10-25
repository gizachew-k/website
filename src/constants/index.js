// src/constants/index.js

// ===== YOUR PERSONAL INFORMATION - UPDATE THIS WITH YOUR DETAILS =====
export const personalInfo = {
  name: "Gizachew kassa", // Your name
  title: "Aspiring Full Stack Developer",
  email: "gizachewkassa33@gmail.com",
  phone: "+251 972182578",
  location: "ethiopia",
  bio: "I'm a passionate developer who loves building beautiful and functional web applications. I specialize in React and modern JavaScript.",

  resume: "#",
  
  socialLinks: {
    github: "https://github.com/gizachew-k",
    linkedin: "https://linkedin.com/in/Gizachew Kassa",
    instagram: "https://instagram.com/gize.ja",
    telegram: "https://t.me/Gize_kassa"
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
     
      { name: "SQL" }
    ]
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: 85, icon: "📚" },
      { name: "VS Code", level: 90, icon: "💻" }
    ]
  }
];


// ===== YOUR PROJECTS =====
// ===== YOUR PROJECTS - Replace with your actual projects =====
export const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    description: "My professional portfolio website built with React. Features smooth animations, responsive design, and a working contact form.",
     image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    technologies: ["React", "Framer Motion", "CSS3", "EmailJS"],
    github: "https://github.com/gizachew-k/website",
    live: "#",
    featured: true
  },
  {
    id: 2,
    title: "PeerLearn - P2P Learning Platform",
    description: "A full-stack peer-to-peer web application connecting users for resource sharing and collaborative learning. Built with dynamic React UI, RESTful APIs, and Node.js backend integration.",
   image: "/p2p-preview.png",
   technologies: ["React", "Node.js", "Express", "MongoDB", "RESTful API"],
    github: "https://github.com/gize22/peertopeer",
    live: "p2plearn.vercel.app",
    featured: true
  },
  {
    id: 3,
    title: "Weather Dashboard (Coming Soon)",
    description: "Real-time weather app with 5-day forecast and location search. Will use OpenWeatherMap API.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop",
    technologies: ["React", "API", "Chart.js"],
    github: "https://github.com/gizachew-k/weather-dashboard",
    live: "#",
    featured: false
  }
];

// ===== EMAILJS CONFIGURATION - UPDATE WITH YOUR CREDENTIALS =====
export const emailConfig = {
  serviceId: "service_4slt5wf", // Replace with your EmailJS service ID
  templateId: "template_d750h8l", // Replace with your EmailJS template ID
  userId: "q45u_6pMevPd2U_sK" // Replace with your EmailJS public key
};