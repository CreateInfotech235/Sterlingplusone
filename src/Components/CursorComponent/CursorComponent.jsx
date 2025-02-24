import React, { useState, useEffect } from 'react';

const CursorComponent = () => {
  const [cursorZoom, setCursorZoom] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorOpacity, setCursorOpacity] = useState(0);
  const [pointerOpacity, setPointerOpacity] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      const isLink = e.target.classList.contains('link-hover') || e.target.closest('.link-hover');
      setCursorZoom(isLink);
      setPointerOpacity(1);
      setCursorOpacity(1);

      // Animate cursor position to the new position over 3 seconds
      const cursor = document.getElementById('cursor');
      cursor.style.transition = `left 0.2s, top 0.2s`; // Set transition for cursor movement
      setCursorPosition({ x: e.pageX, y: e.pageY });
    };

    const handleMouseLeave = () => {
      setCursorOpacity(0);
      setPointerOpacity(0);
    };

    const handleMouseEnter = () => {
      setPointerOpacity(1);
      setCursorOpacity(1);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);
  
  const handleClick = () => {
    const cursor = document.getElementById('cursor');
    cursor.style.animation = 'cursorClick 100ms ease-in-out'; // Changed duration and added easing
    setTimeout(() => {
      cursor.style.animation = '';
    }, 100); // Match timeout with animation duration
  };


  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    handleResize(
      
    )
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
    {!isMobile ? (
      <>
      <div
        id="cursor"
        className={`absolute opacity-${cursorOpacity} top-[50%] left-[50%] w-[50px] h-[50px] border-[1px] border-[#262626] rounded-full transform transition-all pointer-events-none duration-150 ${cursorZoom ? 'scale-125' : 'scale-100'}`}
        style={{ left: `${cursorPosition.x - 25}px`, top: `${cursorPosition.y - 25}px`, zIndex: 1000 }}
      ></div>

      <div
        id="pointer"
        className="absolute  top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] w-[10px] h-[10px] bg-[#FF5F3D] rounded-full pointer-events-none"
        style={{ left: `${cursorPosition.x}px`, top: `${cursorPosition.y}px`, zIndex: 1000 }}
      ></div>
      </>
      ) : null}
    </>
  );
};

export default CursorComponent;
