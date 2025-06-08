import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import projects from '../data/projects';

// Project 1 media
import exo1 from '../assets/exo1.mp4';
import emg1 from '../assets/emg1.mp4';
import emg2 from '../assets/emg2.mp4';
import emg3 from '../assets/emg3.mp4';
import exo2 from '../assets/exo2.jpg';
import book from '../assets/book.jpg';

// Project 3 media
import bike from '../assets/bike.mp4';
import ankle from '../assets/ankle.mp4';
import water from '../assets/water.mp4';

// Music files
import music1 from '../assets/project1.mp3';
import music2 from '../assets/project2.mp3';
import music3 from '../assets/project3.mp3';

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id.toString() === id);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomedImage, setZoomedImage] = useState(null);
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [animate, setAnimate] = useState(false);

  // Choose music per project
  let musicSrc = null;
  if (project?.id === 1) musicSrc = music1;
  if (project?.id === 2) musicSrc = music2;
  if (project?.id === 3) musicSrc = music3;

 useEffect(() => {
  const audio = audioRef.current;

  if (audio && musicSrc) {
    audio.volume = 0.3;
    audio.muted = isMuted;
    audio.play().catch(() => {});
  }

  return () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  };
}, [musicSrc, isMuted])

  if (!project) {
    return <div style={{ padding: "2rem", textAlign: "center" }}>Project not found</div>;
  }

  const handleVideoPlay = () => {
    if (audioRef.current) audioRef.current.pause();
  };

  const handleVideoPause = () => {
    if (audioRef.current && !isMuted) {
      audioRef.current.play().catch(() => {});
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 400);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'radial-gradient(circle at top left, #d0e6f7, #a8c0e8)',
        padding: '4rem 2rem',
        fontFamily: "'Lora', serif",
        color: '#102a43',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      {/* 🎵 Music and Animation Keyframes */}
      <style>
        {`
          @keyframes bounce {
            0% { transform: scale(1); }
            30% { transform: scale(1.3); }
            60% { transform: scale(0.9); }
            100% { transform: scale(1); }
          }
        `}
      </style>

      {/* 🔊 Mute/Unmute Button */}
      <audio ref={audioRef} src={musicSrc} loop />
      <button
        onClick={toggleMute}
        style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          background: 'transparent',
          border: 'none',
          fontSize: '1.8rem',
          cursor: 'pointer',
          color: '#f76c6c',
          animation: animate ? 'bounce 0.4s ease' : 'none',
        }}
        title={isMuted ? 'Unmute Music' : 'Mute Music'}
      >
        {isMuted ? '🔈' : '🔊'}
      </button>

      <h2 style={{ color: '#f76c6c', marginBottom: '1rem' }}>{project.title}</h2>

      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          onClick={() => setIsZoomed(!isZoomed)}
          style={{
            width: isZoomed ? '90vw' : '100%',
            maxWidth: isZoomed ? '90vw' : '480px',
            height: 'auto',
            borderRadius: '16px',
            margin: '1.5rem 0',
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            cursor: 'zoom-in',
            transition: 'transform 0.3s ease, max-width 0.3s ease',
            transform: isZoomed ? 'scale(1.2)' : 'scale(1)',
            zIndex: 999,
          }}
        />
      )}

      <p style={{ fontSize: '1.1rem', maxWidth: '720px', margin: '0 auto', whiteSpace: 'pre-line' }}>
        {project.details}
      </p>

      {project.video && (
        <div style={{ marginTop: '3rem' }}>
          <video
            src={project.video}
            width="640"
            height="360"
            controls
            onPlay={handleVideoPlay}
            onPause={handleVideoPause}
            style={{
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            }}
          />
        </div>
      )}

      {project.id === 1 && (
        <>
          <div
            style={{
              marginTop: '3rem',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '2rem',
            }}
          >
            {[exo1, emg1, emg2, emg3].map((video, index) => (
              <video
                key={index}
                src={video}
                width="300"
                height="170"
                controls
                onPlay={handleVideoPlay}
                onPause={handleVideoPause}
                style={{
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                }}
              />
            ))}
          </div>

          <div
            style={{
              marginTop: '3rem',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '2rem',
            }}
          >
            {[{ src: exo2, alt: "exo2" }, { src: book, alt: "book" }].map((pic, idx) => (
              <img
                key={idx}
                src={pic.src}
                alt={pic.alt}
                onClick={() => setZoomedImage(zoomedImage === pic.src ? null : pic.src)}
                style={{
                  width: zoomedImage === pic.src ? '60vw' : '300px',
                  height: 'auto',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                  transition: 'transform 0.3s ease, width 0.3s ease',
                  cursor: 'zoom-in',
                  transform: zoomedImage === pic.src ? 'scale(1.1)' : 'scale(1)',
                  zIndex: 999,
                }}
              />
            ))}
          </div>
        </>
      )}

      {project.id === 3 && (
        <div
          style={{
            marginTop: '3rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '2rem',
          }}
        >
          {[bike, ankle, water].map((src, idx) => (
            <video
              key={idx}
              src={src}
              width="300"
              height="170"
              controls
              onPlay={handleVideoPlay}
              onPause={handleVideoPause}
              style={{
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProjectDetail;
