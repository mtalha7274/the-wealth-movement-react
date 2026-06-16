import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';
import {
  TrendingUp, Shield, Video, Users, Award, BookOpen,
  ArrowRight, Globe,
} from 'lucide-react';

const heroFeatures: {
  key: string;
  modifier: string;
  label: string;
  title: string;
  text: string;
  Icon: LucideIcon;
  meta: string;
}[] = [
  {
    key: 'copy',
    modifier: 'orbit-card--copy',
    label: 'Copy Trading',
    title: 'Mirror expert moves automatically.',
    text: 'Start with a guided setup and let the system follow active trading signals.',
    Icon: TrendingUp,
    meta: 'BonChat Platform',
  },
  {
    key: 'team',
    modifier: 'orbit-card--team',
    label: 'Community',
    title: 'Teams that keep you moving.',
    text: 'A five-person structure creates accountability, learning, and real support.',
    Icon: Users,
    meta: 'Team Growth',
  },
  {
    key: 'education',
    modifier: 'orbit-card--education',
    label: 'Education',
    title: 'Financial literacy without confusion.',
    text: 'Simple resources and live walkthroughs help new members understand the market.',
    Icon: BookOpen,
    meta: 'Beginner Friendly',
  },
  {
    key: 'session',
    modifier: 'orbit-card--session',
    label: 'Live Sessions',
    title: 'Wednesday Zoom with Professor Daniel.',
    text: 'Weekly market insight, Q&A, and strategy for every experience level.',
    Icon: Video,
    meta: 'Every Week',
  },
];

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
  const mobileRailRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const rail = mobileRailRef.current;
    if (!rail) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mobileMq = window.matchMedia('(max-width: 1080px)');

    let currentIndex = 0;
    let isPaused = false;
    let isAutoScrolling = false;
    let resumeTimeout: number | undefined;
    let scrollSyncTimeout: number | undefined;
    let intervalId: number | undefined;

    const getCards = () => Array.from(rail.querySelectorAll<HTMLElement>('.hero-mobile__card'));

    const getCardScrollLeft = (card: HTMLElement) => {
      const track = card.parentElement;
      if (!track) return 0;
      return card.offsetLeft - track.offsetLeft;
    };

    const syncIndexToScroll = () => {
      const cards = getCards();
      if (!cards.length) return;

      currentIndex = cards.reduce((closestIndex, card, index) => {
        const closestDistance = Math.abs(getCardScrollLeft(cards[closestIndex]) - rail.scrollLeft);
        const cardDistance = Math.abs(getCardScrollLeft(card) - rail.scrollLeft);
        return cardDistance < closestDistance ? index : closestIndex;
      }, 0);
    };

    const pauseAutoScroll = () => {
      if (isAutoScrolling) return;

      isPaused = true;
      window.clearTimeout(resumeTimeout);
      resumeTimeout = window.setTimeout(() => {
        syncIndexToScroll();
        isPaused = false;
      }, 5000);
    };

    const scrollToIndex = (index: number) => {
      const cards = getCards();
      if (!cards.length || !mobileMq.matches) return;

      currentIndex = ((index % cards.length) + cards.length) % cards.length;
      isAutoScrolling = true;
      rail.scrollTo({ left: getCardScrollLeft(cards[currentIndex]), behavior: 'smooth' });
      window.setTimeout(() => {
        isAutoScrolling = false;
      }, 600);
    };

    const tick = () => {
      if (!isPaused && mobileMq.matches && !reducedMotion.matches) {
        scrollToIndex(currentIndex + 1);
      }
    };

    const stopAutoScroll = () => {
      window.clearInterval(intervalId);
      intervalId = undefined;
    };

    const startAutoScroll = () => {
      stopAutoScroll();
      if (!mobileMq.matches || reducedMotion.matches) return;
      syncIndexToScroll();
      intervalId = window.setInterval(tick, 3500);
    };

    const onScroll = () => {
      window.clearTimeout(scrollSyncTimeout);
      scrollSyncTimeout = window.setTimeout(syncIndexToScroll, 80);
      if (!isAutoScrolling) pauseAutoScroll();
    };

    const onLayoutChange = () => {
      if (mobileMq.matches) startAutoScroll();
      else stopAutoScroll();
    };

    rail.addEventListener('pointerdown', pauseAutoScroll, { passive: true });
    rail.addEventListener('touchstart', pauseAutoScroll, { passive: true });
    rail.addEventListener('wheel', pauseAutoScroll, { passive: true });
    rail.addEventListener('scroll', onScroll, { passive: true });
    mobileMq.addEventListener('change', onLayoutChange);
    reducedMotion.addEventListener('change', onLayoutChange);

    onLayoutChange();

    return () => {
      stopAutoScroll();
      window.clearTimeout(resumeTimeout);
      window.clearTimeout(scrollSyncTimeout);
      rail.removeEventListener('pointerdown', pauseAutoScroll);
      rail.removeEventListener('touchstart', pauseAutoScroll);
      rail.removeEventListener('wheel', pauseAutoScroll);
      rail.removeEventListener('scroll', onScroll);
      mobileMq.removeEventListener('change', onLayoutChange);
      reducedMotion.removeEventListener('change', onLayoutChange);
    };
  }, []);

  return (
    <div className="page-wrapper">

      {/* ══ HERO ══════════════════════════════════════════ */}
      <section className="hero">

        <div className="hero__left">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Live education · Copy trading · Community<span className="hero__badge-growth"> growth</span>
          </div>

          <h1 className="hero__title">
            <span className="hero__line">
              <span>The <em className="hero__title-accent">Wealth</em> Movement.</span>
            </span>
          </h1>

          <p className="hero__lead">
            A refined financial growth community where beginner-friendly copy trading,
            weekly live education, and real accountability work together from day one.
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

        <div className="hero__right">
          <div className="hero-orbit hero-orbit--desktop" aria-label="PO Wealth platform highlights">
            <div className="orbit-core">
              <div>
                <span className="orbit-core__kicker">PO Wealth System</span>
                <div className="orbit-core__title">Learn. Copy. Grow.</div>
                <p className="orbit-core__text">
                  One guided environment for market access, education, and community momentum.
                </p>
              </div>
            </div>

            {heroFeatures.map(({ key, modifier, label, title, text, Icon, meta }) => (
              <div key={key} className={`orbit-card-wrap ${modifier}`} tabIndex={0}>
                <div className="orbit-card">
                  <div className="orbit-card__label">{label}</div>
                  <div className="orbit-card__title">{title}</div>
                  <p className="orbit-card__text">{text}</p>
                  <div className="orbit-card__meta"><Icon size={15} /> {meta}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="hero-mobile" aria-label="PO Wealth mobile highlights">
            <div className="hero-mobile__featured">
              <span className="hero-mobile__kicker">PO Wealth System</span>
              <div className="hero-mobile__title">Learn. Copy. Grow.</div>
              <p className="hero-mobile__text">
                One guided environment for market access, education, and community momentum.
              </p>
            </div>

            <p className="hero-mobile__hint">Swipe through the platform</p>

            <div className="hero-mobile__rail-wrap" ref={mobileRailRef}>
              <div className="hero-mobile__rail">
              {heroFeatures.map(({ key, label, title, text, Icon, meta }) => (
                <div key={key} className="hero-mobile__card">
                  <div className="hero-mobile__card-label">{label}</div>
                  <div className="hero-mobile__card-title">{title}</div>
                  <p className="hero-mobile__card-text">{text}</p>
                  <div className="hero-mobile__card-meta"><Icon size={15} /> {meta}</div>
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FEATURES — BENTO GRID ══════════════════════ */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header reveal">
            <span className="eyebrow">What We Offer</span>
            <h2 className="h2">
              A Complete Growth System,{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--copper)' }}>Not Just Signals</em>
            </h2>
            <div className="copper-rule" />
            <p className="lead" style={{ maxWidth: 560, marginTop: 12 }}>
              Trading access, live education, community structure, and leadership development
              designed to make growth feel clear instead of chaotic.
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
