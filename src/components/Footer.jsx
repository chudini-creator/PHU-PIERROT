import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <p className="footer__title">PHU PIERROT</p>
          <p className="footer__subtitle">
            Tradycyjna kuchnia, nasze sklepy i wypoczynek w Dworze Ujazdowskim.
          </p>
        </div>

        <div className="footer__grid">
          <section className="footer__column">
            <h3>Oferta</h3>
            <nav className="footer__nav" aria-label="Menu stopek">
              <ul style={{ listStyle: 'none' }}>
                <li><Link to="/">Strona główna</Link></li>
                <li><Link to="/pierogarnia">Pierogarnia</Link></li>
                <li><Link to="/sklepy">Nasze sklepy</Link></li>
                <li><Link to="/pokoje">Pokoje w Gościńcu</Link></li>
                <li><Link to="/apartamenty">Apartamenty w Dworze</Link></li>
                <li><Link to="/sniadania">Regionalne śniadania</Link></li>
                <li><Link to="/strefa-relaksu">Strefa relaksu</Link></li>
                <li><Link to="/grupy-zorganizowane">Grupy zorganizowane</Link></li>
                <li><Link to="/pole-namiotowe">Pole namiotowe</Link></li>
                <li><Link to="/weekendy-tematyczne">Weekendy tematyczne</Link></li>
                <li><Link to="/winnica-zamojska">Winnica Zamojska</Link></li>
                <li><Link to="/wspolpraca">Współpraca</Link></li>
                <li><Link to="/dofinansowania-projekty">Dofinansowania i Projekty</Link></li>
              </ul>
            </nav>
          </section>

          <section className="footer__column">
            <h3>Nasze sklepy</h3>
            <address className="footer__item">
              <p>ul. Wołyńska 23, Chełm</p>
              <p>Godziny otwarcia: 9:30 - 16:30</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Wo%C5%82y%C5%84ska+23%2C+Che%C5%82m"
                target="_blank"
                rel="noreferrer"
              >
                Zobacz na mapie
              </a>
            </address>

            <address className="footer__item">
              <p>ul. Zachodnia 8A, Chełm</p>
              <p>Godziny otwarcia: 9:30 - 17:00</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Zachodnia+8A%2C+Che%C5%82m"
                target="_blank"
                rel="noreferrer"
              >
                Zobacz na mapie
              </a>
            </address>
          </section>

          <section className="footer__column">
            <h3>Dwór Ujazdowski</h3>
            <address className="footer__item">
              <p>ul. Ujazdów 1, Ujazdów</p>
              <p>
                Tel: <a href="tel:+48691042418">691 042 418</a>
              </p>
              <p>Wynajem pokoi i apartamentów w sezonie wakacyjnym.</p>
            </address>
          </section>

          <section className="footer__column">
            <h3>Siedziba firmy</h3>
            <address className="footer__item">
              <p>ul. Hrubieszowska 102, Chełm</p>
            </address>
          </section>
        </div>

        <div className="footer__bottom">
          <p>© {currentYear} PHU PIERROT. Wszystkie prawa zastrzeżone.</p>
          <p>Realizacja: Igor Sobierajczyk</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
