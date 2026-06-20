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
    <div className="page-wrapper">

      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Get Started</span>
          <h1 className="h1">
            Join <span className="text-copper" style={{ fontStyle: 'italic' }}>PO Wealth</span> Today
          </h1>
          <div className="copper-rule copper-rule--center" />
          <p className="lead max-640" style={{ marginTop: 12 }}>
            Become part of a financial education and trading community designed to help you
            grow confidently — starting with a completely free trial.
          </p>
        </div>
      </section>

      {/* ── MAIN LAYOUT ── */}
      <section className="section bg-white">
        <div className="container">
          <div className="join-layout">

            {/* Benefits list */}
            <div>
              <span className="eyebrow">Membership Includes</span>
              <h2 className="h2" style={{ marginTop: 6, marginBottom: 0 }}>
                Everything You Need to Succeed
              </h2>
              <div className="copper-rule" />

              <div className="stack stack--sm mt-lg">
                {benefits.map((b, i) => (
                  <div key={b} className={`benefit-item reveal d${(i % 4) + 1}`}>
                    <div className="benefit-check">✓</div>
                    <span className="benefit-text">{b}</span>
                  </div>
                ))}
              </div>

              {/* How the trial works */}
              <div className="reveal" style={{
                background: 'var(--surface)', border: '1px solid var(--copper-border)',
                borderRadius: 'var(--r-lg)', padding: 32, marginTop: 32,
              }}>
                <h3 className="h3" style={{ marginBottom: 10 }}>How the Free Trial Works</h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--muted)', lineHeight: 1.78 }}>
                  New members can experience the full platform — copy trading, live Zoom
                  sessions, and community access — before making any long-term commitment.
                  Simply reach out via WhatsApp, Telegram, or email to get started.
                </p>
              </div>
            </div>

            {/* Sticky CTA card */}
            <div className="join-cta-card reveal d2">
              <div className="join-cta-badge">Free to Start</div>
              <h3 className="join-cta-title">Start Your Free Trial</h3>
              <p className="join-cta-desc">
                New members can experience the platform, educational environment, and
                community support before fully committing — no cost, no risk.
              </p>

              <Link
                to="/contact"
                className="btn btn--primary btn--lg"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Join Now — It's Free <ArrowRight size={17} />
              </Link>

              <div className="join-cta-note">
                <Lock size={11} />
                No credit card required to get started
              </div>

              <div className="join-cta-divider" />

              <p style={{ fontSize: '0.875rem', color: 'var(--muted)', marginBottom: 12, lineHeight: 1.65 }}>
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
      </section>

    </div>
  );
}
