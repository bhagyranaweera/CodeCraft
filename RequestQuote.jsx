import { useState } from "react";

import { postQuoteRequest } from "./src/api";

const expertise = [
  ["Custom Software Development", "Bespoke solutions for complex systems."],
  ["Web Development", "Creating responsive and modern business websites tailored to client requirements."],
  ["Mobile App Development", "Building cross-platform mobile applications with seamless performance and user-friendly interfaces."],
  ["Legacy Modernization", "Refactoring core systems for the future."],
];

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#15111d]/95 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="/" className="flex items-center" aria-label="CodeCraft Solutions home">
          <img
            src="/Images/codecraft-logo.svg"
            alt="CodeCraft Solutions"
            className="h-12 w-40 object-contain object-left sm:w-48"
          />
        </a>
        <div className="hidden items-center gap-8 text-sm font-semibold text-slate-400 md:flex">
          <a href="/" className="transition hover:text-white">Home</a>
          <a href="/about" className="transition hover:text-white">About Us</a>
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

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="text-[9px] font-black uppercase tracking-[0.22em] text-slate-400">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
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
            <li><a href="/services" className="transition hover:text-white">Services</a></li>
            <li><a href="/pricing" className="transition hover:text-white">Pricing</a></li>
            <li><a href="/request-quote" className="font-black text-violet-300">Request Quote</a></li>
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
            <a href="mailto:codecraftsolution4@gmail.com" aria-label="Email" className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/8 text-slate-300 transition hover:bg-white/14">
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

