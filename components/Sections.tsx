import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, CheckCircle, Mail, Phone, Clock } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-16 max-w-2xl">
    <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">{title}</h2>
    {subtitle && <p className="text-white/60 text-lg">{subtitle}</p>}
    <div className="h-1 w-20 bg-[#3BA7FF] mt-6" />
  </div>
);

export const WhatWeDo = () => {
  const { t } = useLanguage();
  return (
    <section id="services" className="py-24 bg-[#050505] border-b border-white/5">
      <div className="container mx-auto px-6">
        <SectionTitle title={t.whatWeDo.title} subtitle={t.whatWeDo.subtitle} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.whatWeDo.items.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 bg-[#0B0F14] border border-white/5 hover:border-[#3BA7FF]/30 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#3BA7FF]/20 transition-colors">
                <CheckCircle size={20} className="text-white/50 group-hover:text-[#3BA7FF]" />
              </div>
              <h3 className="text-white font-medium text-lg">{item}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const SolutionAreas = () => {
  const { t } = useLanguage();
  return (
    <section id="brands" className="py-24 bg-[#080A0E]">
      <div className="container mx-auto px-6">
        <SectionTitle title={t.solutionAreas.title} subtitle={t.solutionAreas.subtitle} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.solutionAreas.areas.map((area, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="p-8 bg-[#050505] border border-white/5 hover:border-[#3BA7FF]/30 transition-colors group cursor-default"
            >
              <div className="h-0.5 w-8 bg-[#3BA7FF] mb-5 group-hover:w-16 transition-all duration-300" />
              <h3 className="text-xl font-semibold text-white mb-4">{area.title}</h3>
              <ul className="space-y-2">
                {area.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.08 + i * 0.05 + 0.2 }}
                    className="flex items-center text-white/60 text-sm group-hover:text-white/75 transition-colors"
                  >
                    <span className="w-1 h-1 bg-[#3BA7FF] rounded-full mr-3 opacity-70 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Locations = () => {
  const { t } = useLanguage();
  return (
    <section id="locations" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
         <div className="absolute right-0 top-0 w-2/3 h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <SectionTitle title={t.locations.title} subtitle={t.locations.subtitle} />
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
            {t.locations.countries.map((loc) => (
              <div key={loc} className="flex flex-col items-center justify-center p-8 bg-[#0B0F14] border border-white/10 text-center">
                <MapPin className="text-[#3BA7FF] mb-4" size={24} />
                <h4 className="text-white font-medium tracking-wide">{loc}</h4>
                <span className="text-xs text-white/40 mt-2 uppercase tracking-wider">{t.locations.office}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Process = () => {
  const { t } = useLanguage();
  return (
    <section id="process" className="py-24 bg-[#0B0F14]">
      <div className="container mx-auto px-6">
        <SectionTitle title={t.process.title} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {t.process.steps.map((step, i) => (
            <div key={i} className="relative p-8 border-l border-white/10 lg:border-l-0 lg:border-t lg:first:border-l hover:bg-white/5 transition-colors">
              <span className="text-4xl font-bold text-white/10 mb-4 block font-mono">{step.step}</span>
              <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Contact = () => {
  const { t } = useLanguage();

  const [name,    setName]    = React.useState('');
  const [company, setCompany] = React.useState('');
  const [email,   setEmail]   = React.useState('');
  const [phone,   setPhone]   = React.useState('');
  const [message, setMessage] = React.useState('');
  const [loading,   setLoading]   = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [errorMsg,  setErrorMsg]  = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !company.trim() || !email.trim() || !phone.trim() || !message.trim()) {
      setErrorMsg(t.contact.errorMessage);
      return;
    }
    setLoading(true);
    setErrorMsg(null);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: '78f49fe7-3043-4ba1-893c-99e6e3613b0a',
          subject: `New Inquiry from ${name}${company ? ` — ${company}` : ''}`,
          name, company, email, phone, message,
        }),
      });
      const data = await res.json() as { success: boolean; message?: string };
      if (!data.success) throw new Error(data.message ?? 'Unknown error');
      setSubmitted(true);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : t.contact.errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const inputClass = 'w-full bg-[#050505] border border-white/10 text-white p-3 focus:outline-none focus:border-[#3BA7FF] transition-colors';

  return (
    <section id="contact" className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-[#0B0F14] border border-white/10 p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-white mb-4">{t.contact.title}</h2>
            <p className="text-white/60 mb-6">{t.contact.subtitle}</p>
            <div className="flex items-center justify-center text-[#3BA7FF]">
              <Phone size={20} className="mr-2" />
              <span className="text-lg font-medium tracking-wide">+54 9 11 5332-9100</span>
            </div>
          </div>

          {submitted ? (
            <div className="text-center py-12 px-6">
              <div className="w-14 h-14 rounded-full bg-[#3BA7FF]/10 border border-[#3BA7FF]/30 flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={28} className="text-[#3BA7FF]" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{t.contact.successTitle}</h3>
              <p className="text-white/60 text-sm leading-relaxed max-w-sm mx-auto">{t.contact.successMessage}</p>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-white/50">{t.contact.labelName} <span className="text-[#3BA7FF]">*</span></label>
                  <input type="text" required value={name} onChange={(e) => setName(e.target.value)} className={inputClass} />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-white/50">{t.contact.labelCompany} <span className="text-[#3BA7FF]">*</span></label>
                  <input type="text" required value={company} onChange={(e) => setCompany(e.target.value)} className={inputClass} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-white/50">{t.contact.labelEmail} <span className="text-[#3BA7FF]">*</span></label>
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-white/50">{t.contact.labelPhone} <span className="text-[#3BA7FF]">*</span></label>
                  <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} className={inputClass} />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider text-white/50">{t.contact.labelMessage} <span className="text-[#3BA7FF]">*</span></label>
                <textarea rows={4} required value={message} onChange={(e) => setMessage(e.target.value)} className={inputClass} />
              </div>

              {errorMsg && (
                <div className="flex items-start gap-3 p-4 bg-red-900/20 border border-red-500/30 text-red-400 text-sm leading-relaxed">
                  <Mail size={16} className="mt-0.5 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="flex flex-col md:flex-row items-center justify-between pt-6 gap-4">
                <div className="flex items-center text-white/40 text-xs">
                  <Clock size={14} className="mr-2" />
                  {t.contact.responseTime}
                </div>
                <div className="flex gap-4 w-full md:w-auto">
                  <a
                    href="https://wa.me/5491153329100"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 md:flex-none px-6 py-3 border border-white/10 text-white hover:bg-white/5 text-sm font-medium transition-colors flex items-center justify-center text-center cursor-pointer"
                  >
                    {t.contact.scheduleCall}
                  </a>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 md:flex-none px-8 py-3 bg-[#3BA7FF] text-white hover:bg-[#2A90E0] text-sm font-bold tracking-wide transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading && (
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                    )}
                    {loading ? t.contact.sending : t.contact.sendInquiry}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
