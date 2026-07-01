import React from 'react';

const LIGHT_VIDEO =
  'https://ik.imagekit.io/0fkflxaif/bgVideo/BG_for_Phong_Nguyen_202606291040.mp4?updatedAt=1782833487251';

const LightBackground = ({ theme }) => {
  if (theme !== 'light') return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[rgb(236,237,240)] transition-colors duration-500">
      <div className="absolute inset-0 bg-gradient-to-br from-[rgb(236,237,240)] via-[rgb(240,241,244)] to-[rgb(230,232,236)]" />
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center scale-90 opacity-76 will-change-transform"
      >
        <source src={LIGHT_VIDEO} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-slate-50/25" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_28%,rgba(241,245,249,0.12)_62%,rgba(241,245,249,0.36)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/8 via-slate-50/22 to-slate-100/60" />
    </div>
  );
};

export default LightBackground;
