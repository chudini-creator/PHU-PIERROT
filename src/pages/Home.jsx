import "./home.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
    ArrowUpRight,
    BedDouble,
    CalendarDays,
    MapPin,
    Phone,
    Sparkles,
    UsersRound,
    UtensilsCrossed,
    Waves,
    Wine,
} from "lucide-react";
import Hero from "../components/Hero";

const offerCards = [
    {
        title: "Pierogarnia",
        description: "Ręcznie lepione pierogi i tradycyjne smaki, które pachną domem.",
        image: "/img/Pierogarnia/pierogarnia.jpg",
        link: "/pierogarnia",
        label: "Nasza Chata",
        icon: UtensilsCrossed,
    },
    {
        title: "Nasze sklepy",
        description: "Codziennie świeże wyroby w dwóch punktach sprzedaży w Chełmie.",
        image: "/img/Sklepy/Wolynska1.webp",
        link: "/sklepy",
        label: "Chełm",
        icon: MapPin,
    },
    {
        title: "Pokoje w Dworze",
        description: "Butikowe wnętrza i kameralny wypoczynek z dala od miejskiego zgiełku.",
        image: "/img/pokoje.webp",
        link: "/pokoje",
        label: "Dwór Ujazdowski",
        icon: BedDouble,
    },
    {
        title: "Apartamenty na wyłączność",
        description: "Trzy apartamenty, strefa wellness i komfort dla maksymalnie 11 osób.",
        image: "/img/DwórFront.jpg",
        link: "/apartamenty",
        label: "Pobyt premium",
        icon: Sparkles,
    },
    {
        title: "Strefa relaksu",
        description: "Jacuzzi pod chmurką, leżaki, park i pełne ukojenie dla zmysłów.",
        image: "/img/Relaks.webp",
        link: "/strefa-relaksu",
        label: "Wellness",
        icon: Waves,
    },
    {
        title: "Weekendy tematyczne",
        description: "Wino, malowanie, teatr i klimatyczne wydarzenia dla dorosłych i rodzin.",
        image: "/img/Tematyczne.webp",
        link: "/weekendy-tematyczne",
        label: "Wydarzenia",
        icon: Wine,
    },
];

const stats = [
    { value: "2", label: "sklepy stacjonarne w Chełmie" },
    { value: "3", label: "apartamenty na wyłączność" },
    { value: "11", label: "maks. osób w części apartamentowej" },
    { value: "5 ha", label: "parku i zielonej przestrzeni" },
];

const signaturePoints = [
    {
        icon: BedDouble,
        text: "Komfortowe pokoje i apartamenty z domową atmosferą.",
    },
    {
        icon: Waves,
        text: "Strefa relaksu z jacuzzi, ogrodem i miejscem na klimatyczne wieczory.",
    },
    {
        icon: UtensilsCrossed,
        text: "Lokalne produkty, sezonowe śniadania i współpraca z regionalnymi markami.",
    },
    {
        icon: MapPin,
        text: "Bliskość natury, czyste powietrze i widok na meandrujący Wieprz.",
    },
];

const quickTags = [
    { icon: Sparkles, text: "Naturalny slow life" },
    { icon: UtensilsCrossed, text: "Tradycyjna kuchnia" },
    { icon: MapPin, text: "Chełm i Dwór Ujazdowski" },
];

const ctaHighlights = [
    {
        icon: Phone,
        title: "Szybki kontakt",
        text: "Najprościej telefonicznie — pomożemy dobrać najlepszą opcję pobytu.",
    },
    {
        icon: UsersRound,
        title: "Dla grup i rodzin",
        text: "Przygotowujemy pobyty dla grup zorganizowanych i wyjazdów okolicznościowych.",
    },
    {
        icon: CalendarDays,
        title: "Elastyczne terminy",
        text: "Sprawdź aktualne możliwości noclegów, apartamentów i weekendów tematycznych.",
    },
];

