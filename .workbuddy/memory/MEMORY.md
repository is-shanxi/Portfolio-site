# 项目长期笔记

## 山兮个人作品集网站

- **身份**：山兮，软件工程学生，后端开发方向，江西。
- **设计偏好**：参考 adityapillai.dev，深色背景 #1c1c1c + 薄荷绿强调色 #b8f2e6，中文文案。
- **隐私约束**：学校信息不展示；微信仅图标、不跳转。
- **联系方式**：邮箱 shanxi413@gmail.com、GitHub https://github.com/is-shanxi。
- **内容策略**：项目、经历、技能先用 mock 数据占位，结构搭好后由用户自行替换真实内容。
- **技术栈**：React 18 + Vite + TypeScript + react-router-dom（HashRouter）。
- **目录结构**：
  - `src/styles/global.css`：全局主题变量与样式；
  - `src/router/routes.tsx`：导航与版块路由映射；
  - `src/data/content.ts`：经历、项目、技能、联系等 mock 数据；
  - `src/components/sections/*`：首页、经历、项目、关于、技能、联系六大版块组件；
  - `src/components/icons/GitHubIcon.tsx`、`WeChatIcon.tsx`：官方原生 SVG 图标；
  - `src/hooks/useReveal.ts`、`useScrollSpy.ts`：滚动揭示动画与导航高亮。
- **组件重设计**：
  - 联系：GitHub 使用官方原生图标 + 显示用户名 `is-shanxi`（不展示 `github.com` 域名）；微信使用官方原生图标，不展示「扫码添加」说明、不跳转。
  - 项目：源码按钮指向 GitHub 仓库链接，移除预览按钮。
- **运行/部署**：`npm run dev` 开发，`npm run build` 构建为 `dist/`，产物纯静态，可部署到 GitHub Pages / Vercel / Cloudflare Pages。
