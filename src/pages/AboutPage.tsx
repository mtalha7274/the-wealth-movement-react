import { BookOpen, Users, Award, Lightbulb, Heart } from 'lucide-react';

const focusAreas = [
  { Icon: BookOpen,   title: 'Financial Education',  desc: 'Structured learning to help members understand markets, trading strategies, and long-term wealth building.' },
  { Icon: Users,      title: 'Community Support',    desc: 'A network of like-minded individuals who support and inspire each other toward shared financial goals.' },
  { Icon: Award,      title: 'Leadership Growth',    desc: 'Programs designed to develop real leaders within our community through training and mentorship.' },
  { Icon: Lightbulb,  title: 'Team Development',     desc: 'Collaborative activities and events that strengthen bonds and sharpen collective performance.' },
  { Icon: Heart,      title: 'Personal Growth',      desc: 'Holistic development extending beyond finance — into confidence, purpose, and everyday life skills.' },
];

export default function AboutPage() {
  return (
    <div className="page-wrapper">

      {/* ── PAGE HERO ── */}
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Our Story</span>
          <h1 className="h1 max-760">
            Building a Community Focused on{' '}
            <span className="text-copper" style={{ fontStyle: 'italic' }}>Financial Growth</span>
          </h1>
          <div className="copper-rule copper-rule--center" />
          <p className="lead max-640" style={{ marginTop: 12 }}>
            PO Wealth is a financial growth community designed to help individuals participate
            in the financial markets through simplified copy trading and ongoing education.
          </p>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="section bg-white">
        <div className="container">
          <div className="about-split">
            <div className="reveal">
              <span className="eyebrow">Who We Are</span>
              <h2 className="h2">PO Wealth</h2>
              <div className="copper-rule" />
              <p style={{ fontSize: '1.0625rem', color: 'var(--muted)', lineHeight: 1.78 }}>
                Our goal is to create an environment where members can learn, connect, and
                grow together — making the financial markets accessible to everyone, regardless
                of background or experience level.
              </p>
            </div>

            <div className="mission-block reveal d2">
              <div className="mission-block__label">Our Mission</div>
              <p className="mission-block__text">
                "To help individuals grow financially through education, teamwork, and simplified
                access to copy trading opportunities."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOCUS AREAS ── */}
      <section className="section bg-surface">
        <div className="container">
          <div className="section-header text-center reveal">
            <span className="eyebrow">What We Focus On</span>
            <h2 className="h2">Five Core Areas of Growth</h2>
            <div className="copper-rule copper-rule--center" />
            <p className="lead max-640" style={{ marginTop: 12 }}>
              Everything we do supports your complete development — financially,
              professionally, and personally.
            </p>
          </div>

          <div className="focus-list max-760">
            {focusAreas.map(({ Icon, title, desc }, i) => (
              <div key={title} className={`focus-item reveal d${i + 1}`}>
                <div className="focus-icon"><Icon size={20} /></div>
                <div>
                  <div className="focus-title">{title}</div>
                  <div className="focus-desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
