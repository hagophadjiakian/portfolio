import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projects';

function Projects() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'radial-gradient(circle at top left, #d0e6f7, #a8c0e8)',
        padding: '4rem 2rem',
        fontFamily: "'Lora', serif",
        color: '#102a43',
        textAlign: 'center',
      }}
    >
      <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#f76c6c' }}>
        My Projects
      </h2>

      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
        }}
      >
        {projects.map((proj) => (
          <li
            key={proj.id}
            style={{
              width: '90%',
              maxWidth: '600px',
              backgroundColor: '#ffffffcc',
              padding: '1.5rem',
              borderRadius: '16px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.03)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
            }}
          >
            <Link
              to={`/projects/${proj.id}`}
              style={{
                textDecoration: 'none',
                color: '#0d1b2a',
                fontSize: '1.25rem',
                fontWeight: 'bold',
              }}
            >
              {proj.title}
            </Link>
            <p style={{ marginTop: '0.5rem', fontSize: '0.95rem', color: '#334e68' }}>
              {proj.description || 'Click to view more details.'}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
