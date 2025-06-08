import React, { useState, useRef, useEffect } from 'react';
import FadeInSection from "../components/FadeInSection";
import survivorImg from "../assets/survivor.jpg";
import homeMusic from '../assets/HomePage.mp3';

function Home() {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [animate, setAnimate] = useState(false);

useEffect(() => {
  const audio = audioRef.current;
  if (audio) {
    audio.volume = 0.3;
    audio.muted = isMuted;
    audio.play().catch(() => {});
  }

  return () => {
    if (audio) {
      audio.pause();
    }
  };
}, [isMuted]);

  const toggleMute = () => {
    if (audioRef.current) {
      const newMute = !isMuted;
      audioRef.current.muted = newMute;
      setIsMuted(newMute);

      setAnimate(true);
      setTimeout(() => setAnimate(false), 400);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top left, #d0e6f7, #a8c0e8)",
        padding: "4rem 2rem",
        fontFamily: "'Lora', serif",
        color: "#0d1b2a",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      {/* 🔊 Mute Button Animation Style */}
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

      {/* 🎵 Background Music */}
      <audio ref={audioRef} src={homeMusic} loop />

      {/* 🔇 Mute/Unmute Button */}
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

      {/* Nav */}
      <div style={{ marginBottom: "2rem", fontSize: "1rem" }}>
        <a href="/" style={{ margin: "0 12px", textDecoration: "none", color: "#f76c6c", fontWeight: "bold" }}>Home</a>
        <a href="/aboutMe" style={{ margin: "0 12px", textDecoration: "none", color: "#f76c6c", fontWeight: "bold" }}>About Me</a>
        <a href="/projects" style={{ margin: "0 12px", textDecoration: "none", color: "#f76c6c", fontWeight: "bold" }}>Projects</a>
        <a href="/skills" style={{ margin: "0 12px", textDecoration: "none", color: "#f76c6c", fontWeight: "bold" }}>Skills</a>
        <a href="/documentation" style={{ margin: "0 12px", textDecoration: "none", color: "#f76c6c", fontWeight: "bold" }}>Documentation</a>

      </div>

      {/* Intro Text */}
      <FadeInSection>
        <div
          style={{
            fontSize: "1.2rem",
            maxWidth: "760px",
            lineHeight: "1.8",
            fontWeight: "400",
            marginBottom: "3rem",
            color: "#102a43",
            fontStyle: "italic",
            letterSpacing: "0.02em",
            textShadow: "0 2px 4px rgba(0,0,0,0.08)",
            transition: "color 0.3s ease",
            padding: "0 1rem",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#f76c6c")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#102a43")}
        >
          HI, I am Hagop Hadjiakian, a software and quality assurance engineer from Lebanon/Armenia.
          I'm passionate about technology, innovation, and human resilience.
          I've worked in IT for over 5 years, building, testing, and improving digital products that serve real people.
          <br /><br />
          But my story isn't just about code.
          <br /><br />
          In 2013, I experienced a spinal cord injury that changed my life.
          Since then, I've been on a journey not only to adapt but to evolve — physically, mentally, and professionally.
        </div>
      </FadeInSection>

      {/* Image */}
      <FadeInSection>
        <div
          style={{
            width: "90%",
            maxWidth: "340px",
            height: "auto",
            borderRadius: "20px",
            overflow: "visible",
            boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15), 0 0 15px rgba(247, 108, 108, 0.6)",
            transform: "rotate(-1deg)",
            transition: "transform 0.4s ease",
            cursor: "pointer",
            marginTop: "2rem",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "rotate(0deg) scale(1.05)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "rotate(-1deg) scale(1)")
          }
        >
          <img
            src={survivorImg}
            alt="Hagop standing with walker - spinal cord injury survivor"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              display: "block",
              borderRadius: "20px",
            }}
          />
        </div>
      </FadeInSection>

      {/* Call to Action */}
      <FadeInSection>
        <p
          style={{
            fontSize: "1.1rem",
            marginTop: "2.5rem",
            color: "#f76c6c",
            fontWeight: "500",
          }}
        >
          💡 Explore my projects to see how I channel resilience into innovation.
        </p>
      </FadeInSection>

      {/* Social Links */}
      <FadeInSection>
        <div
          style={{
            display: "flex",
            gap: "2rem",
            marginTop: "3rem",
            fontSize: "2rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a
            href="https://www.facebook.com/share/hagop.aris.hadjiakian"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
            style={{ textDecoration: "none", color: "#4267B2", transition: "transform 0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            📘
          </a>
          <a
            href="https://www.linkedin.com/in/hagop-a-hadjiakian"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            style={{ textDecoration: "none", color: "#0e76a8", transition: "transform 0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            💼
          </a>
          <a
            href="https://www.instagram.com/hagop_a_hadji_akian"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            style={{ textDecoration: "none", color: "#C13584", transition: "transform 0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            📸
          </a>
        </div>
      </FadeInSection>

      {/* SVG Wave */}
      <svg
        viewBox="0 0 1440 150"
        style={{ marginTop: "4rem", width: "100%", height: "150px" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#f76c6c"
          fillOpacity="0.3"
          d="M0,64L80,85.3C160,107,320,149,480,165.3C640,181,800,171,960,165.3C1120,160,1280,160,1360,160L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        />
        <path
          fill="#f76c6c"
          fillOpacity="0.5"
          d="M0,96L80,101.3C160,107,320,117,480,128C640,139,800,149,960,154.7C1120,160,1280,160,1360,160L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        />
      </svg>
    </div>
  );
}

export default Home;
