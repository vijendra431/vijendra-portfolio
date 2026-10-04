import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') !== null ||
          target.closest('a') !== null ||
          target.getAttribute('role') === 'button';
        setIsPointer(isClickable);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Center dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full bg-purple-400 transition-transform duration-75 ease-out"
        style={{
          width: isPointer ? '8px' : '6px',
          height: isPointer ? '8px' : '6px',
          transform: `translate3d(${position.x - (isPointer ? 4 : 3)}px, ${position.y - (isPointer ? 4 : 3)}px, 0)`,
        }}
      />
      {/* Outer ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-purple-500/40 transition-all duration-150 ease-out"
        style={{
          width: isPointer ? '36px' : '24px',
          height: isPointer ? '36px' : '24px',
          transform: `translate3d(${position.x - (isPointer ? 18 : 12)}px, ${position.y - (isPointer ? 18 : 12)}px, 0)`,
          backgroundColor: isPointer ? 'rgba(168, 85, 247, 0.08)' : 'transparent',
        }}
      />
    </>
  );
}
