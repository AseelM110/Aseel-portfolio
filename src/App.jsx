import { useState } from "react";

/* ============ EDIT THIS BLOCK ONLY ============ */
const CONFIG = {
  email: "aseelmohamed.10632@gmail.com",
  phone: "01098184398",
  linkedin: "https://www.linkedin.com/in/aseel-mohamed-26290b36b/",
  github: "https://github.com/AseelM110",
  cv: "/Aseel-CV.pdf",         // path or URL to your CV file, e.g. "/Aseel-CV.pdf"
};

const PROJECTS = [
  { name: "CRM Customer Data ETL Pipeline", tag: "DEPI Graduation Project",
    desc: "An ETL pipeline for CRM customer data, built as the graduation project of the Microsoft DEPI Data Engineering track.",
    points: ["Data profiling and randomness analysis", "Data quality and validation", "Bad data analysis", "Identifying duplicate records, null values, invalid dates and inconsistent formats"],
    tech: ["ETL", "Data Quality", "Data Profiling"] },
  { name: "Marine AIS Big Data Analytics", tag: "Big Data",
    desc: "Processing and analyzing large-scale Automatic Identification System (AIS) vessel data to understand maritime traffic and vessel activity.",
    points: ["Spark SQL for data processing and analysis", "K-Means clustering with Spark MLlib"],
    tech: ["Apache Spark", "Spark SQL", "Spark MLlib", "Hadoop HDFS", "Apache Airflow", "Power BI", "Python", "Docker"] },
  { name: "Educational Platform System", tag: "Desktop Application",
    desc: "A desktop educational platform backed by a relational database.",
    points: [], tech: ["Java", "MySQL"] },
  { name: "Tic-Tac-Toe Game", tag: "AI",
    desc: "A Python XO game with an unbeatable computer player that uses the Minimax algorithm for decision-making.",
    points: [], tech: ["Python", "Minimax Algorithm"] },
  { name: "Data Cleaning & Analysis Projects", tag: "Data Analysis",
    desc: "Hands-on projects covering the full path from messy raw data to insights.",
    points: ["Data cleaning", "Data manipulation", "Exploratory data analysis"], tech: ["Python", "Pandas", "SQL"] },
];

const SKILLS = [
  { title: "Programming Languages", icon: "code", items: [["Python", "Advanced"], ["C++", "Advanced"], ["Java", "Intermediate"]] },
  { title: "Data Analysis & Processing", icon: "database", items: [["SQL", "Advanced"], ["Pandas", "Advanced"], ["NumPy", "Advanced"]] },
  { title: "Data Visualization", icon: "chart", items: [["Microsoft Power BI", "Intermediate"], ["Microsoft Excel", "Intermediate"]] },
  { title: "Big Data Technologies", icon: "layers", items: [["Apache Spark", ""], ["Hadoop", "Basic"]] },
  { title: "Other Technologies", icon: "cpu", items: [["MATLAB", "Currently learning"]] },
];

const CERTS = [
  { name: "AI & Data Science – Microsoft Data Engineer", by: "Digital Egypt Pioneers Program (DEPI)", note: "Certificate of Achievement. December 2025 to July 2026.", img: "/certs/depi.jpg", verify: "" },
  { name: "HCIA-Big Data V3.5 Course", by: "Huawei ICT Academy", note: "Certificate of Completion. Issued August 29, 2026.", img: "/certs/huawei.jpg", verify: "" },
  { name: "Data Analysis with Power BI", by: "Microsoft Egypt · MCIT", note: "Certificate of Completion. October 5–16, 2025.", img: "/certs/powerbi.jpg", verify: "" },
  { name: "Excel Skills for Business: Intermediate I", by: "Macquarie University · Coursera", note: "Course certificate. Issued November 1, 2026.", img: "/certs/excel.jpg", verify: "https://coursera.org/verify/W80BFG8EFHGU" },
  { name: "Introduction to Image Processing", by: "MathWorks · Coursera", note: "Course certificate. Issued October 23, 2026. First MATLAB course; the program continues.", img: "/certs/matlab.jpg", verify: "https://coursera.org/verify/KSLF486F6AXH" },
];

const LANGS = [["Arabic", "Native"], ["English", "Upper-Intermediate"], ["German", "A1"]];
const INTERESTS = ["Data Engineering Internships", "Artificial Intelligence Internships", "Junior Data Analyst Positions", "Junior Data Entry Positions"];
const NAV = ["About", "Education", "Skills", "Projects", "Certifications", "Contact"];
/* ============================================== */

