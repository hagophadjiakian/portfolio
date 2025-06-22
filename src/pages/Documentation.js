import React from 'react';
import ajzVideo from '../assets/ajz.mp4';

function Documentation() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'radial-gradient(circle at top left, #f0f4f8, #d9e2ec)',
        padding: '4rem 2rem',
        fontFamily: "'Lora', serif",
        color: '#102a43',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '2rem', color: '#f76c6c', marginBottom: '2rem' }}>
        Documentation About Me, My life and My Injury
      </h1>

      {/* Local Video */}
      <div style={{ marginBottom: '3rem' }}>
        <h3 style={{ color: '#334e68', marginBottom: '0.5rem' }}>📹 Local Documentation Video</h3>
        <video
          controls
          preload="metadata"
          playsInline
          width="640"
          height="360"
          style={{ borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}
          poster="/path/to/poster-image.jpg" // Replace with an actual poster image if you have one
        >
          <source src={ajzVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* YouTube Link */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h3 style={{ color: '#334e68' }}>▶️ Watch on YouTube</h3>
        <a
          href="https://www.youtube.com/watch?v=O7V3FCIaXww"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#f76c6c', fontWeight: 'bold', textDecoration: 'none' }}
        >
          https://www.youtube.com/watch?v=O7V3FCIaXww
        </a>
      </div>

      {/* Facebook Link */}
      <div>
        <h3 style={{ color: '#334e68' }}>📘 Watch on Facebook</h3>
        <a
          href="https://www.facebook.com/watch/?v=2195235323841810"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#f76c6c', fontWeight: 'bold', textDecoration: 'none' }}
        >
          https://www.facebook.com/watch/?v=2195235323841810
        </a>
      </div>
    </div>
  );
}

export default Documentation;
