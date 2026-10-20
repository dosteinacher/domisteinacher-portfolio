'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { useT } from '@/lib/translations';
import { getBlurDataURL } from '@/lib/blurPlaceholders';
import StatTile from '@/components/StatTile';

const post = {
  coverImage: '/images/community-cover-wide.jpg',
  author: 'Dominik Steinacher',
};

export default function VibrantCommunityPost() {
  const { lang } = useLanguage();
  const t = useT(lang);
  const postMeta = t.blogs.posts.find((p) => p.slug === 'how-to-create-a-vibrant-community')!;

  return (
    <article className="blog-article blog-community-article">
      <header className="article-header">
        <Link href="/domiblogs" className="article-back">
          {t.blog.backToBlogs}
        </Link>

        <p className="article-kicker">DomiBlogs / Community</p>
        <h1 className="article-title">
          {postMeta.title}
        </h1>

        <div className="article-meta">
          <time>{postMeta.date}</time>
          <span aria-hidden="true">•</span>
          <span>{t.blog.by} {post.author}</span>
          <span aria-hidden="true">•</span>
          <span>{postMeta.readTime}</span>
        </div>
      </header>

      <div className="article-cover">
        <Image
          src={post.coverImage}
          alt={postMeta.title}
          fill
          placeholder="blur"
          blurDataURL={getBlurDataURL(post.coverImage)}
          className="object-cover"
          priority
        />
      </div>

      <div className="article-body prose prose-lg max-w-none">
        {lang === 'en' ? <VibrantCommunityEN /> : <VibrantCommunityDE />}
      </div>

      <footer className="article-footer">
        <Link href="/domiblogs" className="article-footer-link">
          {t.blog.backToAll}
        </Link>
      </footer>
    </article>
  );
}

