import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-charcoal">
      <Navbar />
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20 pt-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-5xl md:text-7xl font-bold text-chalk mb-4 tracking-tight">
              DOMINIK<br />
              STEINACHER
            </h1>
            <div className="h-1 w-24 bg-rust mb-6"></div>
            <p className="text-xl md:text-2xl text-steel mb-6">
              Pole Vault Champion · Coach · Digital Solutions Expert
            </p>
            <p className="text-lg text-chalk/80 mb-8 leading-relaxed">
              I coach at <span className="text-rust font-semibold">GO PURE</span> and lead strategic 
              transformation at Adobe. The athletic background helps—I was Swiss Pole Vault Champion in 1996.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex gap-4 flex-wrap">
              <a 
                href="mailto:dominik@steinacher-bachmann.ch"
                className="bg-rust hover:bg-rust/90 text-chalk px-8 py-3 rounded font-bold uppercase tracking-wide transition"
              >
                Get in Touch
              </a>
              <a 
                href="https://go-pure.ch" 
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-steel hover:border-rust text-chalk px-8 py-3 rounded font-bold uppercase tracking-wide transition"
              >
                Visit GO PURE
              </a>
            </div>
          </div>

          {/* Hero Images - Side by Side, No Overlap */}
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
            {/* Photo 1 - Main Headshot */}
            <div className="relative w-80 h-80 md:w-96 md:h-96">
        <Image
                src="/hero-photo.jpg"
                alt="Dominik Steinacher"
                fill
                className="object-cover rounded-lg border-4 border-rust shadow-2xl"
          priority
        />
            </div>
            
            {/* Photo 2 - Action Shot */}
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              <Image
                src="/hero-photo-3.jpg"
                alt="Dominik Steinacher"
                fill
                className="object-cover rounded-lg border-4 border-steel shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-concrete">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-chalk mb-12 uppercase tracking-tight">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-rust mb-4">Athletic Background</h3>
              <p className="text-chalk/80 text-lg leading-relaxed mb-6">
                Swiss Pole Vault Champion in 1996. The discipline, focus, and dedication required 
                in competitive athletics shaped my approach to everything I do.
              </p>
              <p className="text-chalk/80 text-lg leading-relaxed">
                Today, I'm deep in Crossfit—training myself and coaching at GO PURE. Helping others 
                find their strength and break through limits.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-rust mb-4">Professional Life</h3>
              <p className="text-chalk/80 text-lg leading-relaxed mb-6">
                I lead strategic transformation at Adobe—growth tactics, not technology.
              </p>
              <p className="text-chalk/80 text-lg leading-relaxed">
                Life in Arlesheim includes two kids, regular training, and demanding work. I make it work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-chalk mb-12 uppercase tracking-tight">
            Projects
          </h2>
          
          {/* GO PURE Featured Project */}
          <div className="bg-concrete border-l-4 border-rust p-8 rounded-lg mb-8 hover:border-rust/60 transition">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
              <h3 className="text-3xl font-bold text-chalk">GO PURE</h3>
              <span className="text-rust font-bold uppercase text-sm tracking-wide">Featured Project</span>
            </div>
            <p className="text-chalk/80 text-lg leading-relaxed mb-6">
              A comprehensive workout management platform. Built for the community, 
              by the community. Features workout scheduling, availability polls, user registration, 
              and a library of 346+ workout templates.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-charcoal text-steel text-sm rounded border border-steel/30">Next.js</span>
              <span className="px-3 py-1 bg-charcoal text-steel text-sm rounded border border-steel/30">TypeScript</span>
              <span className="px-3 py-1 bg-charcoal text-steel text-sm rounded border border-steel/30">Postgres</span>
              <span className="px-3 py-1 bg-charcoal text-steel text-sm rounded border border-steel/30">Vercel</span>
            </div>
            <a 
              href="https://go-pure.ch" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-rust hover:bg-rust/90 text-chalk px-6 py-2 rounded font-bold uppercase tracking-wide transition"
            >
              Visit Site →
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-concrete">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-chalk mb-12 uppercase tracking-tight">
            Get In Touch
          </h2>
          
          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a 
              href="https://www.linkedin.com/in/dominik-steinacher/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-charcoal hover:bg-rust text-chalk px-6 py-3 rounded font-semibold transition group"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg>
              LinkedIn
            </a>
            <a 
              href="https://github.com/dosteinacher" 
            target="_blank"
            rel="noopener noreferrer"
              className="flex items-center gap-2 bg-charcoal hover:bg-rust text-chalk px-6 py-3 rounded font-semibold transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
          </a>
          <a
              href="https://www.instagram.com/domigalfius/" 
            target="_blank"
            rel="noopener noreferrer"
              className="flex items-center gap-2 bg-charcoal hover:bg-rust text-chalk px-6 py-3 rounded font-semibold transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              Instagram
            </a>
          </div>

          {/* Email */}
          <div className="space-y-4">
            <a 
              href="mailto:dominik@steinacher-bachmann.ch"
              className="inline-block text-2xl md:text-3xl font-bold text-rust hover:text-rust/80 transition"
            >
              dominik@steinacher-bachmann.ch
            </a>
            <p className="text-steel">Arlesheim, Switzerland 🇨🇭</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-concrete">
        <div className="max-w-6xl mx-auto text-center text-steel">
          <p>&copy; {new Date().getFullYear()} Dominik Steinacher. All rights reserved.</p>
        </div>
      </footer>
      </main>
  );
}
