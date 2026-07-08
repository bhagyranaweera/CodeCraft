const navLinks = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Services", "/services"],
  ["Pricing", "/pricing"],
  ["Contact", "/contact"],
];

const services = [
  {
    icon: "database",
    title: "Custom Software Development",
    copy:
      "Bespoke backend architecture, secure systems modernization, and scalable microservices built with C#, Rust, and Node.js.",
    bullets: ["Scalable Cloud Architecture", "High-Performance Backend Systems", "Legacy Refactoring"],
    art: "code",
    featured: true,
  },
  {
    icon: "shield",
    title: "Software Maintenance & Support",
    copy:
      "Reliable maintenance, bug fixes, updates, and technical support to keep software running efficiently.",
    chips: ["Python", "React.js", "DevOps"],
    accent: true,
  },
  {
    icon: "window",
    title: "Progressive Web Apps",
    copy:
      "Lightning-fast React and Next.js applications that deliver user experience and SEO performance.",
    art: "dashboard",
  },
  {
    icon: "sliders",
    title: "Mobile App Development",
    copy:
      "Cross-platform mobile applications built with React Native and Expo Go for seamless user experience.",
    actions: ["React Native", "Expo Go"],
    wide: true,
  },
];

const plans = [
  {
    name: "Startup",
    copy: "For MVPs and early ventures.",
    price: "$4,500",
    period: "/project",
    features: ["MVP Architecture", "Core Web Application", "Mobile App Development", "2 Months Support"],
    cta: "Get Started",
  },
  {
    name: "Growth",
    copy: "Scaling businesses and tech teams.",
    price: "$8,900",
    period: "/month",
    features: [
      "Dedicated Engineering Squad",
      "Advanced AI Integration",
      "DevOps & Security Audits",
      "CI/CD Implementation",
      "Priority 24/7 Support",
    ],
    cta: "Start Scaling",
    popular: true,
  },
  {
    name: "Enterprise",
    copy: "Custom mission-critical solutions.",
    price: "Custom",
    features: ["Legacy Transformation", "Distributed Systems", "Governance & Compliance", "White-Glove Support"],
    cta: "Contact Sales",
  },
];

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#15111d]/95 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="/" aria-label="CodeCraft Solutions home">
          <img
            src="/Images/codecraft-logo.svg"
            alt="CodeCraft Solutions"
            className="h-12 w-40 object-contain object-left sm:w-48"
          />
        </a>

        <div className="hidden items-center gap-8 text-sm font-semibold text-slate-400 md:flex">
          {navLinks.map(([label, href], index) => (
            <a
              key={`${label}-${index}`}
              href={href}
              className={
                label === "Services"
                  ? "text-violet-400 underline decoration-violet-500 decoration-2 underline-offset-8 transition hover:text-white"
                  : "transition hover:text-white"
              }
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="/request-quote"
          className="rounded-sm bg-violet-600 px-6 py-3 text-xs font-black uppercase tracking-[0.16em] text-white shadow-[0_0_26px_rgba(124,58,237,0.28)] transition hover:bg-violet-500"
        >
          Request Quote
        </a>
      </nav>
    </header>
  );
}

function Icon({ name }) {
  const common = "h-5 w-5";
  const paths = {
    database: (
      <>
        <ellipse cx="12" cy="6" rx="7" ry="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" stroke="currentColor" strokeWidth="1.8" />
      </>
    ),
    shield: (
      <path d="M12 20s7-3.3 7-9V5.8L12 3 5 5.8V11c0 5.7 7 9 7 9Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
    ),
    window: (
      <>
        <rect x="4" y="5" width="16" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4 9h16M8 13h4" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </>
    ),
    sliders: (
      <>
        <path d="M6 5v14M12 5v14M18 5v14" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        <path d="M4 9h4M10 15h4M16 11h4" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </>
    ),
  };

  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

function CodeArt() {
  return (
    <div className="relative h-full min-h-[148px] overflow-hidden rounded-sm bg-[#08131a] ring-1 ring-cyan-400/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(6,182,212,0.22),transparent_36%)]" />
      <div className="absolute inset-x-4 top-5 grid grid-cols-3 gap-3">
        {[0, 1, 2].map((panel) => (
          <div key={panel} className="h-28 rounded-sm border border-cyan-300/20 bg-[#0d1d25] p-3">
            <span className="block h-1.5 w-9 rounded bg-cyan-300/60" />
            <span className="mt-4 block h-1 w-full rounded bg-violet-300/40" />
            <span className="mt-2 block h-1 w-3/4 rounded bg-cyan-300/30" />
            <span className="mt-2 block h-1 w-5/6 rounded bg-slate-300/20" />
            <span className="mt-5 block h-1 w-2/3 rounded bg-violet-400/40" />
          </div>
        ))}
      </div>
    </div>
  );
}

function DashboardArt() {
  return (
    <div className="relative h-28 overflow-hidden rounded-sm bg-[#def6fa]">
      <div className="absolute inset-x-0 top-0 h-5 bg-[#204055]" />
      <div className="absolute left-5 top-9 h-10 w-24 rounded bg-white shadow-md" />
      <div className="absolute left-36 top-9 h-5 w-20 rounded bg-cyan-100" />
      <div className="absolute bottom-5 left-36 flex gap-4">
        <span className="h-5 w-5 rounded-full bg-cyan-500" />
        <span className="h-5 w-5 rounded-full bg-cyan-500" />
        <span className="h-5 w-5 rounded-full bg-cyan-500" />
      </div>
    </div>
  );
}

function ServiceCard({ service }) {
  return (
    <article
      className={`rounded-md border border-white/10 bg-[#1d1923] p-5 shadow-[0_16px_36px_rgba(0,0,0,0.24)] ${
        service.accent ? "bg-violet-950/50" : ""
      } ${service.featured ? "lg:col-span-2" : ""} ${service.wide ? "lg:col-span-2" : ""}`}
    >
      <div className={service.featured ? "grid gap-5 md:grid-cols-[1fr_1.05fr]" : ""}>
        <div>
          <div className="mb-3 text-cyan-400">
            <Icon name={service.icon} />
          </div>
          <h3 className="text-lg font-black leading-tight text-white">{service.title}</h3>
          <p className="mt-3 max-w-xl text-sm font-medium leading-6 text-slate-400">{service.copy}</p>
          {service.bullets && (
            <ul className="mt-4 space-y-2 text-xs font-semibold text-slate-300">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-2">
                  <span className="text-cyan-400">◎</span>
                  {bullet}
                </li>
              ))}
            </ul>
          )}
          {service.chips && (
            <div className="mt-7 flex flex-wrap gap-2">
              {service.chips.map((chip) => (
                <span key={chip} className="rounded bg-white/8 px-3 py-1.5 text-[10px] font-black uppercase text-slate-300">
                  {chip}
                </span>
              ))}
            </div>
          )}
        </div>
        {service.art === "code" && <CodeArt />}
      </div>

      {service.art === "dashboard" && (
        <div className="mt-5 max-w-[340px]">
          <DashboardArt />
        </div>
      )}

      {service.actions && (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {service.actions.map((action) => (
            <a
              key={action}
              href="/contact"
              className="rounded-sm bg-white/8 px-8 py-5 text-center text-[10px] font-black uppercase tracking-[0.16em] text-slate-300 transition hover:bg-white/12 hover:text-white"
            >
              {action}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}

function PricingCard({ plan }) {
  return (
    <article
      className={`relative rounded-md border bg-[#1d1923] p-5 ${
        plan.popular ? "border-violet-200 shadow-[0_0_38px_rgba(168,85,247,0.2)]" : "border-white/12"
      }`}
    >
      {plan.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-violet-200 px-5 py-1 text-[9px] font-black uppercase tracking-[0.16em] text-violet-900">
          Most Popular
        </span>
      )}
      <h3 className="text-base font-black text-white">{plan.name}</h3>
      <p className="mt-2 text-xs font-semibold text-slate-400">{plan.copy}</p>
      <div className="mt-5 flex items-end gap-1">
        <span className={plan.price === "Custom" ? "text-2xl font-black text-white" : "text-3xl font-black text-cyan-400"}>
          {plan.price}
        </span>
        {plan.period && <span className="pb-1 text-xs font-semibold text-slate-400">{plan.period}</span>}
      </div>
      <ul className="mt-6 space-y-3 text-sm font-semibold text-slate-300">
        {plan.features.map((feature) => (
          <li key={feature} className="flex gap-2">
            <span className="text-cyan-400">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href="/request-quote"
        className={`mt-8 flex w-full justify-center rounded-sm border py-3 text-xs font-black transition ${
          plan.popular
            ? "border-violet-200 bg-violet-200 text-violet-900 hover:bg-white"
            : "border-violet-300/70 text-violet-100 hover:bg-violet-500/20"
        }`}
      >
        {plan.cta}
      </a>
    </article>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0b0811] px-6 py-10">
      <div className="mx-auto grid max-w-[1120px] gap-10 text-sm text-slate-400 md:grid-cols-[220px_150px_190px_150px] md:justify-between">
        <div>
          <img src="/Images/codecraft-logo.svg" alt="CodeCraft Solutions" className="h-8 w-20 object-contain object-left" />
          <p className="mt-5 max-w-[210px] text-sm font-semibold leading-6">
            Precision Engineering for Software. Building the future of digital infrastructure since 2018.
          </p>
        </div>
        <div>
          <h3 className="font-black text-white">Company</h3>
          <ul className="mt-5 space-y-3">
            <li><a href="/" className="transition hover:text-white">Home</a></li>
            <li><a href="/about" className="transition hover:text-white">About Us</a></li>
            <li><a href="/services" className="font-black text-violet-300">Services</a></li>
            <li><a href="/pricing" className="transition hover:text-white">Pricing</a></li>
            <li><a href="/request-quote" className="transition hover:text-white">Request Quote</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-black text-white">Resources</h3>
          <ul className="mt-5 space-y-3">
            <li><a href="/contact" className="transition hover:text-white">Contact</a></li>
            <li><a href="#privacy" data-policy-popup="privacy" className="transition hover:text-white">Privacy Policy</a></li>
            <li><a href="#terms" data-policy-popup="terms" className="transition hover:text-white">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-black text-white">Connect</h3>
          <div className="mt-5 flex gap-3">
            <a href="https://wa.me/" aria-label="WhatsApp" className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/8 text-slate-300 transition hover:bg-white/14">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M7.2 18.6 8 15.7a7 7 0 1 1 2.8 1.3l-3.6 1.6Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
                <path d="M9.7 8.8c.2 3 1.8 4.6 4.6 5.4l1-1.1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
              </svg>
            </a>
            <a href="/contact" aria-label="Email" className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/8 text-slate-300 transition hover:bg-white/14">
              <span className="text-lg">@</span>
            </a>
            <a href="https://www.instagram.com/codecraftsolution4/?hl=en" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/8 text-slate-300 transition hover:bg-white/14">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8" />
                <circle cx="16.8" cy="7.2" r="1" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-9 max-w-[1120px] text-center text-[9px] tracking-[0.22em] text-slate-500">
        <span className="mb-2 block text-sm font-bold normal-case tracking-normal text-slate-400">
          ACN: 150 673 000 | ABN: 90 202 086 664
        </span>
        <span className="block font-normal uppercase">(c) 2024 CodeCraft Solutions. All rights reserved.</span>
        <span className="mt-2 block text-sm font-bold normal-case tracking-normal">
          This website is for a class assignment project and not for commercial purpose.
        </span>
      </p>
    </footer>
  );
}

export default function Services() {
  return (
    <div className="min-h-screen bg-[#100c16] text-slate-100 selection:bg-violet-500/40">
      <Header />

      <main className="pt-16 sm:pt-20">
        <section className="border-b border-white/10 bg-[radial-gradient(circle_at_50%_10%,rgba(124,58,237,0.14),transparent_34%),linear-gradient(180deg,#18141f_0%,#15111a_100%)] px-6 py-16 text-center">
          <span className="rounded-full border border-violet-400/40 bg-violet-500/10 px-4 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-violet-200">
            Innovation Delivered
          </span>
          <h1 className="mx-auto mt-6 max-w-[760px] text-4xl font-black leading-tight text-white md:text-5xl">
            Precision-Built Software for the <span className="block text-blue-500">Modern Enterprise.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-[620px] text-sm font-medium leading-6 text-slate-400">
            We provide technical consulting and software engineering that scales with your ambition.
            No fluff, just performance.
          </p>
        </section>

        <section id="services" className="px-6 py-11">
          <div className="mx-auto max-w-[1120px]">
            <h2 className="text-2xl font-black text-white">Our Core Services</h2>
            <p className="mt-1 text-sm font-medium text-slate-400">
              Modular consulting solutions designed to solve complex architectural challenges.
            </p>
            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="border-y border-white/5 bg-[#0c0910] px-6 py-14">
          <div className="mx-auto max-w-[1120px]">
            <div className="text-center">
              <h2 className="text-2xl font-black text-white">Transparent Pricing</h2>
              <p className="mt-2 text-sm font-medium text-slate-400">
                Precision engineering tailored to your business scale.
              </p>
            </div>
            <div className="mt-9 grid gap-5 md:grid-cols-3">
              {plans.map((plan) => (
                <PricingCard key={plan.name} plan={plan} />
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto max-w-[650px]">
            <h2 className="text-center text-2xl font-black text-white">Frequently Asked Questions</h2>
            <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
              {["How do you handle project management?", "Do we own the source code?"].map((question) => (
                <details key={question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-normal text-slate-200">
                    {question}
                    <span className="text-xl font-light text-slate-400 transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    We keep delivery transparent with milestone planning, frequent reviews, and full
                    handover of agreed project assets.
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
