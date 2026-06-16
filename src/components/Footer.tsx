import { Link } from 'react-router-dom';

const navLinks = [
  { to: '/',              label: 'Home' },
  { to: '/about',         label: 'About PO Wealth' },
  { to: '/education',     label: 'Education' },
  { to: '/how-it-works',  label: 'How It Works' },
  { to: '/join-us',       label: 'Join Us' },
  { to: '/contact',       label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          <div>
            <Link to="/" className="footer__brand">
              The&nbsp;<em>Wealth</em>&nbsp;Movement
            </Link>
            <p className="footer__tagline">
              A financial growth community focused on education, copy trading, and building real wealth — together.
            </p>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="Facebook">f</a>
              <a href="#" className="footer__social-link" aria-label="Instagram">ig</a>
              <a href="#" className="footer__social-link" aria-label="TikTok">tk</a>
            </div>
          </div>

          <div>
            <div className="footer__col-label">Navigate</div>
            <ul className="footer__links">
              {navLinks.map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="footer__link">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer__col-label">Get In Touch</div>
            <ul className="footer__links">
              <li><a href="https://wa.me/16085484560"             className="footer__link" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href="https://t.me/Leslielace97"             className="footer__link" target="_blank" rel="noopener noreferrer">Telegram</a></li>
              <li><a href="mailto:connectgoodlife97@gmail.com"    className="footer__link">Email Us</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">COPYRIGHT ©2026 · THE WEALTH MOVEMENT · ALL RIGHTS RESERVED</p>
          <Link to="/join-us" className="btn btn--white-outline btn--sm">Get Started Free</Link>
        </div>
      </div>
    </footer>
  );
}
