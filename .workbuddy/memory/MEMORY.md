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

## 部署（GitHub Pages，已上线）
- **线上地址**：`https://is-shanxi.github.io/`（无后缀根域名）。
- **实现方式**：仓库必须命名为 `<用户名>.github.io`（用户页仓库）才能得到无后缀根域名——本项目仓库即 `is-shanxi/is-shanxi.github.io`。
- **工作流**：`.github/workflows/deploy.yml` 使用官方 GitHub Pages Actions 部署：
  - 权限需 `pages: write` + `id-token: write`；
  - build 阶段 `npm ci && npm run build` 后 `actions/upload-pages-artifact@v3`（path: ./dist）；
  - deploy 阶段 `actions/deploy-pages@v4`，并设 `environment: github-pages`。
- **关键坑（已踩并已修复）**：GitHub Pages 若处于 `build_type: workflow` 模式，会忽略 `gh-pages` 分支文件、改为等待 Actions 部署产物。早期曾误用 peaceiris/actions-gh-pages（只推 gh-pages 分支）并手动 PUT `build_type:workflow`，导致线上一直返回源码 `index.html`（`/src/main.tsx`）。正确做法是直接用官方 `upload-pages-artifact + deploy-pages`，与 workflow 模式天然匹配。
- **自动化**：推送到 `main` 即自动触发部署；本地 git remote 不含 PAT（推送时已用令牌 URL 后改回无令牌地址）。
- **注意**：`vite.config.ts` 用 `base: './'`，配合 HashRouter，在 `/` 根路径与任意子路径下资源路径与刷新均正常。
