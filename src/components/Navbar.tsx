import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { to: '/',            label: 'Home' },
  { to: '/about',       label: 'About' },
  { to: '/education',   label: 'Education' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/join-us',     label: 'Join Us' },
  { to: '/contact',     label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Close on route change or viewport resize past breakpoint
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 920) setOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand">
          The&nbsp;<em>Wealth</em>&nbsp;Movement
        </Link>

        <ul className={`navbar__nav${open ? ' navbar__nav--open' : ''}`}>
          {links.map(l => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`navbar__link${pathname === l.to ? ' navbar__link--active' : ''}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="navbar__cta">
            <Link to="/join-us" className="btn btn--primary btn--sm">Join Free</Link>
          </li>
        </ul>

        <button
          className="navbar__toggle"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </nav>
  );
}
