const A = "/assets";

const services = [
  ["Research", "Research uncovers your users’ needs and the problems worth solving.", "From interviews, surveys, competitor analysis, to usability testing, we turn qualitative and quantitative insights into clear, actionable recommendations that guide smarter product decisions."],
  ["Product Design", "Product design turns your vision into a digital product people can use and love.", "Through iterative UX/UI design, wireframing, prototyping, and visual design, we create intuitive, accessible experiences that solve real user problems and support your business goals."],
  ["Branding", "Branding shapes how people perceive, remember, and connect with your business.", "Through brand strategy, brand positioning, and visual identity, we build a distinctive, cohesive brand that communicates your value and sets you apart from competitors."],
  ["Product Strategy", "Product strategy aligns your vision with market opportunities and business goals.", "We define your target audience, positioning, roadmap, pricing, and success metrics to give you a clear direction for building the right product and achieving measurable results."],
];

const projects = [
  ["8634f.png", "Spanish Swag", "Research · Strategy", "We transformed the user experience of a language learning platform for K-12 students through quantitative and qualitative user research: user interviews, usability testing, heuristic evaluation, competitive analysis, and survey design."],
  ["2acac.png", "Da.bot", "Research · Design", "We boosted the adoption and retention rate by 8x of a data collection internal tool for Evalueserve employees."],
  ["9a3b5.png", "Merfolk Games", "Research · Brand & Identity", "We elevated the brand identity of a video game studio through market research, positioning workshops, and visual design."],
];

const reasons = [
  ["We make great design affordable", "We believe great design should be accessible to companies that value it. Good design goes beyond aesthetics: it makes products more intuitive, usable, and sustainable. We make high-quality design more affordable without compromising its impact."],
  ["We move fast", "As a lean, two-person team with startup experience, we communicate directly, adapt quickly, and make decisions without unnecessary layers. We deliver in days, not months."],
  ["We don’t compromise quality", "We move quickly without compromising quality. With high standards and an eye for detail, we take a holistic approach to every product, bringing branding, user experience, and business goals together into a cohesive whole."],
  ["We treat your product like our own", "We care about what you’re building, not just what we’re delivering. We go beyond the brief, think proactively, and advocate for what’s best for your business, treating every decision as an investment in your product’s success."],
];

const methods = [
  ["44a65.svg", "Data-Driven", "We ground our design decisions in research and data, not just aesthetics. By understanding your users’ needs and behaviors, we create products that are intuitive, usable, and built to solve real problems."],
  ["820eb.svg", "Collaborative", "We believe better design comes from working together. Through open communication, shared brainstorming, and continuous feedback, we align with your vision and turn ideas into products we’re proud to build together."],
  ["13dc6.svg", "Holistic", "We look beyond individual screens to see the bigger picture. By connecting branding, user experience, and business goals, we create cohesive solutions that serve your product as a whole."],
  ["d1212.svg", "AI-Native Workflow", "We use AI to accelerate research, exploration, and iteration, helping us work smarter and deliver faster. AI enhances our process, but our expertise and professional judgment guide every decision."],
];

function Logo() {
  return <a className="logo" href="#"><span className="mark"><img src={`${A}/22173.svg`} alt="" /><img src={`${A}/a6da5.png`} alt="" /></span>MANTIS STUDIO</a>;
}

function Section({ id, title, children }: { id?: string; title: React.ReactNode; children: React.ReactNode }) {
  return <section id={id} className="section"><h2>{title}</h2>{children}</section>;
}

export default function App() {
  return <main>
    <nav>
      <Logo />
      <div className="navlinks"><a href="#services">Services</a><a href="#projects">Projects</a><a href="#about">About</a></div>
      <a className="pill light" href="#contact">Let’s Chat</a>
    </nav>

    <header className="hero">
      <h1>We optimize your product through the lens of <strong>design</strong>, <strong>branding</strong>, and <strong>business strategy</strong>.</h1>
      <p className="quote">“Mantis Studio helped us transform our branding into something that completely aligned with our vision. I really appreciate the detail and depth they were willing to provide. From careful market research to deep discussions with me about the company values, they were able to craft a product pitch deck and a company brand guideline that I can now be proud to share with potential clients..” <span>─ Merfolk Games</span></p>
      <div className="buttons"><a className="pill dark" href="#contact">Let’s Chat</a><a className="pill soft" href="#projects">See Projects</a></div>
      <img className="mantis" src={`${A}/a6da5.png`} alt="Mantis shrimp illustration" />
    </header>

    <Section id="services" title={<><strong>What</strong> we do</>}>
      <div className="grid four">{services.map(([title, intro, copy]) => <article className="card service" key={title}><h3>{title}</h3><p>{intro}</p><p>{copy}</p></article>)}</div>
    </Section>

    <Section id="projects" title={<>Selected <strong>work</strong></>}>
      <div className="project-list">{projects.map(([icon, name, tags, copy]) => <article className="project" key={name}><div><h3><img src={`${A}/${icon}`} alt="" />{name}</h3><b>{tags}</b></div><p>{copy}</p></article>)}</div>
    </Section>

    <Section title={<><strong>Why</strong> work with us</>}>
      <div className="grid two">{reasons.map(([title, copy]) => <article className="card reason" key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </Section>

    <Section title={<><strong>How</strong> we work</>}>
      <div className="grid four">{methods.map(([icon, title, copy]) => <article className="card method" key={title}><img src={`${A}/${icon}`} alt="" /><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </Section>

    <Section id="about" title={<><strong>Who</strong> we are</>}>
      <div className="team">
        <article><img src={`${A}/f1567.png`} alt="Portrait illustration of Melp Meredith" /><div><h3>Melp Meredith</h3><p>Research &amp; Product Strategy Lead<br />6+ years design experience<br />Spirit animal: Mantis shrimp</p></div></article>
        <article><img src={`${A}/e68aa.png`} alt="Portrait illustration of Summer Huang" /><div><h3>Summer Huang</h3><p>Design &amp; Branding Lead<br />2+ years design experience<br />Spirit animal: Dog</p></div></article>
      </div>
    </Section>

    <section id="contact" className="contact section">
      <div className="cta"><h2>Let’s work together.</h2><p>Just tell us your vision. We’ll take it from there.</p></div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Name<input placeholder="Jane Doe" /></label>
        <label>Email<input type="email" placeholder="you@company.com" /></label>
        <label>Company<input placeholder="JD Studio" /></label>
        <label>How can we help?<textarea placeholder="I need help improving my product" /></label>
        <button type="submit">Submit</button>
      </form>
    </section>

    <footer><Logo /><div><a href="#services">Services</a><a href="#projects">Projects</a><a href="#">LinkedIn</a></div><p>USA · © 2026</p></footer>
  </main>;
}
