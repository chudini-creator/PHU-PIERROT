import { useState } from "react";
import { Link } from "react-router-dom";
import PhotoGallery from "./PhotoGallery";
import { Phone, AtSign, Facebook, Menu } from 'lucide-react';
import headerMenuSections from "../data/headerMenuSections";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState(null);

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

  return (
    <header>
      <section id="options" className={menuOpen ? "menu-open" : ""}>
        <div id="topbar">
          <div id="left">
            <Link to="/" aria-label="Przejdź do strony głównej">
              <img src="/img/logo.webp" alt="Logo Dwor Ujazdowski" className="logo" />
            </Link>
            <button
              type="button"
              className="menu-toggle"
              onClick={toggleMenu}
              aria-expanded={menuOpen}
              aria-controls="header-menu-panel"
              aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
            >
              <Menu size="2rem" className="menu-icon" />
            </button>
          </div>

          <div id="right">
            <a href="tel:+48691042418" aria-label="Zadzwoń do nas">
              <div className="header-icon">
                <Phone size="1.5rem" className="phone-icon" />
              </div>
            </a>

            <Link to="/współpraca" aria-label="Przejdź do strony współpraca">
              <div className="header-icon">
                <AtSign size="1.5rem" className="atsign-icon" />
              </div>
            </Link>

            <a
              href="https://www.facebook.com"
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
