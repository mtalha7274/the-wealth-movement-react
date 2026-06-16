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
    <div className="page-wrapper">

      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Get In Touch</span>
          <h1 className="h1">
            Contact <span className="text-copper" style={{ fontStyle: 'italic' }}>PO Wealth</span>
          </h1>
          <div className="copper-rule copper-rule--center" />
          <p className="lead max-640" style={{ marginTop: 12 }}>
            We're here to help you get started. Reach out through any channel below and
            our team will get back to you promptly.
          </p>
        </div>
      </section>

      {/* ── CONTACT OPTIONS ── */}
      <section className="section bg-white">
        <div className="container">
          <div className="stack stack--lg max-640">
            {contacts.map(({ Icon, label, value, desc, href }, i) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`contact-card reveal d${i + 1}`}
              >
                <div className="contact-icon"><Icon size={24} /></div>
                <div style={{ flex: 1 }}>
                  <div className="contact-label">{label}</div>
                  <div className="contact-value">{value}</div>
                  <div className="contact-desc">{desc}</div>
                </div>
                <div className="contact-arrow"><ArrowRight size={20} /></div>
              </a>
            ))}
          </div>

          {/* Note */}
          <div className="max-640 mt-2xl reveal">
            <div className="quote-block">
              <p style={{
                color: 'var(--muted)', lineHeight: 1.78,
                fontStyle: 'italic', fontSize: '1rem',
              }}>
                Our team typically responds within a few hours. Don't hesitate to reach out with
                questions about the platform, copy trading, community events, or the free trial —
                we're genuinely happy to help.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
