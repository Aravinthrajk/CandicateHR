import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';

const Cursor = () => {
  const CursorDiv = styled('div')({
    position: 'fixed',
    width: 20,
    height: 20,
    borderRadius: '50%',
    pointerEvents: 'none',
    mixBlendMode: 'difference',
    zIndex: 9999,
    background: 'transparent',
    border: '2px solid #fff',
    transition: 'transform 0.3s, width 0.3s, height 0.3s, opacity 0.3s',
  });

  const ActiveCursorDiv = styled(CursorDiv)({
    width: 40,
    height: 40,
    opacity: 0,
    transition: 'transform 0.3s, width 0.3s, height 0.3s, opacity 0.3s',
  });

  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseEnter = () => {
      setActive(true);
    };

    const onMouseLeave = () => {
      setActive(false);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.querySelectorAll('.hover-effect').forEach((item) => {
      item.addEventListener('mouseenter', onMouseEnter);
      item.addEventListener('mouseleave', onMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.querySelectorAll('.hover-effect').forEach((item) => {
        item.removeEventListener('mouseenter', onMouseEnter);
        item.removeEventListener('mouseleave', onMouseLeave);
      });
    };
  }, []);

  return (
    <div
      className={`${active ? 'active' : ''}`}
      style={{ top: `${position.y}px`, left: `${position.x}px` }}
    >
      {active ? <ActiveCursorDiv /> : <CursorDiv />}
    </div>
  );
};

export default Cursor;
