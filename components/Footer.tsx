import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-[#020202] border-t border-white/5 py-12 text-sm">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">

          <div className="mb-8 md:mb-0">
            <div className="flex flex-col leading-none mb-4">
              <span className="text-lg font-bold tracking-tighter text-white">glass</span>
              <span className="text-[9px] tracking-[0.3em] text-white/60 uppercase">export</span>
            </div>
            <p className="text-white/40 max-w-xs">
              {t.footer.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-12 text-white/60">
            <div>
              <h5 className="text-white font-semibold mb-3">{t.footer.sitemap}</h5>
              <ul className="space-y-2">
                <li><a href="#services" className="hover:text-white transition-colors">{t.nav.services}</a></li>
                <li><a href="#brands" className="hover:text-white transition-colors">{t.nav.brands}</a></li>
                <li><a href="#locations" className="hover:text-white transition-colors">{t.nav.locations}</a></li>
              </ul>
            </div>
            <div>
               <h5 className="text-white font-semibold mb-3">{t.footer.contact}</h5>
               <ul className="space-y-2">
                <li>
                  <a href="tel:+5491153329100" className="hover:text-white transition-colors block">
                    +54 9 11 5332-9100
                  </a>
                </li>
                <li>
                  <a href="mailto:sszulman@yahoo.com.ar" className="hover:text-white transition-colors block">
                    sszulman@yahoo.com.ar
                  </a>
                </li>
              </ul>
            </div>
            <div>
               <h5 className="text-white font-semibold mb-3">{t.footer.legal}</h5>
               <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 text-center text-white/20 text-xs">
          © {new Date().getFullYear()} {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
};