const P = {
  mail: <><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></>,
  phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>,
  linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></>,
  github: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></>,
  pin: <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></>,
  download: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/></>,
  award: <><circle cx="12" cy="8" r="6"/><path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11"/></>,
  menu: <path d="M4 6h16M4 12h16M4 18h16"/>,
  x: <path d="M18 6 6 18M6 6l12 12"/>,
  code: <path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>,
  database: <><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12a9 3 0 0 0 18 0"/></>,
  chart: <path d="M12 20V10M18 20V4M6 20v-4"/>,
  layers: <><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></>,
  cpu: <><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9"/><path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2"/></>,
  cap: <><path d="M22 10 12 5 2 10l10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></>,
  globe: <><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>,
  briefcase: <><rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></>,
  check: <path d="M20 6 9 17l-5-5"/>,
};
const Icon = ({ n, s = 20, c = "" }) => (
  <svg aria-hidden="true" width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={c}>{P[n]}</svg>
);

const btn = "inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600";
const Section = ({ id, title, sub, children }) => (
  <section id={id} aria-labelledby={id + "-h"} className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
    <h2 id={id + "-h"} className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">{title}</h2>
    {sub && <p className="mt-2 max-w-2xl text-slate-600">{sub}</p>}
    <div className="mt-8">{children}</div>
  </section>
);

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur" style={{ paddingTop: "env(safe-area-inset-top,0px)" }}>
      <nav aria-label="Main" className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" className="font-extrabold text-navy">Aseel Abdelaziz</a>
        <ul className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
          {NAV.map((n) => <li key={n}><a className="transition hover:text-blue-700" href={"#" + n.toLowerCase()}>{n}</a></li>)}
        </ul>
        <button className="md:hidden rounded p-2 text-navy" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}><Icon n={open ? "x" : "menu"} /></button>
      </nav>
      {open && <ul className="border-t border-slate-200 bg-white px-5 py-2 md:hidden">
        {NAV.map((n) => <li key={n}><a className="block py-2.5 font-medium text-slate-700" href={"#" + n.toLowerCase()} onClick={() => setOpen(false)}>{n}</a></li>)}
      </ul>}
    </header>
  );
}

const Social = ({ n, href, label }) => href ? (
  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="rounded-lg border border-slate-200 p-2.5 text-navy transition hover:border-blue-600 hover:text-blue-700"><Icon n={n} /></a>
) : (
  <span title={label + " link not set yet"} aria-label={label + " (link not set)"} className="rounded-lg border border-dashed border-slate-200 p-2.5 text-slate-300"><Icon n={n} /></span>
);

function Hero() {
  const facts = [["GPA", "3.63 / 4.00"], ["Year", "Third-Year"], ["Graduation", "2028"]];
  return (
    <section id="top" className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:py-24 lg:grid-cols-[1.4fr_1fr]">
      <div>
        <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-800"><span className="h-2 w-2 rounded-full bg-emerald-500" />Open to opportunities</p>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-navy sm:text-6xl">Aseel Mohamed Abdelaziz</h1>
        <p className="mt-3 text-lg font-semibold text-blue-700">Computer Science Student | AI Major | Aspiring Data Engineer</p>
        <p className="mt-5 max-w-xl leading-relaxed text-slate-600">I'm a Computer Science student specializing in Artificial Intelligence, passionate about data, programming, and building practical solutions. I enjoy working with data processing, analytics, and Big Data technologies, and I'm continuously developing my skills through academic learning and hands-on projects.</p>
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a href="#projects" className={btn + " bg-navy text-white hover:bg-blue-800"}>View My Projects</a>
          <a href={CONFIG.cv || "#contact"} {...(CONFIG.cv ? { download: true } : {})} className={btn + " border border-slate-300 text-navy hover:border-blue-600"}><Icon n="download" s={16} />Download CV</a>
          <a href="#contact" className={btn + " text-blue-700 hover:bg-blue-50"}>Contact Me</a>
          <span className="ml-1 flex gap-2"><Social n="linkedin" href={CONFIG.linkedin} label="LinkedIn" /><Social n="github" href={CONFIG.github} label="GitHub" /></span>
        </div>
      </div>
      <aside aria-label="Quick facts" className="rounded-2xl bg-navy p-7 text-white">
        <div aria-hidden="true" className="inline-flex h-16 items-center rounded-2xl bg-white/10 px-6 text-3xl font-extrabold">Aseel</div>
        <p className="mt-5 font-semibold">Benha University</p>
        <p className="text-sm text-blue-200">Computer Science – Artificial Intelligence</p>
        <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-white/15 pt-5">
          {facts.map(([k, v]) => <div key={k}><dt className="text-xs text-blue-200">{k}</dt><dd className="mt-1 text-sm font-bold">{v}</dd></div>)}
        </dl>
        <p className="mt-5 flex items-center gap-2 text-sm text-blue-200"><Icon n="pin" s={16} />Qalyubia, Egypt</p>
      </aside>
    </section>
  );
}

