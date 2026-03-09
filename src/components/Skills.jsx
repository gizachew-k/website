import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Skill categories with icons and colors
  const skillCategories = [
  {
    category: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React", level: 50, color: "#61DAFB" },
      { name: "JavaScript", level: 75, color: "#F7DF1E" },
      { name: "HTML5", level: 90, color: "#E34F26" },
      { name: "CSS3", level: 90, color: "#1572B6" }
    ]
  },
  {
    category: "Backend (Learning)",
    icon: "⚙️",
    color: "#339933",
    skills: [
      { name: "Node.js", level: 40, color: "#339933" },      // Learning
      { name: "Express", level: 5, color: "#000000" },       // Learning
      { name: "MongoDB", level: 40, color: "#47A248" },       // Learning
    ]
  },
    {
      category: "Tools & Others",
      icon: "🔧",
      skills: [
        { name: "Git", level: 50, color: "#F05032" },
        
        { name: "VS Code", level:70, color: "#007ACC" },
        
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
        >
          <h2 className="section-title">
              My Skills
              {/* <span className="highlight">Skills</span>  */}
          </h2>
          <p className="section-subtitle">
            I've worked with a variety of technologies and tools. 
          </p>
        </motion.div>

        <div className="skills-wrapper">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.category}</h3>
              </div>

              <div className="skills-grid">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.2) + (index * 0.1) }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="skill-info">
                      <div className="skill-name">
                        <span className="skill-dot" style={{ backgroundColor: skill.color }}></span>
                        <h4>{skill.name}</h4>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar-container">
                      <motion.div
                        className="skill-bar"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.2) + (index * 0.1) }}
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default Skills;