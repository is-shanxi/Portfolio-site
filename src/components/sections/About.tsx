export function About() {
  return (
    <section id="about">
      <div className="orb" style={{ top: '15%', right: '6%', width: '280px', height: '280px' }} />
      <div className="orb" style={{ bottom: '12%', left: '6%', width: '320px', height: '320px' }} />
      <div className="container">
        <div className="section-head reveal">
          <h2>关于我</h2>
          <div className="underline" />
        </div>
        <div className="about-grid reveal">
          <div className="about-text">
            <p>我是一名正在计算机领域启程的开拓者。作为一名专注后端开发的软件工程学生，代码是我看世界的方式，AI 是我并肩开拓的伙伴。</p>
            <p>我乐于用工程化的思维拆解复杂问题，在互联网的世界持续探索。</p>
          </div>
        </div>
      </div>
    </section>
  );
}
