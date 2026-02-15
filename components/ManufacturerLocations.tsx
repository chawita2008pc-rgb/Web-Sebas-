import React from 'react';
import { MapPin, ExternalLink, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const MANUFACTURERS = [
  { name: 'SIGMA', address: 'Via delle Grigne, 12/A', city: 'Locate Varesino (CO)', postal: '22070', country: 'Italy', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Via+delle+Grigne+12%2F%2A+Locate+Varesino+CO+22070+Italy' },
  { name: 'PEREGO', full_name: 'Giancarlo Perego SpA', address: 'Via Marchesina 58', city: 'Trezzano sul Naviglio (MI)', postal: '20090', country: 'Italy', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Via+Marchesina+58+20090+Trezzano+sul+Naviglio+MI+Italy' },
  { name: 'ANTONINI', full_name: 'Antonini S.r.l.', address: "Via Medaglie d'Oro della Resistenza 2", city: 'Empoli (FI)', postal: '50053', country: 'Italy', googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Via+Medaglie+d'Oro+della+Resistenza+2+50053+Empoli+FI+Italy" },
  { name: 'FALORNI', full_name: 'Falorni Tech', address: 'Viale IV Novembre, 15', city: 'Empoli (FI)', postal: '50053', country: 'Italy', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Viale+IV+Novembre+15+50053+Empoli+FI+Italy' },
  { name: 'FAMOR', full_name: 'Famor Engineering', address: 'Via Avigliana 3', city: 'Rivalta di Torino (TO)', postal: '10040', country: 'Italy', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Via+Avigliana+3+10040+Rivalta+di+Torino+TO+Italy' },
  { name: 'OMS', full_name: 'OMS Group', address: 'Via Borgomanero 44', city: 'Paruzzaro (NO)', postal: '28040', country: 'Italy', googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Via+Borgomanero+44+28040+Paruzzaro+NO+Italy' }
];

export const ManufacturerLocations: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="locations-manufacturers" className="py-24 bg-[#050505] border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3BA7FF] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">{t.manufacturers.title}</h2>
          <p className="text-white/60 text-lg">{t.manufacturers.subtitle}</p>
          <div className="h-1 w-20 bg-[#3BA7FF] mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MANUFACTURERS.map((m) => (
            <div key={m.name} className="group flex flex-col p-8 bg-[#0B0F14] border border-white/10 hover:border-[#3BA7FF]/30 transition-all duration-300 rounded-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#3BA7FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1 tracking-tight">{m.name}</h3>
                {m.full_name && <span className="text-xs text-white/40 uppercase tracking-wider">{m.full_name}</span>}
              </div>
              <div className="flex-grow space-y-1 mb-8">
                <div className="flex items-start text-white/70">
                  <MapPin className="w-5 h-5 text-[#3BA7FF] mr-3 mt-0.5 flex-shrink-0" />
                  <div className="text-sm leading-relaxed">
                    <p>{m.address}</p>
                    <p>{m.postal} {m.city}</p>
                    <p className="text-white/40 mt-1">{m.country}</p>
                  </div>
                </div>
              </div>
              <div className="mt-auto">
                <a href={m.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-white hover:text-[#3BA7FF] transition-colors group/link">
                  {t.manufacturers.viewOnMaps}
                  <ExternalLink className="ml-2 w-4 h-4 opacity-50 group-hover/link:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-between bg-[#0B0F14] border border-white/10 p-8 rounded-sm">
          <div className="mb-6 md:mb-0">
            <h4 className="text-xl font-medium text-white mb-2">{t.manufacturers.ctaTitle}</h4>
            <p className="text-white/50 text-sm">{t.manufacturers.ctaSubtitle}</p>
          </div>
          <a href="#contact" className="flex items-center px-6 py-3 bg-white/5 border border-white/10 text-white hover:bg-[#3BA7FF] hover:border-[#3BA7FF] transition-all duration-300 text-sm font-medium group">
            {t.manufacturers.ctaButton}
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
