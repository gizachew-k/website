import React from 'react';
import '../styles/Skills.css';
import { skills } from '../constants';

const Skills = () => {
  return (
    <section className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skillCategory, index) => (
            <div key={index} className="skill-card">
              <h3 style={{ marginBottom: '15px', color: '#915eff' }}>{skillCategory.category}</h3>
              {skillCategory.items.map((skill, skillIndex) => (
                <div key={skillIndex} style={{ marginBottom: '15px' }}>
                  <div className="skill-header">
                    <h3>{skill.name}</h3>
                    {skill.level && <span className="skill-level">{skill.level}%</span>}
                  </div>
                  {skill.level && (
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;