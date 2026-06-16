import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, Lightbulb, Heart, ArrowRight } from 'lucide-react';

const focusAreas = [
  {
    icon: BookOpen,
    title: 'Financial Education',
    desc: 'Structured learning to help members understand markets, trading strategies, and long-term wealth building.',
  },
  {
    icon: Users,
    title: 'Community Support',
    desc: 'A network of like-minded individuals who support and inspire each other toward shared financial goals.',
  },
  {
    icon: Award,
    title: 'Leadership Growth',
    desc: 'Programs designed to develop real leaders within our community through training and mentorship.',
  },
  {
    icon: Lightbulb,
    title: 'Team Development',
    desc: 'Collaborative activities and events that strengthen bonds and sharpen collective performance.',
  },
  {
    icon: Heart,
    title: 'Personal Growth',
    desc: 'Holistic development opportunities extending beyond finance — into confidence, purpose, and life skills.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">Our Story</div>
          <h1 className="display-title max-800">
            Building a Community Focused on{' '}
            <span className="text-gold">Financial Growth</span>
          </h1>
          <div className="gold-divider" />
          <p className="section-subtitle">
            PO Wealth is a financial growth community designed to help individuals participate in
            the financial markets through simplified copy trading and ongoing education.
          </p>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="section bg-surface">
        <div className="container">
          <div className="about-split">
            <div>
              <div className="eyebrow">Who We Are</div>
              <h2 className="section-title">PO Wealth</h2>
              <div className="gold-divider" style={{ margin: '20px 0' }} />
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '20px', fontSize: '1.0625rem' }}>
                PO Wealth is a financial growth community designed to help individuals participate
                in the financial markets through simplified copy trading and education.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.0625rem' }}>
                Our goal is to create an environment where members can learn, connect, and grow
                together — making the financial markets accessible to everyone, regardless of
                background or experience level.
              </p>
            </div>

            <div className="mission-card">
              <div className="mission-card__label">Our Mission</div>
              <p className="mission-card__text">
                "To help individuals grow financially through education, teamwork, and simplified
                access to copy trading opportunities."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOCUS AREAS ── */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <div className="eyebrow">What We Focus On</div>
            <h2 className="section-title">Five Core Areas of Growth</h2>
            <div className="gold-divider" />
            <p className="section-subtitle">
              Everything we do is designed to support your complete development — financially,
              professionally, and personally.
            </p>
          </div>

          <div className="stack stack--md max-800">
            {focusAreas.map(area => (
              <div key={area.title} className="focus-card">
                <div className="focus-icon">
                  <area.icon size={22} />
                </div>
                <div>
                  <div className="focus-title">{area.title}</div>
                  <div className="focus-desc">{area.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section--sm bg-surface">
        <div className="container">
          <div className="cta-banner">
            <h2 className="cta-banner__title">Ready to Join Our Community?</h2>
            <p className="cta-banner__text">
              Experience the PO Wealth difference — education, community, and opportunity together in one place.
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
