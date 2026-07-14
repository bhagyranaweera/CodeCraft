import { useState } from "react";

const navItems = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Services", "/services"],
  ["Pricing", "/pricing"],
  ["Contact", "/contact"],
];

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#15111d]/95 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#/" className="flex items-center" aria-label="CodeCraft Solutions home">
          <img
            src="./Images/codecraft-logo.svg"
            alt="CodeCraft Solutions"
            className="h-12 w-40 object-contain object-left sm:w-48"
          />
        </a>

        <div className="hidden items-center gap-8 text-sm font-semibold text-slate-400 md:flex">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className={
                label === "Pricing"
                  ? "text-violet-400 underline decoration-violet-500 decoration-2 underline-offset-8 transition hover:text-white"
                  : "transition hover:text-white"
              }
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="#/request-quote"
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
    <footer className="border-t border-white/10 bg-[#19151e] px-6 py-16 sm:px-10">
      <div className="mx-auto grid max-w-[1560px] grid-cols-1 gap-12 text-sm text-slate-300 md:grid-cols-[320px_180px_220px_160px] md:justify-between md:gap-16">
        <div className="md:pl-2">
          <img
            src="./Images/codecraft-logo.svg"
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
            <li><a className="transition hover:text-white" href="#/">Home</a></li>
            <li><a className="transition hover:text-white" href="#/about">About Us</a></li>
            <li><a className="transition hover:text-white" href="#/services">Services</a></li>
            <li><a className="font-black text-violet-300" href="#/pricing">Pricing</a></li>
            <li><a className="transition hover:text-white" href="#/request-quote">Request Quote</a></li>
          </ul>
        </div>

        <div className="pt-1">
          <h3 className="text-lg font-black text-white">Resources</h3>
          <ul className="mt-8 space-y-5 text-base text-slate-300">
            <li><a className="transition hover:text-white" href="#/contact">Contact</a></li>
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

function CheckoutStep({ number, label, active, muted }) {
  return (
    <div className="flex min-w-0 flex-1 items-center gap-6">
      <div className="text-center">
        <div
          className={`mx-auto flex h-9 w-9 items-center justify-center rounded-xl border text-lg font-black ${
            active
              ? "border-violet-300 bg-violet-300 text-slate-950"
              : muted
                ? "border-white/18 bg-transparent text-slate-500"
                : "border-violet-300 bg-violet-300 text-slate-950"
          }`}
        >
          {number}
        </div>
        <p className="mt-3 text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">{label}</p>
      </div>
      {number !== "3" && <div className="h-px flex-1 bg-white/14" />}
    </div>
  );
}

function Field() {
  return null;
}

function CheckItem({ children }) {
  return (
    <li className="flex items-center gap-3 text-base font-semibold text-slate-400">
      <span className="flex h-4 w-4 items-center justify-center rounded-full border border-violet-300 text-[10px] text-violet-300">
        ✓
      </span>
      {children}
    </li>
  );
}

