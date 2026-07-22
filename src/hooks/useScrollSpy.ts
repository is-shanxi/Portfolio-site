import { useEffect, useState } from 'react';

/**
 * 滚动监听：返回当前可视区域对应的 section id，用于导航高亮。
 * @param ids 需要监听的 section 元素 id 列表（建议传入模块级常量，保持稳定引用）
 */
export function useScrollSpy(ids: string[]) {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? '');

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) setActiveId(en.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids]);

  return activeId;
}
