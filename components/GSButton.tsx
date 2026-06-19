'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

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
            w-16 h-16
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
            top: `${Math.max(position.y - 650, 20)}px`,
          }}
          className="
            fixed
            z-[9999]
            w-[380px]
            rounded-3xl
            overflow-hidden
            bg-white
            border
            border-gray-200
            shadow-[0_20px_60px_rgba(0,0,0,0.25)]
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
                text-xl
                hover:scale-110
                transition
              "
            >
              ✕
            </button>

            <div className="flex justify-center">
              <div
                className="
                  w-20
                  h-20
                  rounded-2xl
                  bg-white/20
                  backdrop-blur-md
                  flex
                  items-center
                  justify-center
                  text-3xl
                  font-black
                "
              >
                TD
              </div>
            </div>

            <h2 className="text-center text-2xl font-bold mt-4">
              TERADAYA
            </h2>

            <p className="text-center text-sm opacity-90">
              Development Team
            </p>

            <p className="text-center text-xs mt-2 opacity-80">
              Next.js • Tailwind CSS • MySQL • Fonnte API
            </p>
          </div>

          {/* CONTENT */}
          <div className="p-5 max-h-[600px] overflow-y-auto">

            {/* GELORA */}
            <div className="mb-4 p-4 rounded-2xl bg-orange-50 border border-orange-100">

              <div className="flex items-center gap-4">

                <Image
                  src="/GeloraSelviana.jpeg"
                  alt="Gelora Selviana"
                  width={75}
                  height={75}
                  className="
                    rounded-full
                    object-cover
                    border-4
                    border-orange-500
                  "
                />

                <div>

                  <h3 className="font-bold text-gray-900">
                    Gelora Selviana
                  </h3>

                  <p className="text-orange-600 font-semibold text-sm">
                    Lead Developer
                  </p>

                  <p className="text-xs text-gray-500">
                    Full Stack Web Developer
                  </p>

                </div>

              </div>

              <p className="mt-3 text-xs text-gray-600 leading-relaxed">
                Responsible for system architecture, database design,
                backend development, frontend development, API integration,
                deployment, and project development from start to finish.
              </p>

            </div>

            {/* ADELLA */}
            <div className="mb-4 p-4 rounded-2xl bg-blue-50 border border-blue-100">

              <div className="flex items-center gap-4">

                <Image
                  src="/AdellaEkaHamanda.jpeg"
                  alt="Adella Eka Hamanda"
                  width={75}
                  height={75}
                  className="
                    rounded-full
                    object-cover
                    border-4
                    border-blue-500
                  "
                />

                <div>

                  <h3 className="font-bold text-gray-900">
                    Adella Eka Hamanda
                  </h3>

                  <p className="text-blue-600 font-semibold text-sm">
                    UI / UX Designer
                  </p>

                  <p className="text-xs text-gray-500">
                    User Interface & User Experience
                  </p>

                </div>

              </div>

              <p className="mt-3 text-xs text-gray-600 leading-relaxed">
                Responsible for user interface design, user flow,
                wireframing, prototyping, and improving user experience.
              </p>

            </div>

            {/* ANNISA */}
            <div className="mb-4 p-4 rounded-2xl bg-green-50 border border-green-100">

              <div className="flex items-center gap-4">

                                <Image
                  src="/Annisa Dwi Lestari.jpeg"
                  alt="Annisa Dwi Lestari"
                  width={75}
                  height={75}
                  className="
                    rounded-full
                    object-cover
                    border-4
                    border-green-500
                  "
                />

                <div>

                  <h3 className="font-bold text-gray-900">
                    Annisa Dwi Lestari
                  </h3>

                  <p className="text-green-600 font-semibold text-sm">
                    Software Tester
                  </p>

                  <p className="text-xs text-gray-500">
                    Quality Assurance Engineer
                  </p>

                </div>

              </div>

              <p className="mt-3 text-xs text-gray-600 leading-relaxed">
                Responsible for software testing, bug validation,
                reporting, quality assurance, and application reliability.
              </p>

            </div>

            {/* PROJECT INFO */}
            <div className="border-t pt-4">

              <h4 className="font-semibold text-gray-800 mb-3">
                🚀 Technology Stack
              </h4>

              <div className="grid grid-cols-2 gap-2 text-sm">

                <div className="bg-gray-100 rounded-xl px-3 py-2 text-center">
                  Next.js
                </div>

                <div className="bg-gray-100 rounded-xl px-3 py-2 text-center">
                  Tailwind CSS
                </div>

                <div className="bg-gray-100 rounded-xl px-3 py-2 text-center">
                  MySQL
                </div>

                <div className="bg-gray-100 rounded-xl px-3 py-2 text-center">
                  Fonnte API
                </div>

              </div>

              <div className="mt-5 text-center">

                <p className="text-xs text-gray-500">
                  © 2026 TERADAYA Development Team
                </p>

                <p className="text-xs text-gray-400 mt-1">
                  Designed & Developed by Gelora Selviana
                </p>

              </div>

            </div>

          </div>
        </div>
      )}
    </>
  );
}