'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { useT } from '@/lib/translations';

const post = {
  coverImage: '/blogs/Blog2a.jpg',
  author: 'Dominik Steinacher',
};

export default function HybridSalesPost() {
  const { lang } = useLanguage();
  const t = useT(lang);
  const postMeta = t.blogs.posts.find((p) => p.slug === 'hybrid-sales-strategies')!;

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
          <Image src={post.coverImage} alt={postMeta.title} fill className="object-cover" />
        </div>
      </div>

      <div className="prose prose-invert prose-lg max-w-none">
        {lang === 'en' ? <HybridSalesEN /> : <HybridSalesDE />}
      </div>

      <div className="mt-12 pt-8 border-t border-steel/30">
        <Link href="/domiblogs" className="inline-block bg-rust hover:bg-red-700 text-chalk px-8 py-3 rounded-lg font-bold transition">
          {t.blog.backToAll}
        </Link>
      </div>
    </article>
  );
}

function HybridSalesEN() {
  return (
    <>
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-rust mb-4">Introduction</h2>
        <p className="text-steel text-lg leading-relaxed mb-4">
          The B2B software industry has long relied on Sales-led Growth (SLG). This strategy
          emphasizes direct, personal interactions through face-to-face meetings, phone calls,
          and networking. Relationship-building drives this approach. Understanding customer needs
          through direct communication defines success. This method requires significant resources
          and relies heavily on skilled, persistent sales teams.
        </p>
        <p className="text-steel text-lg leading-relaxed mb-4">
          The 21st century brought a shift toward customer-centric models. Companies began using
          analytics and customer data to create specific value. They focused on addressing actual
          needs and pain points. This evolution produced more personalized, engaging tactics. The
          goal shifted from closing immediate sales to building long-term relationships.
        </p>
        <p className="text-steel text-lg leading-relaxed">
          SLG follows a top-down strategy initiated by leadership. This often triggers extensive
          RFP and RFI processes based on analyst recommendations. The process centers on comprehensive
          feature checklists. It includes product demos, technical evaluations, and sometimes months-long
          custom POCs. The purchase decision comes from top decision-makers. Users rarely participate.
          After thorough evaluations aligned with strategic goals, teams select a vendor and deploy
          for broader access.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-rust mb-4">The Market is Changing</h2>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Disruptive competitors and new growth strategies are reshaping the software landscape
          through disintermediation. The traditional sales-led approach alone no longer suffices.
        </p>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Beyond SLG, two strategies dominate current discussions: Product-led Growth (PLG) and
          Community-led Growth (CLG). Marketing-led Growth (MLG) remains omnipresent and plays
          a supporting role in most strategies.
        </p>
        <p className="text-steel text-lg leading-relaxed mb-4">
          PLG has emerged as a significant trend. It uses the product itself as the primary driver
          for customer acquisition, expansion, and retention. The product experience becomes central.
          Companies offer free trials or freemium versions to attract users. The emphasis shifts to
          creating a product that sells itself through value and ease of use. This reduces reliance
          on traditional sales intermediation.
        </p>
        <p className="text-steel text-lg leading-relaxed">
          CLG takes this further. It harnesses community power to drive user acquisition, engagement,
          and retention. Both PLG and CLG share a common goal: creating advocates who spread positive
          sentiment about the product.
        </p>
      </section>

      <section className="mb-8 bg-concrete/50 p-8 rounded-lg border-l-4 border-rust">
        <h3 className="text-2xl font-bold text-rust mb-4">Growth Strategies</h3>
        <div className="relative h-96 w-full rounded-lg overflow-hidden my-6">
          <Image src="/blogs/Picture2b.jpg" alt="Growth Strategies Visualization" fill className="object-cover" />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-rust mb-4">The Emergence of Hybrid Models</h2>
        <p className="text-steel text-lg leading-relaxed mb-4">
          The industry now recognizes that no single sales approach fits all scenarios. This
          realization has driven the adoption of hybrid models. These combine traditional sales-led
          strengths with product-led efficiency and scalability. Companies tailor strategies based
          on product type, market conditions, and customer segments. They use a mix of direct sales
          efforts and self-service models.
        </p>
        <p className="text-steel text-lg leading-relaxed mb-4">
          SLG suits large contracts and enterprise sales. PLG offers cost-effective growth and
          customer acquisition. Many companies now adopt a hybrid approach, often called
          &quot;Product-led Sales.&quot; This merges PLG elements with traditional SLG tactics.
        </p>
        <p className="text-steel text-lg leading-relaxed mb-4">
          The distinctions between SLG and PLG are fading. Pure PLG companies now employ sales
          teams for enterprise deals. Traditional SLG firms invest in product-led experiences to
          broaden customer appeal. The hybrid method merges bottom-up (PLG) and top-down (SLG)
          strategies. It emphasizes the product&apos;s role in demand generation while complementing
          it with sales for customer acquisition. This approach converts self-serve leads into
          sales opportunities. Sales representatives close major contracts. C-level buyers receive
          live demos. End-users can try the product to understand its value directly.
        </p>
        <p className="text-steel text-lg leading-relaxed">
          According to McKinsey, two factors drive the growing appeal of hybrid growth models:
          cost-efficient expansion into new markets and the ability to turn smaller contracts
          into enterprise deals.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-rust mb-4">Summary</h2>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Product-Led Growth offers cost-effective scalability and a user-focused approach through
          disintermediation. Yet it may miss larger deals due to the absence of direct sales insights.
        </p>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Sales-Led Growth excels at closing large deals and building deeper customer relationships.
          However, it tends to be costlier and less scalable.
        </p>
        <p className="text-steel text-lg leading-relaxed mb-4">
          The Hybrid go-to-market strategy bridges these methods. It combines PLG&apos;s scalability and
          cost advantages with SLG&apos;s relationship-building prowess. This approach balances product-driven
          momentum with sales influence. Its versatility allows companies to transition between PLG and
          SLG based on market conditions, customer demands, or product maturity.
        </p>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Artificial intelligence and automation increasingly shape these strategies. AI-driven insights
          predict customer behavior, personalize interactions, and optimize sales processes. Automation
          tools streamline routine tasks. This frees sales teams to focus on strategic activities and
          relationship building.
        </p>
        <p className="text-steel text-lg leading-relaxed">
          The future of sales strategies will become more adaptive, data-driven, and customer-centric.
          Success requires agility and adoption of emerging technologies. Continuous learning remains
          essential to align with evolving customer expectations and market dynamics in this rapidly
          changing landscape.
        </p>
      </section>

      <section className="mt-12 p-8 bg-rust/10 rounded-lg border-l-4 border-rust">
        <p className="text-chalk text-lg italic">
          What are your thoughts on hybrid sales strategies? Share your experiences and questions
          in the comments.
        </p>
      </section>
    </>
  );
}

