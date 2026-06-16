import { Link } from 'react-router-dom';
import {
  TrendingUp, Shield, Video, Users, Award, BookOpen,
  ArrowRight, ChevronRight, Globe, Zap,
} from 'lucide-react';

const features = [
  {
    icon: TrendingUp,
    title: 'Automated Copy Trading',
    desc: 'Automatically replicate trades from experienced traders with just one click — no active management required.',
  },
  {
    icon: Shield,
    title: 'Beginner-Friendly Setup',
    desc: 'No prior trading experience needed. We guide you through every step with clarity and support.',
  },
  {
    icon: Video,
    title: 'Weekly Live Zoom Sessions',
    desc: 'Professor Daniel hosts live Wednesday night sessions covering market insights, Q&A, and financial literacy.',
  },
  {
    icon: Users,
    title: 'Community Network',
    desc: 'Connect with like-minded members at gatherings, weekend events, games, and team-building activities.',
  },
  {
    icon: Award,
    title: 'Leadership Growth',
    desc: 'Develop real leadership skills through dedicated programs, mentorship, and team development opportunities.',
  },
  {
    icon: BookOpen,
    title: 'Financial Education',
    desc: 'Grow your financial literacy with ongoing education, trading knowledge, and structured learning resources.',
  },
];

const steps = [
  { num: '01', title: 'Join The Community', desc: 'Register and connect with PO Wealth.' },
  { num: '02', title: 'Setup Your Account', desc: 'Create and securely connect your trading account.' },
  { num: '03', title: 'Start Copy Trading', desc: 'Automatically mirror trades from experienced traders.' },
  { num: '04', title: 'Learn & Grow', desc: 'Participate in weekly trainings and community activities.' },
];

