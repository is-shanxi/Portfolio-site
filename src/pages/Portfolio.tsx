import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ParticleCanvas } from '../components/background/ParticleCanvas';
import { Hero } from '../components/sections/Hero';
import { Experience } from '../components/sections/Experience';
import { Projects } from '../components/sections/Projects';
import { About } from '../components/sections/About';
import { Skills } from '../components/sections/Skills';
import { Contact } from '../components/sections/Contact';
import { useReveal } from '../hooks/useReveal';

/**
 * 单页作品集页面：所有版块顺序渲染，导航通过 HashRouter 路由
 * 与滚动定位联动。进入带 hash 路由（如 /#/projects）时自动滚动到对应版块。
 */
export function Portfolio() {
  const location = useLocation();
  useReveal();

  useEffect(() => {
    const id = location.pathname.replace(/^\//, '') || 'home';
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'auto' });
  }, [location.pathname]);

  return (
    <>
      <ParticleCanvas />
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
