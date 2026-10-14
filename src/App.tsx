import { useState, type FormEvent, type ReactNode } from "react";

const A = "/assets";

// Submissions are emailed via FormSubmit (formsubmit.co) to the primary address, CC'd to the second.
const FORM_ENDPOINT = "https://formsubmit.co/ajax/melp.meredith@gmail.com";
const FORM_CC = "etesum1997@gmail.com";

type Status = "idle" | "sending" | "sent" | "error";

function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("_honey")) return; // bot filled the hidden field
    const name = String(data.get("name") ?? "").trim();
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name,
          email: data.get("email"),
          company: data.get("company"),
          message: data.get("message"),
          _replyto: data.get("email"),
          _cc: FORM_CC,
          _subject: `New Mantis Studio inquiry from ${name || "the website"}`,
          _template: "table",
          _captcha: "false",
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || json.success === false || json.success === "false") throw new Error(json.message || "Send failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return <div className="form-done" role="status"><h3>Thanks — we got your message.</h3><p>We’ll get back to you within a couple of days.</p><button type="button" onClick={() => setStatus("idle")}>Send another</button></div>;
  }

  return <form className="contact-form" onSubmit={handleSubmit}>
    <label>Name<input name="name" placeholder="Jane Doe" required autoComplete="name" /></label>
    <label>Email<input name="email" type="email" placeholder="janedoe@gmail.com" required autoComplete="email" /></label>
    <label>Company<input name="company" placeholder="JD Studio" autoComplete="organization" /></label>
    <label>How can we help?<textarea name="message" placeholder="I need help improving my product" required /></label>
    <input type="text" name="_honey" className="honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />
    <button type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Submit"}</button>
    {status === "error" && <p className="form-error" role="alert">Something went wrong sending your message. Please try again, or email us at melp.meredith@gmail.com.</p>}
  </form>;
}

const services = [
  ["Research", "Research uncovers your users’ needs and the problems worth solving.", "From interviews, surveys, competitor analysis, usability testing, diary studies, concept testing, to co-creation, we turn insights into clear, actionable recommendations that guide smarter product decisions."],
  ["Product Design", "Product design turns your vision into a digital product people can use and love.", "Through iterative UX/UI design, wireframing, prototyping, and visual design, we create intuitive, accessible experiences that solve real user problems and support your business goals."],
  ["Branding", "Branding shapes how people perceive, remember, and connect with your business.", "Through brand strategy, brand positioning, and visual identity, we build a distinctive, cohesive brand that communicates your value and sets you apart from competitors."],
  ["Product Strategy", "Product strategy aligns your vision with market opportunities and business goals.", "With a business lens, we define your target audience, positioning, roadmap, pricing, and success metrics to give you a clear direction for building the right product, achieving measurable results, and ultimately sustaining your business."],
];

const projects = [
  ["logo-spanish-swag.png", "Spanish Swag", "Pivoting from in-person classrooms to homeschooling environments, we streamlined the user experience of a language learning platform for K-12 students through quantitative and qualitative user research: user interviews, usability testing, heuristic evaluation, competitive analysis, and survey design."],
  ["logo-evalueserve.png", "Evalueserve", "We created a self-serve onboarding redesign for an internal consulting tool. After usability testing and interviews, this new design increased the tool’s usage by 8x and saved 600+ employee hours weekly. By identifying the most-used core feature, we advocated for its optimization rather than developing new features."],
  ["logo-merfolk.png", "Merfolk Games", "We reworked the brand identity of a video game studio through brand research, positioning workshops, and visual design."],
];

const reasons = [
  ["We make great design affordable", "We believe great design should be accessible to companies that value it. Good design goes beyond aesthetics: it makes products more intuitive, usable, and sustainable. We make high-quality design more affordable without compromising its impact."],
  ["We move fast", "As a lean, two-person team with startup experience, we communicate directly, adapt quickly, and make decisions without unnecessary layers. We deliver in days, not months."],
  ["We don’t compromise quality", "We move quickly without compromising quality. With high standards and an eye for detail, we take a holistic approach to every product, bringing branding, user experience, and business goals together into a cohesive whole."],
  ["We treat your product like our own", "We care about what you’re building, not just what we’re delivering. We go beyond the brief, think proactively, and advocate for what’s best for your business, treating every decision as an investment in your product’s success."],
];

