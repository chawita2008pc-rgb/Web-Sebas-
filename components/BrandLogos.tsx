import React from 'react';

type LogoProps = {
  className?: string;
  mode?: 'white' | 'color'; 
};

// Helper to render logos with object-fit and optional filters
const BrandImage = ({ src, alt, className, invert = false }: { src: string; alt: string; className?: string; invert?: boolean }) => (
  <img 
    src={src} 
    alt={alt} 
    className={`${className} object-contain`} 
    style={{ 
      maxWidth: '100%', 
      maxHeight: '100%', 
      objectFit: 'contain',
      filter: invert ? 'brightness(0) invert(1)' : 'none' // Invert colors for white-on-black logos
    }}
    onError={(e) => {
      // Fallback if Clearbit fails (rare, but good UX)
      const target = e.target as HTMLImageElement;
      target.style.display = 'none';
      target.parentElement?.insertAdjacentText('beforeend', alt); // Show text if image completely fails
    }}
  />
);

// Glass Export Logo (Data URI to ensure immediate availability without external dependency)
// Based on the geometric blue sheets description
const GLASS_EXPORT_URI = `data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDIwKSBzY2FsZSgxLjIpIj48cGF0aCBkPSJNMzAgMjAgTDkwIDUwIEw5MCAxMzAgTDMwIDEwMCBaIiBmaWxsPSIjM0JBN0ZGIiBmaWxsLW9wYWNpdHk9IjAuNCIvPjxwYXRoIGQ9Ik0wIDMwIEw2MCA2MCBMNjAgMTIwIEwwIDkwIFoiIGZpbGw9IiMzQkE3RkYiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTYwIDEwIEwxMjAgNDAgTDEyMCAxNDAgTDYwIDExMCBaIiBmaWxsPSIjM0JBN0ZGIiBmaWxsLW9wYWNpdHk9IjAuNiIvPjwvZz48dGV4dCB4PSIxNjAiIHk9IjEzMCIgZm9udC1mYW1pbHk9IkFyaWFsLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjEwMCIgbGV0dGVyLXNwYWNpbmc9Ii00IiBmaWxsPSIjZmZmZmZmIj5nbGFzczwvdGV4dD48dGV4dCB4PSIxNjUiIHk9IjE4MCIgZm9udC1mYW1pbHk9IkFyaWFsLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjMyIiBsZXR0ZXItc3BhY2luZz0iMTIiIGZpbGw9IiM5OTk5OTkiPkVYUE9SVCc8L3RleHQ+PC9zdmc+`;

export const LogoSigma: React.FC<LogoProps> = ({ className }) => (
  // Sigma: Red/Grey logo. Clearbit usually returns correct color.
  <BrandImage src="https://logo.clearbit.com/sigmaref.it?size=400" alt="Sigma Group" className={className} />
);

export const LogoPerego: React.FC<LogoProps> = ({ className }) => (
  // Perego: Red logo.
  <BrandImage src="https://logo.clearbit.com/gperego.it?size=400" alt="Giancarlo Perego SpA" className={className} />
);

export const LogoAntonini: React.FC<LogoProps> = ({ className }) => (
  // Antonini: Usually dark text. We invert it to make it white for the black circle.
  <BrandImage src="https://logo.clearbit.com/antoninisrl.com?size=400" alt="Antonini" className={className} invert={true} />
);

export const LogoFalorni: React.FC<LogoProps> = ({ className }) => (
  // Falorni: Invert to ensure white text on black background.
  <BrandImage src="https://logo.clearbit.com/falornitech.com?size=400" alt="Falorni Tech" className={className} invert={true} />
);

export const LogoFamor: React.FC<LogoProps> = ({ className }) => (
  // Famor: Black text. On white circle, it's fine.
  <BrandImage src="https://logo.clearbit.com/famoreng.com?size=400" alt="Famor Engineering" className={className} />
);

export const LogoOms: React.FC<LogoProps> = ({ className }) => (
  // OMS: Blue/Dark text.
  <BrandImage src="https://logo.clearbit.com/omsspa.com?size=400" alt="OMS Group" className={className} />
);

export const LogoGlassExport: React.FC<LogoProps> = ({ className }) => (
  <BrandImage src={GLASS_EXPORT_URI} alt="Glass Export" className={className} />
);
