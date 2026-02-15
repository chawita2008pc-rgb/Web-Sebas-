import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRANDS } from '../constants';
import { X, ExternalLink } from 'lucide-react';
import { 
  LogoSigma, 
  LogoPerego, 
  LogoAntonini, 
  LogoFamor, 
  LogoOms, 
  LogoFalorni,
  LogoGlassExport 
} from './BrandLogos';

// ANGLES CONFIGURATION (0 degrees is 3 o'clock, clockwise)
// Antonini (Top Left): 240 deg
// Falorni (Top Right): 300 deg
// OMS (Left): 180 deg
// Perego (Right): 0 deg
// Famor (Bottom Left): 120 deg
// Sigma (Bottom Right): 60 deg

const HUB_POSITIONS = [
  { id: 'perego', angle: 0 },      // Right
  { id: 'sigma', angle: 60 },      // Bottom Right
  { id: 'famor', angle: 120 },     // Bottom Left
  { id: 'oms', angle: 180 },       // Left
  { id: 'antonini', angle: 240 },  // Top Left (Black Circle)
  { id: 'falorni', angle: 300 }    // Top Right (Black Circle)
];

const GLASS_EXPORT_INFO = {
  id: 'glass-export',
  name: 'Glass Export',
  description: 'The central hub for technical representation and commercial management in the Latin American glass industry. Connecting plants with premium European manufacturers.',
  products: ['Commercial Representation', 'Project Coordination', 'Spare Parts Management', 'Technical Support'],
  website: 'https://wa.me/5491153329100',
  isInternal: false
};

const getBrandLogo = (id: string, className: string) => {
  switch (id) {
    case 'sigma': return <LogoSigma className={className} />;
    case 'perego': return <LogoPerego className={className} />;
    case 'antonini': return <LogoAntonini className={className} />;
    case 'famor': return <LogoFamor className={className} />;
    case 'oms': return <LogoOms className={className} />;
    case 'falorni': return <LogoFalorni className={className} />;
    default: return null;
  }
};