export default function Pricing() {
  const [showPaypalDemo, setShowPaypalDemo] = useState(false);

  return (
    <div className="min-h-screen bg-[#111014] text-slate-100 selection:bg-violet-500/40">
      <Header />

      <main className="px-5 pb-20 pt-36 sm:px-8">
        <section className="mx-auto max-w-[1060px]">
          <div className="mb-14 grid items-center gap-6 md:grid-cols-[280px_1fr]">
            <div>
              <a
                href="#/"
                className="inline-flex items-center gap-4 text-2xl font-black text-violet-200 transition hover:text-white"
              >
                <span className="text-3xl">←</span>
                Checkout
              </a>
              <div className="mt-6 h-px bg-white/18" />
            </div>
          </div>

          <div className="mx-auto mb-8 flex max-w-[900px] items-center gap-6">
            <CheckoutStep number="1" label="Plan" />
            <CheckoutStep number="2" label="Payment" active />
            <CheckoutStep number="3" label="Ready" muted />
          </div>

          <section className="mx-auto max-w-[840px] rounded-lg border border-white/12 bg-[#191820] p-7 shadow-xl">
            <h1 className="flex items-center gap-3 text-3xl font-bold text-slate-200">
              <span className="text-[#06B6D4]">▭</span>
              PayPal Demo Payment
            </h1>

            <div className="mt-8 grid gap-6">
              <div className="rounded-md border border-[#06B6D4]/40 bg-[#100f14] p-6">
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-[#06B6D4]">
                      Sandbox Checkout
                    </p>
                    <h2 className="mt-3 text-3xl font-black text-white">
                      PayPal <span className="text-[#06B6D4]">Demo</span>
                    </h2>
                    <p className="mt-3 max-w-[520px] text-sm font-medium leading-6 text-slate-400">
                      Use this demo PayPal payment option for the class assignment. It simulates a
                      sandbox checkout and does not process real money.
                    </p>
                  </div>

                  <div className="rounded-md bg-white px-5 py-4 text-center shadow-[0_0_22px_rgba(6,182,212,0.18)]">
                    <span className="text-2xl font-black text-[#003087]">Pay</span>
                    <span className="text-2xl font-black text-[#009CDE]">Pal</span>
                    <p className="mt-1 text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">
                      Sandbox
                    </p>
                  </div>
                </div>

                <div className="mt-7 grid gap-4 md:grid-cols-3">
                  <div className="rounded-sm border border-white/10 bg-white/5 p-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Demo Account</p>
                    <p className="mt-2 text-sm font-semibold text-slate-300">buyer-demo@codecraft.test</p>
                  </div>
                  <div className="rounded-sm border border-white/10 bg-white/5 p-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Payment Type</p>
                    <p className="mt-2 text-sm font-semibold text-slate-300">PayPal Sandbox</p>
                  </div>
                  <div className="rounded-sm border border-white/10 bg-white/5 p-4">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Amount</p>
                    <p className="mt-2 font-mono text-sm font-semibold text-slate-300">$12,000.00</p>
                  </div>
                </div>
              </div>

              <Field label="Cardholder Name">
                <input
                  className="h-14 w-full rounded-sm border border-white/18 bg-[#100f14] px-5 text-lg text-slate-300 outline-none placeholder:text-slate-600 focus:border-violet-400"
                  placeholder="Johnathan Doe"
                />
              </Field>

              <Field label="Card Number">
                <div className="relative">
                  <input
                    className="h-14 w-full rounded-sm border border-white/18 bg-[#100f14] px-5 pr-12 font-mono text-lg tracking-widest text-slate-300 outline-none placeholder:text-slate-600 focus:border-violet-400"
                    placeholder="0000 0000 0000 0000"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-slate-400">▰</span>
                </div>
              </Field>

              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Expiry Date">
                  <input
                    className="h-14 w-full rounded-sm border border-white/18 bg-[#100f14] px-5 font-mono text-lg tracking-widest text-slate-300 outline-none placeholder:text-slate-600 focus:border-violet-400"
                    placeholder="MM / YY"
                  />
                </Field>
                <Field label="CVV">
                  <div className="relative">
                    <input
                      className="h-14 w-full rounded-sm border border-white/18 bg-[#100f14] px-5 pr-12 font-mono text-lg tracking-widest text-slate-300 outline-none placeholder:text-slate-600 focus:border-violet-400"
                      placeholder="***"
                    />
                    <span className="absolute right-4 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-slate-400 text-sm font-black text-slate-300">
                      ?
                    </span>
                  </div>
                </Field>
              </div>

              <button
                className="mt-3 rounded-sm bg-[#ffc439] py-4 text-lg font-black text-[#003087] transition hover:bg-[#f4bb2f]"
                type="button"
                onClick={() => setShowPaypalDemo(true)}
              >
                Pay with PayPal Demo - $12,000.00
              </button>
            </div>
          </section>

          <div className="mx-auto mt-8 flex max-w-[420px] flex-wrap justify-center gap-x-10 gap-y-6 text-[11px] font-black uppercase tracking-[0.18em] text-slate-500">
            <span className="flex items-center gap-3"><span className="text-xl text-[#06B6D4]">♢</span>SSL Secure</span>
            <span className="flex items-center gap-3"><span className="text-xl text-[#06B6D4]">⬟</span>PCI Compliant</span>
            <span className="flex items-center gap-3"><span className="text-xl text-[#06B6D4]">⬡</span>256-bit Encryption</span>
          </div>

          <section className="mx-auto mt-12 max-w-[840px] rounded-lg border border-white/10 bg-[#191820] p-7 shadow-xl">
            <p className="border-b border-white/18 pb-4 text-xs font-black uppercase tracking-[0.22em] text-violet-300">
              Order Summary
            </p>

            <div className="mt-8 flex items-start justify-between gap-8">
              <div>
                <h2 className="text-xl font-black text-slate-200">Advanced Plan</h2>
                <p className="mt-1 max-w-[230px] text-lg font-semibold leading-6 text-slate-400">
                  Scale infrastructure & architecture
                </p>
                <ul className="mt-7 space-y-4">
                  <CheckItem>24/7 Priority Support</CheckItem>
                  <CheckItem>Custom API Integrations</CheckItem>
                  <CheckItem>Cloud Infrastructure Audit</CheckItem>
                </ul>
              </div>
              <p className="font-mono text-xl font-black text-slate-300">$12,000.00</p>
            </div>

            <div className="mt-8 border-y border-white/18 py-5">
              <div className="flex justify-between text-base font-semibold text-slate-400">
                <span>Subtotal</span>
                <span className="font-mono">$12,000.00</span>
              </div>
              <div className="mt-4 flex justify-between text-base font-semibold text-slate-400">
                <span>Processing Fee</span>
                <span className="font-mono">$0.00</span>
              </div>
            </div>

            <div className="mt-5 flex justify-between text-2xl font-black">
              <span className="text-violet-300">Total Due</span>
              <span className="font-mono text-slate-100">$12,000.00</span>
            </div>

            <div className="mt-8 rounded-sm border border-dashed border-white/18 px-5 py-5">
              <p className="max-w-[420px] text-sm font-semibold leading-6 text-slate-400">
                By proceeding, you agree to our <span className="text-violet-300">Subscription Terms</span>
                and authorize recurrent monthly billing until cancelled.
              </p>
            </div>
          </section>

          <section className="mx-auto mt-12 grid max-w-[840px] gap-10 border-t border-white/12 bg-[#0d0c10] p-7 sm:grid-cols-[1fr_0.8fr_0.8fr]">
            <div>
              <h2 className="text-3xl font-black text-violet-300">CodeCraft Solutions</h2>
              <p className="mt-6 max-w-[350px] text-lg font-semibold leading-7 text-slate-400">
                Precision engineering for the modern enterprise. We build the infrastructure that
                scales the future.
              </p>
            </div>
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-violet-300">Product</h3>
              <ul className="mt-5 space-y-4 text-lg font-semibold text-slate-400">
                <li>Architecture Audit</li>
                <li>Open Source</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-violet-300">Legal</h3>
              <ul className="mt-5 space-y-4 text-lg font-semibold text-slate-400">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </section>
        </section>
      </main>

      {showPaypalDemo && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/75 px-5 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-xl border border-[#06B6D4]/35 bg-[#15182b] p-7 text-center shadow-[0_0_55px_rgba(6,182,212,0.2)]">
            <div className="mx-auto rounded-md bg-white px-6 py-4">
              <span className="text-3xl font-black text-[#003087]">Pay</span>
              <span className="text-3xl font-black text-[#009CDE]">Pal</span>
            </div>
            <h2 className="mt-6 text-2xl font-black text-white">Demo Payment Successful</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Sandbox payment completed for the Advanced Plan. This is a demo for the class assignment and no real payment was processed.
            </p>
            <button
              className="mt-6 w-full rounded-lg bg-[#7C3AED] py-3 text-sm font-black text-white transition hover:bg-violet-500"
              type="button"
              onClick={() => setShowPaypalDemo(false)}
            >
              Got It
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