const copyText = async (t, done) => {
  try { await navigator.clipboard.writeText(t); }
  catch { const a = document.createElement("textarea"); a.value = t; document.body.appendChild(a); a.select(); try { document.execCommand("copy"); } catch {} a.remove(); }
  done();
};
function CopyBtn({ text }) {
  const [ok, setOk] = useState(false);
  return <button type="button" aria-live="polite" onClick={() => copyText(text, () => { setOk(true); setTimeout(() => setOk(false), 1800); })} className="rounded-md border border-slate-200 px-2.5 py-1 text-xs font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600">{ok ? "Copied" : "Copy"}</button>;
}

function Certs() {
  const [view, setView] = useState(null);
  return (
    <Section id="certifications" title="Certifications & courses" sub="Select a certificate to view it full size.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CERTS.map((c) => (
          <article key={c.name} className="overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:border-blue-300 hover:shadow-md hover:shadow-blue-900/5">
            {c.img ? <button type="button" onClick={() => setView(c)} aria-label={"View certificate: " + c.name} className="block w-full bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600"><img src={c.img} alt={"Certificate: " + c.name} loading="lazy" className="h-48 w-full object-contain p-2" /></button> : <div aria-hidden="true" className="flex h-24 items-center justify-center bg-blue-50 text-blue-700"><Icon n="award" s={32} /></div>}
            <div className="p-5"><h3 className="font-bold text-navy">{c.name}</h3><p className="mt-1 text-sm font-medium text-blue-700">{c.by}</p><p className="mt-2 text-sm text-slate-600">{c.note}</p>
              {c.verify && <a href={c.verify} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm font-semibold text-blue-700 hover:underline">Verify on Coursera</a>}</div>
          </article>
        ))}
      </div>
      {view && (
        <div role="dialog" aria-modal="true" aria-label={view.name} onClick={() => setView(null)} onKeyDown={(e) => e.key === "Escape" && setView(null)} className="fixed inset-0 z-30 flex items-center justify-center bg-navy/80 p-4">
          <img src={view.img} alt={"Certificate: " + view.name} className="max-h-full max-w-full rounded-lg bg-white" />
          <button type="button" autoFocus onClick={() => setView(null)} aria-label="Close" style={{ top: "calc(1rem + env(safe-area-inset-top,0px))" }} className="absolute right-4 rounded-full bg-white p-2 text-navy"><Icon n="x" /></button>
        </div>
      )}
    </Section>
  );
}

function Projects() {
  const [open, setOpen] = useState(null);
  return (
    <Section id="projects" title="Projects" sub="Academic and hands-on work in data engineering, big data and AI. Select a card for details.">
      <div className="grid gap-5 md:grid-cols-2">
        {PROJECTS.map((p, i) => {
          const isOpen = open === i;
          return (
            <article key={p.name} className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 transition hover:border-blue-300 hover:shadow-md hover:shadow-blue-900/5">
              <p className="text-sm font-semibold text-blue-700">{p.tag}</p>
              <h3 className="mt-1 text-lg font-bold text-navy">{p.name}</h3>
              <p className="mt-2 text-slate-600">{p.desc}</p>
              {p.points.length > 0 && (
                <>
                  <button aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : i)} className="mt-3 self-start text-sm font-semibold text-blue-700 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600">{isOpen ? "Hide my contribution" : "Show my contribution"}</button>
                  {isOpen && <ul className="mt-3 space-y-1.5 text-sm text-slate-700">{p.points.map((x) => <li key={x} className="flex gap-2"><Icon n="check" s={16} c="mt-0.5 shrink-0 text-blue-600" />{x}</li>)}</ul>}
                </>
              )}
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">{p.tech.map((t) => <li key={t} className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 transition hover:bg-blue-100 hover:text-blue-800">{t}</li>)}</ul>
                          </article>
          );
        })}
      </div>
    </Section>
  );
}

