import { content } from '../../data/content';

export function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-head reveal">
          <h2>经历</h2>
          <div className="underline" />
          <p>学习与实践中的成长轨迹</p>
        </div>
        <div className="timeline reveal">
          {content.experience.map((e, i) => (
            <div className="timeline-item" key={i}>
              <h3>{e.title}</h3>
              <div className="company">{e.company}</div>
              <div className="meta">
                <span>📅 {e.period}</span>
                <span>📍 {e.location}</span>
              </div>
              <ul className="bullets">
                {e.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
