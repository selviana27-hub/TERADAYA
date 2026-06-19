'use client';

import { useState, useEffect } from 'react';

export default function TeamFloatingButton() {
  const [open, setOpen] = useState(false);

  const [position, setPosition] = useState({
    x: 20,
    y: 500,
  });

  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!dragging) return;

      setPosition({
        x: e.clientX - 32,
        y: e.clientY - 32,
      });
    };

    const handleMouseUp = () => {
      setDragging(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging]);

  return (
    <>
      {/* FLOATING BUTTON */}
      <div
        onMouseDown={() => setDragging(true)}
        onClick={() => setOpen(!open)}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
        className="fixed z-[9999] cursor-pointer select-none"
      >
        <div
          className="
            w-16
            h-16
            rounded-2xl
            bg-gradient-to-br
            from-orange-500
            via-red-500
            to-red-700
            shadow-2xl
            flex
            items-center
            justify-center
            hover:scale-110
            transition-all
            duration-300
            border
            border-white/20
          "
        >
          <span className="text-white font-black text-xl">
            TD
          </span>
        </div>
      </div>

      {/* PANEL */}
      {open && (
        <div
          style={{
            left: `${position.x}px`,
            top: `${position.y - 470}px`,
          }}
          className="
            fixed
            z-[9999]
            w-[360px]
            rounded-3xl
            overflow-hidden
            bg-white
            shadow-[0_20px_60px_rgba(0,0,0,0.20)]
            border
            border-gray-200
          "
        >
          {/* HEADER */}
          <div className="bg-gradient-to-r from-orange-500 via-red-500 to-red-700 p-6 text-white relative">

            <button
              onClick={() => setOpen(false)}
              className="
                absolute
                right-4
                top-4
                text-white
                text-xl
                hover:scale-110
                transition
              "
            >
              ×
            </button>

            <div className="flex justify-center mb-3">
              <div
                className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-white/20
                  backdrop-blur-md
                  flex
                  items-center
                  justify-center
                  font-black
                  text-2xl
                "
              >
                TD
              </div>
            </div>

            <h2 className="text-center text-2xl font-bold">
              TERADAYA
            </h2>

            <p className="text-center text-sm opacity-90">
              Development Team
            </p>

            <div className="mt-4 text-center text-xs opacity-90">
              Next.js • Tailwind CSS • MySQL • Fonnte API
            </div>
          </div>

          {/* BODY */}
          <div className="p-6">

            {/* LEAD DEV */}
            <div className="mb-5 p-4 rounded-2xl bg-orange-50 border border-orange-100">
              <div className="font-bold text-gray-900">
                👨‍💻 Lead Developer
              </div>

              <div className="mt-1 text-gray-800 font-semibold">
                Gelora Selviana
              </div>

              <div className="text-sm text-gray-600">
                Full Stack Web Developer
              </div>

              <div className="text-xs text-gray-500 mt-1">
                System Architect, Database Design, Backend Development,
                Frontend Development, API Integration, Deployment &
                Project Management
              </div>
            </div>

            {/* UI UX */}
            <div className="mb-5 p-4 rounded-2xl bg-blue-50 border border-blue-100">
              <div className="font-bold text-gray-900">
                🎨 UI / UX Designer
              </div>

              <div className="mt-1 text-gray-800 font-semibold">
                Adella Eka Hamanda
              </div>

              <div className="text-sm text-gray-600">
                User Interface & User Experience Designer
              </div>

              <div className="text-xs text-gray-500 mt-1">
                Responsible for interface design, user flow,
                visual consistency, and user experience research.
              </div>
            </div>

            {/* TESTER */}
            <div className="mb-5 p-4 rounded-2xl bg-green-50 border border-green-100">
              <div className="font-bold text-gray-900">
                🧪 Software Tester
              </div>

              <div className="mt-1 text-gray-800 font-semibold">
                Annisa Dwi Lestari
              </div>

              <div className="text-sm text-gray-600">
                Quality Assurance & Software Testing
              </div>

              <div className="text-xs text-gray-500 mt-1">
                Responsible for testing application functionality,
                bug reporting, validation, and quality assurance.
              </div>
            </div>

            {/* FOOTER */}
            <div className="border-t pt-4">

              <h4 className="font-semibold text-gray-800 mb-2">
                🚀 Project Stack
              </h4>

              <div className="grid grid-cols-2 gap-2 text-sm">

                <div className="bg-gray-100 rounded-xl px-3 py-2">
                  Next.js
                </div>

                <div className="bg-gray-100 rounded-xl px-3 py-2">
                  Tailwind CSS
                </div>

                <div className="bg-gray-100 rounded-xl px-3 py-2">
                  MySQL
                </div>

                <div className="bg-gray-100 rounded-xl px-3 py-2">
                  Fonnte API
                </div>

              </div>

              <div className="mt-4 text-center text-xs text-gray-500">
                © 2026 TERADAYA Development Team
              </div>

            </div>

          </div>
        </div>
      )}
    </>
  );
}