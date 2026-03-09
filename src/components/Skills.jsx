import React from 'react';

const Skills = () => {
  return (
    <section id="skills" style={{
      padding: '80px 20px',
      background: '#1a1a2e',
      minHeight: '50vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h2 style={{
          color: 'white',
          fontSize: '2.5rem',
          marginBottom: '40px'
        }}>
          My Skills
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px'
        }}>
          <div style={{background: '#915eff', padding: '20px', borderRadius: '10px', color: 'white'}}>React</div>
          <div style={{background: '#915eff', padding: '20px', borderRadius: '10px', color: 'white'}}>JavaScript</div>
          <div style={{background: '#915eff', padding: '20px', borderRadius: '10px', color: 'white'}}>HTML/CSS</div>
          <div style={{background: '#915eff', padding: '20px', borderRadius: '10px', color: 'white'}}>Node.js</div>
          <div style={{background: '#915eff', padding: '20px', borderRadius: '10px', color: 'white'}}>Python</div>
          <div style={{background: '#915eff', padding: '20px', borderRadius: '10px', color: 'white'}}>Git</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