function VibrantCommunityEN() {
  return (
    <>
      <section className="mb-8">
        <p className="text-steel text-xl leading-relaxed font-medium italic">
          Nobody assigns you a community. You don&apos;t get a budget, a mandate, or a room full of
          people who already like each other. You get a channel, half an hour on someone&apos;s
          calendar, and a suspicion that a lot of smart people are solving the same problems without
          knowing about each other.
        </p>
        <p className="text-steel text-lg leading-relaxed mt-4 italic">
          Two years later, that suspicion was a community of 1,600+ people. It was never complicated.
          It was just relentless. This is the short version of what I did and why it worked — the
          handful of choices that actually matter, and the discipline of not giving up in month two,
          when the room is still small.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-rust mb-4">Why Bother?</h2>
        <p className="text-steel text-lg leading-relaxed mb-4">
          The knowledge I wanted to connect was everywhere and nowhere at the same time. Every team was
          experimenting on its own, often unaware that people a floor away were working on the exact
          same problem. It was never a talent problem — there was plenty of talent. It was a
          communication problem, which is a much more boring thing to be, and a much easier one to fix.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-rust mb-4">The Whole Strategy, In One Sentence</h2>
        <p className="text-steel text-xl leading-relaxed font-medium mb-4">
          &ldquo;Connect the people already doing the work and get out of their way.&rdquo;
        </p>
        <p className="text-steel text-lg leading-relaxed">
          That was the whole plan. Community-led instead of top-down. Open by default, so nobody had
          to ask permission to join and learn. It sounds too simple to be a strategy, and that
          simplicity was the point.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-rust mb-4">So What Do You Actually Do?</h2>
        <p className="text-steel text-lg leading-relaxed mb-4">
          I kept the launch simple, partly on principle, partly because there was no budget for
          anything else. One 90-minute kickoff, recorded, because if it isn&apos;t recorded, it
          didn&apos;t happen. A shared hub page two weeks later. After that, I let the formats sort
          themselves out.
        </p>
        <p className="text-steel text-lg leading-relaxed mb-6">
          Two formats carry the community now, and each has exactly one job — a format that tries to
          do two usually does neither:
        </p>
        <ul className="space-y-4 text-steel text-lg">
          <li className="pl-6 border-l-2 border-rust">
            <strong className="text-chalk">Show &amp; Tell</strong> — a few times a month, demo-first.
            People show the real work they&apos;ve built. By a wide margin, the best way to bring new
            people in.
          </li>
          <li className="pl-6 border-l-2 border-rust">
            <strong className="text-chalk">The Brownbag</strong> — hands-on and informal. People come
            to build and try things out after the session, not just to watch.
          </li>
        </ul>
        <p className="text-steel text-lg leading-relaxed mt-6">
          None of this needed a big budget, a mandate, or a Chief Community Officer (not a title I
          have or want). It needed a calendar invite, a recording button, and enough perseverance to
          keep going in month two, when twelve people showed up instead of eighty, and quitting would
          have been the easy thing to do.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-rust mb-4">A Simple Method To Start</h2>
        <ul className="space-y-4 text-steel text-lg">
          <li className="pl-6 border-l-2 border-rust">
            <strong className="text-chalk">Step 0</strong> — Make a short list of people already
            enthusiastic about the topic.
          </li>
          <li className="pl-6 border-l-2 border-rust">
            <strong className="text-chalk">Step 1</strong> — Reach out and find people already doing
            the work.
          </li>
          <li className="pl-6 border-l-2 border-rust">
            <strong className="text-chalk">Step 2</strong> — Give them one clear reason to show up.
          </li>
          <li className="pl-6 border-l-2 border-rust">
            <strong className="text-chalk">Step 3</strong> — Record it and make it easy to find.
          </li>
          <li className="pl-6 border-l-2 border-rust">
            <strong className="text-chalk">Step 4</strong> — Do it again next week.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-rust mb-4">What Actually Works</h2>
        <p className="text-steel text-lg leading-relaxed mb-4">
          The Show &amp; Tell works because it does a few things at once. It makes ongoing work visible
          across teams. It gives people something concrete to react to. The sessions that land hardest
          are never the polished ones — they&apos;re the ones where one team shows what broke when they
          tried something another team had already tried, or walks through a failure that saved someone
          else three weeks. Practical beats theoretical every time.
        </p>
        <p className="text-steel text-lg leading-relaxed">
          The Brownbag works differently. Watching a demo isn&apos;t the same as doing the work, so the
          Brownbag is hands-on — people leave able to apply something that same afternoon. One format
          brings people in; the other helps them get better once they&apos;re here. Run both, on
          purpose.
        </p>
      </section>

      <section className="mb-8 bg-rust/10 border-l-4 border-rust p-6 rounded">
        <p className="text-chalk text-lg font-semibold italic">
          &ldquo;What kind of meeting is this? People usually join late and barely interact. Here
          there&apos;s already a great discussion going before it even starts. Wow.&rdquo;
        </p>
        <p className="text-steel mt-3">— a first-time attendee, ten minutes before a session</p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-rust mb-4">What If You Screw Up? (You Will.)</h2>
        <p className="text-steel text-lg leading-relaxed mb-4">
          I did, more than once, in the open. A single monthly call became two, once it was clear that
          a broad Show &amp; Tell and a core-team meeting where things actually get decided are not the
          same meeting. Announcements moved from one channel to several, because people read in
          different places and picking just one means half of them never hear you.
        </p>
        <p className="text-steel text-lg leading-relaxed">
          None of it was fatal. Fixing mistakes in public builds more trust than hiding them, because
          people believe a community that admits it&apos;s still working things out. When the
          organizers show the messy, half-finished work first, everyone else feels safe enough to do
          the same — which is the whole point.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-rust mb-4">The Numbers, Because Feelings Aren&apos;t Data</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 not-prose">
          <StatTile value={1600} suffix="+" label="Members Across the Community" />
          <StatTile value={50} suffix="+" label="Sessions Run to Date" />
          <StatTile staticText="92–289" label="Per-Session Attendance, Last 9 Months" />
        </div>
        <p className="text-steel text-lg leading-relaxed">
          The totals matter less than the shape. Over the last nine months, attendance stayed in its
          range with no real drop-off, and membership kept climbing, month over month. That&apos;s the
          opposite of the usual pattern, where a community spikes at launch and then goes quiet. None of
          it happened because the topic was exciting — plenty of exciting things have empty channels. It
          happened because every format had one job, every session was recorded, and every question got
          a real answer instead of &ldquo;let me get back to you.&rdquo;
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-rust mb-4">Is It Still Alive, Or Did It Just Spike?</h2>
        <p className="text-steel text-lg leading-relaxed">
          Most of the nice things people say come straight to you, which is lovely but isn&apos;t
          really evidence. Two moments were. Almost two years in, a member shared one of our sessions in
          a channel none of us ran, unprompted, and simply called it worth watching. Separately, another
          member asked to fold the community into a bigger internal initiative so more people would see
          what was happening inside it. Nobody asked either of them to do it. Both happened long after
          launch, which is the only time that kind of unprompted pull tells you anything.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-rust mb-4">Does It Actually Help? (I Asked.)</h2>
        <p className="text-steel text-lg leading-relaxed mb-6">
          Attendance tells you people keep showing up. It doesn&apos;t tell you whether showing up
          changes how they work. So, two years in, I ran a short impact survey and asked people
          directly. Nine answered. That&apos;s a small, self-selected group, not a proper sample, and
          I&apos;ll treat it that way. But nine honest answers still tell you things a dashboard
          can&apos;t.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 not-prose">
          <StatTile staticText="4.2 / 5" label="Self-Rated Capability Gain (n=9)" />
          <StatTile staticText="8.9 / 10" label="Would Recommend to a Colleague" />
          <StatTile staticText="8 of 9" label="Say It Helps Others Get Up to Speed" />
        </div>
        <p className="text-steel text-lg leading-relaxed mb-4">
          What people say they get lines up with everything above: a read on what other teams are
          doing, ideas they can take back to their own work, and a sense of which tools and approaches
          are actually worth their time. One person described the real value as reassurance — knowing
          whether it&apos;s just them, or whether everyone is wrestling with the same thing.
        </p>
        <p className="text-steel text-lg leading-relaxed mb-4">
          It also gave the first real answer to something I&apos;d admitted I couldn&apos;t measure: I
          couldn&apos;t put a number on what the silos were costing. This is the closest I&apos;ve come.
          One person first heard about a useful tool in a session, took it back to their team, and has
          been passing it on since. Another summed up the whole point in a line: &ldquo;reduce
          duplication and increase adoption of best practices.&rdquo; One good idea carried across a
          boundary that used to stop it is exactly the kind of waste a community is meant to remove.
          It&apos;s not a dollar figure, but it&apos;s real.
        </p>
        <p className="text-steel text-lg leading-relaxed">
          The survey didn&apos;t only flatter it, which is part of why it&apos;s worth trusting. When
          asked to boil the value down to a single number, two people refused outright — knowledge-
          sharing doesn&apos;t reduce to one KPI. One of the lower scorers said plainly they mostly see
          experienced people rather than newcomers. That&apos;s a fair criticism of the onboarding
          story, and I come back to it below. A survey you only quote when it agrees with you isn&apos;t
          worth much.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-rust mb-4">What This Is NOT Good At</h2>
        <p className="text-steel text-lg leading-relaxed mb-6">
          Every design has trade-offs. I think these are worth it, and you should know them going in.
        </p>
        <ul className="space-y-4 text-steel text-lg">
          <li className="pl-6 border-l-2 border-rust">
            <strong className="text-chalk">It leans on individuals.</strong> A community that runs on a
            few committed people is fragile the week those people are on holiday. Rotating the core
            team helps, but it doesn&apos;t fully fix it.
          </li>
          <li className="pl-6 border-l-2 border-rust">
            <strong className="text-chalk">You can&apos;t prove the counterfactual.</strong> Silos are
            probably costing real duplicated effort, and the survey gave a first glimpse of it — but
            still not a clean number. Take &ldquo;silos are expensive&rdquo; as a well-supported hunch,
            not a measured fact.
          </li>
          <li className="pl-6 border-l-2 border-rust">
            <strong className="text-chalk">It rewards the already engaged.</strong> The people who show
            up are the people already inclined to show up. Mostly experienced people, not the newcomers
            you&apos;d most like to reach. I haven&apos;t solved that one.
          </li>
          <li className="pl-6 border-l-2 border-rust">
            <strong className="text-chalk">It&apos;s slow to show ROI.</strong> For a long time it looks
            like a lot of calendar invites and not much else. You need patience, and a sponsor with
            patience, before the value compounds.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-rust mb-4">Where Will You Take It?</h2>
        <p className="text-steel text-lg leading-relaxed">
          Your community won&apos;t look like mine, and it shouldn&apos;t. Different teams, different
          politics, different culture. The mechanics still carry over, though. Find the people already
          doing the work. Give them one clear reason to show up. Make the good material easy to find.
          Rotate the core team before anyone burns out. And be honest about what a community actually
          is: not a meeting series, but the fastest way I&apos;ve found to make silos harder to sustain.
        </p>
      </section>

      <section className="mt-12 p-8 bg-rust/10 rounded-lg border-l-4 border-rust">
        <h2 className="text-2xl font-bold text-chalk mb-4">Retention Keeps You Strong. Growth Moves You Forward. You Need Both.</h2>
        <p className="text-steel text-lg leading-relaxed mb-4">
          A real community is where those two finally meet. None of this got built alone, and none of it
          stays alive alone.
        </p>
        <p className="text-chalk text-lg italic">
          If you want to start one and want a sounding board, that&apos;s what my{' '}
          <Link href="/contact" className="text-rust hover:text-red-400 underline">contact page</Link>{' '}
          is for. I&apos;d rather help you skip my mistakes than watch you repeat them.
        </p>
      </section>
    </>
  );
}

