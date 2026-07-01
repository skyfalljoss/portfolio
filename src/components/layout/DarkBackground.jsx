import React from 'react';

const DARK_VIDEO =
  'https://ik.imagekit.io/0fkflxaif/bgVideo/Initial_Scene_-_2026-06-29_202606291032.mp4?updatedAt=1782833505809';

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
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center scale-90 opacity-70 will-change-transform"
      >
        <source src={DARK_VIDEO} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-slate-950/40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_26%,rgba(2,6,23,0.26)_60%,rgba(2,6,23,0.62)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-slate-950/38 to-slate-950/78" />
    </div>
  );
};

export default DarkBackground;
