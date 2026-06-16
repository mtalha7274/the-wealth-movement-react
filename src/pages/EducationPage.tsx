import { Link } from 'react-router-dom';
import { CheckCircle, Video, Calendar, Users, ArrowRight } from 'lucide-react';
import poWealthLogo from '../assets/po-wealth-sharing.png';
import poWealthInfo from '../assets/po-wealth-sharing-info.png';

const benefits = [
  'Quick response to changes in the market',
  'Efficient, flexible operations',
  'Full utilization of member skills and experience',
  'Enhanced creativity and execution',
  'Faster decision-making and greater agility',
  'Stronger trust and team cohesion',
];

const activities = ['Weekend Events', 'Interactive Games', 'Leadership Programs', 'Team Building', 'Networking Events', 'Community Gatherings'];

export default function EducationPage() {
  return (
    <div className="page-wrapper">

      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Our Education System</span>
          <h1 className="h1 max-760">
            1-Click Copy Trading:{' '}
            <span className="text-copper" style={{ fontStyle: 'italic' }}>
              A 5-Person Duplication System
            </span>
          </h1>
          <div className="copper-rule copper-rule--center" />
          <p className="lead max-640" style={{ marginTop: 12 }}>
            A smarter way to learn, trade, and grow — structured in teams for maximum impact.
          </p>
        </div>
      </section>

      {/* ── FIVE-PERSON TEAM ── */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header text-center reveal">
            <span className="eyebrow">The Framework</span>
            <h2 className="h2">What Is a Five-Person Team?</h2>
            <div className="copper-rule copper-rule--center" />
            <p className="lead max-640" style={{ marginTop: 12 }}>
              Five members and one leader — a highly effective structure for learning,
              collaboration, and market participation.
            </p>
          </div>

          <div className="grid-2" style={{ gap: 32, alignItems: 'start' }}>
            {/* Benefits card */}
            <div className="reveal" style={{
              background: 'var(--white)', border: '1px solid var(--border)',
              borderRadius: 'var(--r-lg)', padding: 40,
              boxShadow: 'var(--shadow-sm)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
                <div className="focus-icon" style={{ flexShrink: 0, margin: 0 }}>
                  <Users size={20} />
                </div>
                <h3 className="h3" style={{ margin: 0 }}>Team Benefits</h3>
              </div>
              <div className="stack stack--md">
                {benefits.map(b => (
                  <div key={b} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                    <CheckCircle size={18} style={{ color: 'var(--forest)', flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: '0.9375rem', color: 'var(--muted)', lineHeight: 1.65 }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column */}
            <div className="stack stack--lg reveal d2">
              {/* Zoom card */}
              <div style={{
                background: 'var(--white)', border: '1px solid var(--border)',
                borderRadius: 'var(--r-lg)', padding: 32, boxShadow: 'var(--shadow-sm)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <div className="focus-icon" style={{ flexShrink: 0, margin: 0 }}><Video size={19} /></div>
                  <span className="eyebrow" style={{ margin: 0 }}>Weekly Sessions</span>
                </div>
                <h3 className="h3" style={{ marginBottom: 12 }}>Live Wednesday Night Zoom</h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--muted)', lineHeight: 1.72, marginBottom: 16 }}>
                  Professor Daniel hosts live sessions every Wednesday covering market analysis,
                  trading strategies, Q&amp;A, and financial literacy. Open to all members.
                </p>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  paddingTop: 14, borderTop: '1px solid var(--border)',
                  fontSize: '0.8rem', color: 'var(--copper)', fontWeight: 500,
                }}>
                  <Calendar size={14} />
                  Every Wednesday · All PO Wealth Members
                </div>
              </div>

              {/* Community activities */}
              <div style={{
                background: 'var(--white)', border: '1px solid var(--border)',
                borderRadius: 'var(--r-lg)', padding: 32, boxShadow: 'var(--shadow-sm)',
              }}>
                <span className="eyebrow" style={{ marginBottom: 10 }}>Community Activities</span>
                <h3 className="h3" style={{ marginBottom: 10 }}>Beyond the Screen</h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--muted)', lineHeight: 1.72, marginBottom: 20 }}>
                  PO Wealth extends learning into real-world community connection:
                </p>
                <div className="flex-wrap">
                  {activities.map(a => <span key={a} className="tag">{a}</span>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PO WEALTH SHARING BRAND ── */}
      <section className="section bg-surface">
        <div className="container">
          <div className="section-header text-center reveal">
            <span className="eyebrow">PO Wealth Sharing</span>
            <h2 className="h2">Standards Define Who We Become</h2>
            <div className="copper-rule copper-rule--center" />
            <p className="lead max-640" style={{ marginTop: 12 }}>
              The PO Wealth Sharing program extends the five-person duplication framework into
              structured team growth — where standards, mentorship, and consistent development
              shape both your network and your long-term earning potential.
            </p>
          </div>

          <div className="media-showcase media-showcase--brand reveal d2">
            <div className="media-showcase__frame">
              <img
                src={poWealthLogo}
                alt="PO Wealth Sharing logo with the tagline Standards Define Who We Become"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── REWARD STRUCTURE ── */}
      <section id="po-wealth-sharing" className="section bg-white">
        <div className="container">
          <div className="section-header text-center reveal">
            <span className="eyebrow">Reward Structure</span>
            <h2 className="h2">Build Your Agent Network</h2>
            <div className="copper-rule copper-rule--center" />
            <p className="lead max-640" style={{ marginTop: 12 }}>
              Unlock weekly income and promotion rewards as you grow your direct members
              and team across ten achievement levels.
            </p>
          </div>

          <div className="media-showcase media-showcase--wide reveal d2">
            <div className="media-showcase__frame">
              <img
                src={poWealthInfo}
                alt="PO Wealth Sharing level chart showing LV1 through LV10 direct members, team members, weekly salary, and promotion bonus rewards"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="section bg-surface">
        <div className="container max-760">
          <div className="quote-block reveal">
            <p className="quote-text">
              "Opportunities are rarely perfect. If someone keeps waiting for complete
              certainty, they usually miss out on time, growth, and the potential income
              they could have already started building."
            </p>
            <div className="quote-attr">— PO Wealth Philosophy</div>
          </div>

          <div className="text-center mt-xl reveal">
            <Link to="/join-us" className="btn btn--primary btn--lg">
              Start Your Journey <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
