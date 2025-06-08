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
  const [setIsAnyVideoPlaying] = useState(false);

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
    <div
      style={{
        minHeight: '100vh',
        background: 'radial-gradient(circle at top left, #d0e6f7, #a8c0e8)',
        padding: '4rem 2rem',
        fontFamily: "'Lora', serif",
        color: '#102a43',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '2rem', color: '#f76c6c', marginBottom: '2rem' }}>
        About Me
      </h1>
   {/* Rectangular Profile Image */}
      <img
        src={profilePic}
        alt="Hagop Hadjiakian"
        style={{
          width: '300px',
          height: 'auto',
          objectFit: 'cover',
          marginTop: '2rem',
          borderRadius: '12px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
        }}
      />
       <br /><br />
      <p style={{ fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '720px', margin: '0 auto' }}>
        My name is Hagop Hadjiakian. I graduated with a degree in Electrical Engineering and currently work as a software and QA engineer.
        I speak four languages — <strong>Armenian, Arabic, French, and English</strong> — which helps me connect with different people and cultures.

        <br /><br />

        I’ve been through a spinal cord injury, but that didn’t stop me. I love <strong>animals</strong>
        <span
          style={{ display: 'inline-block', marginLeft: '12px', verticalAlign: 'middle', cursor: 'zoom-in' }}
          onClick={() => setZoomedImage(zoomedImage === dogPic ? null : dogPic)}
        >
          <img
            src={dogPic}
            alt="Dog"
            style={{
              width: zoomedImage === dogPic ? '800px' : '200px',
              height: zoomedImage === dogPic ? '800px' : '200px',
              objectFit: 'cover',
              borderRadius: '50%',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              transition: 'all 0.3s ease',
              transform: zoomedImage === dogPic ? 'scale(1.15)' : 'scale(1)',
            }}
          />
        </span>  ,
          I enjoy <strong>exercising</strong>, and I spend a lot of time reading, researching, and sometimes building things from scratch.

        <br /><br />

        I’m not perfect — I smoke cigarettes, and I drink a lot of coffee — but I try to stay focused on what matters: growing, improving, and not giving up.
        Life is not always easy, but I try to stay consistent and keep moving forward.
      </p>

   

      {/* Graduation Images */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '2rem',
          marginTop: '3rem',
        }}
      >
        {[{ src: diploma, alt: "Diploma" }, { src: deans, alt: "Dean's List" }].map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.alt}
            onClick={() => setZoomedImage(zoomedImage === img.src ? null : img.src)}
            style={{
              width: zoomedImage === img.src ? '60vw' : '300px',
              height: 'auto',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              transition: 'transform 0.3s ease, width 0.3s ease',
              cursor: 'zoom-in',
              transform: zoomedImage === img.src ? 'scale(1.1)' : 'scale(1)',
              zIndex: 999,
            }}
          />
        ))}
      </div>

      {/* Graduation Video */}
      <div style={{ marginTop: '2.5rem' }}>
        <video
          src={graduation}
          controls
          width="640"
          height="360"
          onPlay={() => handleVideoPlayPause(true)}
          onPause={() => handleVideoPlayPause(false)}
          style={{
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          }}
        />
      </div>

      {/* Recovery Journey Section */}
      <div style={{ maxWidth: '800px', fontSize: '1.1rem', lineHeight: '1.8', marginTop: '3rem' }}>
        <h2 style={{ color: '#f76c6c', fontSize: '1.5rem', marginBottom: '1rem' }}>
          My Recovery Journey
        </h2>

        <p>
          In 2013, I was diagnosed with a spinal cord injury and classified as a <strong>complete paraplegic at the T6 level</strong>.
          At the time, I had <strong>no sensation or movement below the chest</strong>. But later MRIs revealed that my condition
          was caused by a <strong>spinal cord compression</strong> rather than a full severance.
        </p>

        <br />

        <p>
          In 2015, I traveled to Japan and joined a rehabilitation program at <strong>Tsukuba Kenkyugakuen center</strong>,
          where I trained for two months using the <strong>Hybrid Assistive Limb (HAL)</strong> robotic exoskeleton developed by Cyberdyne.
        </p>

        <br />

        <p>
          That was the turning point. After the HAL training, something changed. <strong>Neuroplasticity</strong> began to take effect.
          Slowly, I started regaining voluntary control — the first sign was <strong>knee extension through my quadriceps</strong>.
          Year after year, some movements and sensation returned.
        </p>

        <br />

        <p>
          Today, over a decade later, my <strong>sensation is nearly back to normal</strong>, and I can perform some movements
          like raising my legs and walking short distances with a KAFO walker. My journey proves that recovery is possible,
          even when the odds say otherwise.
        </p>

        <br />

        <p>
          My dream is simple yet powerful: <strong>to recover as much as humanly possible</strong>, to push beyond my current limits,
          and to walk freely again one day. Every step I take is a declaration that <strong>I will not give up</strong>.
        </p>

        <br />

        <p style={{ color: '#f76c6c', fontWeight: '500' }}>
          💪 Progress is slow, but I never stop.  <br />
          🌱 Healing is real, and belief fuels it.  <br />
          🚀 I’m not waiting for a miracle — I’m training for one.
        </p>

        <p style={{ fontStyle: 'italic', marginTop: '2rem' }}>
          “The body achieves what the mind believes.”
        </p>
      </div>

      {/* HAL Video */}
      <div style={{ marginTop: '2.5rem' }}>
        <video
          src={japanVideo}
          width="90%"
          height="auto"
          controls
          onPlay={() => handleVideoPlayPause(true)}
          onPause={() => handleVideoPlayPause(false)}
          style={{
            maxWidth: '640px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
          }}
        />
        <p style={{ fontSize: '1rem', marginTop: '0.5rem', color: '#334e68' }}>
          <em>Training with HAL exoskeleton in Japan, 2015</em>
        </p>
      </div>

       <br /><br />
       <br /><br />

  {[
  {
    src: video1,
    title: 'KAFO Walker Training',
    description: 'Walking short distances with a knee-ankle-foot orthosis outdoors.',
  },
  {
    src: video2,
    title: 'Red Band Strengthening',
    description: 'Leg strengthening exercise using a red elastic band to improve muscle tone.',
  },
  {
    src: video3,
    title: 'Red Band Strengthening2',
    description: 'Core and pelvic muscles\' strengthening exercise using a red elastic band.',
  },
  {
    src: afo,
    title: 'BWST',
    description: 'A homemade Body Weight Supported Treadmill (BWST) device to assist walking activities while using my knee extensors (quadriceps) and flexors (hamstrings).',
  },
].map((vid, index) => (
  <div
    key={index}
    style={{
      textAlign: 'center',
      marginBottom: '9rem', // this adds vertical space
    }}
  >
    <video
      src={vid.src}
      width="600"
      height="300"
      controls
      onPlay={() => handleVideoPlayPause(true)}
      onPause={() => handleVideoPlayPause(false)}
      style={{
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      }}
    />
    <h4 style={{ marginTop: '0.5rem', color: '#f76c6c' }}>{vid.title}</h4>
    <p style={{ fontSize: '0.95rem', color: '#334e68', maxWidth: '300px', margin: '0.5rem auto 0' }}>
      {vid.description}
    </p>
  </div>
))}
      {/* Background Music */}
      <audio ref={audioRef} autoPlay loop>
        <source src={batmanMusic} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <button
        onClick={toggleAudio}
        style={{
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
        }}
      >
        {isMuted ? '🔇 Unmute Music' : '🔊 Mute Music'}
      </button>
    </div>
  );
}

export default AboutMe;