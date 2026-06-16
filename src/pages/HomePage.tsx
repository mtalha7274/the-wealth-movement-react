import { Link } from 'react-router-dom';
import {
  TrendingUp, Shield, Video, Users, Award, BookOpen,
  ArrowRight, ChevronRight, Globe,
} from 'lucide-react';

/* ── Ticker ─────────────────────────────────────── */
const TICKER = [
  'Copy Trading', 'Financial Education', 'Community Growth',
  'Leadership Development', 'Weekly Live Sessions', 'Free Trial Available',
  'BonChat Platform', '5-Person Teams', 'Wednesday Night Zoom',
  'Stock Market Access', 'Professor Daniel',
];

function Ticker() {
  const doubled = [...TICKER, ...TICKER];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {doubled.map((item, i) => (
          <span key={i} className="ticker__item">
            {item}
            <span className="ticker__dot" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Data ────────────────────────────────────────── */
const features = [
  { Icon: TrendingUp, title: 'Automated Copy Trading',  desc: 'Automatically replicate trades from experienced traders with a single click — no active management required.' },
  { Icon: Shield,     title: 'Beginner-Friendly Setup', desc: 'No prior trading experience needed. We guide every new member through onboarding with patience and clarity.' },
  { Icon: Video,      title: 'Weekly Live Sessions',    desc: 'Professor Daniel hosts live Wednesday Zoom sessions — market insights, strategy Q&A, and financial literacy.' },
  { Icon: Users,      title: 'Community Network',       desc: 'Connect with members at weekend events, interactive games, team-building sessions, and networking gatherings.' },
  { Icon: Award,      title: 'Leadership Growth',       desc: 'Develop real leadership through structured programs, mentorship, and team development opportunities.' },
  { Icon: BookOpen,   title: 'Financial Education',     desc: 'Build lasting financial literacy through ongoing education, trading knowledge, and structured learning resources.' },
];

const steps = [
  { n: '01', title: 'Join The Community',   desc: 'Register and connect with PO Wealth.' },
  { n: '02', title: 'Setup Your Account',   desc: 'Create and securely connect your trading account.' },
  { n: '03', title: 'Start Copy Trading',   desc: 'Automatically mirror trades from experienced traders.' },
  { n: '04', title: 'Learn & Grow',         desc: 'Join weekly trainings and community activities.' },
];

const testimonials = [
  {
    initial: 'M', name: 'Michael A.',
    text: 'PO Wealth changed how I approach investing entirely. The copy trading feature let me participate in markets while learning at my own pace — without the fear of making costly mistakes.',
  },
  {
    initial: 'S', name: 'Sarah K.',
    text: "Professor Daniel's Wednesday sessions are worth every minute. I've absorbed more in three months here than in years of trying to figure this out solo.",
  },
  {
    initial: 'D', name: 'Daniel T.',
    text: 'I was scared to start trading. The beginner-friendly setup and this community made it feel manageable from day one. My confidence has grown alongside my account.',
  },
];

export default function HomePage() {
  return (
    <div className="page-wrapper">

      {/* ── HERO ── */}
      <section className="hero">
        {/* Ambient blobs */}
        <div className="hero__blob hero__blob--a" />
        <div className="hero__blob hero__blob--b" />

        {/* Ripple circles */}
        <div className="hero__ripples">
          <div className="hero__ripple hero__ripple--1" />
          <div className="hero__ripple hero__ripple--2" />
          <div className="hero__ripple hero__ripple--3" />
        </div>

        {/* Grid */}
        <div className="hero__grid" />

        <div className="hero__content">
          <span className="eyebrow hero__eyebrow">PO Wealth · Financial Growth Community</span>

          <h1 className="hero__title">
            Build Wealth<br />
            <em>Together</em> Through<br />
            Smart Copy Trading
          </h1>

          <p className="hero__lead">
            Copy trading, live education, leadership growth, and a real community —
            all in one place to help you grow confidently in the financial markets.
          </p>

          <div className="hero__ctas">
            <Link to="/join-us" className="btn btn--primary btn--lg">
              Start Free Trial <ArrowRight size={17} />
            </Link>
            <Link to="/how-it-works" className="btn btn--outline btn--lg">
              How It Works
            </Link>
          </div>
        </div>

        <div className="hero__scroll">
          <span className="hero__scroll-label">Scroll</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* ── TICKER ── */}
      <Ticker />

      {/* ── FEATURES ── */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header text-center reveal">
            <span className="eyebrow">What We Offer</span>
            <h2 className="h2">More Than Just Copy Trading</h2>
            <div className="copper-rule copper-rule--center" />
            <p className="lead max-640" style={{ marginTop: 12 }}>
              We enable members to replicate trades from seasoned traders while building market
              knowledge in a beginner-friendly, community-driven environment.
            </p>
          </div>

          <div className="grid-3">
            {features.map(({ Icon, title, desc }, i) => (
              <div key={title} className={`feature-card reveal d${i + 1}`}>
                <div className="feature-icon"><Icon size={22} /></div>
                <div className="feature-title">{title}</div>
                <div className="feature-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section bg-surface">
        <div className="container">
          <div className="section-header text-center reveal">
            <span className="eyebrow">Simple Process</span>
            <h2 className="h2">How PO Wealth Works</h2>
            <div className="copper-rule copper-rule--center" />
            <p className="lead max-640" style={{ marginTop: 12 }}>
              Four straightforward steps to go from curious newcomer to active participant.
            </p>
          </div>

          <div className="steps-overview reveal d1">
            {steps.map(s => (
              <div key={s.n} className="step-item">
                <div className="step-circle">{s.n}</div>
                <div className="step-title">{s.title}</div>
                <p className="step-desc">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-xl reveal">
            <Link to="/how-it-works" className="btn btn--outline">
              Full Details <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── EDUCATION SPOTLIGHT ── */}
      <section className="section bg-white">
        <div className="container">
          <div className="edu-split">
            <div className="reveal">
              <span className="eyebrow">Live Education</span>
              <h2 className="h2">Weekly Live Zoom Sessions</h2>
              <div className="copper-rule" />
              <p className="lead" style={{ maxWidth: 480, marginBottom: 24 }}>
                Professor Daniel hosts live Wednesday night Zoom sessions covering market
                insights, trading concepts, Q&amp;A, and financial literacy — open to every
                member, no experience required.
              </p>
              <div className="edu-tags mb-xl">
                {['Market Insights','Trading Concepts','Live Q&A','Market Updates','Financial Literacy','Member Success'].map(t => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <Link to="/education" className="btn btn--primary">
                Explore Education <ArrowRight size={16} />
              </Link>
            </div>

            <div className="zoom-card reveal d2">
              <div className="zoom-card__header">
                <div className="zoom-card__hicon"><Video size={18} /></div>
                <div>
                  <div className="zoom-card__htitle">Weekly Zoom Session</div>
                  <div className="zoom-card__hsub">Every Wednesday Night</div>
                </div>
              </div>
              <div className="zoom-card__body">
                <div className="zoom-card__host">
                  <div className="zoom-card__avatar">PD</div>
                  <div>
                    <div className="zoom-card__hname">Professor Daniel</div>
                    <div className="zoom-card__hrole">Lead Educator &amp; Host</div>
                  </div>
                </div>
                <div className="zoom-card__topics">
                  <div className="zoom-card__topic-label">Session Topics</div>
                  {['Live Market Analysis', 'Trading Strategy Q&A', 'Member Success Stories', 'Financial Literacy Deep-Dives'].map(t => (
                    <div key={t} className="zoom-card__row">
                      <span className="zoom-card__row-dot" />
                      {t}
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 16, fontSize: '0.78rem', color: 'var(--dim)' }}>
                  <Globe size={13} />
                  Open to all PO Wealth members
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section bg-surface">
        <div className="container">
          <div className="section-header text-center reveal">
            <span className="eyebrow">Member Stories</span>
            <h2 className="h2">What Our Members Say</h2>
            <div className="copper-rule copper-rule--center" />
          </div>

          <div className="grid-3">
            {testimonials.map(({ initial, name, text }, i) => (
              <div key={name} className={`testimonial-card reveal d${i + 1}`}>
                <div className="stars">★★★★★</div>
                <p className="t-text">{text}</p>
                <div className="t-author">
                  <div className="t-avatar">{initial}</div>
                  <div>
                    <div className="t-name">{name}</div>
                    <div className="t-role">PO Wealth Member</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FOREST ── */}
      <section className="section--sm">
        <div className="container">
          <div className="cta-forest reveal">
            <span className="cta-forest__eyebrow">Limited Time Offer</span>
            <h2 className="cta-forest__title">
              Start Your Free Trial <em>Today</em>
            </h2>
            <p className="cta-forest__text">
              New members can explore the full platform — copy trading, live sessions, and
              community — before making any commitment. No cost, no risk.
            </p>
            <div className="cta-forest__btns">
              <Link to="/join-us" className="btn btn--white btn--lg">
                Join PO Wealth Free <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn--white-outline btn--lg">
                Talk to Us First
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
