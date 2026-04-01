import React, { useEffect, useState } from 'react';

const SplashScreen = ({ onComplete }) => {
  const [phase, setPhase] = useState('enter'); // enter → hold → exit

  useEffect(() => {
    // Phase 1: logo animates in (0–700ms)
    // Phase 2: hold briefly (700–1800ms)
    // Phase 3: exit animation (1800–2400ms)
    const holdTimer = setTimeout(() => setPhase('exit'), 1800);
    const doneTimer = setTimeout(() => onComplete(), 2500);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#050711',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
        opacity: phase === 'exit' ? 0 : 1,
        transform: phase === 'exit' ? 'scale(1.04)' : 'scale(1)',
        pointerEvents: phase === 'exit' ? 'none' : 'all',
      }}
    >
      {/* Background orbs */}
      <div style={{
        position: 'absolute', width: 500, height: 500,
        borderRadius: '50%', background: 'rgba(124,58,237,0.18)',
        filter: 'blur(120px)', top: '-100px', left: '-100px',
      }} />
      <div style={{
        position: 'absolute', width: 400, height: 400,
        borderRadius: '50%', background: 'rgba(6,182,212,0.12)',
        filter: 'blur(120px)', bottom: '-80px', right: '-80px',
      }} />

      {/* Logo card */}
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          animation: 'splashIn 0.7s cubic-bezier(0.34,1.56,0.64,1) forwards',
        }}
      >
        {/* Logo icon */}
        <div style={{
          width: 88, height: 88,
          borderRadius: 22,
          background: 'linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 0 50px rgba(124,58,237,0.5), 0 0 100px rgba(6,182,212,0.2)',
          animation: 'pulse 2s ease-in-out infinite',
        }}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <path d="M8 12L24 6L40 12V24C40 33.6 33.2 42.4 24 45C14.8 42.4 8 33.6 8 24V12Z"
              stroke="white" strokeWidth="2.5" strokeLinejoin="round" fill="rgba(255,255,255,0.1)" />
            <path d="M17 24L22 29L31 19" stroke="white" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Brand name */}
        <div style={{ textAlign: 'center' }}>
          <h1 style={{
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 900,
            fontSize: '2.8rem',
            letterSpacing: '-1px',
            background: 'linear-gradient(135deg, #fff 0%, #a78bfa 50%, #67e8f9 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            margin: 0,
            lineHeight: 1,
          }}>
            TRIVEXON
          </h1>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            color: 'rgba(148,163,184,0.8)',
            fontSize: '0.85rem',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            marginTop: 8,
            fontWeight: 400,
          }}>
            Digital Solutions
          </p>
        </div>

        {/* Loading bar */}
        <div style={{
          width: 200, height: 3,
          background: 'rgba(255,255,255,0.08)',
          borderRadius: 99,
          overflow: 'hidden',
          marginTop: 8,
        }}>
          <div style={{
            height: '100%',
            borderRadius: 99,
            background: 'linear-gradient(90deg, #7C3AED, #06B6D4)',
            animation: 'loadBar 1.8s ease-in-out forwards',
          }} />
        </div>
      </div>

      <style>{`
        @keyframes splashIn {
          from { opacity: 0; transform: translateY(30px) scale(0.92); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 50px rgba(124,58,237,0.5), 0 0 100px rgba(6,182,212,0.2); }
          50%       { box-shadow: 0 0 70px rgba(124,58,237,0.7), 0 0 130px rgba(6,182,212,0.35); }
        }
        @keyframes loadBar {
          0%   { width: 0%; }
          60%  { width: 75%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
