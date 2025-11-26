import React from 'react';

export const ScrollIndicator: React.FC = () => {
  return (
    <div className="border border-[#333] rounded-[2px] p-1.5 w-full max-w-[280px] relative group select-none h-[90px] bg-[#0c0c0c] flex">
       {/* Corner accents (Outer) */}
       <div className="absolute -bottom-[1px] -right-[1px] w-2 h-2 border-b border-r border-white opacity-60"></div>

      {/* Content Container */}
      <div className="flex justify-between items-stretch w-full h-full">
        
        {/* Left Side: Text */}
        <div className="flex flex-col justify-center pl-3">
          <span className="font-jp text-2xl font-bold leading-[1.15] text-[#e5e5e5] tracking-widest mb-1.5">
            下にスク<br/>
            ロール
          </span>
          <span className="text-[10px] font-mono text-[#555] tracking-[0.15em] block -ml-0.5">“ scroll down “</span>
        </div>
        
        {/* Right Side: Arrow Box */}
        <div className="w-[60px] ml-auto border-l border-[#333] flex flex-col items-center justify-center relative">
            {/* Stacked Chevrons */}
            <div className="flex flex-col gap-[3px] opacity-90">
              <Chevron />
              <Chevron />
              <Chevron />
              <Chevron />
            </div>
        </div>
      </div>
    </div>
  );
};

const Chevron = () => (
  <svg width="24" height="8" viewBox="0 0 24 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="block">
    <path d="M1 1L12 7L23 1" stroke="#e5e5e5" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter"/>
  </svg>
);