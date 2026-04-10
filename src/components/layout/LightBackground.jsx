import React from 'react';

const LightBackground = ({ theme }) => {
  if (theme !== 'light') return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-gray-50 transition-colors duration-500">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-slate-200" />
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover animate-fade-in opacity-78"
      >
        <source src="https://ik.imagekit.io/0fkflxaif/bgVideo/Animate_this_seamless_202604011257.mp4?updatedAt=1775062843885" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-white/45" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(255,255,255,0.18)_65%,rgba(255,255,255,0.38)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/35 to-white/70" />
    </div>
  );
};

export default LightBackground;
