import "./Wspolpraca.css"
import Hero from "../components/Hero"
import Intro from "../components/Intro"
import PartnerCard from "../components/PartnerCard"
import {useInView} from "../components/UseInView"
function Wspolpraca(){


    const [ref, inView] = useInView({threshold: 0.2});
    const styler = `Partners animate-on-scroll ${inView ? 'visible' : ''}`

    return (
        <div className="Wspolpraca">
            <Hero title="Współpraca" bgImage="/img/Wspolpraca.png" nextID="#PartnersIntro"/>
            <Intro id="PartnersIntro" title="Współpraca jest kluczem" text="Wiemy jak w dzisiejszej dobie ważna jest współpraca. Właśnie dlatego współpracujemy z lokalnymi przedsiębiorstwami."/>
            <div ref={ref} className={styler}>
                <PartnerCard 
                    imageSrc="/img/Degustacja.png"
                    title="Winnica Zamojska"
                    subtitle="Odkryj lokalne smaki w sercu regionu."
                    ctaText="Zobacz więcej"
                    link="/winnica-zamojska"
                    
                />
                <PartnerCard 
                    imageSrc="/img/Kajaki.png"
                    title="Kanukam"
                    subtitle="Mamy też coś dla fanów aktywnego spędzania czasu. Chłopaki z Kanukam na pewno zadbają o niezapomniane przeżycia na spływie kajakowym."
                    ctaText="Zobacz stronę"
                    link="http://kanukam.pl"
                />
                <PartnerCard 
                    imageSrc="/img/Piekarnia.png"
                    title="Piekarnia w Nieliszu"
                    subtitle="Na naszych śniadaniach możecie delektować się Państwo chlebem z lokalnej piekarni znajdującej się w Nieliszu. Starannie wypiekany, codziennie świeży i pachnący chleb to klucz do sukcesu dobrego śniadania."
                />
            </div>
        </div>
    )
}
export default Wspolpraca;