// Icon SVGs sit inside a 64px box at the offsets used in the Figma frame.
const methods = [
  ["44a65.svg", "data", "Data-Driven", "We ground our design decisions in research and data, not just aesthetics. By understanding your users’ needs and behaviors, we create products that are intuitive, usable, and built to solve real problems."],
  ["820eb.svg", "collab", "Collaborative", "We believe better design comes from working together. Through open communication, shared brainstorming, and continuous feedback, we align with your vision and turn ideas into products we’re proud to build together."],
  ["13dc6.svg", "holistic", "Holistic", "We look beyond individual screens to see the bigger picture. By connecting branding, user experience, and business goals, we create cohesive solutions that serve your product as a whole."],
  ["d1212.svg", "ai", "AI-Native Workflow", "We use AI to accelerate research, exploration, and iteration, helping us work smarter and deliver faster. AI enhances our process, but our expertise and professional judgment guide every decision."],
];

const team = [
  ["melp.webp", "Melp Meredith", ["Research & Product Strategy Lead", "6+ years design experience across startups, games, agencies, and tech", "Spirit animal: Mantis shrimp"]],
  ["summer.webp", "Summer Huang", ["Design & Branding Lead", "3+ years design experience", "Spirit animal: Dog"]],
] as const;

function Section({ id, className = "", title, children }: { id?: string; className?: string; title: ReactNode; children: ReactNode }) {
  return <section id={id} className={`section ${className}`}><h2>{title}</h2>{children}</section>;
}

const Separator = () => <hr className="separator" />;

export default function App() {
  return <>
    <nav>
      <div className="nav-inner">
        <a className="logo" href="#">MANTIS STUDIO</a>
        <div className="navlinks"><a href="#services">Services</a><a href="#projects">Projects</a><a href="#about">About</a></div>
        <a className="pill light" href="#contact">Let’s Chat</a>
      </div>
    </nav>

    <main>
      <header className="hero">
        <h1>We optimize your product through the lens of <strong>design</strong>, <strong>branding</strong>, and <strong>business strategy</strong>.</h1>
        <p className="quote">“Mantis Studio helped us transform our branding into something that completely aligned with our vision. I really appreciate the detail and depth they were willing to provide. From careful market research to deep discussions with me about the company values, they were able to craft a product pitch deck and a company brand guideline that I can now be proud to share with potential clients.” <span>─ Merfolk Games</span></p>
        <div className="buttons"><a className="pill dark" href="#contact">Let’s Chat</a><a className="pill soft" href="#projects">See Projects</a></div>
        <img className="mantis" src={`${A}/mantis.webp`} alt="Line drawing of a mantis shrimp" />
      </header>

      <Separator />
      <Section id="services" title={<><strong>What</strong> we do</>}>
        <div className="grid four">{services.map(([title, intro, copy]) => <article className="card service" key={title}><h3>{title}</h3><p>{intro}</p><p>{copy}</p></article>)}</div>
      </Section>

      <Separator />
      <Section id="projects" title={<>Selected <strong className="medium">work</strong></>}>
        <div className="project-list">{projects.map(([logo, name, copy]) => <article className="project" key={name}>
          <h3><img src={`${A}/${logo}`} alt="" width={100} height={100} />{name}</h3>
          <p>{copy}</p>
        </article>)}</div>
      </Section>

      <Separator />
      <Section title={<><strong>Why</strong> work with us</>}>
        <div className="grid two">{reasons.map(([title, copy]) => <article className="card reason" key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </Section>

      <Separator />
      <Section title={<><strong>How</strong> we work</>}>
        <div className="grid four">{methods.map(([icon, key, title, copy]) => <article className="card method" key={title}>
          <span className={`method-icon ${key}`}><img src={`${A}/${icon}`} alt="" /></span>
          <h3>{title}</h3><p>{copy}</p>
        </article>)}</div>
      </Section>

      <Separator />
      <Section id="about" className="team-section" title={<><strong>Who</strong> we are</>}>
        <div className="team">{team.map(([img, name, lines]) => <article key={name}>
          <img src={`${A}/${img}`} alt={`Portrait illustration of ${name}`} width={300} height={300} />
          <div><h3>{name}</h3><p>{lines.map((l, i) => <span key={i}>{l}</span>)}</p></div>
        </article>)}</div>
      </Section>

      <Separator />
      <section id="contact" className="contact section">
        <div className="cta"><h2>Let’s work together.</h2><p>Just tell us your vision. We’ll take it from there.</p></div>
        <ContactForm />
      </section>
    </main>

    <footer>
      <a className="logo" href="#">MANTIS STUDIO</a>
      <div className="footer-links"><a href="#services">Services</a><a href="#projects">Projects</a><a href="https://www.linkedin.com/company/mantis-studio-ux/" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
      <p>USA · © 2026</p>
    </footer>
  </>;
}
