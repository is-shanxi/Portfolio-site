import { useEffect, useRef, type MouseEvent } from 'react';

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  // 进入后触发标题下划线展开动画
  useEffect(() => {
    const t = setTimeout(() => ref.current?.classList.add('loaded'), 200);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id: string) => (e: MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero" ref={ref}>
      <div className="orb" style={{ top: '20%', left: '18%', width: '360px', height: '360px' }} />
      <div className="orb" style={{ bottom: '18%', right: '18%', width: '320px', height: '320px' }} />
      <div className="hero-inner">
        <div className="hello">你好，我是</div>
        <h1>
          山兮<span className="name-underline" />
        </h1>
        <p className="role">软件工程学生 · 后端开发方向</p>
        <div className="cta">
          <a href="#contact" className="btn btn-primary" onClick={scrollTo('contact')}>
            联系我
          </a>
          <a href="#projects" className="btn btn-ghost" onClick={scrollTo('projects')}>
            查看项目
          </a>
        </div>
      </div>
    </section>
  );
}
