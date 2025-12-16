import React from 'react';
import { ScrollIndicator } from './ScrollIndicator';
import { ArrowUpRight, Github, Twitter, Linkedin, Terminal, Cpu, Layers, Box, BookOpen, Monitor, Figma, Mail, MapPin, Send } from 'lucide-react';

interface MainContentProps {
  activeSection: string;
}

export const MainContent: React.FC<MainContentProps> = ({ activeSection }) => {
  const isHome = activeSection === 'HOME';
  
  // -- Content Components --

  const HomeContent = () => (
    <>
      {/* Name Header */}
      <div className="mb-3 md:mb-4 animate-fade-in">
        <h1 className="text-[1.8rem] sm:text-[2rem] md:text-[2.2rem] lg:text-[2.4rem] font-black tracking-tighter leading-[0.95] md:leading-[0.9] text-white font-sans">
          <span className="text-[#333] mr-1">.</span>I’m a Front-End Engineer <br/>
          <span className="text-[#555]">& Web Designer</span>
        </h1>
      </div>

      {/* Decorative vertical line and quote */}
      <div className="flex gap-4 md:gap-4 mb-8 md:mb-10 pl-1 animate-fade-in [animation-delay:100ms]">
        <div className="w-[4px] md:w-[6px] bg-[#333] shrink-0"></div>
        <p className="text-lg md:text-xl text-[#6b6a6aff] font-medium leading-[1.2] max-w-md py-1">
          I create digital experiences with code and minimalist design.
        </p>
      </div>

      {/* Body Text */}
      <div className="max-w-[460px] text-[#777] font-sans text-xs md:text-[14px] leading-relaxed text-justify tracking-normal animate-fade-in [animation-delay:200ms]">
        <p className="mb-4 md:mb-5 font-mono text-[#555]">
           console.log("Hello World!");
        </p>
        <p className="mb-4 md:mb-5">
           I’m Matheus Maxs, a 14‑year‑old Front‑End Engineer & Web Designer with over 2 years of experience crafting modern, accessible, and high‑performance user interfaces. Passionate about transforming design into code, I create digital experiences that merge minimalist aesthetics with robust engineering.
        </p>
        <p className="mb-4 md:mb-5">
           I believe simplicity is power: every line of code and every pixel should be intentional. My focus is on developing scalable, seamless, and intuitive products—where technology serves human experience, not the other way around.
        </p>
        <p>
           Currently, I’m expanding my expertise toward Full Stack Development with Java and Spring, aiming to design and build complete, performant applications that combine elegant front‑end experiences with solid, enterprise‑grade backends.
        </p>
      </div>
    </>
  );

  const AboutContent = () => (
    <div className="animate-fade-in w-full min-h-full flex flex-col">
      {/* Main Two Columns */}
      <div className="flex flex-col lg:flex-row w-full gap-8 lg:gap-20 mb-6">
        {/* Left Column: Header + Bio Text */}
        <div className="w-full lg:w-1/2 flex flex-col">
            {/* Header */}
            <div className="mb-6 md:mb-10 relative shrink-0 flex flex-col md:block">
                <h2 className="text-[2.75rem] sm:text-[3.5rem] md:text-[5rem] font-display font-black text-white leading-none tracking-tight inline-block md:block">
                ABOUT.
                </h2>
                <span className="mt-2 md:mt-0 md:absolute md:-top-2 md:left-[220px] self-start text-[10px] md:text-xs font-mono text-[#444] tracking-widest border border-[#333] px-2 py-0.5 rounded-full">
                WHO I AM
                </span>
            </div>

            {/* Intro Subtitle */}
            <h3 className="text-xl md:text-2xl text-[#e5e5e5] font-bold mb-6 tracking-tight">
                Engineering the web, <span className="text-[#555]">pixel by pixel.</span>
            </h3>

            {/* Bio Text */}
            <div className="text-[#888] font-sans text-[13px] md:text-[14px] leading-7 space-y-4 text-justify">
                <p>
                I am Matheus Maxs, a passionate Front-End Engineer dedicated to building accessible, pixel-perfect user interfaces that blend thoughtful design with robust engineering.
                </p>
                <p>
                With a strong foundation in modern web technologies and a love for minimalist aesthetics, I approach every project with a focus on user experience, performance, and maintainable code. I believe that good design is invisible—it just works.
                </p>
                <p>
                Currently, I’m expanding my expertise toward Full Stack Development with Java and Spring, aiming to design and build complete, performant applications that combine elegant front‑end experiences with solid, enterprise‑grade backends.
                </p>
            </div>
        </div>

        {/* Right Column: My Approach */}
        <div className="w-full lg:w-1/2 pt-1">
            <div className="border-t border-[#222] pt-6 lg:pt-0 lg:border-t-0">
                <h4 className="text-white font-bold tracking-widest text-xl mb-6 uppercase flex items-center gap-3">
                    <span className="w-2.5 h-2.5 bg-[#333]"></span>
                    My Approach
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                    <div className="group">
                        <div className="text-[#333] font-mono text-sm mb-3 group-hover:text-[#555] transition-colors">01 / DESIGN</div>
                        <h5 className="text-[#e5e5e5] font-medium mb-2 text-2xl">Minimalist & Functional</h5>
                        <p className="text-[#888] text-base leading-relaxed">
                            I believe in stripping away the unnecessary. Every element should serve a purpose, creating interfaces that are both beautiful and easy to use.
                        </p>
                    </div>
                    <div className="group">
                        <div className="text-[#333] font-mono text-sm mb-3 group-hover:text-[#555] transition-colors">02 / CODE</div>
                        <h5 className="text-[#e5e5e5] font-medium mb-2 text-2xl">Scalable & Clean</h5>
                        <p className="text-[#888] text-base leading-relaxed">
                            Writing code is an art. I focus on creating maintainable, modular, and efficient codebases that can grow with the product.
                        </p>
                    </div>
                    <div className="group">
                        <div className="text-[#333] font-mono text-sm mb-3 group-hover:text-[#555] transition-colors">03 / PERFORMANCE</div>
                        <h5 className="text-[#e5e5e5] font-medium mb-2 text-2xl">Fast & Responsive</h5>
                        <p className="text-[#888] text-base leading-relaxed">
                            Speed matters. I optimize every asset and line of code to ensure instant load times and buttery smooth interactions on any device.
                        </p>
                    </div>
                    <div className="group">
                        <div className="text-[#333] font-mono text-sm mb-3 group-hover:text-[#555] transition-colors">04 / STRATEGY</div>
                        <h5 className="text-[#e5e5e5] font-medium mb-2 text-2xl">Problem Solving</h5>
                        <p className="text-[#888] text-base leading-relaxed">
                            Understanding the 'why' before the 'how'. I collaborate closely to ensure technical solutions align perfectly with business goals.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Bottom Section: Info Grid */}
      <div className="w-full mt-auto pt-4 border-t border-[#222]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                 <div className="border border-[#222] p-4 bg-[#0f0f0f] ">
                    <div className="text-[10px] font-mono text-[#555] uppercase tracking-widest mb-1 ">Location</div>
                    <div className="text-white font-medium">Mato Grosso, Brazil</div>
                 </div>
                 <div className="border border-[#222] p-4 bg-[#0f0f0f] ">
                    <div className="text-[10px] font-mono text-[#555] uppercase tracking-widest mb-1 ">Experience</div>
                    <div className="text-white font-medium">2+ Years</div>
                 </div>
                 <div className="border border-[#222] p-4 bg-[#0f0f0f] ">
                    <div className="text-[10px] font-mono text-[#555] uppercase tracking-widest mb-1">Status</div>
                    <div className="text-white font-medium text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gray rounded-full animate-pulse"></span>
                    Open to work
                    </div>
                 </div>
                 <div className="border border-[#222] p-4 bg-[#0f0f0f] ">
                    <div className="text-[10px] font-mono text-[#555] uppercase tracking-widest mb-1 ">Socials</div>
                     <div className="flex items-center gap-4">
                         <a href="https://github.com/MatheusMaxs" className="text-[#666] hover:text-white transition-colors hover:scale-110 transform duration-200"><Github size={20} /></a>
                         <a href="#" className="text-[#666] hover:text-white transition-colors hover:scale-110 transform duration-200"><Twitter size={20} /></a>
                         <a href="https://www.linkedin.com/in/matheusmaxs" className="text-[#666] hover:text-white transition-colors hover:scale-110 transform duration-200"><Linkedin size={20} /></a>
                     </div>
                 </div>
            </div>
      </div>
    </div>
  );

  const SkillsContent = () => (
    <div className="animate-fade-in w-full min-h-full flex flex-col">
      {/* Header */}
      <div className="mb-8 md:mb-12 relative shrink-0 flex flex-col md:block">
        <h2 className="text-[2.75rem] sm:text-[3.5rem] md:text-[5rem] font-display font-black text-white leading-none tracking-tight inline-block md:block">
          SKILLS.
        </h2>
        <span className="mt-2 md:mt-0 md:absolute md:-top-2 md:left-[240px] self-start text-[10px] md:text-xs font-mono text-[#444] tracking-widest border border-[#333] px-2 py-0.5 rounded-full">
          THE TOOLKIT
        </span>
      </div>

      {/* Skills Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-12 flex-1">
          
          {/* Card 1: Core Stack */}
          <div className="border border-[#222] bg-[#0a0a0a] p-6 md:p-8 flex flex-col relative">
             <div className="absolute top-4 right-4 text-[#333]">
                <Terminal size={20} />
             </div>
             <h3 className="font-mono text-[#555] text-[10px] tracking-[0.2em] mb-8 uppercase">01 // Development</h3>
             
             <div className="space-y-8">
                <div>
                   <div className="flex justify-between items-baseline mb-2">
                       <h4 className="text-2xl md:text-3xl font-bold text-white tracking-tight">React</h4>
                       <span className="text-[#444] font-mono text-xs">95%</span>
                   </div>
                   <p className="text-[#777] text-xs font-mono uppercase tracking-wide">
                      Next.js • Hooks • Context
                   </p>
                </div>
                
                <div className="h-[1px] w-full bg-[#1a1a1a]"></div>

                <div>
                   <div className="flex justify-between items-baseline mb-2">
                       <h4 className="text-2xl md:text-3xl font-bold text-white tracking-tight">TypeScript</h4>
                       <span className="text-[#444] font-mono text-xs">90%</span>
                   </div>
                   <p className="text-[#777] text-xs font-mono uppercase tracking-wide">
                      Strict Types • Generics
                   </p>
                </div>
             </div>
          </div>

          {/* Card 2: Styling & UI */}
          <div className="border border-[#222] bg-[#0a0a0a] p-6 md:p-8 flex flex-col relative ">
             <div className="absolute top-4 right-4 text-[#333] ">
                <Layers size={20} />
             </div>
             <h3 className="font-mono text-[#555] text-[10px] tracking-[0.2em] mb-8 uppercase">02 // Interface</h3>
             
             <ul className="space-y-6 mt-2">
                <li className="group/item">
                    <span className="block text-xl font-bold text-[#ccc] ">Tailwind CSS</span>
                    <span className="text-[11px] text-[#555] font-mono">Advanced Config & Plugins</span>
                </li>
                <li className="group/item">
                    <span className="block text-xl font-bold text-[#ccc] ">Framer Motion</span>
                    <span className="text-[11px] text-[#555] font-mono">Layout Animations & Gestures</span>
                </li>
                <li className="group/item">
                    <span className="block text-xl font-bold text-[#ccc] ">CSS/Sass</span>
                    <span className="text-[11px] text-[#555] font-mono">Modules & Architecture</span>
                </li>
             </ul>
          </div>

          {/* Card 3: Tools & Workflow */}
          <div className="border border-[#222] bg-[#0a0a0a] p-6 md:p-8 flex flex-col relative ">
             <div className="absolute top-4 right-4 text-[#333] ">
                <Box size={20} />
             </div>
             <h3 className="font-mono text-[#555] text-[10px] tracking-[0.2em] mb-8 uppercase">03 // Workflow</h3>
             
             <div className="flex flex-wrap gap-2 content-start mb-8">
                {['Git', 'GitHub', 'Vite', 'Webpack', 'Figma', 'Jest', 'Docker', 'Linux',].map(tool => (
                    <span key={tool} className="border border-[#222] bg-[#0f0f0f] px-3 py-1.5 text-xs text-[#888] ">
                        {tool}
                    </span>
                ))}
             </div>

             <div className="mt-auto border-t border-[#222] pt-6">
                <div className="flex items-center gap-3 mb-2">
                    <Cpu size={16} className="text-[#444]" />
                    <span className="text-white font-bold text-sm">Currently Learning</span>
                </div>
                <div className="flex gap-4">
                    <div className="text-[#666] text-xs font-mono">
                        <span className="text-[#333] mr-2"></span>
                        WebGL / Three.js
                    </div>
                    <div className="text-[#666] text-xs font-mono">
                         <span className="text-[#333] mr-2"></span>
                        Rust
                    </div>
                </div>
             </div>
          </div>
      </div>
      
      {/* Skills Footer */}
      <div className="border-t border-[#222] pt-6 flex justify-between items-center mt-auto">
         <div className="flex flex-col gap-1">
            <span className="text-[10px] font-mono text-[#444] uppercase tracking-widest">Philosophy</span>
            <p className="text-[#777] text-xs font-mono max-w-md">
                Using the right tool for the job. Prioritizing performance, scalability, and developer experience.
            </p>
         </div>
         <div className="hidden md:flex gap-1">
             {[80, 40, 60, 90, 30, 70, 50, 20].map((h, i) => (
                 <div key={i} className="w-1 bg-[#222] " style={{ height: `${h * 0.4}px` }}></div>
             ))}
         </div>
      </div>
    </div>
  );

  const LearningContent = () => (
    <div className="animate-fade-in w-full min-h-full flex flex-col">
      {/* Header */}
      <div className="mb-8 md:mb-12 relative shrink-0 flex flex-col md:block">
        <h2 className="text-[2.75rem] sm:text-[3.5rem] md:text-[5rem] font-display font-black text-white leading-none tracking-tight inline-block md:block">
          LEARNING.
        </h2>
        <span className="mt-2 md:mt-0 md:absolute md:-top-2 md:left-[320px] self-start text-[10px] md:text-xs font-mono text-[#444] tracking-widest border border-[#333] px-2 py-0.5 rounded-full">
          KNOWLEDGE BASE
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 w-full mb-12 flex-1">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
              
              {/* Main Focus Card */}
              <div className="border border-[#222] bg-[#0a0a0a] p-6 md:p-8 relative  ">
                  <div className="absolute top-6 right-6 text-[#333] ">
                      <Cpu size={24} />
                  </div>
                  <h3 className="font-mono text-[#555] text-[10px] tracking-[0.2em] mb-6 uppercase">Current Focus</h3>
                  
                  <h4 className="text-2x1 md:text-3xl font-bold text-white mb-3">Full Stack Development</h4>
                  <p className="text-[#888] text-sm leading-relaxed mb-6 max-w">
                    Expanding from React + TypeScript into Java with Spring Boot, building RESTful APIs, exploring database integration, and connecting robust backends with modern frontends.
                  </p>
                  <div className="space-y-2">
                      <div className="flex justify-between text-[10px] font-mono text-[#555] uppercase tracking-wider">
                          <span>Spring Journey</span>
                          <span>32%</span>
                      </div>
                      <div className="w-full h-1 bg-[#1a1a1a] overflow-hidden">
                          <div className="h-full bg-[#e5e5e5] w-[32%]"></div>
                      </div>
                  </div>
              </div>

              {/* Resources / Platforms */}
              <div className="border border-[#222] bg-[#0a0a0a] p-6 md:p-8 flex-1 relative ">
                   <h3 className="font-mono text-[#555] text-[10px] tracking-[0.2em] mb-6 uppercase">Sources</h3>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-[#333] rounded-full"></div>
                            <span className="text-[#ccc] text-sm font-medium">Frontend Masters</span>
                        </div>
                         <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-[#333] rounded-full"></div>
                            <span className="text-[#ccc] text-sm font-medium">Awwwards Academy</span>
                        </div>
                         <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-[#333] rounded-full"></div>
                            <span className="text-[#ccc] text-sm font-medium">Spring Documentation</span>
                        </div>
                         <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-[#333] rounded-full"></div>
                            <span className="text-[#ccc] text-sm font-medium">Baeldung</span>
                        </div>
                   </div>
              </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
               {/* Books */}
               <div className="border border-[#222] bg-[#0a0a0a] p-6 md:p-8 relative flex-1">
                   <div className="absolute top-6 right-6 text-[#333] ">
                      <BookOpen size={24} />
                   </div>
                   <h3 className="font-mono text-[#555] text-[10px] tracking-[0.2em] mb-6 uppercase">Reading List</h3>
                   
                   <ul className="space-y-6">
                       <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 group/book">
                           <div>
                               <span className="block text-lg text-[#e5e5e5] font-bold ">Clean Architecture</span>
                               <span className="text-xs text-[#666] font-mono">Robert C. Martin</span>
                           </div>
                           <span className="inline-block px-2 py-1 border border-[#222] bg-[#111] text-[9px] text-[#555] uppercase tracking-widest text-center min-w-[60px]">Read</span>
                       </li>
                       <li className="w-full h-[1px] bg-[#1a1a1a]"></li>
                       <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 group/book">
                           <div>
                               <span className="block text-lg text-[#e5e5e5] font-bold ">Spring in Action</span>
                               <span className="text-xs text-[#666] font-mono">Craig Walls</span>
                           </div>
                           <span className="inline-block px-2 py-1 border border-[#222] bg-[#111] text-[9px] text-[#e5e5e5] uppercase tracking-widest text-center min-w-[60px] animate-pulse">Reading</span>
                       </li>
                        <li className="w-full h-[1px] bg-[#1a1a1a]"></li>
                        <li className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 group/book">
                           <div>
                               <span className="block text-lg text-[#e5e5e5] font-bold ">Effective Java</span>
                               <span className="text-xs text-[#666] font-mono">Joshua Bloch</span>
                           </div>
                           <span className="inline-block px-2 py-1 border border-[#222] bg-[#111] text-[9px] text-[#444] uppercase tracking-widest text-center min-w-[60px]">Next</span>
                       </li>
                   </ul>
               </div>

               {/* Interest Tags */}
               <div className="border border-[#222] bg-[#0a0a0a] p-6 relative ">
                    <h3 className="font-mono text-[#555] text-[10px] tracking-[0.2em] mb-4 uppercase">Exploration</h3>
                    <div className="flex flex-wrap gap-2">
                        {['Spring Security', 'PostgreSQL', 'REST APIs', 'AI Agents', 'UI/UX Psych.', 'Accessibility'].map(tag => (
                            <span key={tag} className="text-xs text-[#666] border border-[#222] px-2 py-1 bg-[#0f0f0f] select-none ">
                                {tag}
                            </span>
                        ))}
                    </div>
               </div>
          </div>
      </div>
    </div>
  );

  const ProjectsContent = () => (
    <div className="animate-fade-in w-full min-h-full flex flex-col">
      {/* Header */}
      <div className="mb-8 md:mb-12 relative shrink-0 flex flex-col md:block">
        <h2 className="text-[2.75rem] sm:text-[3.5rem] md:text-[5rem] font-display font-black text-white leading-none tracking-tight inline-block md:block">
          WORK.
        </h2>
        <span className="mt-2 md:mt-0 md:absolute md:-top-2 md:left-[200px] self-start text-[10px] md:text-xs font-mono text-[#444] tracking-widest border border-[#333] px-2 py-0.5 rounded-full">
          SELECTED
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full mb-12 flex-1">
          {/* Project 1 */}
          <div className="border border-[#222] bg-[#0a0a0a] group hover:border-[#333] transition-colors flex flex-col">
              <div className="h-72 bg-[#111] relative overflow-hidden border-b border-[#222]">
                  {/* Pattern or Placeholder */}
                   <div 
                    className="absolute inset-0 bg-cover bg-center opacity-100 bottom-[-22px]"
                    style={{ backgroundImage: "url('https://i.imgur.com/wAwK6Yy.png')" }}
                   ></div>
                   <div className="absolute bottom-4 left-4">
                       <Monitor size={24} className="text-[#444]" />
                   </div> 
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-white">Excludia Website Redesign</h3>
                      <div className="flex gap-2">
                           <a href="https://github.com/MatheusMaxs/Excludia" target="_blank" className="text-[#666] hover:text-white"><Github size={18} /></a>
                           <a href="https://excludia.vercel.app" target="_blank" className="text-[#666] hover:text-white"><ArrowUpRight size={18} /></a>
                      </div>
                  </div>
                  <p className="text-[#888] text-sm leading-relaxed mb-6">
                     Modern redesign for a digital agency website with a clean, neo-brutalist aesthetic. Built with Next.js and Tailwind CSS, it delivers fast performance, responsive design, and seamless user experience.
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2">
                      {['React', 'TypeScript'].map(t => (
                          <span key={t} className="text-[10px] font-mono text-[#555] border border-[#222] px-2 py-1">{t}</span>
                      ))}
                  </div>
              </div>
          </div>

          {/* Project 2 */}
           <div className="border border-[#222] bg-[#0a0a0a] group hover:border-[#333] transition-colors flex flex-col">
              <div className="h-72 bg-[#111] relative overflow-hidden border-b border-[#222]">
                   <div className="absolute inset-0 bg-noise opacity-20"></div>
                   <div className="absolute bottom-4 left-4">
                       <Monitor size={24} className="text-[#444]" />
                   </div>
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-white">TaskFlow API - Building</h3>
                      <div className="flex gap-2">
                           <a href="#" className="text-[#666] hover:text-white"><Github size={18} /></a>
                      </div>
                  </div>
                  <p className="text-[#888] text-sm leading-relaxed mb-6">
                      RESTful API built with Java + Spring Boot, focusing on authentication, PostgreSQL integration, and clean architecture while connecting to a React frontend.
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2">
                      {['Java', 'Spring Boot', 'PostgreSQL', 'React'].map(t => (
                          <span key={t} className="text-[10px] font-mono text-[#555] border border-[#222] px-2 py-1">{t}</span>
                      ))}
                  </div>
              </div>
          </div>

           {/* Design Section (Full Width or Grid) */}
           <div className="lg:col-span-2 mt-4 mb-12">
                <h4 className="text-white font-bold tracking-widest text-xl mb-6 uppercase flex items-center gap-3">
                    <span className="w-2.5 h-2.5 bg-[#333]"></span>
                    UI / UX Experiments
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                     {/* Design 1 */}
                     <a href="https://www.figma.com/design/a3lEDW2fgwd2fcBx0mjS07/My-design-for-adidas" target="_blank" className="border border-[#222] bg-[#0a0a0a] hover:border-[#333] transition-colors group block flex flex-col cursor-pointer">
                         <div className="h-56 bg-[#111] relative overflow-hidden border-b border-[#222]"
                         style={{     backgroundImage: "url('https://i.imgur.com/UEL0WgB.png')",
                                      backgroundSize: "100% ",
                                       backgroundPosition: "center",
                                       backgroundRepeat: "no-repeat",
                                    }}>
                                <div className="absolute inset-0 bg-noise opacity-20"></div>
                         </div>
                         <div className="p-6">
                             <div className="flex justify-between mb-4">
                                 <Figma size={20} className="text-[#444] group-hover:text-[#ea4c1d] transition-colors" />
                                 <ArrowUpRight size={16} className="text-[#444] opacity-0 group-hover:opacity-100 transition-opacity" />
                             </div>
                             <h5 className="text-white font-medium mb-1">Design for a shoe of adidas (onw the game 3.0)</h5>
                             <p className="text-[#666] text-xs">Figma Design UI/UX & Product Design</p>
                         </div>
                     </a>
                      {/* Design 2 */}
                      <a href="https://www.figma.com/design/O1ICldZ1x2ONvkuSeRiIH6/My-design-for-nike-x-Febre-90-s" target="_blank" className="border border-[#222] bg-[#0a0a0a] hover:border-[#333] transition-colors group block flex flex-col cursor-pointer">
                         <div className="h-56 bg-[#111] relative overflow-hidden border-b border-[#222]"
                         style={{     backgroundImage: "url('https://i.imgur.com/cM15FQ0.png')",
                                      backgroundSize: "100% ",
                                       backgroundPosition: "center",
                                       backgroundRepeat: "no-repeat",
                                    }}>
                                <div className="absolute inset-0 bg-noise opacity-20"></div>
                         </div>
                         <div className="p-6">
                             <div className="flex justify-between mb-4">
                                 <Figma size={20} className="text-[#444] group-hover:text-[#ea4c1d] transition-colors" />
                                 <ArrowUpRight size={16} className="text-[#444] opacity-0 group-hover:opacity-100 transition-opacity" />
                             </div>
                             <h5 className="text-white font-medium mb-1">Design for a shoe of Nike x Febre 90's</h5>
                             <p className="text-[#666] text-xs">Figma Design UI/UX & Product Design</p>
                         </div>
                     </a>
                      {/* Design 3 */}
                     <a href="#" className="border border-[#222] bg-[#0a0a0a] hover:border-[#333] transition-colors group block flex flex-col cursor-pointer">
                         <div className="h-56 bg-[#111] relative overflow-hidden border-b border-[#222]">
                             <div className="absolute inset-0 bg-noise opacity-20"></div>
                             <div className="absolute inset-0 flex items-center justify-center">
                                 <div className="w-20 h-12 border border-[#333] opacity-30 group-hover:scale-110 transition-transform duration-500"></div>
                             </div>
                         </div>
                         <div className="p-6">
                             <div className="flex justify-between mb-4">
                                 <Figma size={20} className="text-[#444] group-hover:text-[#ea4c1d] transition-colors" />
                                 <ArrowUpRight size={16} className="text-[#444] opacity-0 group-hover:opacity-100 transition-opacity" />
                             </div>
                             <h5 className="text-white font-medium mb-1">Undefined</h5>
                             <p className="text-[#666] text-xs">Interface Design</p>
                         </div>
                     </a>
                </div>
           </div>
      </div>
    </div>
  );

  const ContactContent = () => (
    <div className="animate-fade-in w-full min-h-full flex flex-col">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mb-12 flex-1">
          {/* Left Column: Header + Contact Info */}
          <div className="flex flex-col lg:h-full">
              {/* Header moved inside Left Column to allow Right Column (Form) to align with top */}
              <div className="mb-8 md:mb-10 relative shrink-0 flex flex-col md:block">
                <h2 className="text-[2.75rem] sm:text-[3.5rem] md:text-[5rem] font-display font-black text-white leading-none tracking-tight inline-block md:block">
                  CONTACT.
                </h2>
                <span className="mt-2 md:mt-0 md:absolute md:-top-2 md:left-[280px] self-start text-[10px] md:text-xs font-mono text-[#444] tracking-widest border border-[#333] px-2 py-0.5 rounded-full">
                  GET IN TOUCH
                </span>
              </div>

              <div className="mb-8 shrink-0">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Let's build something <br/><span className="text-[#555]">meaningful.</span></h3>
                  <p className="text-[#888] text-sm leading-relaxed max-w-md">
                      Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
                  </p>
              </div>

              {/* Flex Container to push layout to bottom */}
              <div className="flex flex-col flex-1 justify-between gap-6 mb-8">
                  {/* Email */}
                  <div className="w-full border border-[#222] bg-[#0a0a0a] p-6 ">
                      <div className="flex items-center gap-4 mb-2">
                          <Mail size={20} className="text-[#444]" />
                          <span className="font-mono text-[#555] text-xs uppercase tracking-widest">Email</span>
                      </div>
                      <a href="mailto:hello@matheus.dev" className="text-xl md:text-2xl text-white font-bold hover:underline decoration-[#333] underline-offset-4 break-all md:break-normal">
                          hello@matheus.dev
                      </a>
                  </div>
                  
                  {/* Bottom Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Location */}
                      <div className="border border-[#222] bg-[#0a0a0a] p-6">
                          <div className="flex items-center gap-4 mb-2">
                              <MapPin size={20} className="text-[#444]" />
                              <span className="font-mono text-[#555] text-xs uppercase tracking-widest">Location</span>
                          </div>
                          <p className="text-lg text-white font-bold">
                              Mato Grosso, Brazil
                          </p>
                          <p className="text-[#666] text-xs font-mono mt-1">GMT-4 (Available for Remote)</p>
                      </div>

                       {/* Socials */}
                       <div className="border border-[#222] bg-[#0a0a0a] p-6 ">
                           <div className="flex items-center gap-4 mb-4">
                              <span className="font-mono text-[#555] text-xs uppercase tracking-widest">Socials</span>
                           </div>
                           <div className="flex gap-3">
                               <a href="https://github.com/MatheusMaxs" className="w-10 h-10 border border-[#222] bg-[#0f0f0f] flex items-center justify-center text-[#666] hover:text-white hover:border-[#444] transition-all hover:scale-105">
                                   <Github size={18} />
                               </a>
                               <a href="https://www.linkedin.com/in/matheusmaxs" className="w-10 h-10 border border-[#222] bg-[#0f0f0f] flex items-center justify-center text-[#666] hover:text-white hover:border-[#444] transition-all hover:scale-105">
                                   <Linkedin size={18} />
                               </a>
                               <a href="#" className="w-10 h-10 border border-[#222] bg-[#0f0f0f] flex items-center justify-center text-[#666] hover:text-white hover:border-[#444] transition-all hover:scale-105">
                                   <Twitter size={18} />
                               </a>
                           </div>
                      </div>
                  </div>
              </div>
          </div>

          {/* Right Column: Form */}
          <div className="border border-[#222] bg-[#0a0a0a] p-6 md:p-8 flex flex-col w-full lg:self-start h-fit">
              <h3 className="font-mono text-[#555] text-[10px] tracking-[0.2em] mb-8 uppercase">Send a Message</h3>
              
              <form className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                          <label htmlFor="name" className="text-xs font-mono text-[#666] uppercase tracking-wider">Name</label>
                          <input type="text" id="name" className="w-full bg-[#0f0f0f] border border-[#222] p-3 text-white text-base md:text-sm focus:outline-none focus:border-[#444] transition-colors placeholder-[#333]" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                          <label htmlFor="email" className="text-xs font-mono text-[#666] uppercase tracking-wider">Email</label>
                          <input type="email" id="email" className="w-full bg-[#0f0f0f] border border-[#222] p-3 text-white text-base md:text-sm focus:outline-none focus:border-[#444] transition-colors placeholder-[#333]" placeholder="john@example.com" />
                      </div>
                  </div>
                  
                  <div className="space-y-2">
                      <label htmlFor="subject" className="text-xs font-mono text-[#666] uppercase tracking-wider">Subject</label>
                       <input type="text" id="subject" className="w-full bg-[#0f0f0f] border border-[#222] p-3 text-white text-base md:text-sm focus:outline-none focus:border-[#444] transition-colors placeholder-[#333]" placeholder="Project Inquiry" />
                  </div>

                  <div className="space-y-2 flex flex-col">
                      <label htmlFor="message" className="text-xs font-mono text-[#666] uppercase tracking-wider">Message</label>
                      <textarea id="message" className="w-full bg-[#0f0f0f] border border-[#222] p-3 text-white text-base md:text-sm focus:outline-none focus:border-[#444] transition-colors placeholder-[#333] resize-none min-h-[120px]" placeholder="Tell me about your project..."></textarea>
                  </div>

                  <button type="button" className="w-full bg-[#e5e5e5] text-black font-bold py-4 uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2 mt-2">
                      <span>Send Message</span>
                      <Send size={16} />
                  </button>
              </form>
          </div>
      </div>
    </div>
  );

  // -- Render Logic --

  return (
    <div className="flex flex-col h-full relative z-10">
      
      {/* Scrollable Upper Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-5 md:px-10 lg:px-12 pt-8 pb-32 md:py-12">
        
        {activeSection === 'HOME' && <HomeContent />}
        {activeSection === 'ABOUT' && <AboutContent />}
        {activeSection === 'SKILLS' && <SkillsContent />}
        {activeSection === 'LEARNING' && <LearningContent />}
        {activeSection === 'PROJECTS' && <ProjectsContent />}
        {activeSection === 'CONTACT' && <ContactContent />}

      </div>

      {/* Fixed Bottom Section (Only for HOME) */}
      {isHome && (
        <div className="shrink-0 px-5 md:px-12 pb-8 md:pb-10 pt-4 bg-[#0c0c0c] border-t border-[#222] md:border-t-0">
            
            {/* Dynamic Button */}
            <a
              href="/Curriculo.pdf"
              download
              className="group block w-full md:max-w-[360px] bg-[#b0b0b0] hover:bg-[#c0c0c0] text-[#0a0a0a] h-[54px] md:h-[64px] mb-4 md:mb-6 transition-colors duration-200 rounded-[2px] relative overflow-hidden"
            >
              <span className="flex items-center justify-center h-full font-sans text-xl md:text-2xl font-bold tracking-tight relative z-10">
                Download My CV.
              </span>
            </a>

            <div className="hidden md:block">
            <ScrollIndicator />
            </div>
        </div>
      )}
    </div>
  );
};
