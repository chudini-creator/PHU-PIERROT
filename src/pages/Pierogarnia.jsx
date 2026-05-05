import "./pierogarnia.css"
import Hero from "../components/Hero";
import ShopCard from "../components/ShopCard";
import Intro from "../components/Intro";
import { Helmet } from "react-helmet-async";
function Pierogarnia() {
    return (
        <div className="pierogarnia main-content">
            <Helmet>
                <title>Manufaktura Pierogów i Wyrobów Garmażeryjnych Chełm | PHU Pierrot</title>
                <meta name="description" content="Tradycyjne, ręcznie lepione pierogi, paszteciki i domowe obiady. Nasza manufaktura to smak regionu dostępny w sklepach PHU Pierrot w Chełmie. Sprawdź naszą ofertę!" />
                <link rel="canonical" href="https://phupierrot.pl/pierogarnia" />
                <meta property="og:title" content="Manufaktura Pierogów i Wyrobów Garmażeryjnych Chełm" />
                <meta property="og:description" content="Ręcznie lepione pierogi i tradycyjne wyroby garmażeryjne prosto z naszej manufaktury do Twojego stołu." />
            </Helmet>
            <Hero title="Pierogarnia" bgImage="/img/Pierogarnia/Pierogarnia.webp" nextID="#pierogarniaContent" />
            <Intro id="pierogarniaContent" title="Tradycyjna Pierogarnia – Smak regionu w każdym kęsie" text="Nasze wyroby powstają z pasją, która bulgocze w garnkach i pachnie w całej manufakturze. Każde ciasto jest ręcznie wałkowane, każdy farsz doprawiany tak, by rozpalał zmysły. To tradycyjna garmażerka, która trafia prosto do naszych sklepów, by cieszyć Państwa podniebienia codziennie świeżymi pierogami i daniami obiadowymi." />
            <div className="pierogarnia_content">
                <div className="pierogarnia_photos">
                    <img src="/img/Pierogarnia/Pierogarnia2.webp" alt="Pierogarnia - zdjęcie 1" className="pierogarnia_photo" loading="lazy" decoding="async" />
                    <img src="/img/Pierogarnia/Pierogarnia3.jpg" alt="Pierogarnia - zdjęcie 2" className="pierogarnia_photo pierogarnia_sec" loading="lazy" decoding="async" />
                </div>
                <ShopCard title="Hrubieszowska 102" hours="7:00 - 13:00" adress="Hrubieszowska 102, Chełm" map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.5102927284006!2d23.498758475840365!3d51.13594033777264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47239af6eb944051%3A0x4983cd82de52fb0c!2zV2_FgnnFhHNrYSwgMjItMTAwIENoZcWCbQ!5e0!3m2!1spl!2spl!4v1757887506675!5m2!1spl!2spl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
            </div>
        </div>
    )
}
export default Pierogarnia;
