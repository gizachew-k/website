import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Skill categories with clean string arrays
  const skillCategories = [
    {
      category: "Frontend",
      icon: "🎨",
      skills: ["React", "JavaScript", "HTML5", "CSS3"]
    },
    {
      category: "Backend (Learning)",
      icon: "⚙️",
      skills: ["Node.js", "Express", "MongoDB"]
    },
    {
      category: "Tools & Others",
      icon: "🔧",
      skills: ["Git", "VS Code", "postman"]
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
                {category.skills.map((skillName, index) => (
                  <motion.div
                    key={skillName}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.2) + (index * 0.1) }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="skill-info">
                      <div className="skill-name">
                        <h4>{skillName}</h4>
                      </div>
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