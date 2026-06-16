import { Link } from 'react-router-dom';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About PO Wealth' },
  { path: '/education', label: 'Education' },
  { path: '/how-it-works', label: 'How It Works' },
  { path: '/join-us', label: 'Join Us' },
  { path: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          <div>
            <Link to="/" className="footer__brand">
              <span className="footer__brand-gem">◆</span>
              The Wealth Movement
            </Link>
            <p className="footer__tagline">
              Building a community focused on financial growth, education, and teamwork through simplified copy trading.
            </p>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="Facebook">f</a>
              <a href="#" className="footer__social-link" aria-label="Instagram">in</a>
              <a href="#" className="footer__social-link" aria-label="TikTok">tk</a>
            </div>
          </div>

          <div>
            <div className="footer__heading">Navigation</div>
            <ul className="footer__links">
              {navLinks.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="footer__link">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer__heading">Contact Us</div>
            <ul className="footer__links">
              <li>
                <a href="https://wa.me/16085484560" className="footer__link" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="https://t.me/Leslielace97" className="footer__link" target="_blank" rel="noopener noreferrer">
                  Telegram
                </a>
              </li>
              <li>
                <a href="mailto:connectgoodlife97@gmail.com" className="footer__link">
                  Email Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            COPYRIGHT ©2026. THE WEALTH MOVEMENT. ALL RIGHTS RESERVED.
          </p>
          <Link to="/join-us" className="btn btn--outline btn--sm">
            Get Started Free
          </Link>
        </div>
      </div>
    </footer>
  );
}