function Home() {
    return (
        <div className="home">
            <Helmet>
                <title>PHU Pierrot | Dwór Ujazdowski, Pierogarnia i Lokalne Sklepy Chełm</title>
                <meta name="description" content="Odkryj Dwór Ujazdowski – butikowe noclegi, strefę relaksu i tradycyjną kuchnię. Poznaj naszą manufakturę pierogów i odwiedź nasze sklepy w Chełmie. Zapraszamy!" />
                <link rel="canonical" href="https://phupierrot.pl/" />
                
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://phupierrot.pl/" />
                <meta property="og:title" content="PHU Pierrot | Dwór Ujazdowski, Pierogarnia i Sklepy Chełm" />
                <meta property="og:description" content="Butikowe noclegi w Dworze Ujazdowskim, tradycyjna manufaktura pierogów i lokalne sklepy w Chełmie. Poczuj klimat regionu!" />
                <meta property="og:image" content="https://phupierrot.pl/img/Dwór.jpg" />

                {/* JSON-LD Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "LodgingBusiness",
                                "@id": "https://phupierrot.pl/#lodging",
                                "name": "Dwór Ujazdowski - PHU Pierrot",
                                "description": "Butikowe noclegi i apartamenty w zabytkowym dworze na Lubelszczyźnie.",
                                "url": "https://phupierrot.pl/pokoje",
                                "address": {
                                    "@type": "PostalAddress",
                                    "addressLocality": "Ujazdów",
                                    "addressRegion": "Lubelskie",
                                    "postalCode": "22-375",
                                    "addressCountry": "PL"
                                },
                                "telephone": "+48691042418",
                                "image": "https://phupierrot.pl/img/Dwór.jpg"
                            },
                            {
                                "@type": "LocalBusiness",
                                "@id": "https://phupierrot.pl/#manufacture",
                                "name": "Manufaktura PHU Pierrot",
                                "description": "Tradycyjna manufaktura wyrobów garmażeryjnych - ręcznie lepione pierogi i domowe obiady.",
                                "url": "https://phupierrot.pl/pierogarnia",
                                "address": {
                                    "@type": "PostalAddress",
                                    "addressLocality": "Chełm",
                                    "addressRegion": "Lubelskie",
                                    "postalCode": "22-100",
                                    "addressCountry": "PL"
                                },
                                "telephone": "+48691042418"
                            }
                        ]
                    })}
                </script>

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://phupierrot.pl/" />
                <meta property="twitter:title" content="PHU Pierrot | Dwór Ujazdowski i Tradycyjna Kuchnia" />
                <meta property="twitter:description" content="Noclegi premium, strefa wellness i ręcznie lepione pierogi. Zapraszamy do PHU Pierrot." />
                <meta property="twitter:image" content="https://phupierrot.pl/img/Dwór.jpg" />
            </Helmet>

            <Hero title="PHU PIERROT" bgImage="/img/Dwór.jpg" nextID="#landing__id" />

            <main className="home__main" id="landing__id">
                <section className="home__intro">
                    <p className="home__eyebrow">Tradycyjna kuchnia · Dwór Ujazdowski · Lokalna gościnność</p>
                    <h2>Jedno miejsce, wiele doświadczeń</h2>
                    <p className="home__lead">
                        Tworzymy przestrzeń, w której spotykają się smak regionu, natura i spokojny wypoczynek.
                        Od pierogarni i sklepów, przez noclegi i strefę relaksu, aż po weekendy tematyczne.
                    </p>
                    <div className="home__quick-tags">
                        {quickTags.map((tag) => {
                            const Icon = tag.icon;
                            return (
                                <span key={tag.text}>
                                    <Icon size={16} />
                                    {tag.text}
                                </span>
                            );
                        })}
                    </div>
                    <div className="home__stats">
                        {stats.map((item) => (
                            <article key={item.label} className="home__stat">
                                <p className="home__stat-value">{item.value}</p>
                                <p className="home__stat-label">{item.label}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="home__offer">
                    <div className="home__section-head">
                        <p>Oferta</p>
                        <h3>Wybierz klimat, który najbardziej pasuje do Ciebie</h3>
                    </div>

                    <div className="home__offer-grid">
                        {offerCards.map((card) => {
                            const Icon = card.icon;
                            return (
                                <Link key={card.title} className="home__offer-card" to={card.link}>
                                    <img src={card.image} alt={card.title} loading="lazy" decoding="async" />
                                    <div className="home__offer-overlay">
                                        <span className="home__offer-label">
                                            <Icon size={14} />
                                            {card.label}
                                        </span>
                                        <h4>{card.title}</h4>
                                        <p>{card.description}</p>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </section>

                <section className="home__signature">
                    <article className="home__signature-content">
                        <p>Dlaczego goście wracają do nas?</p>
                        <h3>Kameralny wypoczynek z charakterem</h3>
                        <ul>
                            {signaturePoints.map((point) => {
                                const Icon = point.icon;
                                return (
                                    <li key={point.text}>
                                        <span className="home__signature-icon">
                                            <Icon size={16} />
                                        </span>
                                        {point.text}
                                    </li>
                                );
                            })}
                        </ul>
                        <div className="home__signature-actions">
                            <Link to="/pokoje">Zobacz pokoje</Link>
                            <Link to="/apartamenty">Sprawdź apartamenty</Link>
                        </div>
                    </article>

                    <img
                        src="/img/Relaks.webp"
                        alt="Strefa relaksu w Dworze Ujazdowskim"
                        loading="lazy"
                        decoding="async"
                    />
                </section>

                <section className="home__partners">
                    <div className="home__section-head">
                        <p>Współpraca lokalna</p>
                        <h3>Razem z ludźmi, którzy tworzą ten region</h3>
                    </div>
                    <div className="home__partners-grid">
                        <article>
                            <h4>Winnica Zamojska</h4>
                            <p>Degustacje i weekendy z winem w kameralnej, naturalnej scenerii.</p>
                            <Link to="/winnica-zamojska">Poznaj ofertę</Link>
                        </article>
                        <article>
                            <h4>Kanukam</h4>
                            <p>Aktywna strona wypoczynku i niezapomniane spływy kajakowe.</p>
                            <a href="http://kanukam.pl" target="_blank" rel="noreferrer">
                                Odwiedź partnera
                            </a>
                        </article>
                        <article>
                            <h4>Piekarnia w Nieliszu</h4>
                            <p>Świeże, codzienne wypieki, które dopełniają nasze śniadania.</p>
                            <Link to="/sniadania">Zobacz śniadania</Link>
                        </article>
                    </div>
                </section>

                <section className="home__cta">
                    <div className="home__cta-content">
                        <p className="home__cta-eyebrow">Rezerwacje i kontakt</p>
                        <h3>Zaplanuj pobyt, który naprawdę odpoczywa</h3>
                        <p className="home__cta-lead">
                            Napisz lub zadzwoń do nas, a przygotujemy dla Ciebie pobyt dopasowany do stylu:
                            kameralny weekend, rodzinny wyjazd albo oferta dla grupy.
                        </p>
                        <div className="home__cta-highlights">
                            {ctaHighlights.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <article key={item.title}>
                                        <span>
                                            <Icon size={18} />
                                        </span>
                                        <div>
                                            <h4>{item.title}</h4>
                                            <p>{item.text}</p>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>

                    <aside className="home__cta-panel">
                        <p>Co chcesz zaplanować?</p>
                        <h4>Wybierz najszybszą ścieżkę</h4>
                        <div className="home__cta-actions">
                            <a className="home__cta-btn home__cta-btn-primary" href="tel:+48691042418">
                                <Phone size={16} />
                                Zadzwoń teraz
                            </a>
                            <Link className="home__cta-btn" to="/pokoje">
                                Noclegi i pokoje
                                <ArrowUpRight size={16} />
                            </Link>
                            <Link className="home__cta-btn" to="/grupy-zorganizowane">
                                Oferta dla grup
                                <ArrowUpRight size={16} />
                            </Link>
                            <Link className="home__cta-btn" to="/wspolpraca">
                                Współpraca
                                <ArrowUpRight size={16} />
                            </Link>
                        </div>
                    </aside>
                </section>
            </main>
        </div>
    );
}

export default Home;
