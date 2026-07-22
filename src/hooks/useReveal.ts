import { useEffect } from 'react';

/**
 * 为页面中所有带 `.reveal` 类的元素绑定 IntersectionObserver，
 * 进入视口时添加 `.in` 触发滚动揭示动画（一次性）。
 */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('in');
            obs.unobserve(en.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}
