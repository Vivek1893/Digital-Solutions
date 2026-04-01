import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PageLoader = () => {
  const { pathname } = useLocation();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Start loading
    setVisible(true);
    setProgress(0);

    // Quickly jump to 80%, then finish after a short delay
    const t1 = setTimeout(() => setProgress(30), 50);
    const t2 = setTimeout(() => setProgress(70), 150);
    const t3 = setTimeout(() => setProgress(90), 300);
    const t4 = setTimeout(() => {
      setProgress(100);
    }, 450);
    // Hide bar after complete
    const t5 = setTimeout(() => {
      setVisible(false);
      setProgress(0);
    }, 750);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [pathname]);

  if (!visible && progress === 0) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9998,
        height: '3px',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #7C3AED, #06B6D4, #7C3AED)',
          backgroundSize: '200% 100%',
          borderRadius: '0 4px 4px 0',
          transition: progress === 100
            ? 'width 0.2s ease, opacity 0.3s ease 0.2s'
            : 'width 0.3s ease',
          opacity: progress === 100 ? 0 : 1,
          boxShadow: '0 0 10px rgba(124,58,237,0.7), 0 0 20px rgba(6,182,212,0.4)',
          animation: 'shimmer 1.5s linear infinite',
        }}
      />
      <style>{`
        @keyframes shimmer {
          0%   { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }
      `}</style>
    </div>
  );
};

export default PageLoader;
