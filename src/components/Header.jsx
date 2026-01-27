import { useState } from "react";
import PhotoGallery from "./PhotoGallery";
import { Phone, AtSign, Facebook, Menu } from'lucide-react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) setActiveSection(null); 
  };
  const closeMenu = () => {
    setMenuOpen(false);
    setActiveSection(null);
  };

  return (
    <header>
      <section
        id="options"
        style={{ backgroundColor: menuOpen ? "black" : "transparent", paddingBottom: menuOpen ? "10px" : "0", boxShadow: menuOpen ? "0 0 20px rgba(0, 0, 0, 0.5)" : "none", width: menuOpen ? "100%" : "auto", fontFamily: "var(--font-lato)"}}
      >
        <div id="topbar">
          <div id="left">
            <button onClick={toggleMenu}><Menu size="2rem" className="MenuIcon"/></button>
            {menuOpen && (
              <>
                <button className="Menu_button" onClick={() => setActiveSection("chata")}>
                  Nasza Chata
                </button>
                <button className="Menu_button" onClick={() => setActiveSection("dwor")}>
                  Dwór Ujazdowski
                </button>
              </>
            )}
          </div>
          <div id="right">
            <a href=""><div className="header_icon"><Phone size="1.5rem" className="PhoneIcon"/></div></a>
            <a href=""><div className="header_icon"><AtSign size="1.5rem" className="AtSignIcon"/></div></a>
            <a href=""><div className="header_icon"><Facebook size="1.5rem" className="FBIcon"/></div></a>
          </div>
        </div>

        <PhotoGallery type={activeSection} onPhotoClick={closeMenu}/>
      </section>
    </header>
  );
}

export default Header;
