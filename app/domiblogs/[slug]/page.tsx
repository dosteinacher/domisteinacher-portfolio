import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Image from 'next/image';

export default function WinningTheGamePage() {
  return (
    <main className="min-h-screen bg-charcoal">
      <Navbar />
      
      <article className="container mx-auto px-4 py-24 max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <Link href="/domiblogs" className="text-rust hover:text-red-400 font-semibold mb-6 inline-block">
            ← Back to DomiBlogs
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-chalk mb-6 leading-tight">
            Winning the Game: Lessons from Sport, CrossFit, and Pole Vaulting in PLG, Sales, and Culture Change
          </h1>
          
          <div className="flex items-center gap-4 text-steel mb-8">
            <time>Feb 7, 2025</time>
            <span>•</span>
            <span>by Dominik Steinacher</span>
            <span>•</span>
            <span>5 min read</span>
          </div>

          {/* Cover Image */}
          <div className="relative h-96 w-full rounded-lg overflow-hidden mb-8">
            <Image
              src="/blogs/Picture1.jpg"
              alt="Winning the Game"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-rust mb-4">Introduction</h2>
            <p className="text-steel text-lg leading-relaxed">
              Success, whether in sports, business, or personal growth, is built on resilience, 
              adaptability, and execution. Whether you're pushing through a brutal CrossFit WOD, 
              fine-tuning technique in pole vaulting, or scaling a business with product-led growth (PLG), 
              the key is the same: commit, iterate, and improve.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-rust mb-4">The Athlete's Mindset in PLG and Sales</h2>
            <p className="text-steel text-lg leading-relaxed mb-4">
              Top performers in sports and business share the same drive: they push limits, embrace 
              feedback, and adapt to challenges.
            </p>
            <ul className="space-y-4 text-steel text-lg">
              <li className="pl-6 border-l-2 border-rust">
                <strong className="text-chalk">CrossFit:</strong> You don't master Olympic lifts overnight; 
                you build strength, technique, and efficiency over time. PLG works the same way: start 
                with a great user experience, refine based on data, and scale gradually.
              </li>
              <li className="pl-6 border-l-2 border-rust">
                <strong className="text-chalk">Pole Vaulting:</strong> Success isn't just about raw strength — 
                it's about precision, timing, and execution under pressure. In sales, it's not about pushing 
                harder; it's about placing the right offer at the right moment.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-rust mb-4">Selling Without Selling: The PLG Approach</h2>
            <p className="text-steel text-lg leading-relaxed mb-4">
              Athletes don't just train — they prove results. CrossFitters don't "sell" workouts, and 
              pole vaulters don't "sell" technique. The proof is in performance.
            </p>

            {/* Inline Image */}
            <div className="relative h-80 w-full rounded-lg overflow-hidden my-8">
              <Image
                src="/blogs/Picture2.jpg"
                alt="Performance in action"
                fill
                className="object-cover"
              />
            </div>

            <ul className="space-y-4 text-steel text-lg">
              <li className="pl-6 border-l-2 border-steel">
                <strong className="text-chalk">Example:</strong> In CrossFit, beginners may start with 
                scaled movements before progressing to full snatches or muscle-ups. PLG follows the same 
                principle — let users experience incremental value before asking them to commit.
              </li>
              <li className="pl-6 border-l-2 border-steel">
                <strong className="text-chalk">Example:</strong> In pole vaulting, minor tweaks in approach 
                speed or pole grip can be the difference between clearing the bar and failure. Sales teams 
                using PLG must fine-tune interactions based on user behavior rather than relying on outdated playbooks.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-rust mb-4">Culture Change: The Ultimate Game-Changer</h2>
            <p className="text-steel text-lg leading-relaxed mb-4">
              Great athletes — and great companies — don't cling to outdated methods. They evolve.
            </p>
            <ul className="space-y-4 text-steel text-lg">
              <li className="pl-6 border-l-2 border-rust">
                <strong className="text-chalk">CrossFit transformed fitness</strong> by proving that intensity, 
                functional movement, and community deliver better results than traditional gyms.
              </li>
              <li className="pl-6 border-l-2 border-rust">
                <strong className="text-chalk">PLG transforms sales</strong> by shifting from "always be closing" 
                to "always be helping." Instead of pushing products, companies build ecosystems where users 
                naturally find value.
              </li>
              <li className="pl-6 border-l-2 border-rust">
                <strong className="text-chalk">Pole vaulters break records</strong> by constantly refining their 
                technique, adjusting to new pole technology, and pushing past mental barriers. Organizations that 
                embrace culture change must also break from old habits, experiment, and adapt.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-rust mb-4">Conclusion</h2>
            <p className="text-steel text-lg leading-relaxed">
              Sport, CrossFit, pole vaulting, and business all teach the same lesson: progress comes from 
              consistency, adaptation, and the willingness to push limits. Whether you're scaling a startup, 
              coaching a sales team, or training for your next big competition, success isn't about one big 
              win — it's about showing up, learning, and improving every day.
            </p>
          </section>
        </div>

        {/* Back Button */}
        <div className="mt-12 pt-8 border-t border-steel/30">
          <Link href="/domiblogs" className="inline-block bg-rust hover:bg-red-700 text-chalk px-8 py-3 rounded-lg font-bold transition">
            ← Back to All Posts
          </Link>
        </div>
      </article>
    </main>
  );
}
