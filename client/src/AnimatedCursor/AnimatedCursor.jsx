// AnimatedCursor.js

import React, { useState, useEffect } from 'react';
import './AnimatedCursor.css'; // Import your cursor styling

const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updatePosition);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return (
    <div className="animated-cursor" style={{ left: position.x, top: position.y }}>
      {/* Your cursor content goes here */}
    </div>
  );
};

export default AnimatedCursor;
