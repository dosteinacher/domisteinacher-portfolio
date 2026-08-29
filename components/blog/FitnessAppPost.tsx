'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { useT } from '@/lib/translations';
import { getBlurDataURL } from '@/lib/blurPlaceholders';

const post = {
  coverImage: '/blogs/fitness-app-no-code.png',
  author: 'Dominik Steinacher',
};

export default function FitnessAppPost() {
  const { lang } = useLanguage();
  const t = useT(lang);
  const postMeta = t.blogs.posts.find((p) => p.slug === 'fitness-app-no-code')!;

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
        {lang === 'en' ? <FitnessAppEN /> : <FitnessAppDE />}
      </div>

      <div className="mt-12 pt-8 border-t border-steel/30">
        <Link href="/domiblogs" className="inline-block bg-rust hover:bg-red-700 text-chalk px-8 py-3 rounded-lg font-bold transition">
          {t.blog.backToAll}
        </Link>
      </div>
    </article>
  );
}

function FitnessAppEN() {
  return (
    <>
      <section className="mb-8">
        <p className="text-steel text-xl leading-relaxed font-medium">
          Let me say that again, because I want it to sink in.
        </p>
        <p className="text-steel text-lg leading-relaxed mt-4">
          I built a complete, working, production-ready fitness platform — with class registration,
          workout scheduling, member management, automated emails, a calendar, polls, and an admin
          panel — and I cannot write code. I have never written code. Not a loop. Not a hello world. Nothing.
        </p>
        <p className="text-steel text-lg leading-relaxed mt-4">
          And yet: <a href="https://go-pure.ch" target="_blank" rel="noopener noreferrer" className="text-rust hover:text-red-400 underline">go-pure.ch</a> exists.
        </p>
        <p className="text-steel text-lg leading-relaxed mt-4 italic">
          We live in wild times.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-rust mb-4">How It Started</h2>
        <p className="text-steel text-lg leading-relaxed mb-4">
          My friend had a vision. Not a business plan, not investors, not a commercial lease — a <strong className="text-chalk">basement</strong>.
          He built his own training box down there, for a handful of friends, completely unofficial.
          Just barbells, a pull-up rig, and questionable life choices.
        </p>
        <p className="text-steel text-lg leading-relaxed mb-4">
          I helped him build it. Physically. With my hands. We dragged equipment, installed rigs,
          set up the space. At some point during this process, he looked at me and said:
          <span className="text-chalk italic"> &ldquo;You should be the coach.&rdquo;</span>
        </p>
        <p className="text-steel text-lg leading-relaxed mb-4">
          So now I was the coach of a basement training box.
        </p>
        <p className="text-steel text-lg leading-relaxed mb-4">
          To be clear about what &ldquo;coach&rdquo; means here: it&apos;s me and up to four other people,
          always the same crew, training together in a basement. I write the workout. I explain the workout.
          And then I do the workout — right next to them, equally out of breath, equally suffering.
          I am coach and athlete simultaneously, which sounds impressive until you&apos;re on rep 15 of
          something terrible and someone looks at you for guidance and you can barely speak.
        </p>
        <p className="text-steel text-lg leading-relaxed">
          That&apos;s the setup. Five people max. Same faces every time. A proper little community, just underground.
          And that community deserved proper tools.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-rust mb-4">My Secret? I Didn&apos;t Write the Code. I Directed It.</h2>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Here&apos;s the part people find hard to believe: I built this with <strong className="text-chalk">Cursor</strong> first,
          then switched to <strong className="text-chalk">Claude</strong>. AI wrote the code. I told it what to build.
        </p>
        <p className="text-steel text-lg leading-relaxed mb-4">
          That sounds simple. It was not simple.
        </p>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Because being the non-technical person on a software project means you have to be <em>extremely</em> clear
          about what you want. You have to think through features, edge cases, user flows — all without knowing
          what&apos;s easy or hard to build. You&apos;re basically a product manager, a designer, and a CEO,
          except your only employee is an AI that will absolutely do exactly what you say, even when what you
          say is accidentally insane.
        </p>
        <p className="text-steel text-lg leading-relaxed">
          The fast pace of AI development made this whole thing possible. A few years ago, this idea would have
          died in the &ldquo;I should learn to code someday&rdquo; graveyard. Instead, I just... built it.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-rust mb-4">Every Idea Brings a New Idea (Send Help)</h2>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Here&apos;s what nobody tells you about building something you care about: it never stops.
        </p>
        <p className="text-steel text-lg leading-relaxed mb-6">
          It started as a website. Then someone needed to book a class. Then they needed a confirmation email.
          Then I needed to post the daily workout so the crew knew what was coming. Then they wanted polls.
          Then I needed a calendar. Then an admin panel. Then —
        </p>
        <p className="text-steel text-lg leading-relaxed mb-6">
          At some point I stopped having a simple website and started having a <em>platform</em>.
          A full app with features I didn&apos;t even plan for. It just kept growing, one idea at a time.
        </p>
        <ul className="space-y-4 text-steel text-lg">
          <li className="pl-6 border-l-2 border-rust">
            <strong className="text-chalk">Workout scheduling</strong> — I post, they dread
          </li>
          <li className="pl-6 border-l-2 border-rust">
            <strong className="text-chalk">Class registration &amp; cancellation</strong> — one tap to sign up, one tap to bail when you see &ldquo;100 burpees&rdquo;
          </li>
          <li className="pl-6 border-l-2 border-rust">
            <strong className="text-chalk">Member management</strong> — profiles, attendance, the works
          </li>
          <li className="pl-6 border-l-2 border-rust">
            <strong className="text-chalk">Announcements</strong> — real communication for a real community
          </li>
          <li className="pl-6 border-l-2 border-rust">
            <strong className="text-chalk">A calendar</strong> — no more &ldquo;I didn&apos;t know there was class&rdquo;
          </li>
          <li className="pl-6 border-l-2 border-rust">
            <strong className="text-chalk">Automated emails</strong> — because even a basement deserves professionalism
          </li>
          <li className="pl-6 border-l-2 border-rust">
            <strong className="text-chalk">Polling</strong> — democracy, fitness edition
          </li>
        </ul>
        <p className="text-steel text-lg leading-relaxed mt-6">
          None of this was in the original plan. All of it made it in anyway.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-rust mb-4">That One Time Everything Disappeared</h2>
        <p className="text-steel text-lg leading-relaxed mb-4">
          I need to tell you about The Incident.
        </p>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Claude and I were working on the design. Things were looking <em>good</em> — cleaner, sharper,
          finally matching what I had in my head. I was happy. And then I looked at the actual content
          of the site and it was just... gone. Not broken. Not loading weird. <em>Gone.</em>
          Beautiful design. Nothing inside it.
        </p>
        <p className="text-steel text-lg leading-relaxed mb-4">
          I stared at the screen the way you stare at an empty barbell when you thought you loaded it.
          That specific confusion of: this should not be possible.
        </p>
        <p className="text-steel text-lg leading-relaxed mb-4">
          So I did the only logical thing: I asked Claude what happened.
        </p>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Claude saved me. Found the issue, fixed it, brought everything back. The content returned.
          The design stayed nice. Crisis over.
        </p>
        <p className="text-steel text-lg leading-relaxed">
          The lesson here is that AI can accidentally erase your work and then heroically rescue it
          in the same afternoon, and somehow that&apos;s fine now. That&apos;s just Tuesday. We move on.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-rust mb-4">What I&apos;m Actually Proud Of</h2>
        <p className="text-steel text-lg leading-relaxed mb-4">
          The complexity. Not in a showing-off way — in a &ldquo;this is a real product&rdquo; way.
        </p>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Yes, we&apos;re five people. Yes, we train in a basement. Yes, I am the coach and also the person
          most likely to collapse mid-workout. But this little operation runs on a real platform —
          workouts get posted, classes get booked, emails go out, the calendar works.
          It feels like a proper gym because it <em>runs</em> like a proper gym.
        </p>
        <p className="text-steel text-lg leading-relaxed mb-4">
          That gap — between the scale of the thing (tiny) and the quality of the tooling (serious) —
          is what makes me proud. We didn&apos;t settle for a WhatsApp group and a shared notes document.
          We got a platform.
        </p>
        <p className="text-steel text-lg leading-relaxed">
          And I built it without knowing how to code.
        </p>
      </section>

      <section className="mt-12 p-8 bg-rust/10 rounded-lg border-l-4 border-rust">
        <h2 className="text-2xl font-bold text-chalk mb-4">The Punchline</h2>
        <p className="text-steel text-lg leading-relaxed mb-4">
          My friend needed a website for his basement box. He got a fitness platform.
          I, a man who cannot code, apparently build software now.
        </p>
        <p className="text-steel text-lg leading-relaxed mb-4">
          The app lives at <a href="https://go-pure.ch" target="_blank" rel="noopener noreferrer" className="text-rust hover:text-red-400 underline">go-pure.ch</a> — behind a login, for our little crew only.
          Five people, a basement, and a platform that takes itself completely seriously. As it should.
        </p>
        <p className="text-chalk text-lg italic">
          And if you have an idea for something and you think &ldquo;I could never build that&rdquo; —
          maybe think again. The tools are different now. The only thing you actually need is a problem
          worth solving. And maybe a very patient AI.
        </p>
      </section>
    </>
  );
}

