'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { useT } from '@/lib/translations';
import { getBlurDataURL } from '@/lib/blurPlaceholders';

const post = {
  coverImage: '/blogs/Picture1.jpg',
  author: 'Dominik Steinacher',
};

export default function WinningTheGamePost() {
  const { lang } = useLanguage();
  const t = useT(lang);
  const postMeta = t.blogs.posts.find((p) => p.slug === 'winning-the-game')!;

  return (
    <article className="container mx-auto px-4 py-24 max-w-4xl">
      <div className="mb-12">
        <Link href="/domiblogs" className="text-rust hover:text-red-400 font-semibold mb-6 inline-block">
          {t.blog.backToBlogs}
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-chalk mb-6 leading-tight">
          {postMeta.title}
        </h1>

        <div className="flex items-center gap-4 text-steel mb-8">
          <time>{postMeta.date}</time>
          <span>•</span>
          <span>{t.blog.by} {post.author}</span>
          <span>•</span>
          <span>{postMeta.readTime}</span>
        </div>

        <div className="relative h-96 w-full rounded-lg overflow-hidden mb-8">
          <Image
            src={post.coverImage}
            alt={postMeta.title}
            fill
            placeholder="blur"
            blurDataURL={getBlurDataURL(post.coverImage)}
            className="object-cover"
          />
        </div>
      </div>

      <div className="prose prose-invert prose-lg max-w-none">
        {lang === 'en' ? <WinningTheGameEN /> : <WinningTheGameDE />}
      </div>

      <div className="mt-12 pt-8 border-t border-steel/30">
        <Link href="/domiblogs" className="inline-block bg-rust hover:bg-red-700 text-chalk px-8 py-3 rounded-lg font-bold transition">
          {t.blog.backToAll}
        </Link>
      </div>
    </article>
  );
}

function WinningTheGameEN() {
  return (
    <>
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-rust mb-4">Introduction</h2>
        <p className="text-steel text-lg leading-relaxed">
          Success, whether in sports, business, or personal growth, is built on resilience,
          adaptability, and execution. Whether you&apos;re pushing through a brutal CrossFit WOD,
          fine-tuning technique in pole vaulting, or scaling a business with product-led growth (PLG),
          the key is the same: commit, iterate, and improve.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-rust mb-4">The Athlete&apos;s Mindset in PLG and Sales</h2>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Top performers in sports and business share the same drive: they push limits, embrace
          feedback, and adapt to challenges.
        </p>
        <ul className="space-y-4 text-steel text-lg">
          <li className="pl-6 border-l-2 border-rust">
            <strong className="text-chalk">CrossFit:</strong> You don&apos;t master Olympic lifts overnight;
            you build strength, technique, and efficiency over time. PLG works the same way: start
            with a great user experience, refine based on data, and scale gradually.
          </li>
          <li className="pl-6 border-l-2 border-rust">
            <strong className="text-chalk">Pole Vaulting:</strong> Success isn&apos;t just about raw strength —
            it&apos;s about precision, timing, and execution under pressure. In sales, it&apos;s not about pushing
            harder; it&apos;s about placing the right offer at the right moment.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-rust mb-4">Selling Without Selling: The PLG Approach</h2>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Athletes don&apos;t just train — they prove results. CrossFitters don&apos;t &quot;sell&quot; workouts, and
          pole vaulters don&apos;t &quot;sell&quot; technique. The proof is in performance.
        </p>

        <div className="relative h-80 w-full rounded-lg overflow-hidden my-8">
          <Image
            src="/blogs/Picture2.jpg"
            alt="Performance in action"
            fill
            placeholder="blur"
            blurDataURL={getBlurDataURL('/blogs/Picture2.jpg')}
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
          Great athletes — and great companies — don&apos;t cling to outdated methods. They evolve.
        </p>
        <ul className="space-y-4 text-steel text-lg">
          <li className="pl-6 border-l-2 border-rust">
            <strong className="text-chalk">CrossFit transformed fitness</strong> by proving that intensity,
            functional movement, and community deliver better results than traditional gyms.
          </li>
          <li className="pl-6 border-l-2 border-rust">
            <strong className="text-chalk">PLG transforms sales</strong> by shifting from &quot;always be closing&quot;
            to &quot;always be helping.&quot; Instead of pushing products, companies build ecosystems where users
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
          consistency, adaptation, and the willingness to push limits. Whether you&apos;re scaling a startup,
          coaching a sales team, or training for your next big competition, success isn&apos;t about one big
          win — it&apos;s about showing up, learning, and improving every day.
        </p>
      </section>
    </>
  );
}

