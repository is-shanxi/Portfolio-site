import type { SiteContent } from '../types/content';

/**
 * 站点内容配置（mock 数据）。
 * 替换为你自己的内容时，直接修改此对象即可，组件会自动渲染。
 */
export const content: SiteContent = {
  experience: [
    {
      title: '后端开发实习生',
      company: '某科技公司',
      period: '2025.06 – 2025.09',
      location: '远程',
      bullets: [
        '参与后端服务开发与维护，使用 Go / Node.js 构建 RESTful API',
        '优化数据库查询，将核心接口响应时间降低约 30%',
        '协助搭建 CI/CD 流程，提升团队部署效率',
      ],
    },
    {
      title: '开源贡献者',
      company: '个人项目',
      period: '2024 – 至今',
      location: '江西',
      bullets: [
        '参与多个后端开源项目，提交 PR 并被合并',
        '持续学习分布式系统与微服务架构',
        '在博客中记录学习笔记与技术实践',
      ],
    },
  ],

  projectsFeatured: [
    {
      name: '分布式缓存系统',
      desc: '基于 Redis 的高可用缓存中间件，支持一致性哈希与自动故障转移，提升热点数据访问性能。',
      tags: ['Go', 'Redis', 'gRPC'],
      github: 'https://github.com/is-shanxi',
    },
    {
      name: '微服务电商后端',
      desc: 'Spring Cloud 微服务架构的电商系统，含订单、库存、支付模块，支持服务注册与配置中心。',
      tags: ['Java', 'Spring Cloud', 'MySQL', 'RabbitMQ'],
      github: 'https://github.com/is-shanxi',
    },
    {
      name: '实时聊天服务',
      desc: '基于 WebSocket 的高并发即时通讯后端，支持水平扩展与消息持久化。',
      tags: ['Node.js', 'WebSocket', 'Redis', 'MongoDB'],
      github: 'https://github.com/is-shanxi',
    },
  ],

  projectsOther: [
    { name: 'API 网关', desc: '轻量级 API 网关，支持限流、鉴权与动态路由。', tags: ['Go', 'JWT'], github: 'https://github.com/is-shanxi' },
    { name: '日志收集平台', desc: '基于 ELK 栈的日志聚合与可视化方案。', tags: ['Python', 'Elasticsearch', 'Kibana'], github: 'https://github.com/is-shanxi' },
    { name: '短链接服务', desc: '高性能短链生成与跳转服务，支持访问统计。', tags: ['Node.js', 'Redis', 'PostgreSQL'], github: 'https://github.com/is-shanxi' },
  ],

  skills: [
    { cat: '后端开发', icon: '⚙', items: ['Go', 'Node.js', 'Python', 'Java', 'Spring Boot'] },
    { cat: '数据库', icon: '🗄', items: ['MySQL', 'PostgreSQL', 'Redis', 'MongoDB'] },
    { cat: '中间件与消息', icon: '🔗', items: ['RabbitMQ', 'Kafka', 'gRPC', 'Nginx'] },
    { cat: '工具与运维', icon: '🛠', items: ['Git', 'Docker', 'Linux', 'CI/CD', 'Kubernetes'] },
    { cat: '编程语言', icon: '💻', items: ['C', 'C++', 'Java', 'Python', 'Go', 'TypeScript'] },
    { cat: '云与部署', icon: '☁', items: ['阿里云', '腾讯云', 'Docker', 'K8s'] },
  ],

  contact: [
    { kind: 'email', label: '邮箱', value: 'shanxi413@gmail.com', href: 'mailto:shanxi413@gmail.com' },
    // GitHub：展示官方图标 + 用户名（不展示 github.com 域名文字），链接指向仓库
    { kind: 'github', label: 'GitHub', value: 'is-shanxi', href: 'https://github.com/is-shanxi' },
    // 微信：仅展示官方图标，不跳转、不展示“扫码添加”等说明文字
    { kind: 'wechat', label: '微信', href: null },
  ],
};