function VibrantCommunityDE() {
  return (
    <>
      <section className="mb-8">
        <p className="text-steel text-xl leading-relaxed font-medium italic">
          Niemand weist dir eine Community zu. Du bekommst kein Budget, kein Mandat und keinen Raum
          voller Menschen, die sich bereits mögen. Du bekommst einen Kanal, eine halbe Stunde im
          Kalender von jemandem und die Vermutung, dass viele kluge Menschen dieselben Probleme lösen,
          ohne voneinander zu wissen.
        </p>
        <p className="text-steel text-lg leading-relaxed mt-4 italic">
          Zwei Jahre später war aus dieser Vermutung eine Community von über 1.600 Menschen geworden. Es
          war nie kompliziert. Es war einfach unnachgiebig. Das hier ist die Kurzversion dessen, was ich
          getan habe und warum es funktioniert hat – die Handvoll Entscheidungen, die wirklich zählen,
          und die Disziplin, im zweiten Monat nicht aufzugeben, wenn der Raum noch klein ist.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-rust mb-4">Warum überhaupt?</h2>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Das Wissen, das ich verbinden wollte, war überall und nirgendwo gleichzeitig. Jedes Team
          experimentierte für sich, oft ohne zu wissen, dass Menschen einen Stock tiefer am exakt
          gleichen Problem arbeiteten. Es war nie ein Talentproblem – Talent gab es genug. Es war ein
          Kommunikationsproblem, was eine viel langweiligere Sache ist, aber auch eine viel einfacher zu
          lösende.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-rust mb-4">Die ganze Strategie, in einem Satz</h2>
        <p className="text-steel text-xl leading-relaxed font-medium mb-4">
          «Verbinde die Menschen, die die Arbeit bereits machen, und geh ihnen nicht im Weg.»
        </p>
        <p className="text-steel text-lg leading-relaxed">
          Das war der ganze Plan. Community-geführt statt top-down. Offen per Standard, sodass niemand
          um Erlaubnis bitten musste, um mitzumachen und zu lernen. Es klingt zu einfach, um eine
          Strategie zu sein, und genau diese Einfachheit war der Punkt.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-rust mb-4">Was macht man also tatsächlich?</h2>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Ich hielt den Start bewusst einfach – teils aus Prinzip, teils weil kein Budget für etwas
          anderes da war. Ein 90-minütiger Kickoff, aufgezeichnet, denn wenn es nicht aufgezeichnet ist,
          ist es nicht passiert. Zwei Wochen später eine gemeinsame Hub-Seite. Danach liess ich die
          Formate sich von selbst finden.
        </p>
        <p className="text-steel text-lg leading-relaxed mb-6">
          Zwei Formate tragen die Community heute, und jedes hat genau eine Aufgabe – ein Format, das
          zwei Dinge gleichzeitig versucht, schafft meist keines richtig:
        </p>
        <ul className="space-y-4 text-steel text-lg">
          <li className="pl-6 border-l-2 border-rust">
            <strong className="text-chalk">Show &amp; Tell</strong> — mehrmals im Monat, demo-first.
            Menschen zeigen die echte Arbeit, die sie gebaut haben. Mit Abstand der beste Weg, neue
            Leute reinzuholen.
          </li>
          <li className="pl-6 border-l-2 border-rust">
            <strong className="text-chalk">Der Brownbag</strong> — hands-on und informell. Menschen
            kommen, um nach der Session selbst zu bauen und auszuprobieren, nicht nur zuzuschauen.
          </li>
        </ul>
        <p className="text-steel text-lg leading-relaxed mt-6">
          Nichts davon brauchte ein grosses Budget, ein Mandat oder einen Chief Community Officer (kein
          Titel, den ich habe oder will). Es brauchte eine Kalendereinladung, einen Aufnahme-Knopf und
          genug Ausdauer, um im zweiten Monat weiterzumachen, wenn zwölf statt achtzig Leute kamen und
          Aufgeben die einfachere Wahl gewesen wäre.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-rust mb-4">Eine einfache Methode zum Start</h2>
        <ul className="space-y-4 text-steel text-lg">
          <li className="pl-6 border-l-2 border-rust">
            <strong className="text-chalk">Schritt 0</strong> — Eine kurze Liste von Menschen erstellen,
            die für das Thema bereits Feuer und Flamme sind.
          </li>
          <li className="pl-6 border-l-2 border-rust">
            <strong className="text-chalk">Schritt 1</strong> — Kontakt aufnehmen und Menschen finden,
            die die Arbeit bereits machen.
          </li>
          <li className="pl-6 border-l-2 border-rust">
            <strong className="text-chalk">Schritt 2</strong> — Ihnen einen klaren Grund geben,
            aufzutauchen.
          </li>
          <li className="pl-6 border-l-2 border-rust">
            <strong className="text-chalk">Schritt 3</strong> — Aufzeichnen und leicht auffindbar
            machen.
          </li>
          <li className="pl-6 border-l-2 border-rust">
            <strong className="text-chalk">Schritt 4</strong> — Nächste Woche wieder tun.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-rust mb-4">Was tatsächlich funktioniert</h2>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Der Show &amp; Tell funktioniert, weil er mehrere Dinge gleichzeitig tut. Er macht laufende
          Arbeit über Teams hinweg sichtbar. Er gibt den Menschen etwas Konkretes, worauf sie reagieren
          können. Die Sessions, die am meisten hängen bleiben, sind nie die polierten – es sind die, in
          denen ein Team zeigt, was schiefging, als es etwas versuchte, das ein anderes Team bereits
          versucht hatte, oder einen Fehler durchgeht, der jemand anderem drei Wochen erspart hat.
          Praktisch schlägt theoretisch, jedes Mal.
        </p>
        <p className="text-steel text-lg leading-relaxed">
          Der Brownbag funktioniert anders. Eine Demo anzuschauen ist nicht dasselbe wie die Arbeit
          selbst zu tun, deshalb ist der Brownbag hands-on – die Leute gehen mit etwas, das sie noch am
          selben Nachmittag anwenden können. Ein Format holt Menschen rein; das andere hilft ihnen,
          besser zu werden, sobald sie da sind. Beide bewusst betreiben.
        </p>
      </section>

      <section className="mb-8 bg-rust/10 border-l-4 border-rust p-6 rounded">
        <p className="text-chalk text-lg font-semibold italic">
          «Was ist das für ein Meeting? Normalerweise kommen Leute zu spät und beteiligen sich kaum.
          Hier läuft schon eine grossartige Diskussion, bevor es überhaupt losgeht. Wow.»
        </p>
        <p className="text-steel mt-3">— ein Erstteilnehmer, zehn Minuten vor einer Session</p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-rust mb-4">Was, wenn du es vermasselst? (Wirst du.)</h2>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Habe ich, mehr als einmal, öffentlich. Aus einem monatlichen Call wurden zwei, sobald klar
          war, dass ein breiter Show &amp; Tell und ein Kernteam-Meeting, in dem tatsächlich entschieden
          wird, nicht dasselbe Meeting sind. Ankündigungen wanderten von einem Kanal zu mehreren, weil
          Menschen an unterschiedlichen Orten lesen und die Wahl nur eines Kanals bedeutet, dass die
          Hälfte dich nie hört.
        </p>
        <p className="text-steel text-lg leading-relaxed">
          Nichts davon war fatal. Fehler öffentlich zu korrigieren, baut mehr Vertrauen auf, als sie zu
          verstecken, weil Menschen einer Community glauben, die zugibt, noch dabei zu sein, Dinge
          herauszufinden. Wenn die Organisatoren zuerst die unfertige, chaotische Arbeit zeigen, fühlen
          sich alle anderen sicher genug, dasselbe zu tun – und genau das ist der Punkt.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-rust mb-4">Die Zahlen, weil Gefühle keine Daten sind</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 not-prose">
          <StatTile value={1600} suffix="+" label="Mitglieder in der gesamten Community" />
          <StatTile value={50} suffix="+" label="Sessions bis heute" />
          <StatTile staticText="92–289" label="Teilnehmer pro Session, letzte 9 Monate" />
        </div>
        <p className="text-steel text-lg leading-relaxed">
          Die Summen zählen weniger als die Form. In den letzten neun Monaten blieb die Teilnahme in
          ihrer Bandbreite, ohne echten Einbruch, und die Mitgliederzahl kletterte weiter, Monat für
          Monat. Das ist das Gegenteil des üblichen Musters, bei dem eine Community beim Start
          hochschnellt und dann verstummt. Nichts davon geschah, weil das Thema aufregend war – viele
          aufregende Dinge haben leere Kanäle. Es geschah, weil jedes Format genau eine Aufgabe hatte,
          jede Session aufgezeichnet wurde und jede Frage eine echte Antwort bekam statt einem «melde
          ich mich später».
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-rust mb-4">Lebt es noch, oder war es nur ein Ausschlag?</h2>
        <p className="text-steel text-lg leading-relaxed">
          Die meisten netten Dinge, die Menschen sagen, kommen direkt zu dir, was schön ist, aber kein
          echter Beweis. Zwei Momente waren es. Fast zwei Jahre nach dem Start teilte ein Mitglied eine
          unserer Sessions unaufgefordert in einem Kanal, den keiner von uns betrieb, und nannte sie
          einfach sehenswert. Ein anderes Mitglied bat darum, die Community in eine grössere interne
          Initiative einzubinden, damit mehr Menschen sehen, was darin passiert. Niemand hatte die beiden
          darum gebeten. Beides geschah lange nach dem Start, und nur dann sagt diese Art von
          unaufgeforderter Anziehungskraft überhaupt etwas aus.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-rust mb-4">Hilft es wirklich? (Ich habe gefragt.)</h2>
        <p className="text-steel text-lg leading-relaxed mb-6">
          Teilnahme sagt dir, dass Menschen weiter kommen. Sie sagt dir nicht, ob das Kommen ändert, wie
          sie arbeiten. Also führte ich, zwei Jahre nach dem Start, eine kurze Wirkungsumfrage durch und
          fragte direkt nach. Neun antworteten. Das ist eine kleine, selbstselektierte Gruppe, keine
          echte Stichprobe, und so werde ich sie auch behandeln. Aber neun ehrliche Antworten sagen
          trotzdem Dinge, die ein Dashboard nicht kann.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 not-prose">
          <StatTile staticText="4.2 / 5" label="Selbst eingeschätzter Kompetenzgewinn (n=9)" />
          <StatTile staticText="8.9 / 10" label="Würde es einem Kollegen empfehlen" />
          <StatTile staticText="8 von 9" label="Sagen, es hilft anderen beim Einstieg" />
        </div>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Was Menschen sagen, dass sie bekommen, deckt sich mit allem oben: ein Gefühl dafür, was andere
          Teams tun, Ideen, die sie in ihre eigene Arbeit mitnehmen können, und ein Gespür dafür, welche
          Tools und Ansätze ihre Zeit wirklich wert sind. Eine Person beschrieb den eigentlichen Wert als
          Beruhigung – zu wissen, ob es nur einem selbst so geht oder ob alle mit demselben ringen.
        </p>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Es gab auch die erste echte Antwort auf etwas, von dem ich zugegeben hatte, es nicht messen zu
          können: Ich konnte nie beziffern, was die Silos kosteten. Das hier ist am nächsten dran. Eine
          Person hörte in einer Session zum ersten Mal von einem nützlichen Tool, nahm es mit in ihr Team
          und gibt es seither weiter. Eine andere brachte den ganzen Punkt in einem Satz auf den Punkt:
          «Doppelarbeit reduzieren und die Übernahme von Best Practices erhöhen.» Eine gute Idee, die eine
          Grenze überquert, an der sie sonst hängen geblieben wäre, ist genau die Art von Verschwendung,
          die eine Community beseitigen soll. Keine Dollarzahl, aber real.
        </p>
        <p className="text-steel text-lg leading-relaxed">
          Die Umfrage hat nicht nur geschmeichelt, was mit ein Grund ist, warum man ihr trauen kann. Als
          gefragt wurde, den Wert auf eine einzige Zahl herunterzubrechen, verweigerten sich zwei Personen
          rundweg – Wissensaustausch lasse sich nicht auf einen KPI reduzieren. Eine der niedrigeren
          Bewertungen sagte offen, sie sehe meist erfahrene Leute statt Neueinsteiger. Das ist eine faire
          Kritik an der Onboarding-Geschichte, auf die ich weiter unten zurückkomme. Eine Umfrage, die man
          nur zitiert, wenn sie einem zustimmt, ist nicht viel wert.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-rust mb-4">Wofür das hier NICHT gut ist</h2>
        <p className="text-steel text-lg leading-relaxed mb-6">
          Jedes Design hat Kompromisse. Ich finde, diese sind es wert, und du solltest sie von Anfang an
          kennen.
        </p>
        <ul className="space-y-4 text-steel text-lg">
          <li className="pl-6 border-l-2 border-rust">
            <strong className="text-chalk">Es hängt an Einzelpersonen.</strong> Eine Community, die auf
            wenigen engagierten Menschen läuft, ist verletzlich in der Woche, in der genau diese Menschen
            Ferien haben. Ein rotierendes Kernteam hilft, löst es aber nicht vollständig.
          </li>
          <li className="pl-6 border-l-2 border-rust">
            <strong className="text-chalk">Man kann das Gegenteil nicht beweisen.</strong> Silos kosten
            vermutlich echte doppelte Arbeit, und die Umfrage gab einen ersten Einblick – aber immer noch
            keine saubere Zahl. Nimm «Silos sind teuer» als gut begründete Vermutung, nicht als gemessene
            Tatsache.
          </li>
          <li className="pl-6 border-l-2 border-rust">
            <strong className="text-chalk">Es belohnt die bereits Engagierten.</strong> Die Menschen, die
            kommen, sind die, die ohnehin schon dazu neigen zu kommen. Meist erfahrene Leute, nicht die
            Neueinsteiger, die man am liebsten erreichen würde. Das habe ich nicht gelöst.
          </li>
          <li className="pl-6 border-l-2 border-rust">
            <strong className="text-chalk">Der ROI zeigt sich langsam.</strong> Lange Zeit sieht es nach
            vielen Kalendereinladungen und wenig sonst aus. Man braucht Geduld – und einen Sponsor mit
            Geduld –, bevor sich der Wert summiert.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-rust mb-4">Wohin nimmst du es mit?</h2>
        <p className="text-steel text-lg leading-relaxed">
          Deine Community wird nicht wie meine aussehen, und das sollte sie auch nicht. Andere Teams,
          andere Politik, andere Kultur. Die Mechanik überträgt sich trotzdem. Finde die Menschen, die
          die Arbeit bereits machen. Gib ihnen einen klaren Grund, aufzutauchen. Mach das gute Material
          leicht auffindbar. Rotiere das Kernteam, bevor jemand ausbrennt. Und sei ehrlich darüber, was
          eine Community wirklich ist: keine Meeting-Reihe, sondern der schnellste Weg, den ich gefunden
          habe, um Silos schwerer aufrechtzuerhalten zu machen.
        </p>
      </section>

      <section className="mt-12 p-8 bg-rust/10 rounded-lg border-l-4 border-rust">
        <h2 className="text-2xl font-bold text-chalk mb-4">Bindung hält dich stark. Wachstum bringt dich voran. Du brauchst beides.</h2>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Eine echte Community ist da, wo sich diese beiden Dinge endlich treffen. Nichts davon entstand
          allein, und nichts davon bleibt allein am Leben.
        </p>
        <p className="text-chalk text-lg italic">
          Wenn du eine starten willst und einen Sparringspartner brauchst, dafür ist meine{' '}
          <Link href="/contact" className="text-rust hover:text-red-400 underline">Kontaktseite</Link>{' '}
          da. Ich helfe dir lieber, meine Fehler zu überspringen, als dir zuzusehen, wie du sie
          wiederholst.
        </p>
      </section>
    </>
  );
}
