import { useState, type FormEvent } from 'react';
import { content } from '../../data/content';
import { GitHubIcon, WeChatIcon } from '../icons';
import type { ContactItem } from '../../types/content';

/** 根据联系方式类型渲染对应图标：GitHub/微信 用官方原生图标，邮箱用信封符号 */
function ContactIcon({ kind }: { kind: ContactItem['kind'] }) {
  if (kind === 'github') return <GitHubIcon />;
  if (kind === 'wechat') return <WeChatIcon />;
  return <span aria-hidden="true">✉</span>;
}

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2500);
    e.currentTarget.reset();
  };

  return (
    <section id="contact">
      <div className="orb" style={{ top: '15%', left: '8%', width: '320px', height: '320px' }} />
      <div className="orb" style={{ bottom: '12%', right: '8%', width: '320px', height: '320px' }} />
      <div className="container">
        <div className="section-head reveal">
          <h2>联系我</h2>
          <div className="underline" />
        </div>
        <div className="contact-grid reveal">
          <div className="contact-intro">
            <h3>一起聊聊</h3>
            <p>有项目想法，或只是想交流技术？随时联系我！</p>
            <div className="contact-cards">
              {content.contact.map((c, i) => (
                <div className="contact-card" key={i}>
                  <div className="ic">
                    <ContactIcon kind={c.kind} />
                  </div>
                  <div>
                    <div className="label">{c.label}</div>
                    {c.href ? (
                      <a
                        className="value"
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {c.value ?? c.label}
                      </a>
                    ) : (
                      // 微信等不可点击项：仅展示图标 + 标签，不显示额外说明文字
                      <div className="value">{c.value ?? c.label}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={onSubmit}>
            <div className="field">
              <label htmlFor="name">姓名</label>
              <input type="text" id="name" name="name" placeholder="你的名字" required />
            </div>
            <div className="field">
              <label htmlFor="email">邮箱</label>
              <input type="email" id="email" name="email" placeholder="you@example.com" required />
            </div>
            <div className="field">
              <label htmlFor="message">留言</label>
              <textarea id="message" name="message" rows={4} placeholder="想说点什么…" required />
            </div>
            <button type="submit" className="btn btn-primary" disabled={sent}>
              {sent ? '已发送 ✓' : '发送消息'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
