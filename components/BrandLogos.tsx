import React from 'react';
import sigmaLogo from '../assets/logos/sigma.png';
import peregoLogo from '../assets/logos/perego.png';
import antoniniLogo from '../assets/logos/antonini.png';
import falorniLogo from '../assets/logos/falorni.jpeg';
import famorLogo from '../assets/logos/famor.png';
import omsLogo from '../assets/logos/oms.png';
import glassExportLogo from '../assets/logos/glass-export.png';

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
  <BrandImage src={glassExportLogo} alt="Glass Export" className={className} />
);
