import { MessageCircle, Mail, Send, ArrowRight } from 'lucide-react';

const contacts = [
  {
    Icon: MessageCircle,
    label: 'WhatsApp',
    value: '+1 (608) 548-4560',
    desc: 'Send us a message — fastest response time',
    href: 'https://wa.me/16085484560',
  },
  {
    Icon: Send,
    label: 'Telegram',
    value: '@Leslielace97',
    desc: 'Connect with us on Telegram anytime',
    href: 'https://t.me/Leslielace97',
  },
  {
    Icon: Mail,
    label: 'Email',
    value: 'connectgoodlife97@gmail.com',
    desc: 'Send us an email — we reply within a few hours',
    href: 'mailto:connectgoodlife97@gmail.com',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Get In Touch</div>
          <h1 className="display-title">
            Contact <span className="text-gold">PO Wealth</span>
          </h1>
          <div className="gold-divider" />
          <p className="section-subtitle">
            We're here to help you get started. Reach out through any of the channels below and
            our team will get back to you promptly.
          </p>
        </div>
      </section>

      {/* ── CONTACT OPTIONS ── */}
      <section className="section bg-surface">
        <div className="container">
          <div className="stack stack--lg max-700">
            {contacts.map(({ Icon, label, value, desc, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card"
              >
                <div className="contact-icon">
                  <Icon size={26} />
                </div>
                <div style={{ flex: 1 }}>
                  <div className="contact-label">{label}</div>
                  <div className="contact-value">{value}</div>
                  <div className="contact-desc">{desc}</div>
                </div>
                <div className="contact-arrow">
                  <ArrowRight size={20} />
                </div>
              </a>
            ))}
          </div>

          {/* Note */}
          <div className="max-700 mt-2xl">
            <div className="quote-block">
              <p
                style={{
                  color: 'var(--text-muted)', lineHeight: '1.75',
                  fontStyle: 'italic', fontSize: '1rem',
                }}
              >
                Our team typically responds within a few hours. Don't hesitate to reach out with
                any questions about the platform, copy trading, community events, or the free trial
                — we're genuinely happy to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOCIAL STRIP ── */}
      <section className="section--sm">
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Follow Us</div>
            <h2
              style={{
                fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                fontWeight: 700, marginBottom: '32px',
              }}
            >
              Stay Connected on Social Media
            </h2>
            <div
              style={{
                display: 'flex', justifyContent: 'center',
                gap: '16px', flexWrap: 'wrap',
              }}
            >
              {['Facebook', 'Instagram', 'TikTok'].map(platform => (
                <a
                  key={platform}
                  href="#"
                  className="btn btn--ghost"
                  style={{ minWidth: '140px' }}
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
