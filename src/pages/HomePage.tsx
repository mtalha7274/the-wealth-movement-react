import { Link } from 'react-router-dom';
import {
  TrendingUp, Shield, Video, Users, Award, BookOpen,
  ArrowRight, Globe,
} from 'lucide-react';

/* ── Ticker ─────────────────────────────────────── */
const TICKER_ITEMS = [
  'Copy Trading', 'Financial Education', 'Community Growth',
  'Leadership Development', 'Weekly Live Sessions', 'Free Trial Available',
  'BonChat Platform', '5-Person Teams', 'Wednesday Night Zoom',
  'Stock Market Access', 'Professor Daniel',
];

function Ticker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];
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

/* ── Testimonials data ─────────────────────────── */
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

      {/* ══ HERO ══════════════════════════════════════════ */}
      <section className="hero">

        {/* Left — editorial typography column */}
        <div className="hero__left">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            PO Wealth · Financial Growth Community
          </div>

          <h1 className="hero__title">
            <span className="hero__line"><span>Build Wealth,</span></span>
            <span className="hero__line">
              <span>Grow <em className="hero__title-accent">Together.</em></span>
            </span>
          </h1>

          <p className="hero__lead">
            Copy trading, live education, and a genuine community — all in one place
            so you can grow confidently in the financial markets, starting free.
          </p>

          <div className="hero__ctas">
            <Link to="/join-us" className="btn btn--primary btn--lg">
              Start Free Trial <ArrowRight size={17} />
            </Link>
            <Link to="/how-it-works" className="btn btn--outline btn--lg">
              How It Works
            </Link>
          </div>

          <div className="hero__scroll">
            <span className="hero__scroll-label">Scroll</span>
            <div className="hero__scroll-line" />
          </div>
        </div>

        {/* Right — forest green panel with floating platform cards */}
        <div className="hero__right">
          <div className="hero-cards">

            {/* Back card — faintest, most tilted */}
            <div className="hero-pcard hero-pcard--back">
              <div className="pcard-header">
                <span className="pcard-tag">Community</span>
              </div>
              <div className="pcard-name">PO Wealth</div>
              <div className="pcard-sub">Financial Growth Community</div>
            </div>

            {/* Mid card — zoom session */}
            <div className="hero-pcard hero-pcard--mid">
              <div className="pcard-zoom-top">
                <div className="pcard-zoom-icon"><Video size={14} /></div>
                <div>
                  <div className="pcard-zoom-name">Wednesday Zoom</div>
                  <div className="pcard-zoom-when">Every week · 8 PM</div>
                </div>
              </div>
              <div className="pcard-zoom-body">
                Live session with Professor Daniel — market insights, Q&amp;A, and financial strategy.
              </div>
            </div>

            {/* Front card — copy trading, most detail */}
            <div className="hero-pcard hero-pcard--front">
              <div className="pcard-header">
                <span className="pcard-live" />
                <span className="pcard-tag"><strong>Copy Trading</strong> · Active</span>
              </div>
              <div className="pcard-name">Auto Copy Trading</div>
              <div className="pcard-sub">BonChat Platform</div>
              <div className="pcard-list">
                {['1-click setup', 'Auto-mirrors expert trades', 'No experience needed', 'Free to start'].map(item => (
                  <div key={item} className="pcard-item">
                    <span className="pcard-check">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ TICKER ══════════════════════════════════════ */}
      <Ticker />

      {/* ══ FEATURES — BENTO GRID ══════════════════════ */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header reveal">
            <span className="eyebrow">What We Offer</span>
            <h2 className="h2">
              More Than Just{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--copper)' }}>Copy Trading</em>
            </h2>
            <div className="copper-rule" />
            <p className="lead" style={{ maxWidth: 500, marginTop: 12 }}>
              A complete financial growth ecosystem — trading, education, community,
              and leadership in one place.
            </p>
          </div>

          <div className="bento">
            {/* ── Main hero card — Copy Trading, 2×2 ── */}
            <div className="bcard bcard--dark bcard--main reveal d1">
              <div className="bcard-icon"><TrendingUp size={22} /></div>
              <div className="bcard-title">Automated Copy Trading</div>
              <div className="bcard-desc">
                Mirror trades from experienced investors with a single click on the BonChat
                platform — no active management required, no guesswork.
              </div>
              <div className="bcard-divider" />
              <div className="bcard-stats">
                <div>
                  <div className="bcard-stat-label">Setup Time</div>
                  <div className="bcard-stat-val">5 min</div>
                </div>
                <div>
                  <div className="bcard-stat-label">Experience</div>
                  <div className="bcard-stat-val">None</div>
                </div>
              </div>
              <div className="bcard-checks">
                {[
                  '1-click setup on BonChat',
                  'Auto-mirrors expert trades in real time',
                  'No active management needed',
                  'Start with a free trial',
                ].map(c => (
                  <div key={c} className="bcard-check">
                    <span className="bcard-check-mark">✓</span>
                    {c}
                  </div>
                ))}
              </div>
            </div>

            {/* ── Row 1 col 3 — Beginner Friendly ── */}
            <div className="bcard reveal d2">
              <div className="bcard-icon"><Shield size={20} /></div>
              <div className="bcard-title">Beginner Friendly</div>
              <div className="bcard-desc">
                No prior trading experience required. We guide every new member through
                setup with patience and clarity.
              </div>
            </div>

            {/* ── Row 2 col 3 — Zoom Sessions ── */}
            <div className="bcard reveal d3">
              <div className="bcard-icon"><Video size={20} /></div>
              <div className="bcard-title">Live Zoom Sessions</div>
              <div className="bcard-desc">
                Professor Daniel hosts Wednesday night sessions — market insights,
                trading Q&amp;A, and financial literacy for every level.
              </div>
            </div>

            {/* ── Row 3 col 1 — Community ── */}
            <div className="bcard reveal d2">
              <div className="bcard-icon"><Users size={20} /></div>
              <div className="bcard-title">Community Network</div>
              <div className="bcard-desc">
                Weekend events, team games, networking gatherings, and a genuine
                community that grows together.
              </div>
            </div>

            {/* ── Row 3 col 2 — Leadership ── */}
            <div className="bcard reveal d3">
              <div className="bcard-icon"><Award size={20} /></div>
              <div className="bcard-title">Leadership Growth</div>
              <div className="bcard-desc">
                Structured programs, mentorship, and team development to build
                real leadership skills alongside your wealth.
              </div>
            </div>

            {/* ── Row 3 col 3 — Education ── */}
            <div className="bcard reveal d4">
              <div className="bcard-icon"><BookOpen size={20} /></div>
              <div className="bcard-title">Financial Education</div>
              <div className="bcard-desc">
                Build lasting financial literacy through ongoing education, trading
                knowledge, and structured resources.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ EDUCATION SPOTLIGHT ════════════════════════ */}
      <section className="section bg-surface">
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
                {['Market Insights', 'Trading Concepts', 'Live Q&A', 'Market Updates', 'Financial Literacy', 'Member Success'].map(t => (
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
                <div className="zoom-card__topic-label">Session Topics</div>
                {['Live Market Analysis', 'Trading Strategy Q&A', 'Member Success Stories', 'Financial Literacy Deep-Dives'].map(t => (
                  <div key={t} className="zoom-card__row">
                    <span className="zoom-card__row-dot" />
                    {t}
                  </div>
                ))}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 16, fontSize: '0.78rem', color: 'var(--dim)' }}>
                  <Globe size={13} />
                  Open to all PO Wealth members
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ════════════════════════════════ */}
      <section className="section bg-white">
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

      {/* ══ CTA FOREST ══════════════════════════════════ */}
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
