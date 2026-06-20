import heroAsset from "./src/assets/hero.png";

const navLinks = ["Home", "About Us", "Services", "Pricing", "Contact"];

const services = [
  {
    icon: "cloud",
    title: "Web Development",
    description:
      "Creating responsive and modern business websites tailored to client requirements.",
    tags: ["React", "Tailwind CSS"],
  },
  {
    icon: "app",
    title: "Mobile App Development",
    description:
      "Building cross-platform mobile applications with seamless performance and user-friendly interfaces.",
    tags: ["React", "Expo Go"],
  },
  {
    icon: "shield",
    title: "Software Maintenance & Support",
    description:
      "Providing system updates, bug fixes, technical support, and ongoing maintenance services.",
    tags: ["Maintenance", "Support"],
  },
  {
    icon: "data",
    title: "Custom Software Development",
    description:
      "Developing custom software solutions that improve business processes and productivity.",
    tags: ["FastAPI", "PostgreSQL"],
  },
];

function Icon({ name }) {
  const common = "h-5 w-5";

  if (name === "cloud") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M7.4 18.5h9.7a4.1 4.1 0 0 0 .5-8.2 6 6 0 0 0-11.4-1.7A5 5 0 0 0 7.4 18.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "app") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect
          x="4"
          y="5"
          width="16"
          height="14"
          rx="2.5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M8 9h8M8 13h4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (name === "shield") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 20s7-3.3 7-9V5.8L12 3 5 5.8V11c0 5.7 7 9 7 9Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M9.4 11.8 11 13.4l3.8-4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <ellipse cx="12" cy="6" rx="7" ry="3" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0c16] text-slate-100 selection:bg-violet-500/40">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#15111d]/95 backdrop-blur">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#home" className="flex items-center" aria-label="CodeCraft Solutions home">
            <img
              src="/Images/codecraft-logo.svg"
              alt="CodeCraft Solutions"
              className="h-12 w-40 object-contain object-left sm:w-48"
            />
          </a>

          <div className="hidden items-center gap-8 text-sm font-semibold text-slate-400 md:flex">
            {navLinks.map((link) => (
              <a
                key={link}
                href={
                  link === "Home"
                    ? "/"
                    : link === "About Us"
                      ? "/about"
                      : link === "Contact"
                        ? "/contact"
                        : link === "Pricing"
                          ? "/pricing"
                          : "/services"
                }
                className={
                  link === "Home"
                    ? "text-violet-400 underline decoration-violet-500 decoration-2 underline-offset-8 transition hover:text-white"
                    : "transition hover:text-white"
                }
              >
                {link}
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

      <main>
        <section
          id="home"
          className="relative flex min-h-[920px] items-center overflow-hidden border-b border-white/10 pt-20 lg:min-h-screen"
        >
          <div className="server-room" aria-hidden="true" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,13,31,0.96)_0%,rgba(8,13,31,0.82)_38%,rgba(8,13,31,0.62)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(14,165,233,0.16),transparent_36%),linear-gradient(180deg,rgba(8,13,31,0.22),#08101f_98%)]" />
          <img
            src={heroAsset}
            alt=""
            className="pointer-events-none absolute right-[8%] top-[18%] hidden w-56 opacity-25 drop-shadow-[0_0_55px_rgba(124,58,237,0.55)] lg:block"
          />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-32 pt-44 sm:px-8 lg:pt-64">
            <div className="max-w-2xl">
              <h1 className="max-w-[680px] text-5xl font-black leading-[0.98] tracking-normal text-white sm:text-6xl lg:text-7xl">
                Precision Engineering for{" "}
                <span className="block text-violet-500">Software Excellence</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base font-medium leading-7 text-slate-400">
                We transform complex challenges into scalable, high-performance digital solutions
                through meticulous architectural design and expert consulting.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#services"
                  className="rounded-md bg-violet-600 px-6 py-3 text-sm font-bold text-white shadow-[0_10px_30px_rgba(124,58,237,0.45)] transition hover:-translate-y-0.5 hover:bg-violet-500"
                >
                  Explore Services -&gt;
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about-us" className="bg-[#0b0811] py-12 sm:py-16">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.25fr_0.9fr]">
            <div className="foundation-image min-h-[300px] overflow-hidden rounded-md border border-white/10 shadow-2xl" />
            <div className="max-w-xl lg:pl-2">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-500">Our Foundation</p>
              <h2 className="mt-4 text-lg font-bold text-white">Who We Are</h2>
              <p className="mt-6 text-sm leading-7 text-slate-400">
                CodeCraft Solutions was founded on the principle that software should be as
                reliable as physical infrastructure. Our team of elite architects and developers
                brings decades of experience from enterprise and startup ecosystems.
              </p>
              <p className="mt-5 text-sm leading-7 text-slate-400">
                We don't just write code; we engineer value. Our methodology focuses on long-term
                maintainability, security, and strategic alignment with your business goals.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="border-y border-white/10 bg-[#0d1628] py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-500">
                  Core Capabilities
                </p>
                <h2 className="mt-4 text-lg font-bold text-white">Our Expertise</h2>
              </div>
              <a href="#services" className="text-sm font-bold text-cyan-400 transition hover:text-cyan-300">
                View All Disciplines -&gt;
              </a>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="rounded-md border border-white/10 bg-[#211b29] p-6 shadow-[0_18px_46px_rgba(0,0,0,0.22)] transition hover:-translate-y-1 hover:border-violet-500/60"
                >
                  <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-md bg-violet-600/18 text-cyan-400 ring-1 ring-violet-500/25">
                    <Icon name={service.icon} />
                  </div>
                  <h3 className="text-base font-bold text-slate-200">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{service.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-sm bg-cyan-500/12 px-2 py-1 text-[11px] font-black text-cyan-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0d1628] py-11 text-center sm:py-12">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <div className="text-[52px] font-black leading-[0.7] text-cyan-400">''</div>
            <blockquote className="mx-auto mt-5 max-w-[860px] text-base font-medium leading-7 text-slate-300">
              "CodeCraft didn't just build our app; they rebuilt our entire engineering culture.
              Their technical precision is unmatched in the industry."
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-5">
              <div className="h-[58px] w-[58px] overflow-hidden rounded-lg border-2 border-violet-500 bg-slate-900 p-1 shadow-[0_0_22px_rgba(124,58,237,0.62)]">
                <img
                  src="/Images/person-icon.png"
                  alt="Marcus Thorne"
                  className="h-full w-full rounded-md object-cover"
                />
              </div>
              <div className="text-left">
                <p className="text-base font-black leading-tight text-white">Marcus Thorne</p>
                <p className="mt-1 text-sm font-bold leading-tight text-cyan-500">CTO, NexaCore Systems</p>
              </div>
            </div>
          </div>
        </section>

        <section id="request-quote" className="border-y border-white/10 bg-[#0d1628] px-5 py-16 sm:px-8">
          <div className="cta-panel mx-auto max-w-7xl rounded-md border border-white/10 px-6 py-12 text-center sm:px-10">
            <p className="text-sm font-bold text-slate-300">
              Ready to Engineer the <span className="text-violet-500">Future</span>
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400">
              Let's discuss how our precision engineering approach can solve your most complex
              software challenges.
            </p>
            <a
              href="/request-quote"
              className="mt-8 inline-flex rounded-md bg-violet-600 px-9 py-4 text-sm font-black text-white shadow-[0_13px_34px_rgba(124,58,237,0.44)] transition hover:-translate-y-0.5 hover:bg-violet-500"
            >
              Request a Quote
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#19151e] px-6 py-16 sm:px-10">
        <div className="mx-auto grid max-w-[1560px] grid-cols-1 gap-12 text-sm text-slate-300 md:grid-cols-[320px_180px_220px_160px] md:justify-between md:gap-16">
          <div className="md:pl-2">
            <img
              src="/Images/codecraft-logo.svg"
              alt="CodeCraft Solutions"
              className="h-[68px] w-[250px] object-contain object-left"
            />
            <p className="mt-11 max-w-[310px] text-base font-bold leading-8 text-slate-400">
              Precision Engineering for Software. Building the future of digital infrastructure
              since 2018.
            </p>
          </div>

          <div className="pt-1">
            <h3 className="text-lg font-black text-white">Company</h3>
            <ul className="mt-8 space-y-5 text-base text-slate-300">
              <li><a className="transition hover:text-white" href="/">Home</a></li>
              <li><a className="transition hover:text-white" href="/about">About Us</a></li>
              <li><a className="transition hover:text-white" href="/services">Services</a></li>
              <li><a className="transition hover:text-white" href="/pricing">Pricing</a></li>
              <li><a className="transition hover:text-white" href="/request-quote">Request Quote</a></li>
            </ul>
          </div>

          <div className="pt-1">
            <h3 className="text-lg font-black text-white">Resources</h3>
            <ul className="mt-8 space-y-5 text-base text-slate-300">
              <li><a className="transition hover:text-white" href="/contact">Contact</a></li>
              <li><a className="transition hover:text-white" href="#privacy" data-policy-popup="privacy">Privacy Policy</a></li>
              <li><a className="transition hover:text-white" href="#terms" data-policy-popup="terms">Terms of Service</a></li>
            </ul>
          </div>

          <div className="pt-1">
            <h3 className="text-lg font-black text-white">Connect</h3>
            <div className="mt-8 flex gap-4">
              <a
                href="https://wa.me/"
                aria-label="WhatsApp"
                className="flex h-12 w-12 items-center justify-center rounded-md bg-white/7 text-slate-300 transition hover:bg-white/12 hover:text-white"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M7.2 18.6 8 15.7a7 7 0 1 1 2.8 1.3l-3.6 1.6Z"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9.7 8.8c.2 3 1.8 4.6 4.6 5.4l1-1.1"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="mailto:codecraftsolution4@gmail.com"
                aria-label="Email"
                className="flex h-12 w-12 items-center justify-center rounded-md bg-white/7 text-slate-300 transition hover:bg-white/12 hover:text-white"
              >
                <span className="text-lg">@</span>
              </a>
              <a
                href="https://www.instagram.com/codecraftsolution4/?hl=en"
                aria-label="Instagram"
                className="flex h-12 w-12 items-center justify-center rounded-md bg-white/7 text-slate-300 transition hover:bg-white/12 hover:text-white"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="16.8" cy="7.2" r="1" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-14 max-w-[1560px] text-center text-xs tracking-[0.22em] text-slate-500">
          <span className="block font-normal uppercase">(c) 2024 CodeCraft Solutions. All rights reserved.</span>
          <span className="mt-2 block text-sm font-bold normal-case tracking-normal">
            This website is for a class assignment project and not for commercial purpose.
          </span>
        </p>
      </footer>
    </div>
  );
}
