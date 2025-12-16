import React, { useState } from 'react';
import { VerticalMarquee } from './components/VerticalMarquee';
import { MainContent } from './components/MainContent';
import { ImagePanel } from './components/ImagePanel';
import { Menu, X } from 'lucide-react';

declare const __LAST_COMMIT_DATE__: string | undefined;

const saoPauloFormatter = new Intl.DateTimeFormat('pt-BR', {
  timeZone: 'America/Sao_Paulo',
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
});

const formatCommitDate = (raw?: string) => {
  if (!raw) return '—';
  const parsed = new Date(raw);
  if (Number.isNaN(parsed.getTime())) return '—';

  const [day, month, year] = saoPauloFormatter.format(parsed).split('/');
  return `${day} / ${month} / ${year}`;
};

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('HOME');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const lastCommitDate = formatCommitDate(
    typeof __LAST_COMMIT_DATE__ !== 'undefined' ? __LAST_COMMIT_DATE__ : undefined
  );

  // Sections that consume the full layout (hiding image panel and marquee)
  const isFullPage = ['ABOUT', 'SKILLS', 'LEARNING', 'PROJECTS', 'CONTACT'].includes(activeSection);

  const navItems = ['HOME', 'ABOUT', 'SKILLS', 'LEARNING', 'PROJECTS & DESIGNS', 'CONTACT'];

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#e5e5e5] font-sans selection:bg-white selection:text-black flex flex-col items-center justify-center p-0 md:p-6 lg:p-8 relative overflow-hidden">
      
      {/* Global Noise Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.12] bg-noise mix-blend-overlay"></div>

      {/* Main Container / Border Frame */}
      <div className="w-full md:max-w-[1400px] h-[92vh] md:h-[85vh] supports-[height:100dvh]:h-[92dvh] min-h-[600px] border-x md:border border-[#222] relative flex flex-col bg-[#0c0c0c] shadow-2xl transition-all duration-300">
        
        {/* Top Bar */}
        <div className="h-12 border-b border-[#222] flex justify-between items-center px-4 md:px-5 shrink-0 bg-[#0c0c0c] z-30 relative">
          <div className="flex items-center gap-6 z-10">
             {/* Window Controls */}
             <div className="flex gap-2.5">
                <div className="w-3.5 h-3.5 rounded-full bg-[#333]"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-[#333]"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-[#333]"></div>
             </div>
             <div className="font-jp text-xs text-gray-400 tracking-widest cursor-default pt-0.5 opacity-70 hidden sm:block">
                マテウス・デヴ
             </div>
          </div>

          {/* Centered Navigation Menu (Desktop) */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:flex">
            <nav className="flex items-center gap-4 text-[10px] font-bold tracking-widest text-[#666] font-sans">
              {navItems.map((item, index) => (
                <React.Fragment key={item}>
                  <button 
                    onClick={() => setActiveSection(item.split(' ')[0])} 
                    className={`hover:text-[#e5e5e5] transition-colors uppercase ${activeSection === item.split(' ')[0] ? 'text-white' : ''}`}
                  >
                    {item}
                  </button>
                  {index < navItems.length - 1 && <span className="text-[#333]">/</span>}
                </React.Fragment>
              ))}
            </nav>
          </div>

          {/* Right Side: Date (Desktop) & Menu Toggle (Mobile) */}
          <div className="flex items-center gap-4 z-20">
            <div className="hidden md:block font-mono text-[10px] text-gray-500 tracking-widest pt-0.5">
                {lastCommitDate}
            </div>
            
            <button 
              className="lg:hidden text-[#888] hover:text-white transition-colors p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`absolute inset-0 bg-[#0c0c0c] z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
             {navItems.map((item) => {
                const sectionName = item.split(' ')[0];
                const isActive = activeSection === sectionName;
                return (
                  <button 
                      key={item}
                      onClick={() => handleNavClick(sectionName)}
                      className={`text-2xl md:text-4xl font-black font-display tracking-wider uppercase hover:text-white transition-all transform hover:scale-105 ${isActive ? 'text-white' : 'text-[#333]'}`}
                  >
                      {item}
                  </button>
                );
             })}
        </div>

        {/* Main Grid */}
        <div className="flex flex-1 overflow-hidden relative">
          
          {/* Left decorative column (Vertical Text) - Hidden on mobile/tablet AND FullPage sections */}
          {!isFullPage && <VerticalMarquee />}

          {/* Content Columns */}
          <div className="flex flex-col lg:flex-row w-full h-full">
            
            {/* Text Content (Left/Bottom) */}
            <div className={`w-full ${isFullPage ? '' : 'lg:w-1/2'} h-full relative border-r border-[#222] bg-[#0c0c0c] order-2 lg:order-1 flex flex-col overflow-hidden transition-all duration-300`}>
               <MainContent activeSection={activeSection} />
            </div>

            {/* Image Content (Right/Top) - Hidden on FullPage sections AND Mobile/Tablet */}
            {!isFullPage && (
              <div className="hidden lg:block w-full lg:w-1/2 h-full relative order-1 lg:order-2 border-b lg:border-b-0 border-[#222]">
                <ImagePanel />
              </div>
            )}

          </div>
        </div>

        {/* Bottom Decoration - The "0" Pill */}
        <div className="absolute -bottom-[14px] left-1/2 transform -translate-x-1/2 z-40">
          <div className="bg-[#0c0c0c] rounded-full px-3 py-0.5 flex items-center justify-center border border-[#222] shadow-[0_0_0_4px_#080808]">
             <span className="text-[#444] font-mono text-[9px] font-bold tracking-widest">( 0 )</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;