function FitnessAppDE() {
  return (
    <>
      <section className="mb-8">
        <p className="text-steel text-xl leading-relaxed font-medium">
          Lass mich das wiederholen, damit es wirklich ankommt.
        </p>
        <p className="text-steel text-lg leading-relaxed mt-4">
          Ich habe eine vollständige, funktionsfähige, produktionsreife Fitness-Plattform gebaut – mit Kursregistrierung,
          Workout-Planung, Mitgliederverwaltung, automatisierten E-Mails, einem Kalender, Umfragen und einem Admin-Panel –
          und ich kann keinen Code schreiben. Ich habe noch nie Code geschrieben. Keine Schleife. Kein Hello World. Nichts.
        </p>
        <p className="text-steel text-lg leading-relaxed mt-4">
          Und doch: <a href="https://go-pure.ch" target="_blank" rel="noopener noreferrer" className="text-rust hover:text-red-400 underline">go-pure.ch</a> existiert.
        </p>
        <p className="text-steel text-lg leading-relaxed mt-4 italic">
          Wir leben in wilden Zeiten.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-rust mb-4">Wie es begann</h2>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Mein Freund hatte eine Vision. Keinen Businessplan, keine Investoren, keinen Gewerbemietvertrag – einen <strong className="text-chalk">Keller</strong>.
          Er baute dort seine eigene Trainingsbox auf, für eine Handvoll Freunde, völlig inoffiziell.
          Nur Hanteln, ein Klimmzuggerüst und fragwürdige Lebensentscheidungen.
        </p>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Ich half ihm beim Aufbau. Körperlich. Mit meinen Händen. Wir schleppten Ausrüstung, installierten Gerüste,
          richteten den Raum ein. Irgendwann während dieses Prozesses schaute er mich an und sagte:
          <span className="text-chalk italic"> «Du solltest der Coach sein.»</span>
        </p>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Also war ich jetzt der Coach einer Keller-Trainingsbox.
        </p>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Um klarzustellen, was «Coach» hier bedeutet: Das bin ich und bis zu vier andere Personen,
          immer dieselbe Gruppe, die gemeinsam in einem Keller trainieren. Ich schreibe das Workout.
          Ich erkläre das Workout. Und dann mache ich das Workout – direkt neben ihnen, genauso ausser Atem,
          genauso leidend. Ich bin gleichzeitig Coach und Athlet, was beeindruckend klingt, bis man bei
          Wiederholung 15 von etwas Schrecklichem ist und jemand einen für Orientierung anschaut und man
          kaum sprechen kann.
        </p>
        <p className="text-steel text-lg leading-relaxed">
          Das ist die Ausgangslage. Maximal fünf Personen. Immer dieselben Gesichter. Eine echte kleine Community,
          nur unterirdisch. Und diese Community verdiente vernünftige Tools.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-rust mb-4">Mein Geheimnis? Ich habe den Code nicht geschrieben. Ich habe ihn dirigiert.</h2>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Hier ist der Teil, den die Leute kaum glauben können: Ich habe das zuerst mit <strong className="text-chalk">Cursor</strong> gebaut,
          dann zu <strong className="text-chalk">Claude</strong> gewechselt. KI hat den Code geschrieben. Ich habe ihr gesagt, was sie bauen soll.
        </p>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Das klingt einfach. Es war nicht einfach.
        </p>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Denn der nicht-technische Mensch in einem Software-Projekt zu sein bedeutet, dass man <em>extrem</em> klar
          sein muss, was man will. Man muss Features, Randfälle, User Flows durchdenken – alles ohne zu wissen,
          was einfach oder schwer zu bauen ist. Man ist im Grunde Produktmanager, Designer und CEO gleichzeitig,
          ausser dass der einzige Mitarbeiter eine KI ist, die absolut genau das tut, was man sagt, auch wenn
          das versehentlich irrsinnig ist.
        </p>
        <p className="text-steel text-lg leading-relaxed">
          Das schnelle Tempo der KI-Entwicklung hat das alles möglich gemacht. Vor ein paar Jahren wäre diese
          Idee auf dem «Ich sollte irgendwann mal Code lernen»-Friedhof gelandet. Stattdessen habe ich es
          einfach... gebaut.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-rust mb-4">Jede Idee bringt eine neue Idee (Hilfe!)</h2>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Das sagt dir niemand über das Bauen von etwas, das einem wichtig ist: Es hört nie auf.
        </p>
        <p className="text-steel text-lg leading-relaxed mb-6">
          Es begann als Website. Dann musste jemand einen Kurs buchen. Dann brauchten sie eine Bestätigungs-E-Mail.
          Dann musste ich das tägliche Workout posten, damit die Gruppe wusste, was kommt. Dann wollten sie Umfragen.
          Dann brauchte ich einen Kalender. Dann ein Admin-Panel. Dann –
        </p>
        <p className="text-steel text-lg leading-relaxed mb-6">
          Irgendwann hatte ich keine einfache Website mehr, sondern eine <em>Plattform</em>.
          Eine vollständige App mit Features, die ich nicht mal geplant hatte. Sie wuchs einfach weiter,
          eine Idee nach der anderen.
        </p>
        <ul className="space-y-4 text-steel text-lg">
          <li className="pl-6 border-l-2 border-rust">
            <strong className="text-chalk">Workout-Planung</strong> — ich poste, sie fürchten sich
          </li>
          <li className="pl-6 border-l-2 border-rust">
            <strong className="text-chalk">Kursregistrierung &amp; Stornierung</strong> — ein Tipp zum Anmelden, ein Tipp zum Absagen wenn man «100 Burpees» sieht
          </li>
          <li className="pl-6 border-l-2 border-rust">
            <strong className="text-chalk">Mitgliederverwaltung</strong> — Profile, Anwesenheit, das Ganze
          </li>
          <li className="pl-6 border-l-2 border-rust">
            <strong className="text-chalk">Ankündigungen</strong> — echte Kommunikation für eine echte Community
          </li>
          <li className="pl-6 border-l-2 border-rust">
            <strong className="text-chalk">Ein Kalender</strong> — kein «Ich wusste nicht, dass Training war» mehr
          </li>
          <li className="pl-6 border-l-2 border-rust">
            <strong className="text-chalk">Automatisierte E-Mails</strong> — weil selbst ein Keller Professionalität verdient
          </li>
          <li className="pl-6 border-l-2 border-rust">
            <strong className="text-chalk">Abstimmungen</strong> — Demokratie, Fitness-Edition
          </li>
        </ul>
        <p className="text-steel text-lg leading-relaxed mt-6">
          Nichts davon war im ursprünglichen Plan. Alles hat es trotzdem reingeschafft.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-rust mb-4">Das eine Mal, als alles verschwand</h2>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Ich muss euch von dem Vorfall erzählen.
        </p>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Claude und ich arbeiteten am Design. Die Dinge sahen <em>gut</em> aus – sauberer, schärfer,
          endlich so wie ich es mir vorgestellt hatte. Ich war zufrieden. Und dann schaute ich auf den
          tatsächlichen Inhalt der Website und er war... weg. Nicht kaputt. Nicht komisch geladen. <em>Weg.</em>
          Schönes Design. Nichts drin.
        </p>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Ich starrte auf den Bildschirm, so wie man eine leere Hantelstange anstarrt, wenn man glaubte,
          sie beladen zu haben. Diese spezifische Verwirrung: Das sollte nicht möglich sein.
        </p>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Also tat ich das einzig Logische: Ich fragte Claude, was passiert war.
        </p>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Claude rettete mich. Fand das Problem, behob es, brachte alles zurück. Der Inhalt kehrte zurück.
          Das Design blieb schön. Krise vorbei.
        </p>
        <p className="text-steel text-lg leading-relaxed">
          Die Lektion: KI kann versehentlich deine Arbeit löschen und sie dann heroisch am selben Nachmittag
          retten, und das ist irgendwie normal jetzt. Das ist einfach ein Dienstag. Wir machen weiter.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-rust mb-4">Worauf ich wirklich stolz bin</h2>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Die Komplexität. Nicht auf eine angeber­hafte Weise – auf eine «das ist ein echtes Produkt»-Weise.
        </p>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Ja, wir sind zu fünft. Ja, wir trainieren in einem Keller. Ja, ich bin der Coach und gleichzeitig
          die Person, die am wahrscheinlichsten mittendrin zusammenbricht. Aber diese kleine Operation läuft
          auf einer echten Plattform – Workouts werden gepostet, Kurse werden gebucht, E-Mails gehen raus,
          der Kalender funktioniert. Es fühlt sich wie ein richtiges Fitnessstudio an, weil es <em>wie ein
          richtiges Fitnessstudio läuft</em>.
        </p>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Diese Lücke – zwischen der Grösse der Sache (winzig) und der Qualität des Werkzeugs (ernsthaft) –
          macht mich stolz. Wir haben uns nicht mit einer WhatsApp-Gruppe und einem gemeinsamen
          Notizendokument zufriedengegeben. Wir haben eine Plattform.
        </p>
        <p className="text-steel text-lg leading-relaxed">
          Und ich habe sie gebaut, ohne Code schreiben zu können.
        </p>
      </section>

      <section className="mt-12 p-8 bg-rust/10 rounded-lg border-l-4 border-rust">
        <h2 className="text-2xl font-bold text-chalk mb-4">Die Pointe</h2>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Mein Freund brauchte eine Website für seine Keller-Box. Er bekam eine Fitness-Plattform.
          Ich, ein Mann der nicht coden kann, baue offenbar jetzt Software.
        </p>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Die App lebt bei <a href="https://go-pure.ch" target="_blank" rel="noopener noreferrer" className="text-rust hover:text-red-400 underline">go-pure.ch</a> –
          hinter einem Login, nur für unsere kleine Crew. Fünf Menschen, ein Keller und eine Plattform,
          die sich selbst völlig ernst nimmt. Wie es sich gehört.
        </p>
        <p className="text-chalk text-lg italic">
          Und wenn du eine Idee für etwas hast und denkst «Das könnte ich niemals bauen» –
          vielleicht nochmal überlegen. Die Werkzeuge sind jetzt anders. Das Einzige, was du wirklich
          brauchst, ist ein Problem, das es wert ist, gelöst zu werden. Und vielleicht eine sehr geduldige KI.
        </p>
      </section>
    </>
  );
}
