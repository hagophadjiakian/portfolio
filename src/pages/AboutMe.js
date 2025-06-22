import React, { useRef, useState } from 'react';
import profilePic from '../assets/profilePic.jpg';
import japanVideo from '../assets/japan.mp4';
import batmanMusic from '../assets/batman.mp3';
import video1 from '../assets/kafoWalker.mp4';
import video2 from '../assets/red2.mp4';
import video3 from '../assets/red1.mp4';
import afo from '../assets/afo.mp4';
import deans from '../assets/Deans.jpg';
import graduation from '../assets/graduation.mp4';
import diploma from '../assets/Diploma.jpg';
import dogPic from '../assets/dog.jpeg';

function AboutMe() {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [zoomedImage, setZoomedImage] = useState(null);
  const [isAnyVideoPlaying, setIsAnyVideoPlaying] = useState(false);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    const newMuteState = !isMuted;
    audioRef.current.muted = newMuteState;
    setIsMuted(newMuteState);
  };

  const handleVideoPlayPause = (playing) => {
    if (!audioRef.current) return;
    audioRef.current.muted = playing;
    setIsMuted(playing);
    setIsAnyVideoPlaying(playing);
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>About Me</h1>

      <img src={profilePic} alt="Hagop Hadjiakian" loading="lazy" style={styles.profileImage} />

      <p style={styles.paragraph}>
        My name is Hagop Hadjiakian. I graduated with a degree in Electrical Engineering and currently work as a software and QA engineer.
        I speak four languages — <strong>Armenian, Arabic, French, and English</strong> — which helps me connect with different people and cultures.

        <br /><br />

        I’ve been through a spinal cord injury, but that didn’t stop me. I love <strong>animals</strong>
        <span style={styles.inlineZoom} onClick={() => setZoomedImage(zoomedImage === dogPic ? null : dogPic)}>
          <img
            src={dogPic}
            alt="Dog"
            loading="lazy"
            style={{
              ...styles.dogImage,
              ...(zoomedImage === dogPic ? styles.zoomed : {}),
            }}
          />
        </span>, I enjoy <strong>exercising</strong>, and I spend a lot of time reading, researching, and sometimes building things from scratch.

        <br /><br />

        I’m not perfect — I smoke cigarettes, and I drink a lot of coffee — but I try to stay focused on what matters: growing, improving, and not giving up.
        Life is not always easy, but I try to stay consistent and keep moving forward.
      </p>

      <div style={styles.imageRow}>
        {[{ src: diploma, alt: 'Diploma' }, { src: deans, alt: "Dean's List" }].map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.alt}
            loading="lazy"
            onClick={() => setZoomedImage(zoomedImage === img.src ? null : img.src)}
            style={{
              ...styles.cardImage,
              ...(zoomedImage === img.src ? styles.zoomed : {}),
            }}
          />
        ))}
      </div>

      <div style={styles.responsiveVideoWrapper}>
        <video
          src={graduation}
          controls
          preload="auto"
          style={styles.responsiveVideo}
          onPlay={() => handleVideoPlayPause(true)}
          onPause={() => handleVideoPlayPause(false)}
        />
      </div>

      <div style={styles.textBlock}>
        <h2 style={styles.subtitle}>My Recovery Journey</h2>

        <p>
          In 2013, I was diagnosed with a spinal cord injury and classified as a <strong>complete paraplegic at the T6 level</strong>.
          I had <strong>no sensation or movement below the chest</strong>. But MRIs later revealed it was due to <strong>spinal cord compression</strong>, not full severance.
        </p>

        <p>
          In 2015, I joined a 2-month rehab program in Japan at <strong>Tsukuba Kenkyugakuen</strong> using the <strong>HAL exoskeleton</strong> by Cyberdyne.
          This was a turning point — <strong>neuroplasticity</strong> kicked in, and I began to regain knee extension.
        </p>

        <p>
          Today, I have nearly normal sensation and can walk short distances with a KAFO walker. My dream remains to recover fully and walk independently.
        </p>

        <p style={{ color: '#f76c6c', fontWeight: '500' }}>
          💪 Progress is slow, but I never stop. <br />
          🌱 Healing is real, and belief fuels it. <br />
          🚀 I’m not waiting for a miracle — I’m training for one.
        </p>

        <p style={{ fontStyle: 'italic', marginTop: '2rem' }}>
          “The body achieves what the mind believes.”
        </p>
      </div>

      {/* HAL Japan Video */}
      <div style={{ ...styles.responsiveVideoWrapper, marginBottom: '4rem' }}>

        <video
          src={japanVideo}
          controls
          preload="auto"
          style={styles.responsiveVideo}
          onPlay={() => handleVideoPlayPause(true)}
          onPause={() => handleVideoPlayPause(false)}
        />
        <p style={{ ...styles.caption, marginBottom: '3rem' }}>
          <em>Training with HAL exoskeleton in Japan, 2015</em>
          </p>
          </div>
      {/* Rehab Training Videos */}
      {[
        { src: video1, title: 'KAFO Walker Training', desc: 'Walking with knee-ankle-foot orthosis.' },
        { src: video2, title: 'Red Band Strengthening', desc: 'Leg muscle exercises using a resistance band.' },
        { src: video3, title: 'Red Band Strengthening 2', desc: 'Core & pelvic exercises with a resistance band.' },
        { src: afo, title: 'BWST', desc: 'Homemade Body Weight Supported Treadmill (BWST).' },
      ].map((vid, index) => (
        <div key={index} style={styles.videoBlock}>
          <div style={styles.responsiveVideoWrapper}>
            <video
              src={vid.src}
              controls
              preload="auto"
              style={styles.responsiveVideo}
              onPlay={() => handleVideoPlayPause(true)}
              onPause={() => handleVideoPlayPause(false)}
            />
          </div>
          <h4 style={styles.subtitle}>{vid.title}</h4>
          <p style={styles.caption}>{vid.desc}</p>
        </div>
      ))}

      {/* Background Music */}
      <audio ref={audioRef} autoPlay loop>
        <source src={batmanMusic} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <button onClick={toggleAudio} style={styles.audioBtn}>
        {isMuted ? '🔇 Unmute Music' : '🔊 Mute Music'}
      </button>
    </div>
  );
}