export default function RequestQuote() {
  const [showRequestPopup, setShowRequestPopup] = useState(false);
  const [requestPopupTitle, setRequestPopupTitle] = useState("Request Submitted");
  const [requestPopupText, setRequestPopupText] = useState(
    "Thank you for sharing your project details. Our engineering team will review your request and contact you soon.",
  );
  const [isSubmittingQuote, setIsSubmittingQuote] = useState(false);

  const handleQuoteSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmittingQuote(true);

    try {
      await postQuoteRequest({
        full_name: formData.get("full_name"),
        company_email: formData.get("company_email"),
        company_name: formData.get("company_name"),
        job_title: formData.get("job_title"),
        project_summary: formData.get("project_summary"),
        budget_range: formData.get("budget_range"),
        timeline_goal: formData.get("timeline_goal"),
        expertise: formData.getAll("expertise"),
      });
      form.reset();
      setRequestPopupTitle("Request Submitted");
      setRequestPopupText("Thank you for sharing your project details. Your request was saved to the backend database.");
    } catch (error) {
      setRequestPopupTitle("Request Not Submitted");
      setRequestPopupText(
        error.message === "Failed to fetch"
          ? "The backend server is not reachable. Start FastAPI with uvicorn app.main:app --reload and try again."
          : error.message,
      );
    } finally {
      setIsSubmittingQuote(false);
      setShowRequestPopup(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#100c16] text-slate-100 selection:bg-violet-500/40">
      <Header />

      <main className="px-6 pb-12 pt-32">
        <section className="mx-auto max-w-[1120px]">
          <h1 className="text-4xl font-black leading-tight text-violet-100 md:text-5xl">
            Engineer Your Next <span className="text-blue-500">Success</span>
          </h1>
          <p className="mt-5 max-w-[720px] text-sm font-medium leading-6 text-slate-400">
            We don't just build software; we craft precision tools designed for enterprise scale
            and technical excellence. Tell us about your vision.
          </p>

          <div className="mt-9 grid gap-8 lg:grid-cols-[1fr_0.48fr]">
            <form className="grid gap-4" onSubmit={handleQuoteSubmit}>
              <section className="rounded-md border border-white/10 bg-[#211c26] p-5">
                <h2 className="flex items-center gap-3 text-xl font-semibold text-slate-200">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#7C3AED] text-sm font-black text-white">1</span>
                  Select Expertise
                </h2>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {expertise.map(([title, copy]) => (
                    <label key={title} className="flex cursor-pointer items-start justify-between gap-4 border border-white/5 bg-white/3 p-4 transition hover:border-violet-500/60">
                      <span>
                        <span className="block text-sm font-semibold text-white">{title}</span>
                        <span className="mt-1 block text-xs leading-5 text-slate-400">{copy}</span>
                      </span>
                      <input type="checkbox" name="expertise" value={title} className="mt-1 accent-violet-500" />
                    </label>
                  ))}
                </div>
              </section>

              <section className="rounded-md border border-white/10 bg-[#211c26] p-5">
                <h2 className="flex items-center gap-3 text-xl font-semibold text-slate-200">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#7C3AED] text-sm font-black text-white">2</span>
                  Project Definition
                </h2>
                <div className="mt-5">
                  <Field label="Project Summary">
                    <textarea
                      name="project_summary"
                      className="h-[112px] w-full resize-none border border-white/5 bg-white/7 px-4 py-4 text-sm text-slate-200 outline-none placeholder:text-slate-500 focus:border-violet-500"
                      placeholder="Describe your objectives, tech stack preferences, and current pain points..."
                      required
                    />
                  </Field>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <Field label="Budget Range">
                    <select name="budget_range" className="h-12 w-full border border-white/5 bg-white/7 px-4 text-sm text-slate-300 outline-none focus:border-violet-500">
                      <option>$10k - $25k</option>
                      <option>$25k - $75k</option>
                      <option>$75k+</option>
                    </select>
                  </Field>
                  <Field label="Timeline Goal">
                    <select name="timeline_goal" className="h-12 w-full border border-white/5 bg-white/7 px-4 text-sm text-slate-300 outline-none focus:border-violet-500">
                      <option>Within 1 Month</option>
                      <option>1-3 Months</option>
                      <option>Flexible</option>
                    </select>
                  </Field>
                </div>
              </section>

              <section className="rounded-md border border-white/10 bg-[#211c26] p-5">
                <h2 className="flex items-center gap-3 text-xl font-semibold text-slate-200">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#7C3AED] text-sm font-black text-white">3</span>
                  Contact Information
                </h2>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <Field label="Full Name">
                    <input name="full_name" className="h-12 w-full border border-white/5 bg-white/7 px-4 text-sm text-slate-200 outline-none placeholder:text-slate-500 focus:border-violet-500" placeholder="John Doe" required />
                  </Field>
                  <Field label="Company Email">
                    <input name="company_email" type="email" className="h-12 w-full border border-white/5 bg-white/7 px-4 text-sm text-slate-200 outline-none placeholder:text-slate-500 focus:border-violet-500" placeholder="john@company.com" required />
                  </Field>
                  <Field label="Company Name">
                    <input name="company_name" className="h-12 w-full border border-white/5 bg-white/7 px-4 text-sm text-slate-200 outline-none placeholder:text-slate-500 focus:border-violet-500" placeholder="Acme Inc." />
                  </Field>
                  <Field label="Job Title">
                    <input name="job_title" className="h-12 w-full border border-white/5 bg-white/7 px-4 text-sm text-slate-200 outline-none placeholder:text-slate-500 focus:border-violet-500" placeholder="CTO / Product Owner" />
                  </Field>
                </div>
              </section>

              <button className="rounded-sm bg-violet-200 py-4 text-base font-medium text-violet-950 transition hover:bg-white" type="submit" disabled={isSubmittingQuote}>
                {isSubmittingQuote ? "Submitting..." : "Submit Request ->"}
              </button>
            </form>

            <aside className="rounded-md border border-white/10 bg-[#342d3b] p-6">
              <h2 className="text-xl font-medium text-violet-100">Why CodeCraft?</h2>
              <div className="mt-6 space-y-5">
                {[
                  ["Technical Precision", "Every module is unit-tested and optimized for peak performance."],
                  ["Elite Talent", "Work directly with senior engineers, not account managers."],
                  ["Agile Execution", "Bi-weekly releases and transparent roadmap tracking."],
                ].map(([title, copy]) => (
                  <div key={title} className="flex gap-3">
                    <span className="mt-1 text-[#06B6D4]">◎</span>
                    <div>
                      <h3 className="font-semibold text-white">{title}</h3>
                      <p className="mt-1 text-xs leading-5 text-slate-300">{copy}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-9 bg-[linear-gradient(90deg,rgba(15,23,42,0.5),rgba(15,23,42,0.05)),url('/Images/about-office-hero.png')] bg-cover bg-center p-6">
                <p className="mt-14 text-sm font-semibold leading-6 text-white">
                  "They solved architectural challenges our previous vendor couldn't touch."
                </p>
                <p className="mt-5 text-[9px] font-black uppercase tracking-[0.24em] text-slate-300">
                  Trusted by leaders at:
                </p>
                <div className="mt-4 flex gap-4 text-slate-400">
                  <span className="h-2 w-8 bg-slate-500/70" />
                  <span className="h-2 w-8 bg-slate-500/50" />
                  <span className="h-2 w-8 bg-slate-500/40" />
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>

      {showRequestPopup && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 px-5 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-md border border-violet-400/40 bg-[#211c26] p-7 text-center shadow-[0_0_45px_rgba(124,58,237,0.35)]">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#06B6D4] bg-[#06B6D4]/10 text-xl text-[#06B6D4]">
              ✓
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-violet-100">{requestPopupTitle}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              {requestPopupText}
            </p>
            <button
              className="mt-6 bg-violet-600 px-7 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-violet-500"
              type="button"
              onClick={() => setShowRequestPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
