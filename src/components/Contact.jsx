import useReveal from '../hooks/useReveal.js'
import { profile, nav } from '../data/content.js'

export default function Contact() {
  const [ref, revealed] = useReveal()

  const jump = (id) => (e) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="contact section" id="contact">
      <div className="contact__glow" aria-hidden="true" />
      <div ref={ref} className={`container contact__inner reveal ${revealed ? 'is-revealed' : ''}`}>
        <p className="contact__kicker">04 — GET IN TOUCH</p>

        <h2 className="contact__title">
          把旧界面重做，
          <br />
          也让它在引擎里跑起来。
        </h2>

        <p className="contact__desc">
          正在寻找 UI 重构方向的岗位机会。
          <br />
          如果我的作品与你的团队合适，欢迎随时联系。
        </p>

        <a className="contact__email" href={`mailto:${profile.email}`}>
          {profile.email}
          <span aria-hidden="true">↗</span>
        </a>

        <footer className="contact__foot">
          <span className="contact__foot-brand">
            © 2026 {profile.name} · {profile.brand}
          </span>
          <nav className="contact__foot-nav" aria-label="页脚导航">
            {nav.map((n) => (
              <a key={n.id} href={`#${n.id}`} onClick={jump(n.id)}>
                {n.label}
              </a>
            ))}
          </nav>
          <span className="contact__foot-note">{profile.roleEn}</span>
        </footer>
      </div>
    </section>
  )
}
