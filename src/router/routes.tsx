export interface NavItem {
  /** 路由路径（HashRouter，如 /projects） */
  path: string;
  /** 对应 section 的 DOM id（用于滚动定位与高亮） */
  id: string;
  /** 导航显示文案 */
  label: string;
}

/** 导航与版块映射配置（路由表数据源） */
export const navItems: NavItem[] = [
  { path: '/', id: 'home', label: '首页' },
  { path: '/experience', id: 'experience', label: '经历' },
  { path: '/projects', id: 'projects', label: '项目' },
  { path: '/about', id: 'about', label: '关于' },
  { path: '/skills', id: 'skills', label: '技能' },
  { path: '/contact', id: 'contact', label: '联系' },
];

/** 所有 section 的 id 列表（供滚动监听使用，模块级常量保持稳定引用） */
export const sectionIds: string[] = navItems.map((n) => n.id);
