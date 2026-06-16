import { Link } from 'react-router-dom';
import { UserPlus, Shield, TrendingUp, GraduationCap, Clock, Banknote, RefreshCw, AlertTriangle, ArrowRight } from 'lucide-react';

const steps = [
  {
    Icon: UserPlus, num: '01',
    title: 'Join The Community',
    desc: 'Register and connect with PO Wealth. Get access to the platform, community channels, and introductory resources to get you fully oriented from day one.',
  },
  {
    Icon: Shield, num: '02',
    title: 'Setup Your Trading Account',
    desc: 'Create and securely connect your trading account. Our team walks you through the BonChat setup process step by step to ensure everything is properly linked.',
  },
  {
    Icon: TrendingUp, num: '03',
    title: 'Start Copy Trading',
    desc: 'Automatically mirror trades from experienced traders. Once connected, the copy trading system works for you — no active decision-making or monitoring required.',
  },
  {
    Icon: GraduationCap, num: '04',
    title: 'Learn & Grow',
    desc: 'Attend weekly Wednesday Zoom trainings with Professor Daniel, engage with the community, and develop your financial knowledge and leadership over time.',
  },
];

const info = [
  { Icon: Clock,      label: 'Market Hours',    value: '9:30AM – 3:00PM ET', note: 'Monday through Friday' },
  { Icon: Banknote,   label: 'Withdrawals',     value: '9AM – 8PM Daily',    note: '7 days a week · 30–60 min processing' },
  { Icon: RefreshCw,  label: 'Platform',        value: 'BonChat App',        note: 'Beginner trading available' },
  { Icon: TrendingUp, label: 'Market Type',     value: 'Stock Market',       note: 'NYSE — not cryptocurrency' },
];

export default function HowItWorksPage() {
  return (
    <div className="page-wrapper">

      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">The Process</span>
          <h1 className="h1 max-760">
            How <span className="text-copper" style={{ fontStyle: 'italic' }}>PO Wealth</span> Works
          </h1>
          <div className="copper-rule copper-rule--center" />
          <p className="lead max-640" style={{ marginTop: 12 }}>
            Four straightforward steps to go from curious newcomer to active, confident participant.
          </p>
        </div>
      </section>

      {/* ── STEPS ── */}
      <section className="section bg-white">
        <div className="container">
          <div className="stack stack--lg max-760">
            {steps.map(({ Icon, num, title, desc }, i) => (
              <div key={num} className={`process-step reveal d${i + 1}`}>
                <div className="process-num">{num}</div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                    <Icon size={19} style={{ color: 'var(--copper)', flexShrink: 0 }} />
                    <h3 className="process-title" style={{ margin: 0 }}>{title}</h3>
                  </div>
                  <p className="process-desc">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORM INFO ── */}
      <section className="section bg-surface">
        <div className="container">
          <div className="section-header text-center reveal">
            <span className="eyebrow">Platform Details</span>
            <h2 className="h2">Trading Information</h2>
            <div className="copper-rule copper-rule--center" />
            <p className="lead max-640" style={{ marginTop: 12 }}>
              Everything you need to know to participate with full confidence.
            </p>
          </div>

          <div className="info-grid max-760">
            {info.map(({ Icon, label, value, note }, i) => (
              <div key={label} className={`info-card reveal d${i + 1}`}>
                <div className="info-card__icon"><Icon size={22} /></div>
                <div className="info-card__label">{label}</div>
                <div className="info-card__value">{value}</div>
                <div className="info-card__note">{note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INCOME OPPORTUNITY ── */}
      <section className="section--sm bg-white">
        <div className="container max-760">
          <div className="reveal" style={{
            background: 'var(--surface)', border: '1px solid var(--copper-border)',
            borderRadius: 'var(--r-lg)', padding: 40,
          }}>
            <span className="eyebrow">Bonus Opportunity</span>
            <h3 className="h3" style={{ marginBottom: 12 }}>Income Through Team Development</h3>
            <p style={{ fontSize: '0.9375rem', color: 'var(--muted)', lineHeight: 1.78 }}>
              Beyond copy trading, members have the opportunity to earn additional income by
              building and developing a team within the PO Wealth community. As your team grows,
              so does your earning potential through the 5-person duplication system.
            </p>
          </div>
        </div>
      </section>

      {/* ── DISCLAIMER ── */}
      <section className="section--sm bg-surface">
        <div className="container max-760">
          <div className="disclaimer reveal">
            <div className="disclaimer__title">
              <AlertTriangle size={13} /> Risk Disclaimer
            </div>
            <p className="disclaimer__text">
              Trading involves financial risk. Past performance does not guarantee future results.
              Members are encouraged to participate responsibly and only invest what they can afford.
              PO Wealth provides education and community support — not financial advice. Income
              opportunity through team development is available for members who choose to participate
              in the referral program.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section--sm bg-white">
        <div className="container">
          <div className="cta-forest reveal">
            <h2 className="cta-forest__title">Ready to Get Started?</h2>
            <p className="cta-forest__text">
              Join PO Wealth and begin your copy trading journey with a completely free trial.
            </p>
            <Link to="/join-us" className="btn btn--white btn--lg">
              Start Free Trial <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
