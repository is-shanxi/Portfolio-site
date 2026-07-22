import { content } from '../../data/content';
import { GitHubIcon } from '../icons';
import type { ProjectItem } from '../../types/content';

function ProjectCard({ p }: { p: ProjectItem }) {
  return (
    <div className="card">
      <div className="card-glow" />
      <h3>{p.name}</h3>
      <p>{p.desc}</p>
      <div className="tags">
        {p.tags.map((t) => (
          <span className="tag" key={t}>
            {t}
          </span>
        ))}
      </div>
      <div className="card-links">
        {/* 源码按钮：指向 GitHub 仓库链接；移除“预览”按钮 */}
        <a href={p.github} target="_blank" rel="noopener noreferrer">
          <GitHubIcon /> 源码
        </a>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects">
      <div className="orb" style={{ top: '12%', right: '8%', width: '300px', height: '300px' }} />
      <div className="orb" style={{ bottom: '10%', left: '8%', width: '260px', height: '260px' }} />
      <div className="container">
        <div className="section-head reveal">
          <h2>项目</h2>
          <div className="underline" />
          <p>这里展示我做过的一些后端与技术项目（mock 数据，可直接替换）</p>
        </div>
        <h3 className="subsection-title reveal">精选项目</h3>
        <div className="projects-featured reveal">
          {content.projectsFeatured.map((p, i) => (
            <ProjectCard key={i} p={p} />
          ))}
        </div>
        <h3 className="subsection-title reveal">其他项目</h3>
        <div className="projects-other reveal">
          {content.projectsOther.map((p, i) => (
            <ProjectCard key={i} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