function HybridSalesDE() {
  return (
    <>
      <section className="mb-8">
        <h2 className="text-3xl font-bold text-rust mb-4">Einleitung</h2>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Die B2B-Software-Branche hat sich lange auf Sales-Led Growth (SLG) verlassen. Diese Strategie
          betont direkte, persönliche Interaktionen durch persönliche Meetings, Telefonate und Networking.
          Beziehungsaufbau treibt diesen Ansatz an. Den Kundenbedarf durch direkte Kommunikation zu verstehen
          definiert Erfolg. Diese Methode erfordert erhebliche Ressourcen und stützt sich stark auf erfahrene,
          beharrliche Vertriebsteams.
        </p>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Das 21. Jahrhundert brachte einen Wandel hin zu kundenorientierten Modellen. Unternehmen begannen,
          Analysen und Kundendaten zu nutzen, um spezifischen Wert zu schaffen. Sie konzentrierten sich auf
          die Adressierung tatsächlicher Bedürfnisse und Schmerzpunkte. Diese Entwicklung führte zu
          personalisierten, engagierenden Taktiken. Das Ziel verschob sich vom Abschliessen sofortiger
          Verkäufe hin zum Aufbau langfristiger Beziehungen.
        </p>
        <p className="text-steel text-lg leading-relaxed">
          SLG folgt einer Top-down-Strategie, die von der Führungsebene initiiert wird. Dies löst oft
          umfangreiche RFP- und RFI-Prozesse basierend auf Analysten-Empfehlungen aus. Der Prozess dreht
          sich um umfassende Feature-Checklisten. Er umfasst Produktdemos, technische Bewertungen und
          manchmal monatelange massgeschneiderte POCs. Die Kaufentscheidung kommt von den obersten
          Entscheidungsträgern. Nutzer beteiligen sich selten. Nach gründlichen Bewertungen im Einklang
          mit strategischen Zielen wählen Teams einen Anbieter und implementieren ihn für den breiteren Zugang.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-rust mb-4">Der Markt verändert sich</h2>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Disruptive Wettbewerber und neue Wachstumsstrategien gestalten die Software-Landschaft durch
          Disintermediation um. Der traditionelle vertriebsgeführte Ansatz allein reicht nicht mehr aus.
        </p>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Neben SLG dominieren zwei Strategien aktuelle Diskussionen: Product-Led Growth (PLG) und
          Community-Led Growth (CLG). Marketing-Led Growth (MLG) ist allgegenwärtig und spielt eine
          unterstützende Rolle in den meisten Strategien.
        </p>
        <p className="text-steel text-lg leading-relaxed mb-4">
          PLG hat sich als bedeutender Trend entwickelt. Es nutzt das Produkt selbst als primären Treiber
          für Kundengewinnung, -ausweitung und -bindung. Die Produkterfahrung wird zentral. Unternehmen
          bieten kostenlose Testversionen oder Freemium-Versionen an, um Nutzer zu gewinnen. Der Fokus
          verlagert sich auf das Erstellen eines Produkts, das sich durch Wert und Benutzerfreundlichkeit
          selbst verkauft. Dies reduziert die Abhängigkeit von traditioneller Vertriebs­intermediation.
        </p>
        <p className="text-steel text-lg leading-relaxed">
          CLG geht noch weiter. Es nutzt Community-Power, um Nutzergewinnung, -engagement und -bindung
          zu fördern. Sowohl PLG als auch CLG teilen ein gemeinsames Ziel: Fürsprecher zu schaffen, die
          positive Stimmung über das Produkt verbreiten.
        </p>
      </section>

      <section className="mb-8 bg-concrete/50 p-8 rounded-lg border-l-4 border-rust">
        <h3 className="text-2xl font-bold text-rust mb-4">Wachstumsstrategien</h3>
        <div className="relative h-96 w-full rounded-lg overflow-hidden my-6">
          <Image src="/blogs/Picture2b.jpg" alt="Visualisierung der Wachstumsstrategien" fill className="object-cover" />
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-rust mb-4">Die Entstehung von Hybrid-Modellen</h2>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Die Branche erkennt nun, dass kein einziger Verkaufsansatz für alle Szenarien geeignet ist.
          Diese Erkenntnis hat die Einführung von Hybrid-Modellen vorangetrieben. Diese kombinieren
          traditionelle vertriebsgeführte Stärken mit der Effizienz und Skalierbarkeit von Product-Led.
          Unternehmen passen Strategien basierend auf Produkttyp, Marktbedingungen und Kundensegmenten an.
          Sie nutzen eine Mischung aus direkten Vertriebsbemühungen und Self-Service-Modellen.
        </p>
        <p className="text-steel text-lg leading-relaxed mb-4">
          SLG eignet sich für grosse Verträge und Enterprise-Vertrieb. PLG bietet kosteneffizientes
          Wachstum und Kundengewinnung. Viele Unternehmen nehmen jetzt einen hybriden Ansatz an, oft
          «Product-Led Sales» genannt. Dieser verbindet PLG-Elemente mit traditionellen SLG-Taktiken.
        </p>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Die Unterschiede zwischen SLG und PLG verschwimmen. Reine PLG-Unternehmen beschäftigen jetzt
          Vertriebsteams für Enterprise-Deals. Traditionelle SLG-Firmen investieren in produktgeführte
          Erfahrungen, um die Kundenattraktivität zu verbreitern. Die hybride Methode verbindet
          Bottom-up-(PLG-) und Top-down-(SLG-)Strategien. Sie betont die Rolle des Produkts in der
          Nachfragegenerierung und ergänzt sie mit Vertrieb zur Kundengewinnung. Dieser Ansatz wandelt
          Self-Serve-Leads in Vertriebsmöglichkeiten um. Vertriebsmitarbeiter schliessen Grossaufträge.
          C-Level-Käufer erhalten Live-Demos. Endnutzer können das Produkt ausprobieren, um seinen
          Wert direkt zu verstehen.
        </p>
        <p className="text-steel text-lg leading-relaxed">
          Laut McKinsey treiben zwei Faktoren die wachsende Attraktivität hybrider Wachstumsmodelle:
          kosteneffiziente Expansion in neue Märkte und die Fähigkeit, kleinere Verträge in
          Enterprise-Deals umzuwandeln.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-rust mb-4">Zusammenfassung</h2>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Product-Led Growth bietet kosteneffiziente Skalierbarkeit und einen nutzerzentrierten Ansatz
          durch Disintermediation. Doch es kann grössere Deals verpassen, weil direkte Verkaufseinblicke
          fehlen.
        </p>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Sales-Led Growth überzeugt beim Abschliessen grosser Deals und dem Aufbau tieferer
          Kundenbeziehungen. Allerdings ist es tendenziell kostspieliger und weniger skalierbar.
        </p>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Die hybride Go-to-Market-Strategie überbrückt diese Methoden. Sie kombiniert die Skalierbarkeit
          und Kostenvorteile von PLG mit der Beziehungsaufbau-Stärke von SLG. Dieser Ansatz balanciert
          produktgetriebene Dynamik mit Vertriebseinfluss. Seine Vielseitigkeit ermöglicht es Unternehmen,
          zwischen PLG und SLG basierend auf Marktbedingungen, Kundenanforderungen oder Produktreife
          zu wechseln.
        </p>
        <p className="text-steel text-lg leading-relaxed mb-4">
          Künstliche Intelligenz und Automatisierung prägen diese Strategien zunehmend. KI-gestützte
          Einblicke sagen Kundenverhalten voraus, personalisieren Interaktionen und optimieren
          Vertriebsprozesse. Automatisierungs-Tools rationalisieren Routineaufgaben. Dies befreit
          Vertriebsteams dazu, sich auf strategische Aktivitäten und den Beziehungsaufbau zu konzentrieren.
        </p>
        <p className="text-steel text-lg leading-relaxed">
          Die Zukunft der Vertriebsstrategien wird adaptiver, datengesteuerter und kundenorientierter
          werden. Erfolg erfordert Agilität und die Übernahme aufkommender Technologien. Kontinuierliches
          Lernen bleibt unerlässlich, um sich mit den sich entwickelnden Kundenerwartungen und
          Marktdynamiken in dieser sich schnell verändernden Landschaft in Einklang zu bringen.
        </p>
      </section>

      <section className="mt-12 p-8 bg-rust/10 rounded-lg border-l-4 border-rust">
        <p className="text-chalk text-lg italic">
          Was sind deine Gedanken zu hybriden Vertriebsstrategien? Teile deine Erfahrungen und
          Fragen in den Kommentaren.
        </p>
      </section>
    </>
  );
}
