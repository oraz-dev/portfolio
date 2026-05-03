import { useState, useRef, useEffect, useCallback } from 'react';
import { flushSync } from 'react-dom';
import { NAV_HEIGHT, NAV_ITEMS } from '../constants';
import { SunIcon, MoonIcon, MenuIcon, CloseIcon } from '../Icons';

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (!section) return;

  const top = section.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
  window.scrollTo({ top, behavior: 'smooth' });
}

export default function Nav({ activeSection, theme, onToggleTheme }) {
  const linksRef = useRef(null);
  const [pill, setPill] = useState({ left: 0, width: 0, ready: false });
  const [menuOpen, setMenuOpen] = useState(false);

  const measurePill = useCallback(() => {
    const container = linksRef.current;
    if (!container) return;

    const activeLink = container.querySelector(`[data-nav-id="${activeSection}"]`);
    if (!activeLink) {
      setPill((prev) => ({ ...prev, ready: false }));
      return;
    }

    const linkRect = activeLink.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    setPill({
      left: linkRect.left - containerRect.left,
      width: linkRect.width,
      ready: true,
    });
  }, [activeSection]);

  useEffect(() => {
    measurePill();
    document.fonts.ready.then(measurePill);
    window.addEventListener('resize', measurePill);
    return () => window.removeEventListener('resize', measurePill);
  }, [measurePill]);

  function handleNavClick(id) {
    return (event) => {
      event.preventDefault();
      flushSync(() => setMenuOpen(false));
      scrollToSection(id);
    };
  }

  function handleBrandClick(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <nav className="nav">
      <div className="shell nav-inner">
        <a href="#top" onClick={handleBrandClick} className="brand">
          <span className="brand-mark" />
          <span>oraz · dev</span>
        </a>

        <div className="nav-links" ref={linksRef}>
          <span
            className="nav-pill"
            style={{ left: pill.left, width: pill.width, opacity: pill.ready ? 1 : 0 }}
          />
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              data-nav-id={item.id}
              href={`#${item.id}`}
              onClick={handleNavClick(item.id)}
              className={`nav-link${activeSection === item.id ? ' is-active' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button className="icon-btn" onClick={onToggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            className="icon-btn nav-burger"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Menu"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu shell">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={handleNavClick(item.id)}
              className={`mobile-link${activeSection === item.id ? ' is-active' : ''}`}
            >
              <span className="mobile-link-num">{item.num}</span>
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
