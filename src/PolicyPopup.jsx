import { useEffect, useState } from "react";

const policyContent = {
  privacy: {
    title: "Privacy Policy",
    icon: (
      <svg className="h-8 w-8 text-violet-400" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3.5 5.5 6v5.2c0 4 2.6 7.6 6.5 9.3 3.9-1.7 6.5-5.3 6.5-9.3V6L12 3.5Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
        <path d="m8.8 12 2 2 4.3-4.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
      </svg>
    ),
    paragraphs: [
      "We keep your profile details, feedback, project documents, and payment records private. Your information is used only to support project delivery, communication, billing, and service improvement.",
      "We do not sell client information. Access is limited to authorized team members involved in your account.",
    ],
  },
  terms: {
    title: "Terms of Service",
    icon: (
      <svg className="h-8 w-8 text-violet-400" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M7 3.8h7l3 3V20H7V3.8Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
        <path d="M14 3.8V7h3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
        <path d="M9.5 11h5M9.5 14h5M9.5 17h3" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      </svg>
    ),
    paragraphs: [
      "By using this client app, you agree to keep project information accurate, use shared documents responsibly, and contact CodeCraft Solutions for billing, support, or delivery questions through approved channels.",
      "Payments, quotations, feedback, and project updates shown in the app are provided for client review and coordination.",
    ],
  },
};

export default function PolicyPopup() {
  const [activePolicy, setActivePolicy] = useState(null);
  const content = activePolicy ? policyContent[activePolicy] : null;

  useEffect(() => {
    const handleClick = (event) => {
      const trigger = event.target.closest("[data-policy-popup]");

      if (!trigger) {
        return;
      }

      event.preventDefault();
      setActivePolicy(trigger.dataset.policyPopup);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  if (!content) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center bg-[#111827]/85 px-5 backdrop-blur-sm">
      <section className="w-full max-w-[520px] rounded-2xl bg-[#15182b] p-8 shadow-[0_0_55px_rgba(15,23,42,0.65)] sm:p-10">
        <div className="flex items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            {content.icon}
            <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">{content.title}</h2>
          </div>

          <button
            type="button"
            className="text-4xl leading-none text-slate-300 transition hover:text-white"
            aria-label="Close popup"
            onClick={() => setActivePolicy(null)}
          >
            ×
          </button>
        </div>

        <div className="mt-8 space-y-6 text-xl font-normal leading-9 text-slate-300">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <button
          type="button"
          className="mt-9 w-full rounded-lg bg-[#7C3AED] py-4 text-xl font-black text-white transition hover:bg-violet-500"
          onClick={() => setActivePolicy(null)}
        >
          Got It
        </button>
      </section>
    </div>
  );
}
