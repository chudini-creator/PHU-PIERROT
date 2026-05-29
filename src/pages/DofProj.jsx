import "./DofProj.css";
import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import { FileText, Award, CheckCircle2 } from "lucide-react";
import Intro from "../components/Intro";

const projects = [
    {
        id: 1,
        title: "Dywersyfikacja przedsiębiorstwa PHU PIERROT Agnieszka Szabała poprzez wprowadzenie nowych usług",
        subtitle: "Przedsięwzięcie realizowane w ramach Krajowego Planu Odbudowy i Zwiększania Odporności (KPO).",
        target: "Celem projektu jest dywersyfikacja działalności przedsiębiorstwa poprzez stworzenie nowego produktu turystycznego oraz rozszerzenie oferty usługowej obiektu.",
        range: [
            "przygotowanie pola namiotowego dla namiotów i kamperów",
            "stworzenie strefy relaksu z jacuzzi i sauną",
            "modernizacja łazienek",
            "doposażenie kuchni i pokoi",
            "uruchomienie punktu ładowania pojazdów elektrycznych",
            "wdrożenie sieci Wi-Fi i strony internetowej",
            "rozwój oferty pobytów dla grup zorganizowanych, warsztatów i aktywności rekreacyjnych"
        ],
        targetGroup: [
            "turystów indywidualnych",
            "grup zorganizowanych",
            "uczestników warsztatów i wydarzeń tematycznych",
            "osób poszukujących wypoczynku blisko natury",
        ],
        effect: "Efektem projektu będzie rozszerzenie działalności firmy o nowe usługi turystyczne i rekreacyjne, zwiększenie atrakcyjności obiektu oraz pozyskanie nowych klientów. Projekt przyczyni się również do rozwoju ekologicznych i nowoczesnych rozwiązań wspierających turystykę.",
        value: "Całkowita wartość przedsięwzięcia: 351 315,24 zł",
        contribution: "Dofinansowanie UE (KPO): 263 210,86 zł",
        logos: [
            { src: "/img/Dofinansowania/RP.webp", alt: "Rzeczpospolita Polska" },
            { src: "/img/Dofinansowania/KPO.webp", alt: "Krajowy Plan Odbudowy" },
            { src: "/img/Dofinansowania/NGUE.webp", alt: "Unia Europejska NextGenerationEU" },
        ]
    },
];

function DofProj() {
    return (
        <div className="dof-proj">
            <Helmet>
                <title>Dofinansowania i Projekty | PHU Pierrot</title>
                <meta name="description" content="Informacje o realizowanych projektach i otrzymanych dofinansowaniach w ramach rozwoju PHU Pierrot i Dworu Ujazdowskiego." />
                <link rel="canonical" href="https://phupierrot.pl/dofinansowania-projekty" />
                <meta property="og:title" content="Dofinansowania i Projekty | PHU Pierrot" />
                <meta property="og:description" content="Informacje o realizowanych projektach i otrzymanych dofinansowaniach." />
                <meta property="og:url" content="https://phupierrot.pl/dofinansowania-projekty" />
            </Helmet>

            <Hero title="Dofinansowania i Projekty" bgImage="/img/dwórGóra.webp" nextID="#projects-list" />

            <main className="dof-proj-main" id="projects-list">
                <Intro 
                    title="Transparentność i wzrost" 
                    text="Dzięki wsparciu z Funduszy Europejskich oraz programów krajowych, stale podnosimy standardy naszych usług, dbamy o dziedzictwo Dworu Ujazdowskiego i tworzymy" 
                />

                <section className="dof-proj-list animate-on-scroll">
                    {projects.map((project) => (
                        <article key={project.id} className="project-item">
                            <div className="project-item-logos">
                                <div className="logos-strip">
                                    {project.logos.map((logo, index) => (
                                        <img 
                                            key={index} 
                                            src={logo.src} 
                                            alt={logo.alt} 
                                            className="institutional-logo" 
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="project-item-header">
                                <Award className="project-item-icon" size={32} />
                                <div>
                                    <h3>{project.title}</h3>
                                    <p className="project-item-subtitle">{project.subtitle}</p>
                                </div>
                            </div>

                            <div className="project-item-content">
                                <div className="project-item-main">
                                    <div className="content-block target-block">
                                        <p>{project.target}</p>
                                    </div>

                                    <div className="content-inner-grid">
                                        <div className="content-block range-block">
                                            <h3>Zakres działań</h3>
                                            <p className="block-intro">W ramach przedsięwzięcia realizowane są m.in.:</p>
                                            <ul>
                                                {project.range.map((item, index) => (
                                                    <li key={index}>
                                                        <CheckCircle2 size={16} className="list-icon" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="content-block groups-block">
                                            <h3>Grupy docelowe</h3>
                                            <p className="block-intro">Oferta skierowana jest do:</p>
                                            <ul>
                                                {project.targetGroup.map((group, index) => (
                                                    <li key={index}>
                                                        <CheckCircle2 size={16} className="list-icon" />
                                                        <span>{group}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="content-block effect-block">
                                        <h3>Efekty przedsięwzięcia</h3>
                                        <p>{project.effect}</p>
                                    </div>
                                </div>

                                <div className="project-item-details">
                                    <div className="detail-box">
                                        <Award size={20} />
                                        <span>{project.value}</span>
                                    </div>
                                    <div className="detail-box highlight">
                                        <FileText size={20} />
                                        <span>{project.contribution}</span>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </section>
            </main>
        </div>
    );
}

export default DofProj;
