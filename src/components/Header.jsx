import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PhotoGallery from "./PhotoGallery";
import { Phone, AtSign, Facebook, Menu, X } from 'lucide-react';
import headerMenuSections from "../data/headerMenuSections";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState(null);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      const next = !prev;
      setActiveSectionId(next ? headerMenuSections[0].id : null);
      return next;
    });
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setActiveSectionId(null);
  };

  const activeSection =
    headerMenuSections.find((section) => section.id === activeSectionId) || null;

  // Spłaszczona lista wszystkich linków dla SEO i ułatwienia nawigacji
  const allLinks = headerMenuSections.flatMap(section => section.photos);

  return (
    <header>
      {/* SEMANTIC NAVIGATION FOR SEO (Visually hidden but discoverable by crawlers) */}
      <nav className="seo-nav" aria-label="Nawigacja główna">
        <ul>
          <li><Link to="/">Strona główna</Link></li>
          {allLinks.map((link) => (
            <li key={link.link}>
              <Link to={link.link}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <section id="options" className={menuOpen ? "menu-open" : ""}>
        <div id="topbar">
          <div id="left">
            <Link to="/" aria-label="Przejdź do strony głównej" onClick={closeMenu}>
              <img src="/img/logo.webp" alt="Logo Dwór Ujazdowski" className="logo" />
            </Link>
            <button
              type="button"
              className="menu-toggle"
              onClick={toggleMenu}
              aria-expanded={menuOpen}
              aria-controls="header-menu-panel"
              aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
            >
              {menuOpen ? <X size="2rem" /> : <Menu size="2rem" className="menu-icon" />}
            </button>
          </div>

          <div id="right">
            <a href="tel:+48691042418" aria-label="Zadzwoń do nas">
              <div className="header-icon">
                <Phone size="1.5rem" className="phone-icon" />
              </div>
            </a>

            <Link to="/wspolpraca" aria-label="Przejdź do strony współpraca" onClick={closeMenu}>
              <div className="header-icon">
                <AtSign size="1.5rem" className="atsign-icon" />
              </div>
            </Link>

            <a
              href="https://www.facebook.com/profile.php?id=100063529341499"
              target="_blank"
              rel="noreferrer"
              aria-label="Otwórz Facebook"
            >
              <div className="header-icon">
                <Facebook size="1.5rem" className="fb-icon" />
              </div>
            </a>
          </div>
        </div>

        <div
          id="header-menu-panel"
          className={`menu-panel ${menuOpen ? "menu-panel-open" : ""}`}
          aria-hidden={!menuOpen}
        >
          <div className="menu-panel-content">
            <div className="menu-sections" role="tablist" aria-label="Sekcje oferty">
              {headerMenuSections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  role="tab"
                  className={`menu-section-btn ${
                    activeSectionId === section.id ? "menu-section-btn-active" : ""
                  }`}
                  aria-selected={activeSectionId === section.id}
                  onClick={() => setActiveSectionId(section.id)}
                >
                  {section.label}
                </button>
              ))}
            </div>

            <PhotoGallery
              id="header-gallery"
              section={activeSection}
              isVisible={menuOpen && Boolean(activeSection)}
              onPhotoClick={closeMenu}
            />
          </div>
        </div>
      </section>
    </header>
  );
}

export default Header;
