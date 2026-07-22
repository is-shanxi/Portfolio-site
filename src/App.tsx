import { HashRouter, Routes, Route } from 'react-router-dom';
import { Portfolio } from './pages/Portfolio';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/experience" element={<Portfolio />} />
        <Route path="/projects" element={<Portfolio />} />
        <Route path="/about" element={<Portfolio />} />
        <Route path="/skills" element={<Portfolio />} />
        <Route path="/contact" element={<Portfolio />} />
        {/* 未知路径兜底，仍渲染单页作品集 */}
        <Route path="*" element={<Portfolio />} />
      </Routes>
    </HashRouter>
  );
}
