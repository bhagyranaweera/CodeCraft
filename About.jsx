const processRows = [
  {
    number: "1",
    title: "01 Discovery & Audit",
    copy:
      "We dive deep into your existing ecosystem, uncovering technical bottlenecks and identifying core business requirements through a rigorous auditing process.",
    deliverables: "Technical Debt Report, Scope Definition, Stakeholder Map",
    side: "left",
    color: "purple",
  },
  {
    number: "2",
    title: "02 Architecture Design",
    copy:
      "Our engineers draft a scalable blueprint, selecting the optimal tech stack and infrastructure models that ensure your solution stands the test of time.",
    deliverables: "System Architecture Diagram, API Specifications, Infrastructure Plan",
    side: "right",
    color: "cyan",
  },
  {
    number: "3",
    title: "03 Agile Development",
    copy:
      "Implementation begins with bi-weekly sprints. We maintain high standards through peer reviews, automated testing, and continuous integration pipelines.",
    deliverables: "Production-Ready Code, Sprint Reports, Automated Test Suites",
    side: "left",
    color: "purple",
  },
  {
    number: "4",
    title: "04 Deployment & Scale",
    copy:
      "We manage the launch process and provide post-deployment monitoring, ensuring the system performs flawlessly under real-world traffic loads.",
    deliverables: "Live Environment, Performance Logs, Operations Manual",
    side: "right",
    color: "cyan",
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
          <a href="/" className="transition hover:text-white">Home</a>
          <a
            href="/about"
            className="text-violet-400 underline decoration-violet-500 decoration-2 underline-offset-8 transition hover:text-white"
          >
            About Us
          </a>
          <a href="/services" className="transition hover:text-white">Services</a>
          <a href="/pricing" className="transition hover:text-white">Pricing</a>
          <a href="/contact" className="transition hover:text-white">Contact</a>
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

function Footer() {
  return (
    <footer className="bg-[#15111a] px-6 py-10">
      <div className="mx-auto grid max-w-[1220px] gap-10 text-sm text-slate-400 md:grid-cols-[230px_150px_190px_150px] md:justify-between">
        <div>
          <img src="/Images/codecraft-logo.svg" alt="CodeCraft Solutions" className="h-8 w-20 object-contain object-left" />
          <p className="mt-6 max-w-[210px] text-sm font-semibold leading-6">
            Precision Engineering for Software. Building the future of digital infrastructure since 2018.
          </p>
        </div>

        <div>
          <h3 className="font-black text-white">Company</h3>
          <ul className="mt-5 space-y-3">
            <li><a href="/" className="transition hover:text-white">Home</a></li>
            <li><a href="/about" className="font-black text-violet-300">About Us</a></li>
            <li><a href="/services" className="transition hover:text-white">Services</a></li>
            <li><a href="/pricing" className="transition hover:text-white">Pricing</a></li>
            <li><a href="/request-quote" className="transition hover:text-white">Request Quote</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-black text-white">Resources</h3>
          <ul className="mt-5 space-y-3">
            <li><a href="/contact" className="transition hover:text-white">Contact</a></li>
            <li><a href="#privacy" className="transition hover:text-white">Privacy Policy</a></li>
            <li><a href="#terms" className="transition hover:text-white">Terms of Service</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-black text-white">Connect</h3>
          <div className="mt-5 flex gap-3">
            <a
              href="https://wa.me/"
              aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/8 text-slate-300 transition hover:bg-white/14"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M7.2 18.6 8 15.7a7 7 0 1 1 2.8 1.3l-3.6 1.6Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                />
                <path
                  d="M9.7 8.8c.2 3 1.8 4.6 4.6 5.4l1-1.1"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                />
              </svg>
            </a>
            <a
              href="/contact"
              aria-label="Email"
              className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/8 text-slate-300 transition hover:bg-white/14"
            >
              <span className="text-lg">@</span>
            </a>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-[1220px] text-center text-[9px] font-black uppercase tracking-[0.32em] text-slate-500">
        (c) 2024 CodeCraft Solutions. Precision Engineering for Software.
      </p>
    </footer>
  );
}

function ProcessRow({ row }) {
  const badgeClass = row.color === "cyan" ? "bg-[#06B6D4]" : "bg-[#7C3AED]";
  const leftText = (
    <div className="text-right">
      <h3 className="font-black text-violet-200">{row.title}</h3>
      <p className="mt-3 text-sm font-medium leading-6 text-slate-400">{row.copy}</p>
    </div>
  );
  const rightText = (
    <div className="text-left">
      <h3 className="font-black text-violet-200">{row.title}</h3>
      <p className="mt-3 text-sm font-medium leading-6 text-slate-400">{row.copy}</p>
    </div>
  );
  const deliverable = (
    <div className={`${row.side === "left" ? "text-left" : "text-right"} rounded-sm bg-white/12 px-5 py-4`}>
      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-cyan-500">Deliverables</p>
      <p className="mt-1 text-sm font-semibold text-slate-400">{row.deliverables}</p>
    </div>
  );

  return (
    <div className="grid items-center gap-5 md:grid-cols-[1fr_52px_1fr]">
      <div>{row.side === "left" ? leftText : deliverable}</div>
      <div className="relative hidden justify-center md:flex">
        <span className="absolute left-1/2 top-[-50px] h-[110px] w-px -translate-x-1/2 bg-white/8" />
        <span className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-lg ${badgeClass} text-base font-black text-white shadow-lg`}>
          {row.number}
        </span>
      </div>
      <div>{row.side === "left" ? deliverable : rightText}</div>
    </div>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-[#100c16] text-slate-100 selection:bg-violet-500/40">
      <Header />

      <main>
        <section className="about-reference-hero relative flex min-h-[640px] items-center overflow-hidden border-b border-white/5 pt-20">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,12,24,0.98)_0%,rgba(17,12,24,0.82)_45%,rgba(17,12,24,0.58)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_46%,rgba(124,58,237,0.12),transparent_26%)]" />
          <div className="relative z-10 mx-auto w-full max-w-[1240px] px-6">
            <div className="max-w-[620px]">
              <h1 className="text-[42px] font-black leading-[1.05] text-violet-200 md:text-[52px]">
                Precision Engineering for the Digital Frontier
              </h1>
              <p className="mt-6 max-w-[590px] text-base font-bold leading-7 text-slate-400">
                We build the architectural foundations that allow modern enterprises to scale with
                confidence, combining technical excellence with strategic foresight.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#110d17] px-6 py-10">
          <div className="mx-auto grid max-w-[1240px] gap-8 lg:grid-cols-[1.05fr_1.48fr]">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.38em] text-cyan-500">Our Story</p>
              <h2 className="mt-4 max-w-[470px] text-[30px] font-black leading-tight text-slate-200">
                Born from a passion for clean, resilient code.
              </h2>
              <p className="mt-6 text-sm font-semibold leading-7 text-slate-400">
                Founded in 2018, CodeCraft Solutions began as a specialized consultancy focused on
                fixing the "unfixable" architectural debt of legacy systems. We quickly realized
                that the market lacked partners who treated software as a genuine engineering
                discipline rather than just a delivery task.
              </p>
              <p className="mt-5 text-sm font-semibold leading-7 text-slate-400">
                Today, we serve global enterprises and ambitious startups alike, bridging the gap
                between complex technical requirements and business objectives with unwavering
                precision.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <article className="rounded-md border-t-4 border-[#06B6D4] bg-[#221d28] p-9 shadow-xl">
                <div className="text-[#06B6D4]">
                  <svg className="h-9 w-9" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 19 19 5M8 5h11v11" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
                    <path d="M5 12 12 19" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="mt-7 font-black text-slate-200">Our Mission</h3>
                <p className="mt-5 text-sm font-semibold leading-7 text-slate-400">
                  To empower organizations through software that is not only functional but
                  architecturally superior, ensuring longevity and competitive advantage.
                </p>
              </article>

              <article className="rounded-md border-t-4 border-[#7C3AED] bg-[#221d28] p-9 shadow-xl">
                <div className="text-violet-300">
                  <svg className="h-9 w-9" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M12 3 5 6.2v5.3c0 4.6 3 7.2 7 8.5 4-1.3 7-3.9 7-8.5V6.2L12 3Z"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <path d="m9 12 2 2 4-4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="mt-7 font-black text-slate-200">Our Values</h3>
                <ul className="mt-5 space-y-4 text-sm font-semibold text-slate-400">
                  <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-[#06B6D4]" />Technical Integrity First</li>
                  <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-[#06B6D4]" />Transparent Communication</li>
                  <li className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-[#06B6D4]" />Continuous Learning Loop</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-[#1a1720] px-6 py-16">
          <div className="mx-auto max-w-[1240px]">
            <div className="text-center">
              <p className="text-[10px] font-black uppercase tracking-[0.38em] text-cyan-500">How We Work</p>
              <h2 className="mt-3 text-[32px] font-black text-slate-200">The Precision Process</h2>
            </div>

            <div className="mt-10 grid gap-8">
              {processRows.map((row) => (
                <ProcessRow key={row.number} row={row} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#100c16] px-6 py-10 pb-28">
          <div className="mx-auto max-w-[1240px]">
            <p className="text-[10px] font-black uppercase tracking-[0.38em] text-cyan-500">Our Leadership</p>
            <h2 className="mt-2 text-center text-[32px] font-black text-slate-200">
              The Architects of Our Culture
            </h2>

            <div className="mx-auto mt-10 grid max-w-[980px] gap-x-32 gap-y-12 md:grid-cols-2">
              <article className="overflow-hidden rounded-md bg-[#1d1823] shadow-xl">
                <img
                  src="/Images/dinusha-leadership.png"
                  alt="Dinusha Sewwandi"
                  className="h-[386px] w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="text-sm font-black text-slate-200">Dinusha Sewwandi</h3>
                  <p className="mt-1 text-xs font-black text-[#06B6D4]">Chief Executive Officer</p>
                  <p className="mt-4 text-sm font-semibold leading-6 text-slate-400">
                    A former CTO with a passion for scalable systems and growth strategies.
                  </p>
                </div>
              </article>

              <article className="overflow-hidden rounded-md bg-[#1d1823] shadow-xl">
                <img
                  src="/Images/bhagya-leadership.png"
                  alt="Bhagya Ranaweera"
                  className="h-[386px] w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="text-sm font-black text-slate-200">Bhagya Ranaweera</h3>
                  <p className="mt-1 text-xs font-black text-[#06B6D4]">Chief Technology Officer</p>
                  <p className="mt-4 text-sm font-semibold leading-6 text-slate-400">
                    PhD in Computer Science, specialized in distributed systems and high-availability.
                  </p>
                </div>
              </article>

              <article className="overflow-hidden rounded-md bg-[#1d1823] shadow-xl">
                <img
                  src="/Images/dahami-leadership.png"
                  alt="Dahami Withana"
                  className="h-[386px] w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="text-sm font-black text-slate-200">Dahami Withana</h3>
                  <p className="mt-1 text-xs font-black text-[#06B6D4]">Head of Operations</p>
                  <p className="mt-4 text-sm font-semibold leading-6 text-slate-400">
                    Ensuring seamless delivery and fostering long-term partnerships with enterprise clients.
                  </p>
                </div>
              </article>

              <article className="overflow-hidden rounded-md bg-[#1d1823] shadow-xl">
                <img
                  src="/Images/ruvishi-leadership.png"
                  alt="Ruvishi Dissanayake"
                  className="h-[386px] w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="text-sm font-black text-slate-200">Ruvishi Dissanayake</h3>
                  <p className="mt-1 text-xs font-black text-[#06B6D4]">Head of Operations</p>
                  <p className="mt-4 text-sm font-semibold leading-6 text-slate-400">
                    Ensuring seamless delivery and fostering long-term partnerships with enterprise clients.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-[#7C3AED] px-6 py-16 text-center">
          <h2 className="mx-auto max-w-[660px] text-[44px] font-black leading-tight text-white">
            Ready to build your next breakthrough?
          </h2>
          <p className="mx-auto mt-6 max-w-[700px] text-base font-semibold leading-7 text-violet-100">
            Let's discuss how our precision engineering approach can transform your business goals
            into reality.
          </p>
          <div className="mt-10 flex justify-center">
            <a
              href="/request-quote"
              className="rounded-lg bg-[#06B6D4] px-12 py-4 text-sm font-black text-slate-950 transition hover:bg-cyan-300"
            >
              Schedule a Consultation
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
