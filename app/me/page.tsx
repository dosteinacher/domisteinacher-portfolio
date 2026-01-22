import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function MePage() {
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

  return (
    <main className="min-h-screen bg-charcoal">
      <Navbar />
      
      <div className="container mx-auto px-4 py-24 max-w-5xl">
        {/* Header with Photo */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row gap-12 items-center mb-12">
            <div className="flex-1">
              <h1 className="text-5xl md:text-6xl font-bold text-chalk mb-8 uppercase tracking-tight">
                About Me
              </h1>
              <div className="h-1 w-24 bg-rust mb-8"></div>
              <p className="text-xl text-chalk/80 leading-relaxed">
                From Swiss Pole Vault Champion to building global sales teams and leading strategic 
                transformation at Adobe—driven by discipline, community building, and helping others succeed.
              </p>
            </div>
            <div className="relative w-80 h-80 rounded-lg overflow-hidden border-4 border-rust shadow-2xl">
              <Image
                src="/business1.jpeg"
                alt="Dominik Steinacher"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Career Timeline */}
        <section className="mb-16 bg-concrete p-8 rounded-lg border-l-4 border-rust">
          <h2 className="text-3xl font-bold text-chalk mb-8 uppercase">Career Timeline</h2>
          
          {/* Horizontal Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-steel hidden md:block"></div>
            
            {/* Timeline Items */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {timeline.map((item, index) => {
                const isCurrentJob = item.year.includes('Present');
                return (
                  <div key={index} className="relative">
                    {/* Dot */}
                    <div className="flex justify-center mb-4">
                      <div className={`${isCurrentJob ? 'w-5 h-5' : 'w-4 h-4'} rounded-full ${isCurrentJob ? 'bg-rust' : 'bg-chalk'} ring-4 ring-concrete relative z-10`}></div>
                    </div>
                    
                    {/* Content */}
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
            
            {/* Education Section */}
            <div className="mt-12 pt-8 border-t border-steel/30">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-chalk ring-4 ring-concrete"></div>
                <div className="text-center md:text-left">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase bg-steel/30 text-chalk mb-2">
                    University of Basel
                  </span>
                  <p className="text-chalk/60 font-mono text-sm">1992 - 1998</p>
                  <p className="text-chalk font-semibold">Master of Arts in Economics (lic. rer. pol)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Adobe Role */}
        <section className="mb-16 bg-concrete p-8 rounded-lg border-l-4 border-rust">
          <h2 className="text-3xl font-bold text-chalk mb-6 uppercase">Adobe · Transformational Growth & Strategy</h2>
          <p className="text-chalk/80 text-lg leading-relaxed mb-4">
            I joined Adobe in September 2022. My role is Senior Manager of Transformational Growth & 
            Strategy on the Blackbird team within AEM Engineering. I lead strategic transformation—growth 
            tactics, not technology. I bring 20+ years of commercial leadership into engineering culture. 
            Customer experience. Relationship building. Stakeholder management. All the sales leader skills 
            that help communities thrive.
          </p>
          <p className="text-chalk/80 text-lg leading-relaxed">
            Before Adobe, I opened markets across the UK, Eastern Europe, UAE, and APAC. I took Magnolia 
            International from 50 to 300 customers as Chief Commercial Officer. I built global sales teams. 
            I worked with C-level executives, developers, and everyone in between.
          </p>
        </section>

        {/* Community Building */}
        <section className="mb-16 bg-concrete p-8 rounded-lg border-l-4 border-steel">
          <h2 className="text-3xl font-bold text-chalk mb-6 uppercase">Building Communities That Transform</h2>
          <p className="text-chalk/80 text-lg leading-relaxed mb-6">
            I build communities that break silos and drive transformation.
          </p>
          
          <div className="bg-charcoal p-6 rounded-lg mb-6">
            <h3 className="text-2xl font-bold text-rust mb-4">AI Community of Communities · Adobe Basel</h3>
            <p className="text-chalk/80 text-lg leading-relaxed mb-4">
              I lead the AI Community of Communities at Adobe Basel. Since July 2024, we've grown from 50 to 
              900+ members with 100+ regular attendees. We connect AI teams across AEM, AEP, Document Cloud, 
              and Firefly. Our mission is simple: break silos, share openly, learn together, move fast.
            </p>
            <p className="text-chalk/80 text-lg leading-relaxed">
              What makes this work? Hyper-transparency. Community-led formats. Real use cases over theory. 
              We run weekly Show & Tell sessions, document everything, and share failures openly. No gatekeeping. 
              No top-down mandates. Just engineers solving real problems together.
            </p>
          </div>

          <div className="bg-rust/10 border-l-4 border-rust p-6 rounded">
            <p className="text-chalk text-lg font-semibold italic">
              "My leadership philosophy is straightforward: create trust. Build safe harbors where people 
              can fail fast and succeed faster. That's how you scale."
            </p>
          </div>
        </section>

        {/* Athletic Journey with Photos */}
        <section className="mb-16 bg-concrete p-8 rounded-lg border-l-4 border-rust">
          <h2 className="text-3xl font-bold text-chalk mb-8 uppercase">Athletic Journey</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Pole Vault */}
            <div>
              <div className="relative h-96 rounded-lg overflow-hidden mb-4 border-4 border-rust bg-charcoal flex items-center justify-center">
                <Image
                  src="/pole.JPG"
                  alt="Pole Vault Champion 1996"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-rust mb-2">🏆 Swiss Pole Vault Champion</h3>
              <p className="text-chalk/60 mb-3">1996</p>
              <p className="text-chalk/80 leading-relaxed">
                The discipline, focus, and dedication required in competitive athletics shaped my approach 
                to everything I do.
              </p>
            </div>

            {/* Crossfit */}
            <div>
              <div className="relative h-96 rounded-lg overflow-hidden mb-4 border-4 border-steel bg-charcoal flex items-center justify-center">
                <Image
                  src="/Cross1.jpg"
                  alt="Crossfit Training"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-rust mb-2">💪 Crossfit Athlete & Coach</h3>
              <p className="text-chalk/60 mb-3">GO PURE · Present</p>
              <p className="text-chalk/80 leading-relaxed">
                Today, I'm deep in Crossfit—training myself and coaching at GO PURE. Helping others find 
                their strength and break through limits.
              </p>
            </div>
          </div>

          {/* Crossfit Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-40 rounded overflow-hidden border-2 border-steel/30 hover:border-rust transition bg-charcoal">
              <Image src="/cross2.png" alt="Training" fill className="object-contain" />
            </div>
            <div className="relative h-40 rounded overflow-hidden border-2 border-steel/30 hover:border-rust transition bg-charcoal">
              <Image src="/cross3.jpeg" alt="Training" fill className="object-contain" />
            </div>
            <div className="relative h-40 rounded overflow-hidden border-2 border-steel/30 hover:border-rust transition bg-charcoal">
              <Image src="/cross4.jpg" alt="Training" fill className="object-contain" />
            </div>
            <div className="relative h-40 rounded overflow-hidden border-2 border-steel/30 hover:border-rust transition bg-charcoal">
              <Image src="/cross5.jpeg" alt="Training" fill className="object-contain" />
            </div>
          </div>
        </section>

        {/* Personal Life with Photos */}
        <section className="bg-concrete p-8 rounded-lg border-l-4 border-rust">
          <h2 className="text-3xl font-bold text-chalk mb-6 uppercase">Life in Arlesheim</h2>
          <p className="text-chalk/80 text-lg leading-relaxed mb-6">
            I live in Arlesheim near Basel with my wife and two kids (Liv, 15; Finn, 17).
          </p>
          
          {/* Fun Photo Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative h-56 rounded-lg overflow-hidden border-2 border-steel/30 hover:border-rust transition bg-charcoal">
              <Image src="/fun1.jpg" alt="Life moments" fill className="object-contain" />
            </div>
            <div className="relative h-56 rounded-lg overflow-hidden border-2 border-steel/30 hover:border-rust transition bg-charcoal">
              <Image src="/fun2.jpg" alt="Life moments" fill className="object-contain" />
            </div>
            <div className="relative h-56 rounded-lg overflow-hidden border-2 border-steel/30 hover:border-rust transition bg-charcoal">
              <Image src="/fun3.jpg" alt="Life moments" fill className="object-contain" />
            </div>
            <div className="relative h-56 rounded-lg overflow-hidden border-2 border-steel/30 hover:border-rust transition bg-charcoal">
              <Image src="/fun4.jpg" alt="Life moments" fill className="object-contain" />
            </div>
            <div className="relative h-56 rounded-lg overflow-hidden border-2 border-steel/30 hover:border-rust transition bg-charcoal">
              <Image src="/fun5.jpg" alt="Life moments" fill className="object-contain" />
            </div>
            <div className="relative h-56 rounded-lg overflow-hidden border-2 border-steel/30 hover:border-rust transition bg-charcoal">
              <Image src="/fun6.jpg" alt="Life moments" fill className="object-contain" />
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a 
            href="/contact" 
            className="inline-block bg-rust hover:bg-red-700 text-chalk px-12 py-4 rounded-lg text-lg font-bold uppercase tracking-wide transition shadow-lg"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </main>
  );
}
