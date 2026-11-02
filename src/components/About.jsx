import useReveal from '../hooks/useReveal.js'
import { profile, stats, marquee, skills } from '../data/content.js'

export default function About() {
  const [ref, revealed] = useReveal()
  const cls = revealed ? 'is-revealed' : ''

  return (
    <section className="about section" id="about">
      <div className="container">
        <header className={`section__head reveal ${cls}`}>
          <span className="section__no">01</span>
          <h2 className="section__title">关于我</h2>
          <span className="section__en">ABOUT ME</span>
        </header>

        <div className="about__body" ref={ref}>
          <div className={`about__mark reveal ${cls}`}>
            <div className="about__mark-grid" aria-hidden="true" />
            <span className="about__mark-word">WYF</span>
            <span className="about__mark-sub">DESIGN × ENGINE</span>
            <div className="about__mark-foot">
              <strong>{profile.name}</strong>
              <span>{profile.role}</span>
            </div>
          </div>

          <div className="about__main">
            <div className={`about__intro reveal ${cls}`}>
              {profile.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className={`skills reveal ${cls}`}>
              {skills.map((s) => (
                <div className="skills__group" key={s.group}>
                  <h4 className="skills__title">
                    {s.group}
                    <em>{s.en}</em>
                  </h4>
                  <ul className="skills__list">
                    {s.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <dl className={`about__meta reveal ${cls}`}>
              <div>
                <dt>邮箱</dt>
                <dd>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </dd>
              </div>
              <div>
                <dt>教育背景</dt>
                <dd>{profile.education}</dd>
              </div>
              <div>
                <dt>工作经历</dt>
                <dd>{profile.location}</dd>
              </div>
              <div>
                <dt>求职方向</dt>
                <dd>UI 重构</dd>
              </div>
            </dl>

            <ul className={`about__stats reveal ${cls}`}>
              {stats.map((s) => (
                <li key={s.label}>
                  <strong>
                    {s.value}
                    <em>{s.unit}</em>
                  </strong>
                  <span>{s.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[...marquee, ...marquee].map((word, i) => (
            <span key={i}>
              {word}
              <i>/</i>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
