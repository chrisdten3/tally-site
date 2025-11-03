import React from "react";
import { motion } from "framer-motion";
import {
  Check,
  CreditCard,
  BellRing,
  Users,
  BarChart3,
  Wallet,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Database,
  Github,
} from "lucide-react";

// Single-file landing page for Tally
// Drop this into a Next.js / React route and style with TailwindCSS.
// No external design system required; icons via lucide-react, animations via framer-motion.

const features = [
  {
    icon: <CreditCard className="h-6 w-6" aria-hidden />,
    title: "Dues tracking, done right",
    desc: "Know exactly who’s paid, who’s pending, and who needs a nudge—across every club you run.",
  },
  {
    icon: <BellRing className="h-6 w-6" aria-hidden />,
    title: "Auto‑notifications",
    desc: "Smart reminders via email or text that follow up so you don’t have to.",
  },
  {
    icon: <Users className="h-6 w-6" aria-hidden />,
    title: "Roster & attendance",
    desc: "Sync attendance sheets to see engagement and eligibility at a glance.",
  },
  {
    icon: <Wallet className="h-6 w-6" aria-hidden />,
    title: "Payouts & treasury",
    desc: "Track balances per club and move funds to where they need to be, fast.",
  },
  {
    icon: <BarChart3 className="h-6 w-6" aria-hidden />,
    title: "Analytics that matter",
    desc: "Cohort‑level insights on payments, churn risk, and activity trends.",
  },
  {
    icon: <Database className="h-6 w-6" aria-hidden />,
    title: "CRM integrations",
    desc: "Plug into Sheets and popular CRMs so your board stays perfectly in sync.",
  },
];

const tiers = [
  {
    name: "Starter",
    price: "$0",
    blurb: "For new clubs and pilot orgs",
    points: [
      "Up to 100 members",
      "Dues tracking",
      "Basic reminders",
      "CSV/Sheets import",
    ],
    cta: "Get started",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$49/mo",
    blurb: "For active orgs with multiple events",
    points: [
      "Unlimited members",
      "Automated notifications",
      "Attendance sync",
      "Dashboards & exports",
    ],
    cta: "Start free trial",
    highlight: true,
  },
  {
    name: "Campus / Enterprise",
    price: "Custom",
    blurb: "For multi‑club networks and universities",
    points: [
      "SSO & roles",
      "Department‑level reporting",
      "Priority support",
      "Custom integrations",
    ],
    cta: "Talk to us",
    highlight: false,
  },
];

const Section = ({ children, className = "" }) => (
  <section className={`mx-auto w-full max-w-7xl px-6 md:px-10 ${className}`}>{children}</section>
);

export default function TallyLandingPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
        <Section className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="/tally-logo-transparent.png" // <-- update this to your logo file name in /public
              alt="Tally Logo"
              className="h-24 w-24 rounded-xl"
            />
          </div>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#features" className="opacity-80 hover:opacity-100">Features</a>
            <a href="#how" className="opacity-80 hover:opacity-100">How it works</a>
            <a href="#faq" className="opacity-80 hover:opacity-100">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-3 py-1.5 text-sm font-medium text-neutral-900 hover:bg-neutral-200"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Section>
      </header>

      {/* Hero */}
      <Section className="relative py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-[-150px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-br from-fuchsia-500/20 via-violet-500/10 to-indigo-500/10 blur-3xl" />
        </div>
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl"
            >
              The simplest way to run <span className="bg-gradient-to-r from-[#4737FC] to-indigo-400 bg-clip-text text-transparent">club finances</span>.
            </motion.h1>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-neutral-300 md:text-lg">
              Tally keeps dues, attendance, payouts, and communications in one place—so student leaders spend less time chasing payments and more time building community.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                id="get-started"
                href="https://www.gettally.dev"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 font-medium text-neutral-900 hover:bg-neutral-200"
              >
                Start now →
              </a>

            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-neutral-400">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> PCI‑aware best practices</div>
              <div className="hidden items-center gap-2 sm:flex"><Github className="h-4 w-4" /> Built by engineers, for orgs</div>
            </div>
          </div>

          {/* Mock screenshot */}
<motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative mx-auto w-[340px] rounded-[48px] border-8 border-neutral-800 bg-black shadow-2xl ring-1 ring-white/10">
              <div className="absolute left-1/2 top-0 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-neutral-800" />
              <div className="overflow-hidden rounded-[40px] bg-neutral-950">
                <div className="px-6 pb-8 pt-14">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600/20 text-xl font-bold text-indigo-400">
                      JD
                    </div>
                    <div>
                      <div className="font-semibold text-white">John Doe</div>
                      <div className="text-sm text-neutral-400">johndoe@gmail.com</div>
                    </div>
                  </div>
                  
                  <div className="mb-4 rounded-xl border border-emerald-500/20 bg-gradient-to-br from-emerald-900/30 to-neutral-900/60 p-3">
                    <div className="mb-2 flex items-center justify-between">
                      <div className="text-sm font-semibold text-white">Club Balance</div>
                      <div className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
                        +12% this month
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-white">$847.50</div>
                    <div className="mt-2 flex gap-2">
                      <div className="flex-1 rounded-lg bg-white/5 p-2">
                        <div className="text-[10px] text-neutral-400">Collected</div>
                        <div className="text-xs font-semibold text-white">$1,240</div>
                      </div>
                      <div className="flex-1 rounded-lg bg-white/5 p-2">
                        <div className="text-[10px] text-neutral-400">Spent</div>
                        <div className="text-xs font-semibold text-white">$392.50</div>
                      </div>
                    </div>
                  </div>


                  <div className="mt-6 rounded-2xl border border-white/10 bg-neutral-900/60 p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="text-base font-semibold text-white">Recent Activity</div>
                      <button className="text-sm text-indigo-400">View All</button>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-600/20">
                          <svg className="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm text-white truncate">cdt50@georgetown.edu paid</div>
                          <div className="text-xs text-neutral-400">Test Club · Just now</div>
                        </div>
                        <div className="text-sm font-semibold text-green-400">+$1.00</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600/20">
                          <svg className="h-5 w-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm text-white truncate">cdt50@georgetown.edu payout</div>
                          <div className="text-xs text-neutral-400">MSBTC · 2 days ago</div>
                        </div>
                        <div className="text-sm font-semibold text-red-400">-$5.00</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/5 bg-neutral-900/40 px-6 py-4 backdrop-blur">
                  <div className="flex items-center justify-between">
                    <button className="flex flex-col items-center gap-1 text-indigo-400">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <span className="text-xs font-medium">Home</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 text-neutral-500">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span className="text-xs font-medium">Clubs</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 text-neutral-500">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                      <span className="text-xs font-medium">Payout</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 text-neutral-500">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-xs font-medium">Events</span>
                    </button>
                    <button className="flex flex-col items-center gap-1 text-neutral-500">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-xs font-medium">Settings</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Logos */}
<Section className="py-14">
  <p className="text-center text-sm uppercase tracking-[0.15em] text-neutral-400">
    Trusted by clubs, teams, and student orgs
  </p>

  <div className="mx-auto mt-10 flex max-w-6xl flex-wrap items-center justify-center gap-x-16 gap-y-10 opacity-90">
    {["georgetownventures", "hoyalytics", "hoyadev"].map((name) => (
      <img
        key={name}
        src={`/club_logos/${name}.png`}
        alt={`${name} club logo`}
        className="h-14 w-auto object-contain transition-transform duration-300 hover:scale-105"
      />
    ))}
  </div>
</Section>



      {/* Features */}
      <Section id="features" className="py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Everything a treasurer needs</h2>
          <p className="mt-3 text-neutral-300">Purpose‑built workflows that keep your books—and your members—in sync.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-white/10 bg-neutral-900/40 p-6 transition hover:bg-white/5">
              <div className="mb-4 inline-flex rounded-xl bg-white/10 p-3 text-white">{f.icon}</div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section id="how" className="py-20">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">From messy spreadsheets to clarity in minutes</h2>
            <ul className="mt-6 space-y-4 text-neutral-300">
              <li className="flex gap-3"><span className="mt-0.5">1.</span> Create your club.</li>
              <li className="flex gap-3"><span className="mt-0.5">2.</span> Set an event, and select who is responsible</li>
              <li className="flex gap-3"><span className="mt-0.5">3.</span> Members choose card, wallet, or bank.*</li>
              <li className="flex gap-3"><span className="mt-0.5">4.</span> Tally auto‑reconciles payments, attendance, and reminders.</li>
            </ul>
            <p className="mt-2 text-xs text-neutral-500">* Payment methods facilitated via Paypal Inc.</p>
          </div>
          <div className="relative rounded-3xl border border-white/10 bg-neutral-900 p-4">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { h: "Import members", p: "Map columns and validate emails automatically." },
                { h: "Smart reminders", p: "Gentle nudges that actually get paid." },
                { h: "Attendance sync", p: "Tie activity to eligibility and perks." },
                { h: "One source of truth", p: "Finance, roster, and CRM all aligned." },
              ].map((x) => (
                <div key={x.h} className="rounded-xl border border-white/10 bg-neutral-950 p-4">
                  <h4 className="text-sm font-medium">{x.h}</h4>
                  <p className="mt-1 text-sm text-neutral-400">{x.p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>



      {/* FAQ */}
      <Section id="faq" className="py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-semibold tracking-tight md:text-4xl">FAQ</h2>
          <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 bg-neutral-900/40">
            {[
              {
                q: "Can members pay without creating an account?",
                a: "Yes. You can share a secure pay link. Members can optionally create an account to view history and receipts.",
              },
              {
                q: "Do you support multiple clubs per user?",
                a: "Absolutely. Tally was designed for leaders in multiple orgs with different roles in each.",
              },
              {
                q: "What integrations are available?",
                a: "Google Sheets, CSV import/export, and popular CRMs. Campus‑wide deployments get custom integrations.",
              },
              {
                q: "How hard is onboarding?",
                a: "Most orgs import a roster and start collecting in minutes. Our team can help migrate historical data.",
              },
            ].map((item) => (
              <details key={item.q} className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between text-base font-medium">
                  {item.q}
                  <span className="ml-4 text-neutral-400 transition group-open:rotate-90">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </summary>
                <p className="mt-3 text-sm text-neutral-300">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">
        <Section className="flex flex-col items-center justify-between gap-6 text-sm text-neutral-400 md:flex-row">
          <div className="flex items-center gap-2 text-neutral-300">
            <img
              src="/tally-icon.png" // <-- update this to your logo file name in /public
              alt="Tally Logo"
              className="h-12 w-12 rounded-xl"
            />
            <span>© {new Date().getFullYear()}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-neutral-200">Terms</a>
            <a href="#" className="hover:text-neutral-200">Privacy</a>
            <a href="#" className="hover:text-neutral-200">Contact</a>
          </div>
        </Section>
      </footer>
    </div>
  );
}
