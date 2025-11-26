import React from 'react';

export const ImagePanel: React.FC = () => {
  return (
    <div className="relative h-full w-full p-4 md:p-10 lg:p-14 flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
      {/* Wrapper to hold both frames centered */}
      <div className="relative w-full h-full md:max-w-xl">
          
          {/* Back Offset Frame (Shadow/Ghost) */}
          <div className="absolute inset-0 border-[3px] border-white bg-black/20 opacity-40 -translate-x-3 -translate-y-3 md:-translate-x-6 md:-translate-y-6"></div>

          {/* Front Main Frame */}
          <div className="relative w-full h-full border-[3px] border-white bg-black overflow-hidden z-10">
            
            {/* The Image - Flipped horizontally (scale-x-[-1]) */}
            <img 
                src="https://i.imgur.com/isgU6Hn.png" 
                alt="Workspace with person coding" 
                className="w-full h-full object-cover filter grayscale contrast-[1.15] brightness-[0.8] "
            />

            {/* Noise Overlay */}
            <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none mix-blend-overlay"></div>
          </div>
      </div>
    </div>
  );
};