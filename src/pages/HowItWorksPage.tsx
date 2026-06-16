import { Link } from 'react-router-dom';
import {
  UserPlus, Shield, TrendingUp, GraduationCap,
  Clock, Banknote, RefreshCw, AlertTriangle, ArrowRight,
} from 'lucide-react';

const steps = [
  {
    Icon: UserPlus,
    num: '01',
    title: 'Join The Community',
    desc: 'Register and connect with PO Wealth. Get access to our platform, community channels, and introductory resources to get you fully oriented from day one.',
  },
  {
    Icon: Shield,
    num: '02',
    title: 'Setup Your Trading Account',
    desc: 'Create and securely connect your trading account. Our team walks you through the BonChat setup process step by step to ensure everything is properly linked.',
  },
  {
    Icon: TrendingUp,
    num: '03',
    title: 'Start Copy Trading',
    desc: 'Automatically mirror trades from experienced traders. Once your account is connected, the copy trading system works for you — no active decision-making required.',
  },
  {
    Icon: GraduationCap,
    num: '04',
    title: 'Learn & Grow',
    desc: 'Participate in weekly Wednesday Zoom trainings with Professor Daniel, engage with the community, and build your own financial knowledge and leadership skills over time.',
  },
];

const tradingInfo = [
  {
    Icon: Clock,
    label: 'Market Hours',
    value: '9:30AM – 3:00PM ET',
    note: 'Monday through Friday',
  },
  {
    Icon: Banknote,
    label: 'Withdrawals',
    value: '9AM – 8PM Daily',
    note: '7 days a week · 30–60 min processing',
  },
  {
    Icon: RefreshCw,
    label: 'Platform',
    value: 'BonChat App',
    note: 'Beginner trading available',
  },
  {
    Icon: TrendingUp,
    label: 'Market Type',
    value: 'Stock Market',
    note: 'NYSE — not cryptocurrency',
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">The Process</div>
          <h1 className="display-title max-800">
            How <span className="text-gold">PO Wealth</span> Works
          </h1>
          <div className="gold-divider" />
          <p className="section-subtitle">Simple steps to get started confidently.</p>
        </div>
      </section>

      {/* ── STEPS ── */}
      <section className="section bg-surface">
        <div className="container">
          <div className="stack stack--lg max-800">
            {steps.map(({ Icon, num, title, desc }) => (
              <div key={num} className="process-step">
                <div className="process-step__num">{num}</div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <Icon size={20} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                    <h3 className="process-step__title" style={{ margin: 0 }}>{title}</h3>
                  </div>
                  <p className="process-step__desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORM INFO ── */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <div className="eyebrow">Platform Details</div>
            <h2 className="section-title">Trading Information</h2>
            <div className="gold-divider" />
            <p className="section-subtitle">
              Key details about how the platform operates so you can participate with full confidence.
            </p>
          </div>

          <div className="info-grid max-800">
            {tradingInfo.map(({ Icon, label, value, note }) => (
              <div key={label} className="info-card">
                <div className="info-card__icon">
                  <Icon size={24} />
                </div>
                <div className="info-card__label">{label}</div>
                <div className="info-card__value">{value}</div>
                <div className="info-card__note">{note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INCOME OPPORTUNITY ── */}
      <section className="section--sm bg-surface">
        <div className="container max-800">
          <div
            className="card"
            style={{ borderColor: 'var(--gold-border)', background: 'rgba(212,175,55,0.05)' }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-serif)', fontSize: '1.375rem',
                fontWeight: 700, marginBottom: '12px',
              }}
            >
              Income Through Team Development
            </h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.75', fontSize: '0.9375rem' }}>
              Beyond copy trading, members have the opportunity to earn additional income by
              building and developing a team within the PO Wealth community. As your team grows,
              so does your earning potential through the duplication system.
            </p>
          </div>
        </div>
      </section>

      {/* ── DISCLAIMER ── */}
      <section className="section--sm">
        <div className="container max-800">
          <div className="disclaimer">
            <div className="disclaimer__title">
              <AlertTriangle size={14} />
              Risk Disclaimer
            </div>
            <p className="disclaimer__text">
              Trading involves financial risk. Past performance does not guarantee future results.
              Members are encouraged to participate responsibly and only invest what they can
              afford. PO Wealth provides education and community support — not financial advice.
              Income opportunity through team development is available for members who choose to
              participate in the referral program.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section--sm bg-surface">
        <div className="container">
          <div className="cta-banner">
            <h2 className="cta-banner__title">Ready to Get Started?</h2>
            <p className="cta-banner__text">
              Join PO Wealth and begin your copy trading journey with a completely free trial.
            </p>
            <Link to="/join-us" className="btn btn--gold btn--lg">
              Start Free Trial <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
