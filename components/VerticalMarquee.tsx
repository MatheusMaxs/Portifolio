import React from 'react';

export const VerticalMarquee: React.FC = () => {
  return (
    <div className="hidden md:flex h-full w-[110px] lg:w-[130px] border-r border-[#222] overflow-hidden relative select-none bg-[#0a0a0a] flex-shrink-0 z-20 items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="transform -rotate-90 flex items-center justify-center whitespace-nowrap origin-center">
            <div className="relative flex items-center justify-center">
                {/* Left/Top Ghost Text (Behind) */}
                <span className="absolute text-[7vh] leading-none font-display font-black tracking-[0.30em] stroked-text opacity-20 select-none -translate-y-8" aria-hidden="true">
                  MATHEUS MAXS
                </span>
                
                {/* Center Solid Text */}
                <span className="relative inline-block py-3 px-4 text-[7vh] leading-none font-display font-black tracking-[0.30em] text-[#e5e5e5] bg-[#070707] select-none z-10">
                  MATHEUS MAXS
                </span>

                {/* Right/Bottom Ghost Text (Behind) */}
                <span className="absolute text-[7vh] leading-none font-display font-black tracking-[0.30em] stroked-text opacity-20 select-none translate-y-8" aria-hidden="true">
                  MATHEUS MAXS
                </span>
            </div>
        </div>
      </div>
    </div>
  );
};