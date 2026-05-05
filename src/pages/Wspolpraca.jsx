import "./Wspolpraca.css"
import Hero from "../components/Hero"
import Intro from "../components/Intro"
import PartnerCard from "../components/PartnerCard"
import { useInView } from "../components/UseInView"
import { Helmet } from "react-helmet-async"
function Wspolpraca() {


    const [ref, inView] = useInView({ threshold: 0.2 });
    const styler = `Partners animate-on-scroll ${inView ? 'visible' : ''}`

    return (
        <div className="Wspolpraca main-content">
            <Helmet>
                <title>Współpraca | Dwór Ujazdowski & PHU Pierrot Lubelskie</title>
                <meta name="description" content="Zapraszamy do współpracy lokalnych dostawców i partnerów. Twórzmy razem wyjątkowe miejsce na mapie Lubelszczyzny. Skontaktuj się z nami!" />
                <link rel="canonical" href="https://phupierrot.pl/wspolpraca" />
                
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://phupierrot.pl/wspolpraca" />
                <meta property="og:title" content="Współpraca | Dwór Ujazdowski & PHU Pierrot Lubelskie" />
                <meta property="og:description" content="Zapraszamy do współpracy lokalnych dostawców i partnerów. Twórzmy razem wyjątkowe miejsce na mapie Lubelszczyzny. Skontaktuj się z nami!" />
            </Helmet>
            <Hero title="Współpraca" bgImage="/img/Wspolpraca.webp" nextID="#PartnersIntro" />
            <Intro id="PartnersIntro" title="Nasi zaufani partnerzy i lokalne atrakcje" text="Wiemy jak w dzisiejszej dobie ważna jest współpraca. Właśnie dlatego współpracujemy z lokalnymi przedsiębiorstwami." />
            <div ref={ref} className={styler}>
                <PartnerCard
                    imageSrc="/img/Degustacja.webp"
                    title="Winnica Zamojska"
                    subtitle="Odkryj lokalne smaki w sercu regionu."
                    ctaText="Zobacz więcej"
                    link="/winnica-zamojska"

                />
                <PartnerCard
                    imageSrc="/img/Kajaki.webp"
                    title="Kanukam"
                    subtitle="Mamy też coś dla fanów aktywnego spędzania czasu. Chłopaki z Kanukam na pewno zadbają o niezapomniane przeżycia na spływie kajakowym."
                    ctaText="Zobacz stronę"
                    link="http://kanukam.pl"
                />
                <PartnerCard
                    imageSrc="/img/Piekarnia.webp"
                    title="Piekarnia w Nieliszu"
                    subtitle="Na naszych śniadaniach możecie delektować się Państwo chlebem z lokalnej piekarni znajdującej się w Nieliszu. Starannie wypiekany, codziennie świeży i pachnący chleb to klucz do sukcesu dobrego śniadania."
                />
            </div>
        </div>
    )
}
export default Wspolpraca;