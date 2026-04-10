import React from 'react';

const DarkBackground = ({ theme }) => {
  if (theme !== 'dark') return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black pointer-events-none transition-colors duration-500">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#020617] to-black" />
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover animate-fade-in opacity-72"
      >
        <source src="https://ik.imagekit.io/0fkflxaif/bgVideo/dark.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-slate-950/45" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_28%,rgba(2,6,23,0.28)_62%,rgba(2,6,23,0.6)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/15 via-slate-950/45 to-slate-950/75" />
    </div>
  );
};

export default DarkBackground;