export const RepresentationHub: React.FC = () => {
  const [activeBrandId, setActiveBrandId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const activeContent = activeBrandId === 'glass-export' 
    ? GLASS_EXPORT_INFO 
    : BRANDS.find((b) => b.id === activeBrandId);

  // Measurements for Layout
  const radius = 380; // Radius of the circle of logos
  const center = { x: 500, y: 500 }; // Center of the SVG canvas

  return (
    <section className="relative w-full min-h-screen lg:min-h-[1400px] bg-[#050505] flex flex-col lg:block overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[800px] h-[800px] bg-[#3BA7FF] opacity-[0.03] blur-[100px] rounded-full" />
      </div>

      {/* Intro Text */}
      <div className="relative z-20 w-full container mx-auto px-6 pointer-events-none lg:absolute lg:inset-0">
        <div className="pt-32 pb-8 lg:pt-0 lg:pb-0 lg:absolute lg:top-32 lg:left-0 lg:right-0 pointer-events-auto max-w-lg text-center mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl lg:text-5xl font-semibold tracking-tight text-white mb-3"
          >
            Technical & Commercial <span className="text-[#3BA7FF]">Hub</span>
          </motion.h1>
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.3 }}
          >
             <a href="https://wa.me/5491153329100" target="_blank" rel="noopener noreferrer" className="text-sm text-[#3BA7FF] hover:text-white transition-colors underline underline-offset-4 decoration-[#3BA7FF]/30">
                Contact Us
             </a>
          </motion.div>
        </div>
      </div>

      {/* Hub Diagram Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] lg:min-h-screen lg:absolute lg:top-[55%] lg:-translate-y-[45%] lg:left-0 lg:right-0 lg:bottom-auto">
        
        {/* --- DESKTOP RADIAL LAYOUT --- */}
        {!isMobile && (
          <div className="relative w-[1000px] h-[1000px] flex items-center justify-center">
            
            {/* SVG Layer for Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
              <defs>
                <radialGradient id="centerGradient" cx="0.5" cy="0.5" r="0.5">
                  <stop offset="0%" stopColor="#3BA7FF" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              </defs>
              <circle cx={center.x} cy={center.y} r={180} fill="url(#centerGradient)" opacity="0.05" />

              {HUB_POSITIONS.map((pos) => {
                const radian = pos.angle * (Math.PI / 180);
                const x = center.x + radius * Math.cos(radian);
                const y = center.y + radius * Math.sin(radian);
                
                return (
                  <motion.line
                    key={`line-${pos.id}`}
                    x1={center.x}
                    y1={center.y}
                    x2={x}
                    y2={y}
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                  />
                );
              })}
            </svg>

            {/* Central Node: GLASS EXPORT */}
            <motion.button 
              className="absolute w-80 h-80 rounded-full bg-[#050505] border border-white/10 flex items-center justify-center z-20 shadow-2xl shadow-black group cursor-pointer p-0"
              style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
              initial={{ x: '-50%', y: '-50%', scale: 0.8, opacity: 0 }}
              animate={{ x: '-50%', y: '-50%', scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.8 }}
              onClick={() => setActiveBrandId('glass-export')}
            >
              <div className="w-[85%] h-[85%] flex items-center justify-center">
                 <LogoGlassExport className="w-full h-full" />
              </div>
              {/* Subtle Glow Ring */}
              <div className="absolute inset-0 rounded-full border border-[#3BA7FF]/10 animate-pulse-slow group-hover:border-[#3BA7FF]/30 transition-colors" />
            </motion.button>

            {/* Satellite Nodes */}
            {HUB_POSITIONS.map((pos, i) => {
              const radian = pos.angle * (Math.PI / 180);
              // Calculate relative position from center
              const x = Math.cos(radian) * radius; 
              const y = Math.sin(radian) * radius;
              
              const isActive = activeBrandId === pos.id;
              
              // Specific Style Rules:
              // Antonini & Falorni = Black circle (bg-black), White border/content
              // Others = White circle (bg-white), Standard content
              const isDarkNode = ['antonini', 'falorni'].includes(pos.id);
              
              const bgClass = isDarkNode 
                ? 'bg-black border-white/20' 
                : 'bg-white border-white/10';

              return (
                <motion.button
                  key={pos.id}
                  className={`absolute w-64 h-64 rounded-full flex items-center justify-center transition-all duration-300 group z-30 cursor-pointer overflow-hidden border shadow-lg
                    ${isActive
                      ? `shadow-[0_0_30px_rgba(59,167,255,0.3)] border-[#3BA7FF] ${bgClass}` 
                      : `${bgClass} hover:border-[#3BA7FF]/50 hover:shadow-[0_0_20px_rgba(59,167,255,0.15)]`
                    }
                  `}
                  style={{ 
                    // Positioning relative to center 50% 50%
                    top: `calc(50% + ${y}px)`, 
                    left: `calc(50% + ${x}px)`,
                    transform: 'translate(-50%, -50%)'
                  }}
                  initial={{ x: '-50%', y: '-50%', scale: 0, opacity: 0 }}
                  animate={{ 
                    x: '-50%', 
                    y: '-50%', 
                    scale: 1,
                    opacity: 1
                  }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ 
                    scale: { type: "spring", stiffness: 300, damping: 20 },
                    opacity: { duration: 0.5, delay: i * 0.1 } 
                  }}
                  onClick={() => setActiveBrandId(pos.id)}
                >
                  <div className="w-[85%] h-[85%] flex items-center justify-center">
                     {getBrandLogo(pos.id, "w-full h-full")}
                  </div>
                </motion.button>
              );
            })}
          </div>
        )}

        {/* --- MOBILE STACK --- */}
        {isMobile && (
          <div className="container px-4 flex flex-col gap-6 z-20 items-center pb-20">
            <button 
              onClick={() => setActiveBrandId('glass-export')}
              className="w-64 h-64 rounded-full bg-[#050505] border border-white/10 flex flex-col items-center justify-center shadow-xl mb-8 relative active:scale-95 transition-transform p-6"
            >
                <LogoGlassExport className="w-full h-full" />
            </button>
            
            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
              {HUB_POSITIONS.map((pos) => {
                const isDarkNode = ['antonini', 'falorni'].includes(pos.id);
                const bgClass = isDarkNode ? 'bg-black border-white/20' : 'bg-white border-white/10';
                
                return (
                  <button
                    key={pos.id}
                    onClick={() => setActiveBrandId(pos.id)}
                    className={`p-6 rounded-lg border flex items-center justify-center h-40 transition-all ${bgClass}
                      ${activeBrandId === pos.id 
                        ? 'border-[#3BA7FF] shadow-lg shadow-[#3BA7FF]/20' 
                        : ''}`}
                  >
                    {getBrandLogo(
                      pos.id, 
                      "w-full h-full"
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>

      {/* --- DETAIL MODAL --- */}
      <AnimatePresence>
        {activeContent && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveBrandId(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[90]"
            />

            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-full md:w-[480px] bg-[#0E1218] border-l border-white/10 z-[100] p-8 flex flex-col shadow-2xl overflow-y-auto"
            >
              <button 
                onClick={() => setActiveBrandId(null)}
                className="self-end p-2 text-white/50 hover:text-white bg-white/5 rounded-full hover:bg-white/10 transition-all mt-2"
              >
                <X size={24} />
              </button>

              <div className="mt-8">
                <div className="flex items-center justify-between mb-6">
                   <h3 className="text-3xl font-bold text-white tracking-tight">{activeContent.name}</h3>
                   {/* Logo in Modal */}
                   <div className={`w-32 h-20 rounded-md p-2 flex items-center justify-center ${['antonini', 'falorni'].includes(activeContent.id) ? 'bg-black border border-white/20' : 'bg-white'}`}>
                      {getBrandLogo(activeContent.id, "w-full h-full")}
                   </div>
                </div>
                
                <div className="h-1 w-12 bg-[#3BA7FF] mb-6" />
                
                <p className="text-white/80 text-lg leading-relaxed mb-8 font-light">
                  {activeContent.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-xs uppercase tracking-widest text-white/40 mb-4">
                    {activeContent.id === 'glass-export' ? 'Core Services' : 'Key Products'}
                  </h4>
                  <ul className="space-y-3">
                    {activeContent.products.map((item, idx) => (
                      <li key={idx} className="flex items-center text-white/90">
                        <span className="w-1.5 h-1.5 bg-[#3BA7FF] rounded-full mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-8 border-t border-white/10">
                  <a 
                    href={activeContent.website} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group text-white hover:text-[#3BA7FF] transition-colors p-4 border border-white/5 hover:border-[#3BA7FF]/30 bg-white/5 hover:bg-[#3BA7FF]/10"
                  >
                    <span className="font-medium">
                        {activeContent.id === 'glass-export' ? 'Contact Us on WhatsApp' : 'Visit Website'}
                    </span>
                    <ExternalLink size={20} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};
