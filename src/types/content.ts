export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface ProjectItem {
  name: string;
  desc: string;
  tags: string[];
  /** 源码 / 仓库链接（GitHub） */
  github: string;
}

export interface SkillCategory {
  cat: string;
  icon: string;
  items: string[];
}

export type ContactKind = 'email' | 'github' | 'wechat';

export interface ContactItem {
  kind: ContactKind;
  label: string;
  /** 展示文字；微信可省略 */
  value?: string;
  /** 跳转链接；为 null 表示不可点击（如微信仅展示图标） */
  href?: string | null;
}

export interface SiteContent {
  experience: ExperienceItem[];
  projectsFeatured: ProjectItem[];
  projectsOther: ProjectItem[];
  skills: SkillCategory[];
  contact: ContactItem[];
}