const testimonials = [
  {
    text: 'PO Wealth completely changed how I approach investing. The copy trading feature made it easy to participate in the markets while I continued learning at my own pace.',
    name: 'Michael A.',
    initial: 'M',
  },
  {
    text: "The Wednesday Zoom sessions with Professor Daniel are incredibly valuable. I've learned more in a few months here than years of trying to figure this out on my own.",
    name: 'Sarah K.',
    initial: 'S',
  },
  {
    text: "I was nervous about trading at first, but the beginner-friendly setup and supportive community made everything simple. I'm growing my wealth and my confidence.",
    name: 'Daniel T.',
    initial: 'D',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero__bg">
          <div className="hero__orb hero__orb--1" />
          <div className="hero__orb hero__orb--2" />
          <div className="hero__orb hero__orb--3" />
          <div className="hero__grid" />
        </div>

        <div className="container">
          <div className="hero__layout">
            {/* Left: content */}
            <div>
              <div className="eyebrow">Welcome to PO Wealth</div>
              <h1 className="hero__title">
                Build Wealth Together Through{' '}
                <span className="text-gold">Smart Copy Trading</span>
              </h1>
              <p className="hero__subtitle">
                PO Wealth combines copy trading, financial education, leadership growth, and a
                supportive community to help members grow confidently in the financial markets.
              </p>
              <div className="hero__cta">
                <Link to="/join-us" className="btn btn--gold btn--lg">
                  Start Free Trial <ArrowRight size={18} />
                </Link>
                <Link to="/how-it-works" className="btn btn--outline btn--lg">
                  How It Works
                </Link>
              </div>
            </div>

            {/* Right: dashboard card */}
            <div className="hero__visual">
              <div className="hero__card">
                <div className="hero__card-header">
                  <span className="hero__card-dot" />
                  <span className="hero__card-label">PO Wealth Platform</span>
                  <span className="hero__card-badge">Live</span>
                </div>
                <div className="hero__card-body">
                  <div className="hero__card-row">
                    <span className="hero__card-row-label">Copy Trading Status</span>
                    <span className="hero__card-row-value">● Active</span>
                  </div>
                  <div className="hero__card-row">
                    <span className="hero__card-row-label">Market</span>
                    <span className="hero__card-row-label" style={{ color: 'var(--text)' }}>Stock Market (NYSE)</span>
                  </div>

                  <div className="hero__card-divider" />

                  {['Weekly Zoom Sessions', 'Community Support', 'Financial Education', 'Leadership Programs', 'Free Trial Available'].map(f => (
                    <div key={f} className="hero__card-feature">
                      <span className="hero__card-check">✓</span>
                      <span>{f}</span>
                    </div>
                  ))}

                  <div className="hero__card-footer">
                    <Zap size={12} />
                    <span>Powered by BonChat · Mon–Fri 9:30AM–3PM ET</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="section bg-surface">
        <div className="container">
          <div className="section-header text-center">
            <div className="eyebrow">What We Offer</div>
            <h2 className="section-title">More Than Just Copy Trading</h2>
            <div className="gold-divider" />
            <p className="section-subtitle">
              We enable members to automatically replicate trades from seasoned traders while
              gaining market knowledge in a beginner-friendly, community-oriented environment.
            </p>
          </div>
          <div className="grid grid-3">
            {features.map(f => (
              <div key={f.title} className="feature-card">
                <div className="feature-icon">
                  <f.icon size={22} />
                </div>
                <div className="feature-title">{f.title}</div>
                <div className="feature-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <div className="eyebrow">Simple Process</div>
            <h2 className="section-title">How PO Wealth Works</h2>
            <div className="gold-divider" />
            <p className="section-subtitle">Simple steps to get started confidently.</p>
          </div>

          <div className="steps">
            {steps.map(s => (
              <div key={s.num} className="step">
                <div className="step__number">{s.num}</div>
                <h3 className="step__title">{s.title}</h3>
                <p className="step__desc">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-xl">
            <Link to="/how-it-works" className="btn btn--outline">
              Full Details <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── EDUCATION SPOTLIGHT ── */}
      <section className="section bg-surface">
        <div className="container">
          <div className="education-spotlight">
            <div>
              <div className="eyebrow">Live Education</div>
              <h2 className="section-title">Weekly Live Zoom Sessions</h2>
              <div className="gold-divider" style={{ margin: '20px 0' }} />
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.75', marginBottom: '24px', fontSize: '1.0625rem' }}>
                Professor Daniel hosts live Wednesday night Zoom sessions covering market insights,
                trading concepts, Q&amp;A, and financial literacy — open to all PO Wealth members,
                no experience required.
              </p>
              <div className="education-topics mb-xl">
                {['Market Insights', 'Trading Concepts', 'Live Q&A', 'Market Updates', 'Financial Literacy', 'Member Success'].map(t => (
                  <span key={t} className="topic-tag">{t}</span>
                ))}
              </div>
              <Link to="/education" className="btn btn--gold">
                Learn More <ArrowRight size={16} />
              </Link>
            </div>

            <div className="zoom-card">
              <div className="zoom-card__header">
                <Video size={20} className="zoom-card__icon" />
                <div>
                  <div className="zoom-card__title">Weekly Zoom Session</div>
                  <div className="zoom-card__subtitle">Every Wednesday Night</div>
                </div>
              </div>
              <div className="zoom-card__host">
                <div className="zoom-card__avatar">PD</div>
                <div>
                  <div className="zoom-card__host-name">Professor Daniel</div>
                  <div className="zoom-card__host-role">Lead Educator &amp; Host</div>
                </div>
              </div>
              <div className="zoom-card__topics">
                <div className="zoom-card__topic-label">Session Topics</div>
                {['Live Market Analysis', 'Trading Strategy Q&A', 'Member Success Stories', 'Financial Literacy Deep-Dives'].map(t => (
                  <div key={t} className="zoom-card__topic-item">
                    <span className="zoom-card__bullet">◆</span>
                    <span>{t}</span>
                  </div>
                ))}
              </div>
              <div className="zoom-card__footer">
                <Globe size={13} />
                <span>Open to all PO Wealth members · No experience required</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <div className="eyebrow">Member Stories</div>
            <h2 className="section-title">What Our Members Say</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-3">
            {testimonials.map(t => (
              <div key={t.name} className="testimonial">
                <div className="stars">★★★★★</div>
                <p className="testimonial__text">{t.text}</p>
                <div className="testimonial__author">
                  <div className="testimonial__avatar">{t.initial}</div>
                  <div>
                    <div className="testimonial__name">{t.name}</div>
                    <div className="testimonial__role">PO Wealth Member</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="section--sm">
        <div className="container">
          <div className="cta-banner">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Limited Time Offer</div>
            <h2 className="cta-banner__title">Start Your Free Trial Today</h2>
            <p className="cta-banner__text">
              New members can experience the platform, educational environment, and community
              support before fully committing — no cost, no risk.
            </p>
            <Link to="/join-us" className="btn btn--gold btn--xl">
              Join PO Wealth Free <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
