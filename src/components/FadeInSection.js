import React, { useState, useEffect, useRef } from "react";

export default function FadeInSection({ children }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(domRef.current);
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(domRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : "translateY(20px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
