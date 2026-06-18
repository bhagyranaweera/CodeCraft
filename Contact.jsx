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
          <a href="/about" className="transition hover:text-white">About Us</a>
          <a href="/#services" className="transition hover:text-white">Services</a>
          <a href="/pricing" className="transition hover:text-white">Pricing</a>
          <a
            href="/contact"
            className="text-violet-400 underline decoration-violet-500 decoration-2 underline-offset-8 transition hover:text-white"
          >
            Contact
          </a>
        </div>

        <a
          href="/contact"
          className="rounded-sm bg-violet-600 px-6 py-3 text-xs font-black uppercase tracking-[0.16em] text-white shadow-[0_0_26px_rgba(124,58,237,0.28)] transition hover:bg-violet-500"
        >
          Request Quote
        </a>
      </nav>
    </header>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#06B6D4]">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0b0811] px-6 py-9">
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
            <li><a href="/#services" className="transition hover:text-white">Services</a></li>
            <li><a href="/pricing" className="transition hover:text-white">Pricing</a></li>
            <li><a href="/contact" className="transition hover:text-white">Request Quote</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-black text-white">Resources</h3>
          <ul className="mt-5 space-y-3">
            <li><a href="/contact" className="font-black text-violet-300">Contact</a></li>
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
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/8 text-slate-300 transition hover:bg-white/14"
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
              href="mailto:engineering@codecraft.solutions"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/8 text-slate-300 transition hover:bg-white/14"
            >
              <span className="text-lg">@</span>
            </a>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-9 max-w-[1120px] text-center text-[9px] font-black uppercase tracking-[0.32em] text-slate-500">
        (c) 2024 CodeCraft Solutions. Precision Engineering for Software.
      </p>
    </footer>
  );
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#120e18] text-slate-100 selection:bg-violet-500/40">
      <Header />

      <main className="pt-20">
        <section className="px-6 pb-10 pt-12">
          <div className="mx-auto max-w-[1120px]">
            <h1 className="text-[40px] font-extrabold leading-tight text-violet-200 md:text-[44px]">
              Let's build with precision.
            </h1>
            <p className="mt-3 max-w-[700px] text-sm font-normal leading-6 text-slate-400">
              Whether you have a general inquiry or a complex engineering challenge, our team is
              ready to provide technical excellence and strategic consultation.
            </p>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1.25fr_0.88fr]">
              <form className="min-h-[830px] rounded-md border border-white/12 bg-[#211c26] p-6">
                <h2 className="text-2xl font-semibold text-slate-200">General Inquiry</h2>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  <Field label="Full Name">
                    <input
                      className="h-12 w-full border border-white/5 bg-white/10 px-4 text-sm font-normal text-slate-200 outline-none transition placeholder:text-slate-500 focus:border-violet-500"
                      placeholder="John Doe"
                    />
                  </Field>
                  <Field label="Email Address">
                    <input
                      className="h-12 w-full border border-white/5 bg-white/10 px-4 text-sm font-normal text-slate-200 outline-none transition placeholder:text-slate-500 focus:border-violet-500"
                      placeholder="john@company.com"
                      type="email"
                    />
                  </Field>
                </div>

                <div className="mt-4">
                  <Field label="Subject">
                    <select className="h-12 w-full border border-white/5 bg-white/10 px-4 text-sm font-normal text-slate-300 outline-none transition focus:border-violet-500">
                      <option>General Support</option>
                      <option>Project Consultation</option>
                      <option>Partnership</option>
                    </select>
                  </Field>
                </div>

                <div className="mt-4">
                  <Field label="Message">
                    <textarea
                      className="h-[132px] w-full resize-none border border-white/5 bg-white/10 px-4 py-4 text-sm font-normal text-slate-200 outline-none transition placeholder:text-slate-500 focus:border-violet-500"
                      placeholder="How can we help your business today?"
                    />
                  </Field>
                </div>

                <button
                  className="mt-4 bg-violet-200 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-violet-900 transition hover:bg-white"
                  type="button"
                >
                  Send Message &gt;
                </button>
              </form>

              <aside className="grid content-start gap-5">
                <div className="bg-[#7C3AED] p-6">
                  <h2 className="text-2xl font-normal text-white">Starting a project?</h2>
                  <p className="mt-4 text-sm font-normal leading-6 text-violet-100">
                    For specific technical project requirements and detailed estimations, use our
                    specialized request quote portal.
                  </p>
                  <a
                    href="/contact"
                    className="mt-6 inline-flex text-xs font-semibold uppercase tracking-[0.2em] text-[#06B6D4]"
                  >
                    Request Quote Portal -&gt;
                  </a>
                </div>

                <div className="border border-white/12 bg-[#211c26] p-6">
                  <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#06B6D4]">
                    Our Headquarters
                  </p>

                  <div className="mt-5 grid gap-5 text-sm">
                    <div className="flex gap-4">
                      <span className="text-violet-200">◆</span>
                      <div>
                        <h3 className="font-semibold text-white">Technological Hub East</h3>
                        <p className="mt-1 font-normal leading-5 text-slate-400">
                          128 Innovation Way, Suite 400<br />Palo Alto, CA 94304
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-violet-200">⌕</span>
                      <div>
                        <h3 className="font-semibold text-white">Call Us</h3>
                        <p className="mt-1 font-normal text-slate-400">+1 (650) 555-0198</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-violet-200">✉</span>
                      <div>
                        <h3 className="font-semibold text-white">Email Us</h3>
                        <p className="mt-1 font-normal text-slate-400">engineering@codecraft.solutions</p>
                      </div>
                    </div>
                  </div>
                </div>

                <iframe
                  title="CodeCraft Solutions headquarters map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-122.1537%2C37.4395%2C-122.1305%2C37.4538&layer=mapnik&marker=37.4466%2C-122.1422"
                  className="h-[368px] w-full border border-white/10 grayscale invert-[0.88] hue-rotate-[205deg] saturate-[0.55]"
                  loading="lazy"
                />
              </aside>
            </div>
          </div>
        </section>

        <section className="px-6 pb-10">
          <div className="mx-auto grid max-w-[1120px] gap-3 md:grid-cols-3">
            {[
              ["Fast Response", "We typically respond to all inquiries within 24 business hours."],
              ["Global Support", "Engineering teams operating across 3 continents for 24/7 availability."],
              ["Direct Access", "Speak directly to senior technical leads, not just account managers."],
            ].map(([title, text]) => (
              <article key={title} className="border border-white/10 bg-[#18131d] px-6 py-5 text-center">
                <div className="mx-auto mb-3 flex h-5 w-5 items-center justify-center rounded-full border border-[#06B6D4] text-xs font-semibold text-[#06B6D4]">
                  i
                </div>
                <h3 className="font-normal text-slate-200">{title}</h3>
                <p className="mt-2 text-xs font-normal leading-5 text-slate-400">{text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
