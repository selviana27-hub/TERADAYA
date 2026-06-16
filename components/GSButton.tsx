'use client';

import { useState } from 'react';

export default function GSButton() {
  const [open, setOpen] = useState(false);

  const [position, setPosition] = useState({
    x: 20,
    y: 500,
  });

  const [dragging, setDragging] = useState(false);

  const handleMouseDown = () => {
    setDragging(true);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!dragging) return;

    setPosition({
      x: e.clientX - 32,
      y: e.clientY - 32,
    });
  };

  if (typeof window !== 'undefined') {
    window.onmousemove = handleMouseMove;
    window.onmouseup = handleMouseUp;
  }

  return (
    <>
      {/* FLOATING BUTTON */}
      <div
        onMouseDown={handleMouseDown}
        onClick={() => setOpen(!open)}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
        className="
        fixed
        z-[9999]
        cursor-pointer
        select-none
      "
      >
        <div
          className="
            w-16
            h-16
            rounded-full
            backdrop-blur-xl
            bg-white/20
            border
            border-white/30
            shadow-2xl
            flex
            items-center
            justify-center
            hover:scale-110
            transition
          "
        >
          <span
            className="
              text-xl
              font-black
              bg-gradient-to-r
              from-orange-500
              to-red-500
              bg-clip-text
              text-transparent
            "
          >
            GS
          </span>
        </div>
      </div>

      {/* PANEL */}
      {open && (
        <div
          style={{
            left: `${position.x}px`,
            top: `${position.y - 330}px`,
          }}
          className="
            fixed
            z-[9999]
            w-80
            rounded-3xl
            backdrop-blur-2xl
            bg-white/80
            border
            border-white/50
            shadow-2xl
            overflow-hidden
          "
        >
          <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 text-white">

            <h2 className="text-3xl font-bold tracking-[0.25em] text-center">
              G E L O R A
            </h2>

            <p className="text-center text-sm tracking-[0.4em] mt-1">
              S E L V I A N A
            </p>

            <p className="text-center text-xs mt-3 opacity-90">
              Full Stack Developer
            </p>

          </div>

          <div className="p-6">

            <div className="space-y-3 text-gray-700">

              <p>⚡ Next.js Application</p>

              <p>🎨 Tailwind CSS Design</p>

              <p>🗄️ MySQL Database</p>

              <p>🚀 Tera Daya Platform</p>

            </div>

          </div>
        </div>
      )}
    </>
  );
}