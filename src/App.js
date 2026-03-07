
import React from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import './App.css';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <section id="home" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1>Home Section</h1>
      </section>
      <section id="about" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#1a1a2e' }}>
        <h1>About Section</h1>
      </section>
      <section id="projects" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#16213e' }}>
        <h1>Projects Section</h1>
      </section>
      <section id="contact" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0f0f1a' }}>
        <h1>Contact Section</h1>
      </section>
    </div>
  );
}

export default App;