function WinningTheGameDE() {
  return (
    <>
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-rust mb-4">Einleitung</h2>
        <p className="text-steel text-lg leading-relaxed">
          Erfolg – ob im Sport, im Business oder beim persönlichen Wachstum – beruht auf Belastbarkeit,
          Anpassungsfähigkeit und Umsetzung. Ob man sich durch ein brutales CrossFit-WOD kämpft, die
          Technik im Stabhochsprung verfeinert oder ein Unternehmen mit Product-Led Growth (PLG) skaliert –
          der Schlüssel ist derselbe: Commit, iteriere und verbessere dich.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-rust mb-4">Die Denkweise des Athleten in PLG und Vertrieb</h2>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Spitzenleister in Sport und Business teilen denselben Antrieb: Sie überschreiten Grenzen,
          nehmen Feedback an und passen sich Herausforderungen an.
        </p>
        <ul className="space-y-4 text-steel text-lg">
          <li className="pl-6 border-l-2 border-rust">
            <strong className="text-chalk">CrossFit:</strong> Du meisterst olympische Gewichthebeübungen
            nicht über Nacht; du baust Kraft, Technik und Effizienz über Zeit auf. PLG funktioniert
            gleich: Beginne mit einer grossartigen User Experience, verfeinere auf Basis von Daten
            und skaliere schrittweise.
          </li>
          <li className="pl-6 border-l-2 border-rust">
            <strong className="text-chalk">Stabhochsprung:</strong> Erfolg dreht sich nicht nur um rohe
            Kraft – es geht um Präzision, Timing und Ausführung unter Druck. Im Vertrieb geht es
            nicht darum, härter zu drücken; es geht darum, das richtige Angebot zum richtigen Zeitpunkt
            zu platzieren.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-rust mb-4">Verkaufen ohne zu verkaufen: Der PLG-Ansatz</h2>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Athleten trainieren nicht nur – sie beweisen Ergebnisse. CrossFitter «verkaufen» keine Workouts,
          und Stabhochspringer «verkaufen» keine Technik. Der Beweis liegt in der Leistung.
        </p>

        <div className="relative h-80 w-full rounded-lg overflow-hidden my-8">
          <Image
            src="/blogs/Picture2.jpg"
            alt="Leistung in Aktion"
            fill
            placeholder="blur"
            blurDataURL={getBlurDataURL('/blogs/Picture2.jpg')}
            className="object-cover"
          />
        </div>

        <ul className="space-y-4 text-steel text-lg">
          <li className="pl-6 border-l-2 border-steel">
            <strong className="text-chalk">Beispiel:</strong> Im CrossFit beginnen Anfänger möglicherweise
            mit skalierten Bewegungen, bevor sie zu vollen Reisszügen oder Muscle-ups übergehen. PLG
            folgt demselben Prinzip – lass Nutzer inkrementellen Wert erleben, bevor du sie um eine
            Verpflichtung bittest.
          </li>
          <li className="pl-6 border-l-2 border-steel">
            <strong className="text-chalk">Beispiel:</strong> Im Stabhochsprung können kleine Anpassungen
            in der Anlaufgeschwindigkeit oder am Stangengriff der Unterschied zwischen dem Überwinden
            der Latte und dem Scheitern sein. Vertriebsteams, die PLG nutzen, müssen Interaktionen
            basierend auf dem Nutzerverhalten verfeinern, anstatt veraltete Playbooks zu verwenden.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-rust mb-4">Kulturwandel: Der ultimative Game-Changer</h2>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Grosse Athleten – und grosse Unternehmen – halten nicht an veralteten Methoden fest. Sie entwickeln
          sich weiter.
        </p>
        <ul className="space-y-4 text-steel text-lg">
          <li className="pl-6 border-l-2 border-rust">
            <strong className="text-chalk">CrossFit hat Fitness transformiert,</strong> indem es bewies,
            dass Intensität, funktionelle Bewegung und Community bessere Ergebnisse liefern als
            traditionelle Fitnessstudios.
          </li>
          <li className="pl-6 border-l-2 border-rust">
            <strong className="text-chalk">PLG transformiert den Vertrieb,</strong> indem es von «immer
            abschliessen» zu «immer helfen» wechselt. Anstatt Produkte zu drängen, bauen Unternehmen
            Ökosysteme auf, in denen Nutzer natürlich Wert finden.
          </li>
          <li className="pl-6 border-l-2 border-rust">
            <strong className="text-chalk">Stabhochspringer brechen Rekorde,</strong> indem sie ständig
            ihre Technik verfeinern, sich an neue Stangentechnologie anpassen und mentale Barrieren
            überwinden. Organisationen, die Kulturwandel annehmen, müssen ebenfalls mit alten Gewohnheiten
            brechen, experimentieren und sich anpassen.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-rust mb-4">Fazit</h2>
        <p className="text-steel text-lg leading-relaxed">
          Sport, CrossFit, Stabhochsprung und Business lehren alle dieselbe Lektion: Fortschritt kommt
          aus Beständigkeit, Anpassung und der Bereitschaft, Grenzen zu überschreiten. Ob du ein Startup
          skalierst, ein Vertriebsteam coachst oder für deinen nächsten grossen Wettkampf trainierst –
          Erfolg dreht sich nicht um einen grossen Gewinn, sondern darum, jeden Tag aufzutauchen,
          zu lernen und sich zu verbessern.
        </p>
      </section>
    </>
  );
}
