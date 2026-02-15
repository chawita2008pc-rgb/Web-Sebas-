import React from 'react';
import sigmaLogo from '../assets/logos/sigma.png';
import peregoLogo from '../assets/logos/perego.png';
import antoniniLogo from '../assets/logos/antonini.png';
import falorniLogo from '../assets/logos/falorni.jpeg';
import famorLogo from '../assets/logos/famor.png';
import omsLogo from '../assets/logos/oms.png';

type LogoProps = {
  className?: string;
  mode?: 'white' | 'color';
};

const BrandImage = ({ src, alt, className }: { src: string; alt: string; className?: string }) => (
  <img
    src={src}
    alt={alt}
    className={`${className} object-contain`}
    style={{
      maxWidth: '100%',
      maxHeight: '100%',
      objectFit: 'contain',
    }}
  />
);

// Glass Export Logo (Data URI)
const GLASS_EXPORT_URI = `data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLDIwKSBzY2FsZSgxLjIpIj48cGF0aCBkPSJNMzAgMjAgTDkwIDUwIEw5MCAxMzAgTDMwIDEwMCBaIiBmaWxsPSIjM0JBN0ZGIiBmaWxsLW9wYWNpdHk9IjAuNCIvPjxwYXRoIGQ9Ik0wIDMwIEw2MCA2MCBMNjAgMTIwIEwwIDkwIFoiIGZpbGw9IiMzQkE3RkYiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTYwIDEwIEwxMjAgNDAgTDEyMCAxNDAgTDYwIDExMCBaIiBmaWxsPSIjM0JBN0ZGIiBmaWxsLW9wYWNpdHk9IjAuNiIvPjwvZz48dGV4dCB4PSIxNjAiIHk9IjEzMCIgZm9udC1mYW1pbHk9IkFyaWFsLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjEwMCIgbGV0dGVyLXNwYWNpbmc9Ii00IiBmaWxsPSIjZmZmZmZmIj5nbGFzczwvdGV4dD48dGV4dCB4PSIxNjUiIHk9IjE4MCIgZm9udC1mYW1pbHk9IkFyaWFsLHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjMyIiBsZXR0ZXItc3BhY2luZz0iMTIiIGZpbGw9IiM5OTk5OTkiPkVYUE9SVCc8L3RleHQ+PC9zdmc+`;

export const LogoSigma: React.FC<LogoProps> = ({ className }) => (
  <BrandImage src={sigmaLogo} alt="Sigma Group" className={className} />
);

export const LogoPerego: React.FC<LogoProps> = ({ className }) => (
  <BrandImage src={peregoLogo} alt="Giancarlo Perego SpA" className={className} />
);

export const LogoAntonini: React.FC<LogoProps> = ({ className }) => (
  <BrandImage src={antoniniLogo} alt="Antonini" className={className} />
);

export const LogoFalorni: React.FC<LogoProps> = ({ className }) => (
  <BrandImage src={falorniLogo} alt="Falorni Tech" className={className} />
);

export const LogoFamor: React.FC<LogoProps> = ({ className }) => (
  <BrandImage src={famorLogo} alt="Famor Engineering" className={className} />
);

export const LogoOms: React.FC<LogoProps> = ({ className }) => (
  <BrandImage src={omsLogo} alt="OMS Group" className={className} />
);

export const LogoGlassExport: React.FC<LogoProps> = ({ className }) => (
  <BrandImage src={GLASS_EXPORT_URI} alt="Glass Export" className={className} />
);
