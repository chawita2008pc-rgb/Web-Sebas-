import React from 'react';

export const Footer: React.FC = () => {
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
              Connecting the glass industry with premium manufacturing solutions since 1995.
            </p>
          </div>

          <div className="flex flex-wrap gap-12 text-white/60">
            <div>
              <h5 className="text-white font-semibold mb-3">Sitemap</h5>
              <ul className="space-y-2">
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#brands" className="hover:text-white transition-colors">Brands</a></li>
                <li><a href="#locations" className="hover:text-white transition-colors">Locations</a></li>
              </ul>
            </div>
            <div>
               <h5 className="text-white font-semibold mb-3">Contact</h5>
               <ul className="space-y-2">
                <li>
                  <a href="tel:+5491153329100" className="hover:text-white transition-colors block">
                    +54 9 11 5332-9100
                  </a>
                </li>
                <li>
                  <a href="mailto:info@glassexport.com" className="hover:text-white transition-colors block">
                    info@glassexport.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
               <h5 className="text-white font-semibold mb-3">Legal</h5>
               <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 text-center text-white/20 text-xs">
          © {new Date().getFullYear()} Glass Export. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
