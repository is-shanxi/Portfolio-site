import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { navItems, sectionIds } from '../../router/routes';
import { useScrollSpy } from '../../hooks/useScrollSpy';

export function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const activeId = useScrollSpy(sectionIds);

  const go = (path: string, id: string) => {
    setOpen(false);
    // 切换路由（HashRouter 会更新 URL），并平滑滚动到对应版块
    if (location.pathname !== path) {
      navigate(path);
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <a
        href="#home"
        className="nav-logo"
        onClick={(e) => {
          e.preventDefault();
          go('/', 'home');
        }}
      >
        山兮 · Portfolio
      </a>

      <button
        className="nav-toggle"
        aria-label="菜单"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        ☰
      </button>

      <div className={`nav-links ${open ? 'open' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.path}
            href={`#${item.id}`}
            className={activeId === item.id ? 'active' : ''}
            onClick={(e) => {
              e.preventDefault();
              go(item.path, item.id);
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
