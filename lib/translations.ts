import type { Lang } from '@/context/LanguageContext';

const translations = {
  en: {
    nav: {
      home: 'Home',
      me: 'Me',
      blogs: 'DomiBlogs',
      gopure: 'GO PURE',
      contact: 'Contact',
    },
    hero: {
      tagline: 'Pole Vault Champion · Coach · Digital Solutions Expert',
      description:
        'I love Crossfit and push the limits. Coaching at GO PURE is amazing. At Adobe, I lead strategic transformation and growth. My athletic background helps—I was Swiss Pole Vault Champion in 1996.',
      cta: 'Get in Touch',
      ctaSecondary: 'Visit GO PURE',
    },
    home: {
      heroKicker: "Hey, I'm Domi — Arlesheim, CH",
      heroLead:
        'Former Swiss pole vault champion. Now I coach CrossFit at GO PURE, grow an AI community of 900+ people, and lead transformation at Adobe.',
      heroBlogs: 'Read DomiBlogs →',
      heroMe: 'More about me',
      marqueeItems: [
        'Pole vault champion',
        'CrossFit coach',
        'AI community builder',
        'Growth strategist',
        'Dad of two',
      ],
      thingsTitle: 'Three things I do every week.',
      coachTitle: 'Coach',
      coachDescription:
        'I coach at GO PURE and help the crew find strength together.',
      buildTitle: 'Build',
      buildDescription:
        'I share lessons from sport, sales, growth, and building with AI.',
      growTitle: 'Grow',
      growDescription:
        'I build communities and lead strategic transformation at Adobe.',
      mediaTitle: 'Training and life, in motion.',
      mediaDescription: 'A few moving frames from the gym and beyond.',
      statYears: 'Years of commercial leadership',
      statCommunity: 'AI community members',
      statTemplates: 'GO PURE workout templates',
      statChampion: 'Swiss Pole Vault Champion',
      latestTitle: 'Latest writing',
      latestLabel: 'DomiBlogs',
      allPosts: 'All posts →',
      aboutTitle: 'About Me',
      athleticTitle: 'Athletic Background',
      athleticP1:
        'Swiss Pole Vault Champion in 1996. The discipline, focus, and dedication required in competitive athletics shaped my approach to everything I do.',
      athleticP2:
        "Today, I'm deep in Crossfit—training myself and coaching at GO PURE. Helping others find their strength and break through limits.",
      professionalTitle: 'Professional Life',
      professionalP1: 'I lead strategic transformation at Adobe—growth tactics, not technology.',
      professionalP2:
        'Life in Arlesheim includes two kids, regular training, and demanding work. I make it work.',
      trainingTitle: 'Training In Motion',
      trainingDesc: 'A few reps, straight off the floor at GO PURE.',
      projectsTitle: 'Projects',
      featuredLabel: 'Featured Project',
      gopureDesc:
        'A comprehensive workout management platform. Built for the community, by the community. Features workout scheduling, availability polls, user registration, and a library of 346+ workout templates.',
      visitSite: 'Visit Site →',
      contactTitle: 'Get In Touch',
      footer: 'All rights reserved.',
    },
    me: {
      title: 'About Me',
      pageKicker: 'About me',
      titleLead: 'From the runway to the',
      titleHighlight: 'boardroom.',
      galleryAlt: ['Pole vault, 1996', 'CrossFit training', 'Professional life', 'A moment by the lake'],
      offClockTitle: 'Off the clock',
      chapters: [
        { number: '01', title: 'Athletic background' },
        { number: '02', title: 'Professional life' },
      ],
      timelineHeading: 'The path so far',
      timelineHint: 'Drag or scroll to explore',
      timeline: [
        { year: '2022 — Today', company: 'Adobe', role: 'Senior Manager, Transformational Growth & Strategy' },
        { year: '2021 — 2022', company: 'Netcentric AG', role: 'Director Growth & New Business, EMEA & ROW' },
        { year: '2019 — 2021', company: 'Namics AG', role: 'Senior Principal Consultant, New Business' },
        { year: '2017 — 2019', company: 'SAP Switzerland', role: 'Senior Solution Sales Executive' },
        { year: '2012 — 2017', company: 'Magnolia International', role: 'Chief Commercial Officer / Partner' },
        { year: '2008 — 2011', company: 'bank zweiplus ag', role: 'Head of Product Department' },
        { year: '2004 — 2008', company: 'SIX Card Solutions', role: 'Head PM Issuing & Banking Solutions' },
        { year: '2000 — 2003', company: 'The Fantastic Corporation', role: 'Head of MarCom, Investor Relations & PR' },
        { year: '1992 — 1998', company: 'University of Basel', role: 'Master of Arts in Economics (lic. rer. pol.)' },
      ],
      intro:
        'From Swiss Pole Vault Champion to building global sales teams and leading strategic transformation at Adobe—driven by discipline, community building, and helping others succeed.',
      careerTitle: 'Career Timeline',
      statsTitle: 'By The Numbers',
      statYears: 'Years of Commercial Leadership',
      statCommunity: 'AI Community Members',
      statTemplates: 'GO PURE Workout Templates',
      statGrowth: 'Customer Growth at Magnolia',
      statChampion: 'Swiss Pole Vault Champion',
      adobeTitle: 'Adobe · Transformational Growth & Strategy',
      adobeP1:
        'I joined Adobe in September 2022. My role is Senior Manager of Transformational Growth & Strategy on the Blackbird team within AEM Engineering. I lead strategic transformation—growth tactics, not technology. I bring 20+ years of commercial leadership into engineering culture. Customer experience. Relationship building. Stakeholder management. All the sales leader skills that help communities thrive.',
      adobeP2:
        'Before Adobe, I opened markets across the UK, Eastern Europe, UAE, and APAC. I took Magnolia International from 50 to 300 customers as Chief Commercial Officer. I built global sales teams. I worked with C-level executives, developers, and everyone in between.',
      communityTitle: 'Building Communities That Transform',
      communityP1: 'I build communities that break silos and drive transformation.',
      aiCommunityTitle: 'AI Community of Communities · Adobe Basel',
      aiCommunityP1:
        "I lead the AI Community of Communities at Adobe Basel. Since July 2024, we've grown from 50 to 900+ members with 100+ regular attendees. We connect AI teams across AEM, AEP, Document Cloud, and Firefly. Our mission is simple: break silos, share openly, learn together, move fast.",
      aiCommunityP2:
        'What makes this work? Hyper-transparency. Community-led formats. Real use cases over theory. We run weekly Show & Tell sessions, document everything, and share failures openly. No gatekeeping. No top-down mandates. Just engineers solving real problems together.',
      quote:
        '"My leadership philosophy is straightforward: create trust. Build safe harbors where people can fail fast and succeed faster. That\'s how you scale."',
      athleticTitle: 'Athletic Journey',
      poleVaultTitle: 'Swiss Pole Vault Champion',
      poleVaultYear: '1996',
      poleVaultDesc:
        'The discipline, focus, and dedication required in competitive athletics shaped my approach to everything I do.',
      crossfitTitle: 'Crossfit Athlete & Coach',
      crossfitPeriod: 'GO PURE · Present',
      crossfitDesc:
        "Today, I'm deep in Crossfit—training myself and coaching at GO PURE. Helping others find their strength and break through limits.",
      lifeTitle: 'Life in Arlesheim',
      lifeDesc: 'I live in Arlesheim near Basel with my wife and two kids (Liv, 15; Finn, 17).',
      cta: 'Get In Touch',
      education: 'University of Basel',
      degree: 'Master of Arts in Economics (lic. rer. pol)',
    },
    contact: {
      title: 'Get In Touch',
      emailLabel: 'Email',
      addressLabel: 'Address',
      connectLabel: 'Connect',
    },
    blogs: {
      description:
        'Insights on leadership, transformation, community building, and the intersection of athletics and business.',
      readMore: 'Read More',
      by: 'by',
      minRead: 'min read',
      posts: [
        {
          slug: 'how-to-create-a-vibrant-community',
          title: 'How to Create a Vibrant Community',
          date: 'Aug 29, 2026',
          excerpt:
            "Nobody assigns you a community. You get a channel, half an hour on someone's calendar, and a suspicion that people are solving the same problems without knowing about each other. Here's what actually works.",
          readTime: '7 min read',
        },
        {
          slug: 'fitness-app-no-code',
          title: "I Built a Full Fitness App. I've Never Written a Single Line of Code.",
          date: 'May 10, 2026',
          excerpt:
            'My friend built a training box in his basement. I helped with the equipment, became the coach, and then built a full fitness platform — without knowing how to code.',
          readTime: '5 min read',
        },
        {
          slug: 'hybrid-sales-strategies',
          title: 'The Rise of Hybrid Sales Strategies: Navigating the Future of B2B Software Sales',
          date: 'Jan 23, 2026',
          excerpt:
            'The B2B software industry is evolving beyond traditional sales-led approaches. Discover how hybrid models combine PLG efficiency with SLG relationship-building.',
          readTime: '8 min read',
        },
        {
          slug: 'winning-the-game',
          title:
            'Winning the Game: Lessons from Sport, CrossFit, and Pole Vaulting in PLG, Sales, and Culture Change',
          date: 'Feb 7, 2025',
          excerpt:
            'Success, whether in sports, business, or personal growth, is built on resilience, adaptability, and execution.',
          readTime: '5 min read',
        },
      ],
    },
    blog: {
      backToBlogs: '← Back to DomiBlogs',
      backToAll: '← Back to All Posts',
      by: 'by',
    },
    footer: {
      cta: "Let's train together →",
      rights: 'All rights reserved.',
    },
  },

  de: {
    nav: {
      home: 'Start',
      me: 'Über mich',
      blogs: 'DomiBlogs',
      gopure: 'GO PURE',
      contact: 'Kontakt',
    },
    hero: {
      tagline: 'Stabhochsprung-Champion · Coach · Experte für digitale Lösungen',
      description:
        'Ich liebe Crossfit und gehe an meine Grenzen. Coaching bei GO PURE ist grossartig. Bei Adobe leite ich strategische Transformation und Wachstum. Mein sportlicher Hintergrund hilft dabei – ich war 1996 Schweizer Stabhochsprung-Champion.',
      cta: 'Kontakt aufnehmen',
      ctaSecondary: 'GO PURE besuchen',
    },
    home: {
      heroKicker: 'Hoi, ich bin Domi — Arlesheim, CH',
      heroLead:
        'Ehemaliger Schweizer Stabhochsprung-Champion. Heute coache ich CrossFit bei GO PURE, baue eine AI-Community mit über 900 Mitgliedern auf und leite Transformation bei Adobe.',
      heroBlogs: 'DomiBlogs lesen →',
      heroMe: 'Mehr über mich',
      marqueeItems: [
        'Stabhochsprung-Champion',
        'CrossFit-Coach',
        'AI-Community-Aufbau',
        'Wachstumsstratege',
        'Vater von zwei Kindern',
      ],
      thingsTitle: 'Drei Dinge, die ich jede Woche mache.',
      coachTitle: 'Coachen',
      coachDescription:
        'Bei GO PURE coache ich die Crew und helfe allen, gemeinsam stärker zu werden.',
      buildTitle: 'Aufbauen',
      buildDescription:
        'Ich teile Erfahrungen aus Sport, Vertrieb, Wachstum und dem Bauen mit AI.',
      growTitle: 'Wachsen',
      growDescription:
        'Ich baue Communities auf und leite strategische Transformation bei Adobe.',
      mediaTitle: 'Training und Leben in Bewegung.',
      mediaDescription: 'Ein paar bewegte Momente aus der Trainingshalle und darüber hinaus.',
      statYears: 'Jahre kommerzielle Führungserfahrung',
      statCommunity: 'Mitglieder der AI-Community',
      statTemplates: 'GO PURE Workout-Vorlagen',
      statChampion: 'Schweizer Stabhochsprung-Champion',
      latestTitle: 'Neueste Beiträge',
      latestLabel: 'DomiBlogs',
      allPosts: 'Alle Beiträge →',
      aboutTitle: 'Über mich',
      athleticTitle: 'Sportlicher Hintergrund',
      athleticP1:
        'Schweizer Stabhochsprung-Champion 1996. Die Disziplin, der Fokus und die Hingabe im Leistungssport haben meinen Ansatz in allem geprägt, was ich tue.',
      athleticP2:
        'Heute bin ich tief im Crossfit – ich trainiere selbst und coache bei GO PURE. Ich helfe anderen, ihre Stärke zu finden und Grenzen zu überwinden.',
      professionalTitle: 'Berufsleben',
      professionalP1:
        'Bei Adobe leite ich strategische Transformation – Wachstumstaktiken, keine Technologie.',
      professionalP2:
        'Das Leben in Arlesheim umfasst zwei Kinder, regelmässiges Training und anspruchsvolle Arbeit. Ich bringe alles unter einen Hut.',
      trainingTitle: 'Training in Bewegung',
      trainingDesc: 'Ein paar Reps, direkt von der Trainingsfläche bei GO PURE.',
      projectsTitle: 'Projekte',
      featuredLabel: 'Hauptprojekt',
      gopureDesc:
        'Eine umfassende Workout-Management-Plattform. Für die Community gebaut, von der Community. Mit Workout-Planung, Verfügbarkeitsumfragen, Benutzerregistrierung und einer Bibliothek mit über 346 Workout-Vorlagen.',
      visitSite: 'Website besuchen →',
      contactTitle: 'Kontakt aufnehmen',
      footer: 'Alle Rechte vorbehalten.',
    },
    me: {
      title: 'Über mich',
      pageKicker: 'Über mich',
      titleLead: 'Von der Anlaufbahn in den',
      titleHighlight: 'Vorstand.',
      galleryAlt: ['Stabhochsprung, 1996', 'CrossFit-Training', 'Berufsleben', 'Ein Moment am See'],
      offClockTitle: 'Abseits der Arbeit',
      chapters: [
        { number: '01', title: 'Sportlicher Hintergrund' },
        { number: '02', title: 'Berufsleben' },
      ],
      timelineHeading: 'Bisheriger Weg',
      timelineHint: 'Zum Entdecken ziehen oder scrollen',
      timeline: [
        { year: '2022 — heute', company: 'Adobe', role: 'Senior Manager, Transformational Growth & Strategy' },
        { year: '2021 — 2022', company: 'Netcentric AG', role: 'Director Growth & New Business, EMEA & ROW' },
        { year: '2019 — 2021', company: 'Namics AG', role: 'Senior Principal Consultant, New Business' },
        { year: '2017 — 2019', company: 'SAP Switzerland', role: 'Senior Solution Sales Executive' },
        { year: '2012 — 2017', company: 'Magnolia International', role: 'Chief Commercial Officer / Partner' },
        { year: '2008 — 2011', company: 'bank zweiplus ag', role: 'Head of Product Department' },
        { year: '2004 — 2008', company: 'SIX Card Solutions', role: 'Head PM Issuing & Banking Solutions' },
        { year: '2000 — 2003', company: 'The Fantastic Corporation', role: 'Head of MarCom, Investor Relations & PR' },
        { year: '1992 — 1998', company: 'Universität Basel', role: 'Master of Arts in Economics (lic. rer. pol.)' },
      ],
      intro:
        'Vom Schweizer Stabhochsprung-Champion zum Aufbau globaler Vertriebsteams und zur Leitung strategischer Transformation bei Adobe – getrieben von Disziplin, Community-Aufbau und dem Helfen anderer.',
      careerTitle: 'Karriere',
      statsTitle: 'In Zahlen',
      statYears: 'Jahre kommerzielle Führungserfahrung',
      statCommunity: 'Mitglieder der AI Community',
      statTemplates: 'GO PURE Workout-Vorlagen',
      statGrowth: 'Kundenwachstum bei Magnolia',
      statChampion: 'Schweizer Stabhochsprung-Champion',
      adobeTitle: 'Adobe · Transformationswachstum & Strategie',
      adobeP1:
        'Ich bin im September 2022 zu Adobe gestossen. Meine Rolle ist Senior Manager für Transformationswachstum & Strategie im Blackbird-Team innerhalb von AEM Engineering. Ich leite strategische Transformation – Wachstumstaktiken, keine Technologie. Ich bringe über 20 Jahre kommerzielle Führungserfahrung in die Engineering-Kultur ein. Customer Experience. Beziehungsaufbau. Stakeholder-Management. All die Fähigkeiten eines Vertriebsleiters, die Communities zum Erfolg führen.',
      adobeP2:
        'Vor Adobe habe ich Märkte in Grossbritannien, Osteuropa, den Vereinigten Arabischen Emiraten und dem asiatisch-pazifischen Raum erschlossen. Ich habe Magnolia International als Chief Commercial Officer von 50 auf 300 Kunden geführt. Ich habe globale Vertriebsteams aufgebaut. Ich habe mit C-Level-Führungskräften, Entwicklern und allen dazwischen zusammengearbeitet.',
      communityTitle: 'Communities aufbauen, die transformieren',
      communityP1: 'Ich baue Communities auf, die Silos aufbrechen und Transformation vorantreiben.',
      aiCommunityTitle: 'AI Community of Communities · Adobe Basel',
      aiCommunityP1:
        'Ich leite die AI Community of Communities bei Adobe Basel. Seit Juli 2024 sind wir von 50 auf über 900 Mitglieder mit über 100 regelmässigen Teilnehmern gewachsen. Wir verbinden KI-Teams in AEM, AEP, Document Cloud und Firefly. Unsere Mission ist einfach: Silos aufbrechen, offen teilen, gemeinsam lernen, schnell handeln.',
      aiCommunityP2:
        'Was macht das möglich? Hyper-Transparenz. Community-geführte Formate. Reale Anwendungsfälle statt Theorie. Wir führen wöchentliche Show-&-Tell-Sessions durch, dokumentieren alles und teilen Misserfolge offen. Kein Gatekeeping. Keine Top-down-Vorgaben. Nur Ingenieure, die gemeinsam echte Probleme lösen.',
      quote:
        '„Meine Führungsphilosophie ist klar: Vertrauen schaffen. Sichere Häfen bauen, wo Menschen schnell scheitern und noch schneller Erfolg haben können. So skaliert man."',
      athleticTitle: 'Sportliche Karriere',
      poleVaultTitle: 'Schweizer Stabhochsprung-Champion',
      poleVaultYear: '1996',
      poleVaultDesc:
        'Die Disziplin, der Fokus und die Hingabe im Leistungssport haben meinen Ansatz in allem geprägt, was ich tue.',
      crossfitTitle: 'Crossfit-Athlet & Coach',
      crossfitPeriod: 'GO PURE · Aktuell',
      crossfitDesc:
        'Heute bin ich tief im Crossfit – ich trainiere selbst und coache bei GO PURE. Ich helfe anderen, ihre Stärke zu finden und Grenzen zu überwinden.',
      lifeTitle: 'Leben in Arlesheim',
      lifeDesc: 'Ich lebe in Arlesheim bei Basel mit meiner Frau und zwei Kindern (Liv, 15; Finn, 17).',
      cta: 'Kontakt aufnehmen',
      education: 'Universität Basel',
      degree: 'Master of Arts in Wirtschaftswissenschaften (lic. rer. pol)',
    },
    contact: {
      title: 'Kontakt',
      emailLabel: 'E-Mail',
      addressLabel: 'Adresse',
      connectLabel: 'Verbinden',
    },
    blogs: {
      description:
        'Einblicke in Führung, Transformation, Community-Aufbau und die Verbindung von Sport und Business.',
      readMore: 'Mehr lesen',
      by: 'von',
      minRead: 'Min. Lesezeit',
      posts: [
        {
          slug: 'how-to-create-a-vibrant-community',
          title: 'Wie man eine lebendige Community aufbaut',
          date: '29. Aug. 2026',
          excerpt:
            'Niemand weist dir eine Community zu. Du bekommst einen Kanal, eine halbe Stunde im Kalender von jemandem und die Vermutung, dass Menschen dieselben Probleme lösen, ohne voneinander zu wissen. Das hier hat wirklich funktioniert.',
          readTime: '7 Min. Lesezeit',
        },
        {
          slug: 'fitness-app-no-code',
          title: 'Ich habe eine komplette Fitness-App gebaut. Ich habe noch nie eine einzige Zeile Code geschrieben.',
          date: '10. Mai 2026',
          excerpt:
            'Mein Freund baute eine Trainingsbox in seinem Keller. Ich half mit der Ausrüstung, wurde der Coach und baute dann eine vollständige Fitness-Plattform – ohne Code schreiben zu können.',
          readTime: '5 Min. Lesezeit',
        },
        {
          slug: 'hybrid-sales-strategies',
          title:
            'Der Aufstieg hybrider Vertriebsstrategien: Die Zukunft des B2B-Software-Vertriebs navigieren',
          date: '23. Jan. 2026',
          excerpt:
            'Die B2B-Software-Branche entwickelt sich über traditionelle vertriebsgeführte Ansätze hinaus. Entdecke, wie hybride Modelle die Effizienz von PLG mit dem Beziehungsaufbau von SLG kombinieren.',
          readTime: '8 Min. Lesezeit',
        },
        {
          slug: 'winning-the-game',
          title:
            'Das Spiel gewinnen: Lektionen aus Sport, CrossFit und Stabhochsprung für PLG, Vertrieb und Kulturwandel',
          date: '7. Feb. 2025',
          excerpt:
            'Erfolg – ob im Sport, Business oder persönlichem Wachstum – beruht auf Belastbarkeit, Anpassungsfähigkeit und Umsetzung.',
          readTime: '5 Min. Lesezeit',
        },
      ],
    },
    blog: {
      backToBlogs: '← Zurück zu DomiBlogs',
      backToAll: '← Zurück zu allen Beiträgen',
      by: 'von',
    },
    footer: {
      cta: 'Lass uns gemeinsam trainieren →',
      rights: 'Alle Rechte vorbehalten.',
    },
  },
} as const;

export function useT(lang: Lang) {
  return translations[lang];
}