const Contact = () => {
  const items = [
    ["mail", "Email", CONFIG.email, CONFIG.email && "mailto:" + CONFIG.email, true],
    ["phone", "Phone", CONFIG.phone, CONFIG.phone && "tel:" + CONFIG.phone.replace(/\s/g, ""), true],
    ["linkedin", "LinkedIn", CONFIG.linkedin && "View profile", CONFIG.linkedin],
    ["github", "GitHub", CONFIG.github && "View profile", CONFIG.github],
  ];
  return (
    <Section id="contact" title="Contact" sub="I'm happy to hear about internships and junior roles in data and AI.">
      <ul className="grid gap-4 sm:grid-cols-2">
        {items.map(([ic, label, text, href, copy]) => (
          <li key={label} className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-blue-50/40 sm:gap-4 sm:p-5">
            <span className="rounded-lg bg-blue-50 p-3 text-blue-700"><Icon n={ic} /></span>
            <div className="min-w-0"><p className="text-sm text-slate-500">{label}</p>
              {href ? <a className="text-[13px] font-semibold text-navy [overflow-wrap:anywhere] hover:text-blue-700 sm:text-base" href={href} target="_blank" rel="noopener noreferrer">{text}</a> : <p className="text-slate-400">Not added yet</p>}
              {copy && text && <div className="mt-1.5"><CopyBtn text={text} /></div>}
            </div>
          </li>
        ))}
        <li className="flex items-center gap-4 rounded-xl border border-slate-200 p-5 transition hover:border-blue-300 hover:bg-blue-50/40">
          <span className="rounded-lg bg-blue-50 p-3 text-blue-700"><Icon n="pin" /></span>
          <div><p className="text-sm text-slate-500">Location</p><p className="font-semibold text-navy">Qalyubia, Egypt</p></div>
        </li>
      </ul>
    </Section>
  );
};

export default function App() {
  return (
    <div className="bg-white text-slate-800">
      <Nav />
      <main>
        <Hero />
        <div className="bg-slate-50">
          <Section id="about" title="About me">
            <div className="max-w-3xl space-y-4 leading-relaxed text-slate-700">
              <p>I'm a third-year Computer Science student at Benha University, majoring in Artificial Intelligence. My main interests are Data Engineering, Data Analysis and AI.</p>
              <p>I work with Python and SQL, and I've gained hands-on experience in data cleaning and data processing. Through my training and projects I've also been exposed to Big Data technologies such as Apache Spark and Hadoop.</p>
              <p>I enjoy learning continuously and solving practical problems with data.</p>
            </div>
          </Section>
        </div>
        <Section id="education" title="Education">
          <div className="flex gap-4 rounded-xl border border-slate-200 p-6 transition hover:border-blue-300 hover:shadow-md hover:shadow-blue-900/5">
            <span className="h-fit rounded-lg bg-blue-50 p-3 text-blue-700"><Icon n="cap" s={24} /></span>
            <div><h3 className="text-lg font-bold text-navy">Benha University</h3>
              <p className="text-slate-700">Bachelor's Degree in Computer Science – Artificial Intelligence Major</p>
              <p className="mt-2 text-sm text-slate-600">Third-Year Student · GPA 3.63 / 4.00 · Expected graduation 2028</p></div>
          </div>
        </Section>
        <div className="bg-slate-50">
          <Section id="skills" title="Technical skills">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {SKILLS.map((g) => (
                <div key={g.title} className="rounded-xl border border-slate-200 bg-white p-6 transition hover:border-blue-300 hover:shadow-md hover:shadow-blue-900/5">
                  <h3 className="flex items-center gap-2 font-bold text-navy"><Icon n={g.icon} c="text-blue-700" />{g.title}</h3>
                  <ul className="mt-4 space-y-2.5">{g.items.map(([s, l]) => (
                    <li key={s} className="-mx-2 flex items-center justify-between gap-3 rounded-md px-2 py-1 text-sm transition hover:bg-blue-50"><span className="font-medium text-slate-800">{s}</span>{l && <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-800">{l}</span>}</li>
                  ))}</ul>
                </div>
              ))}
            </div>
          </Section>
        </div>
        <Projects />
        <div className="bg-slate-50">
          <Certs />
        </div>
        <div className="mx-auto grid max-w-6xl gap-x-10 px-5 lg:grid-cols-2">
          <Section id="languages" title="Languages">
            <ul className="divide-y divide-slate-200 rounded-xl border border-slate-200">{LANGS.map(([l, v]) => <li key={l} className="flex items-center justify-between px-5 py-3 transition hover:bg-blue-50"><span className="flex items-center gap-3 font-medium text-navy"><Icon n="globe" s={18} c="text-blue-700" />{l}</span><span className="text-sm text-slate-600">{v}</span></li>)}</ul>
          </Section>
          <Section id="interests" title="Career interests">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-800"><span className="h-2 w-2 rounded-full bg-emerald-500" />Open to Opportunities</p>
            <ul className="space-y-2">{INTERESTS.map((i) => <li key={i} className="flex items-center gap-3 rounded-lg border border-slate-200 px-4 py-3 text-slate-700 transition hover:border-blue-300 hover:bg-blue-50"><Icon n="briefcase" s={18} c="text-blue-700" />{i}</li>)}</ul>
          </Section>
        </div>
        <Contact />
      </main>
      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500" style={{ paddingBottom: "calc(2rem + env(safe-area-inset-bottom,0px))" }}>© {new Date().getFullYear()} Aseel Mohamed Abdelaziz</footer>
    </div>
  );
}
