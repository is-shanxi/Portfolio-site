import { content } from '../../data/content';

export function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-head reveal">
          <h2>技能</h2>
          <div className="underline" />
          <p>围绕后端开发构建的技术栈</p>
        </div>
        <div className="skills-grid reveal">
          {content.skills.map((s, i) => (
            <div className="skill-cat" key={i}>
              <div className="cat-head">
                <div className="cat-icon">{s.icon}</div>
                <div>
                  <h3>{s.cat}</h3>
                  <div className="count">{s.items.length} 项</div>
                </div>
              </div>
              <div className="tags">
                {s.items.map((it) => (
                  <span className="tag" key={it}>
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
