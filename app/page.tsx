import { experience, links, profile, projects } from "@/content";

export default function Home() {
  return (
    <main>
      <header>
        <h1>{profile.name}</h1>
        <p className="meta">
          {profile.role}, {profile.location}
        </p>
      </header>

      <section aria-label="About">
        {profile.bio.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </section>

      {projects.length > 0 && (
        <section aria-labelledby="projects">
          <h2 id="projects">Projects</h2>
          <ul className="rows">
            {projects.map((p) => (
              <li key={p.name}>
                <span>
                  {p.href ? <a href={p.href}>{p.name}</a> : p.name}
                  <span className="muted"> — {p.description}</span>
                </span>
                {p.year && <span className="meta">{p.year}</span>}
              </li>
            ))}
          </ul>
        </section>
      )}

      {experience.length > 0 && (
        <section aria-labelledby="experience">
          <h2 id="experience">Experience</h2>
          <ul className="rows">
            {experience.map((job) => (
              <li key={`${job.company}-${job.period}`}>
                <span>
                  {job.title}
                  <span className="muted">, {job.company}</span>
                </span>
                <span className="meta">{job.period}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <footer>
        <ul className="links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
      </footer>
    </main>
  );
}
