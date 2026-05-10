import "./DofProj.css";
import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import { FileText, Award, CheckCircle2 } from "lucide-react";
import Intro from "../components/Intro";

const projects = [
    {
        id: 1,
        title: "Dywersyfikacja przedsiębiorstwa PHU PIERROT Agnieszka Szabała poprzez wprowadzenie nowych usług",
        subtitle: "Projekt realizowany w ramach Krajowego Planu Odbudowy i Zwiększania Odporności (KPO)",
        description: `Celem przedsięwzięcia jest rozszerzenie działalności o nowe usługi turystyczne i rekreacyjne, w tym stworzenie pola namiotowego oraz strefy relaksu. Projekt skierowany jest do turystów indywidualnych i grup zorganizowanych.

        Efektem projektu będzie rozwój oferty turystycznej oraz zwiększenie atrakcyjności obiektu.`,
        value: "Wartość przedsięwzięcia: 351 315,24 zł",
        contribution: "Dofinansowanie UE: 263 210,86 zł",
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
                                <div className="project-item-text">
                                    <p>{project.description}</p>
                                </div>
                                
                                <div className="project-item-details">
                                    <div className="detail-box">
                                        <CheckCircle2 size={18} />
                                        <span>{project.value}</span>
                                    </div>
                                    <div className="detail-box">
                                        <CheckCircle2 size={18} />
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
