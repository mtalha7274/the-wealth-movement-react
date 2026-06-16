import { Link } from 'react-router-dom';
import { CheckCircle, Video, Users, Calendar, ArrowRight } from 'lucide-react';

const teamBenefits = [
  'Quick response to changes in the market',
  'Efficient, flexible operations',
  'Full utilization of member skills and experience',
  'Enhanced creativity and execution',
  'Faster decision-making and greater agility',
  'Stronger trust and team cohesion',
];

const communityActivities = [
  'Weekend Events',
  'Interactive Games',
  'Leadership Programs',
  'Team Building',
  'Networking Events',
  'Community Gatherings',
];

export default function EducationPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Our Education System</div>
          <h1 className="display-title max-800">
            <span className="text-gold">1-Click Copy Trading:</span> A 5-Person Duplication System
          </h1>
          <div className="gold-divider" />
          <p className="section-subtitle">
            A smarter way to learn, trade, and grow — together as a team.
          </p>
        </div>
      </section>

      {/* ── FIVE PERSON TEAM ── */}
      <section className="section bg-surface">
        <div className="container">
          <div className="section-header text-center">
            <div className="eyebrow">The Framework</div>
            <h2 className="section-title">What Is a Five-Person Team?</h2>
            <div className="gold-divider" />
            <p className="section-subtitle">
              Five-person teams include five members and one leader — creating a highly effective
              structure for learning, collaboration, and market participation.
            </p>
          </div>

          <div className="grid grid-2" style={{ gap: '32px', alignItems: 'start' }}>
            {/* Team benefits */}
            <div className="card" style={{ padding: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
                <div className="feature-icon" style={{ margin: 0, flexShrink: 0 }}>
                  <Users size={22} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.375rem', fontWeight: 700 }}>
                  Team Benefits
                </h3>
              </div>
              <div className="stack stack--md">
                {teamBenefits.map(b => (
                  <div key={b} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <CheckCircle
                      size={18}
                      style={{ color: 'var(--green)', flexShrink: 0, marginTop: '2px' }}
                    />
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.9375rem', lineHeight: '1.6' }}>
                      {b}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column: zoom + community */}
            <div className="stack stack--lg">
              {/* Zoom sessions */}
              <div className="card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div className="feature-icon" style={{ margin: 0, flexShrink: 0 }}>
                    <Video size={20} />
                  </div>
                  <div>
                    <div className="eyebrow" style={{ margin: 0 }}>Weekly Sessions</div>
                  </div>
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px' }}>
                  Live Wednesday Night Zoom
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem', lineHeight: '1.7' }}>
                  Professor Daniel hosts live Zoom sessions every Wednesday night, covering live
                  market analysis, trading strategies, Q&amp;A, and financial literacy. Open to all
                  members — no experience required.
                </p>
                <div
                  style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    marginTop: '16px', paddingTop: '16px',
                    borderTop: '1px solid rgba(255,255,255,0.06)',
                    fontSize: '0.8125rem', color: 'var(--gold)',
                  }}
                >
                  <Calendar size={14} />
                  <span>Every Wednesday · All PO Wealth Members</span>
                </div>
              </div>

              {/* Community activities */}
              <div className="card">
                <div className="eyebrow" style={{ marginBottom: '12px' }}>Community Activities</div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px' }}>
                  Beyond the Screen
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem', lineHeight: '1.7', marginBottom: '20px' }}>
                  PO Wealth extends learning into real-world community connection through:
                </p>
                <div className="flex--wrap gap-sm">
                  {communityActivities.map(a => (
                    <span key={a} className="topic-tag">{a}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OPPORTUNITY QUOTE ── */}
      <section className="section">
        <div className="container max-800">
          <div className="quote-block">
            <p className="quote-text">
              "Opportunities are rarely perfect. If someone keeps waiting for complete certainty,
              they usually miss out on time, growth, and the potential income they could have
              already started building."
            </p>
            <div className="quote-attr">— PO Wealth Philosophy</div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '48px' }}>
            <Link to="/join-us" className="btn btn--gold btn--lg">
              Start Your Journey <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