// ================== STYLES ==================
const styles = {
  page: {
    minHeight: '100vh',
    background: 'radial-gradient(circle at top left, #d0e6f7, #a8c0e8)',
    padding: '4rem 2rem',
    fontFamily: "'Lora', serif",
    color: '#102a43',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    color: '#f76c6c',
    marginBottom: '2rem',
  },
  profileImage: {
    width: '100%',
    maxWidth: '300px',
    height: 'auto',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
  },
  paragraph: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    maxWidth: '720px',
    margin: '2rem auto',
  },
  inlineZoom: {
    display: 'inline-block',
    marginLeft: '12px',
    verticalAlign: 'middle',
    cursor: 'zoom-in',
  },
  dogImage: {
    width: '200px',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '50%',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    transition: 'all 0.3s ease',
  },
  zoomed: {
    width: '90vw',
    height: '90vw',
    maxWidth: '800px',
    transform: 'scale(1.1)',
  },
  imageRow: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '2rem',
    marginTop: '3rem',
  },
  cardImage: {
    width: '100%',
    maxWidth: '300px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    cursor: 'zoom-in',
    transition: 'transform 0.3s ease, width 0.3s ease',
  },
  responsiveVideoWrapper: {
  width: '100%',
  maxWidth: '640px',
  aspectRatio: '16 / 9',
  marginTop: '2.5rem',
},

responsiveVideo: {
  width: '100%',
  height: '100%',
  objectFit: 'contain', // 👈 change this
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
},
  videoBlock: {
    marginBottom: '6rem',
    width: '100%',
    maxWidth: '640px',
    textAlign: 'center',
  },
  caption: {
    fontSize: '0.95rem',
    color: '#334e68',
    marginTop: '0.5rem',
  },
  textBlock: {
    maxWidth: '800px',
    fontSize: '1.1rem',
    lineHeight: '1.8',
    marginTop: '3rem',
  },
  subtitle: {
    color: '#f76c6c',
    fontSize: '1.5rem',
    margin: '1rem 0',
  },
  audioBtn: {
    marginTop: '2.5rem',
    backgroundColor: '#f76c6c',
    color: 'white',
    border: 'none',
    padding: '0.6rem 1.2rem',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1rem',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
  },
};

export default AboutMe;
