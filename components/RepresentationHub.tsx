import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRANDS } from '../constants';
import { X, ExternalLink } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import {
  LogoSigma,
  LogoPerego,
  LogoAntonini,
  LogoFamor,
  LogoOms,
  LogoFalorni,
  LogoGlassExport
} from './BrandLogos';

const HUB_POSITIONS = [
  { id: 'perego', angle: 0 },
  { id: 'sigma', angle: 60 },
  { id: 'famor', angle: 120 },
  { id: 'oms', angle: 180 },
  { id: 'antonini', angle: 240 },
  { id: 'falorni', angle: 300 }
];

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
  const [hoveredBrandId, setHoveredBrandId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getActiveContent = () => {
    if (activeBrandId === 'glass-export') {
      return {
        id: 'glass-export',
        name: t.hero.glassExportName,
        description: t.hero.glassExportDesc,
        products: t.hero.glassExportProducts,
        website: 'https://wa.me/5491153329100',
      };
    }
    const brand = BRANDS.find((b) => b.id === activeBrandId);
    if (!brand) return null;
    const brandT = t.brands[brand.id as keyof typeof t.brands];
    return {
      id: brand.id,
      name: brand.name,
      description: brandT?.description || brand.description,
      products: brandT?.products || brand.products,
      website: brand.website,
    };
  };

  const activeContent = activeBrandId ? getActiveContent() : null;

  /* Distance from center to each partner card (single source of truth) */
  const RADIUS = 440;
  const center = { x: 500, y: 500 };

  return (
    <section className="relative w-full min-h-screen lg:min-h-[1400px] bg-[#050505] flex flex-col lg:block overflow-hidden">

      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[800px] h-[800px] bg-[#3BA7FF] opacity-[0.03] blur-[100px] rounded-full" />
      </div>

      <div className="relative z-20 w-full container mx-auto px-6 pointer-events-none lg:absolute lg:inset-0">
        <div className="pt-32 pb-8 lg:pt-0 lg:pb-0 lg:absolute lg:top-32 lg:left-0 lg:right-0 pointer-events-auto max-w-lg text-center mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl lg:text-5xl font-semibold tracking-tight text-white mb-3"
          >
            {t.hero.title1} <span className="text-[#3BA7FF]">{t.hero.titleHighlight}</span>
          </motion.h1>
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.3 }}
          >
             <a href="#contact" className="text-sm text-[#3BA7FF] hover:text-white transition-colors underline underline-offset-4 decoration-[#3BA7FF]/30">
                {t.hero.contactLink}
             </a>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] lg:min-h-screen lg:absolute lg:top-[50%] lg:-translate-y-[50%] lg:left-0 lg:right-0 lg:bottom-auto">

        {!isMobile && (
          <div className="relative w-[1100px] h-[1100px] flex items-center justify-center">

            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1100 1100">
              <defs>
                <radialGradient id="centerGradient" cx="0.5" cy="0.5" r="0.5">
                  <stop offset="0%" stopColor="#3BA7FF" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              </defs>
              <circle cx={550} cy={550} r={210} fill="url(#centerGradient)" opacity="0.05" />

              {HUB_POSITIONS.map((pos) => {
                const radian = pos.angle * (Math.PI / 180);
                const x = 550 + RADIUS * Math.cos(radian);
                const y = 550 + RADIUS * Math.sin(radian);
                const isHovered = hoveredBrandId === pos.id;

                return (
                  <line
                    key={`line-${pos.id}`}
                    className={`hub-line${isHovered ? ' hub-line--active' : ''}`}
                    x1={550}
                    y1={550}
                    x2={x}
                    y2={y}
                    stroke={isHovered ? '#3BA7FF' : 'rgba(255,255,255,0.35)'}
                    strokeWidth={isHovered ? 3 : 2.5}
                  />
                );
              })}
            </svg>

            <motion.button
              className="absolute w-[28rem] h-[28rem] rounded-full bg-white border border-white/10 flex items-center justify-center z-20 shadow-2xl shadow-black group cursor-pointer p-0"
              style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
              initial={{ x: '-50%', y: '-50%', scale: 0.8, opacity: 0 }}
              animate={{ x: '-50%', y: '-50%', scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.8 }}
              onClick={() => setActiveBrandId('glass-export')}
            >
              <div className="hub-center-logo w-[85%] h-[85%] flex items-center justify-center">
                 <LogoGlassExport className="w-full h-full" />
              </div>
              <div className="absolute inset-0 rounded-full border border-[#3BA7FF]/10 animate-pulse-slow group-hover:border-[#3BA7FF]/30 transition-colors" />
            </motion.button>

            {HUB_POSITIONS.map((pos, i) => {
              const radian = pos.angle * (Math.PI / 180);
              const x = Math.cos(radian) * RADIUS;
              const y = Math.sin(radian) * RADIUS;

              return (
                <motion.button
                  key={pos.id}
                  className="partner-card absolute z-30"
                  style={{
                    top: `calc(50% + ${y}px)`,
                    left: `calc(50% + ${x}px)`,
                  }}
                  initial={{ x: '-50%', y: '-50%', scale: 0, opacity: 0 }}
                  animate={{
                    x: '-50%',
                    y: '-50%',
                    scale: 1,
                    opacity: 1
                  }}
                  transition={{
                    opacity: { duration: 0.5, delay: i * 0.1 }
                  }}
                  onMouseEnter={() => setHoveredBrandId(pos.id)}
                  onMouseLeave={() => setHoveredBrandId(null)}
                  onClick={() => setActiveBrandId(pos.id)}
                >
                  {getBrandLogo(pos.id, "w-full h-full object-contain")}
                </motion.button>
              );
            })}
          </div>
        )}

        {isMobile && (
          <div className="container px-4 flex flex-col gap-6 z-20 items-center pb-20">
            <button
              onClick={() => setActiveBrandId('glass-export')}
              className="w-80 h-80 rounded-full bg-white border border-white/10 flex flex-col items-center justify-center shadow-xl mb-8 relative active:scale-95 transition-transform p-6"
            >
                <div className="hub-center-logo w-full h-full flex items-center justify-center">
                  <LogoGlassExport className="w-full h-full" />
                </div>
            </button>

            <div className="grid grid-cols-2 gap-6 w-full max-w-md">
              {HUB_POSITIONS.map((pos) => {
                return (
                  <button
                    key={pos.id}
                    onClick={() => setActiveBrandId(pos.id)}
                    className="partner-card w-full"
                  >
                    {getBrandLogo(pos.id, "w-full h-full object-contain")}
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>

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
                   <div className="w-32 h-20 rounded-md p-2 flex items-center justify-center bg-white/10">
                      {getBrandLogo(activeContent.id, "w-full h-full")}
                   </div>
                </div>

                <div className="h-1 w-12 bg-[#3BA7FF] mb-6" />

                <p className="text-white/80 text-lg leading-relaxed mb-8 font-light">
                  {activeContent.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-xs uppercase tracking-widest text-white/40 mb-4">
                    {activeContent.id === 'glass-export' ? t.hero.coreServices : t.hero.keyProducts}
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
                        {activeContent.id === 'glass-export' ? t.hero.contactWhatsApp : t.hero.visitWebsite}
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
