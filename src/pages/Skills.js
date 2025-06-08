import React from 'react';

function Skills() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'radial-gradient(circle at top left, #eef2f3, #cfd9df)',
        padding: '4rem 2rem',
        fontFamily: "'Lora', serif",
        color: '#102a43',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '2rem', color: '#f76c6c', marginBottom: '2rem' }}>What I Know</h1>

      <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8' }}>
        I'm a passionate QA and software engineer with a sharp eye for bugs and a love for clean, reliable code.
        Over the years, I’ve gained hands-on experience across both development and testing stacks:
      </p>

      <div style={{ marginTop: '3rem', textAlign: 'left', maxWidth: '800px', margin: '3rem auto 0' }}>
        <h3 style={{ color: '#f76c6c' }}>🔍 Testing & QA</h3>
        <ul>
          <li>Automated web UI testing with <strong>Playwright</strong> and <strong>Selenium</strong></li>
          <li>Manual testing with deep attention to detail</li>
          <li>Acceptance testing and bug detection</li>
          <li>API testing</li>
          <li>Worked as a <strong>Jira plugin developer</strong></li>
        </ul>

        <h3 style={{ color: '#f76c6c', marginTop: '2rem' }}>💻 Programming</h3>
        <ul>
          <li>Backend: <strong>Java</strong>, <strong>Python</strong></li>
          <li>Frontend: <strong>Vanilla JS</strong>, <strong>jQuery</strong>, <strong>React</strong></li>
        </ul>

        <h3 style={{ color: '#f76c6c', marginTop: '2rem' }}>🔧 Tools & Platforms</h3>
        <ul>
          <li><strong>Git</strong>, GitHub</li>
          <li><strong>Jenkins</strong> CI/CD pipelines, Groovy</li>
          <li><strong>Unix</strong> command line experience</li>
          <li><strong>MySQL</strong> database management</li>
        </ul>

        <h3 style={{ color: '#f76c6c', marginTop: '2rem' }}>📚 From University Days</h3>
        <ul>
          <li>Electronics fundamentals</li>
          <li><strong>MATLAB</strong> simulations</li>
          <li><strong>NI LabVIEW</strong> and <strong>Flowcode</strong> design</li>
          <li><strong>Arduino</strong> hardware projects</li>
        </ul>

        <h3 style={{ color: '#f76c6c', marginTop: '2rem' }}>💼 Work Ethic</h3>
        <p>I'm a hard worker — some say even a workaholic 😅. I love solving problems and pushing myself to grow every day.</p>
      </div>
    </div>
  );
}

export default Skills;