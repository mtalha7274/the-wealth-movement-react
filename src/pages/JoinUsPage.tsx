import { Link } from 'react-router-dom';
import { ArrowRight, Lock } from 'lucide-react';

const benefits = [
  'Access to the copy trading platform',
  'Weekly Zoom trainings with Professor Daniel',
  'Beginner-friendly setup and guided onboarding',
  'Community networking and real-world events',
  'Leadership growth programs',
  'Ongoing financial education resources',
  'Free trial — no commitment required to start',
];

export default function JoinUsPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Get Started</div>
          <h1 className="display-title">
            Join <span className="text-gold">PO Wealth</span> Today
          </h1>
          <div className="gold-divider" />
          <p className="section-subtitle">
            Become part of a financial education and trading community designed to help you grow
            confidently — starting with a completely free trial.
          </p>
        </div>
      </section>

      {/* ── JOIN LAYOUT ── */}
      <section className="section bg-surface">
        <div className="container">
          <div className="join-layout">
            {/* Benefits list */}
            <div>
              <div className="eyebrow">Membership Includes</div>
              <h2 className="section-title">Everything You Need to Succeed</h2>
              <div className="gold-divider" style={{ margin: '20px 0' }} />

              <div className="stack stack--sm mt-lg">
                {benefits.map(b => (
                  <div key={b} className="benefit-item">
                    <div className="benefit-check">✓</div>
                    <span className="benefit-text">{b}</span>
                  </div>
                ))}
              </div>

              {/* Extra context */}
              <div
                className="card mt-xl"
                style={{ borderColor: 'var(--gold-border)', background: 'rgba(212,175,55,0.04)' }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)', fontSize: '1.125rem',
                    fontWeight: 700, marginBottom: '10px',
                  }}
                >
                  How the Free Trial Works
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem', lineHeight: '1.75' }}>
                  New members can experience the full platform — including the copy trading
                  environment, live Zoom sessions, and community access — before making any
                  long-term commitment. Simply reach out via WhatsApp, Telegram, or email to get
                  started.
                </p>
              </div>
            </div>

            {/* Sticky CTA card */}
            <div className="join-cta-card">
              <div className="join-cta-card__badge">Free to Start</div>
              <h3 className="join-cta-card__title">Start Your Free Trial</h3>
              <p className="join-cta-card__desc">
                New members can experience the platform, educational environment, and community
                support before fully committing — no cost, no risk.
              </p>

              <Link
                to="/contact"
                className="btn btn--gold btn--lg"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Join Now — It's Free <ArrowRight size={18} />
              </Link>

              <div className="join-cta-card__note">
                <Lock size={12} />
                No credit card required to get started
              </div>

              <div className="join-cta-card__divider" />

              <div>
                <p
                  style={{
                    fontSize: '0.875rem', color: 'var(--text-muted)',
                    marginBottom: '12px', lineHeight: '1.6',
                  }}
                >
                  Have questions before joining? Our team is happy to help.
                </p>
                <Link
                  to="/contact"
                  className="btn btn--outline"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Contact Us First
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="section--sm">
        <div className="container">
          <div className="cta-banner">
            <h2 className="cta-banner__title">Don't Wait — Opportunities Won't</h2>
            <p className="cta-banner__text">
              "If someone keeps waiting for complete certainty, they usually miss out on time,
              growth, and the potential income they could have already started building."
            </p>
            <Link to="/contact" className="btn btn--gold btn--lg">
              Get Started Today <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
