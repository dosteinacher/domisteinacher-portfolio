'use client';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import AnimateIn from '@/components/AnimateIn';
import { useLanguage } from '@/context/LanguageContext';
import { useT } from '@/lib/translations';

const timeline = [
  { year: '2022 - Present', company: 'Adobe', role: 'Senior Manager Transformational Growth & Strategy' },
  { year: '2021 - 2022', company: 'Netcentric AG', role: 'Director Growth & New Business EMEA & ROW' },
  { year: '2019 - 2021', company: 'Namics AG', role: 'Senior Principal Consultant New Business' },
  { year: '2017 - 2019', company: 'SAP Switzerland', role: 'Senior Solution Sales Executive' },
  { year: '2012 - 2017', company: 'Magnolia International', role: 'Chief Commercial Officer/Partner' },
  { year: '2008 - 2011', company: 'bank zweiplus ag', role: 'Head of Product Department' },
  { year: '2004 - 2008', company: 'SIX Card Solutions', role: 'Head PM Issuing & Banking Solutions' },
  { year: '2000 - 2003', company: 'The Fantastic Corporation', role: 'Head of MarCom, Investor Relations & PR' },
];

export default function MeContent() {
  const { lang } = useLanguage();
  const t = useT(lang);

  return (
    <main className="min-h-screen bg-charcoal">
      <Navbar />

      <div className="container mx-auto px-4 py-24 max-w-5xl">
        {/* Header with Photo */}
        <div className="mb-16">
          <AnimateIn>
            <div className="flex flex-col md:flex-row gap-12 items-center mb-12">
              <div className="flex-1">
                <h1 className="text-5xl md:text-6xl font-bold text-chalk mb-8 uppercase tracking-tight">
                  {t.me.title}
                </h1>
                <div className="divider-fire mb-8" />
                <p className="text-xl text-chalk/80 leading-relaxed">{t.me.intro}</p>
              </div>
              <div className="relative w-80 h-80 rounded-lg overflow-hidden border border-rust/40 shadow-glow-rust">
                <Image src="/business1.jpeg" alt="Dominik Steinacher" fill className="object-cover" />
              </div>
            </div>
          </AnimateIn>
        </div>

        {/* Career Timeline */}
        <AnimateIn>
          <section className="mb-16 bg-concrete p-8 rounded-lg border-l-4 border-rust">
            <h2 className="text-3xl font-bold text-chalk mb-8 uppercase">{t.me.careerTitle}</h2>

            <div className="relative">
              <div className="absolute top-6 left-0 right-0 h-0.5 bg-steel hidden md:block"></div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {timeline.map((item, index) => {
                  const isCurrentJob = item.year.includes('Present');
                  return (
                    <div key={index} className="relative">
                      <div className="flex justify-center mb-4">
                        <div className={`${isCurrentJob ? 'w-5 h-5' : 'w-4 h-4'} rounded-full ${isCurrentJob ? 'bg-rust' : 'bg-chalk'} ring-4 ring-concrete relative z-10`}></div>
                      </div>
                      <div className="text-center">
                        <div className="mb-2">
                          <span className={`inline-block px-3 py-1 rounded-full font-bold uppercase mb-2 ${isCurrentJob ? 'text-sm bg-rust/30 text-rust border-2 border-rust' : 'text-xs bg-steel/30 text-chalk'}`}>
                            {item.company}
                          </span>
                        </div>
                        <p className={`font-mono mb-2 ${isCurrentJob ? 'text-sm text-chalk/80' : 'text-xs text-chalk/60'}`}>{item.year}</p>
                        <p className={`leading-tight ${isCurrentJob ? 'text-base text-chalk font-bold' : 'text-sm text-chalk/90 font-medium'}`}>
                          {item.role}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-12 pt-8 border-t border-steel/30">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-chalk ring-4 ring-concrete"></div>
                  <div className="text-center md:text-left">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase bg-steel/30 text-chalk mb-2">
                      {t.me.education}
                    </span>
                    <p className="text-chalk/60 font-mono text-sm">1992 - 1998</p>
                    <p className="text-chalk font-semibold">{t.me.degree}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimateIn>

        {/* Adobe Role */}
        <AnimateIn delay={0.05}>
          <section className="mb-16 bg-concrete p-8 rounded-lg border-l-4 border-rust">
            <h2 className="text-3xl font-bold text-chalk mb-6 uppercase">{t.me.adobeTitle}</h2>
            <p className="text-chalk/80 text-lg leading-relaxed mb-4">{t.me.adobeP1}</p>
            <p className="text-chalk/80 text-lg leading-relaxed">{t.me.adobeP2}</p>
          </section>
        </AnimateIn>

        {/* Community Building */}
        <AnimateIn delay={0.05}>
          <section className="mb-16 bg-concrete p-8 rounded-lg border-l-4 border-blue">
            <h2 className="text-3xl font-bold text-chalk mb-6 uppercase">{t.me.communityTitle}</h2>
            <p className="text-chalk/80 text-lg leading-relaxed mb-6">{t.me.communityP1}</p>

            <div className="bg-charcoal p-6 rounded-lg mb-6">
              <h3 className="text-2xl font-bold text-blue mb-4">{t.me.aiCommunityTitle}</h3>
              <p className="text-chalk/80 text-lg leading-relaxed mb-4">{t.me.aiCommunityP1}</p>
              <p className="text-chalk/80 text-lg leading-relaxed">{t.me.aiCommunityP2}</p>
            </div>

            <div className="bg-rust/10 border-l-4 border-rust p-6 rounded">
              <p className="text-chalk text-lg font-semibold italic">{t.me.quote}</p>
            </div>
          </section>
        </AnimateIn>

        {/* Athletic Journey */}
        <AnimateIn delay={0.05}>
          <section className="mb-16 bg-concrete p-8 rounded-lg border-l-4 border-rust">
            <h2 className="text-3xl font-bold text-chalk mb-8 uppercase">{t.me.athleticTitle}</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="relative h-96 rounded-lg overflow-hidden mb-4 border border-rust/40 shadow-glow-rust bg-charcoal flex items-center justify-center">
                  <Image src="/pole.JPG" alt="Pole Vault Champion 1996" fill className="object-contain" />
                </div>
                <h3 className="text-xl font-bold text-rust mb-2">{t.me.poleVaultTitle}</h3>
                <p className="text-chalk/60 mb-3">{t.me.poleVaultYear}</p>
                <p className="text-chalk/80 leading-relaxed">{t.me.poleVaultDesc}</p>
              </div>

              <div>
                <div className="relative h-96 rounded-lg overflow-hidden mb-4 border border-white/[0.08] shadow-card bg-charcoal flex items-center justify-center">
                  <Image src="/Cross1.jpg" alt="Crossfit Training" fill className="object-contain" />
                </div>
                <h3 className="text-xl font-bold text-rust mb-2">{t.me.crossfitTitle}</h3>
                <p className="text-chalk/60 mb-3">{t.me.crossfitPeriod}</p>
                <p className="text-chalk/80 leading-relaxed">{t.me.crossfitDesc}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['/cross2.png', '/cross3.jpeg', '/cross4.jpg', '/cross5.jpeg'].map((src) => (
                <div key={src} className="relative h-40 rounded overflow-hidden border-2 border-steel/30 hover:border-rust transition bg-charcoal">
                  <Image src={src} alt="Training" fill className="object-contain" />
                </div>
              ))}
            </div>
          </section>
        </AnimateIn>

        {/* Personal Life */}
        <AnimateIn delay={0.05}>
          <section className="bg-concrete p-8 rounded-lg border-l-4 border-rust">
            <h2 className="text-3xl font-bold text-chalk mb-6 uppercase">{t.me.lifeTitle}</h2>
            <p className="text-chalk/80 text-lg leading-relaxed mb-6">{t.me.lifeDesc}</p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['/fun1.jpg', '/fun2.jpg', '/fun3.jpg', '/fun4.jpg', '/fun5.jpg', '/fun6.jpg'].map((src) => (
                <div key={src} className="relative h-56 rounded-lg overflow-hidden border-2 border-steel/30 hover:border-rust transition bg-charcoal">
                  <Image src={src} alt="Life moments" fill className="object-contain" />
                </div>
              ))}
            </div>
          </section>
        </AnimateIn>

        {/* CTA */}
        <AnimateIn delay={0.05}>
          <div className="mt-16 text-center">
            <a
              href="/contact"
              className="inline-block bg-rust hover:bg-rust/90 text-chalk px-12 py-4 rounded-lg text-lg font-bold uppercase tracking-wide transition-all duration-200 hover:shadow-glow-rust"
            >
              {t.me.cta}
            </a>
          </div>
        </AnimateIn>
      </div>
    </main>
  );
}
