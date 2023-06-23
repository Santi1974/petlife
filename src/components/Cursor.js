import React, { useEffect, useState } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
    <div
      className="cursor-circle"
      style={{ left: `${position.x -8.5}px`, top: `${position.y -8.5}px` }}
    />
    <div
    className="cursor-circle2"
    style={{ left: `${position.x -15}px`, top: `${position.y -15}px` }}
    />
    </>
  );
};

export default Cursor;