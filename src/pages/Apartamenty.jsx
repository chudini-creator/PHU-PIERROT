import "./apartamenty.css";
import RoomCard from "../components/RoomCard";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
function Apartamenty() {
    const Aparts = [
        {
            name: "Apartament Miodowy",
            images: ["/img/Miodowy/miodowy1.webp", "/img/Miodowy/miodowy2.webp", "/img/Miodowy/miodowy3.webp", "/img/Miodowy/miodowy4.webp", "/img/Miodowy/miodowy5.webp", "/img/Miodowy/miodowy6.webp", "/img/Miodowy/miodowy7.webp"],
            metres: "34",
            people: "3",
            features: {
                terrace: true,
                fridge: true,
                wifi: true
            }
        },
        {
            name: "Apartament Górny",
            images: ["/img/Gorny/gorny1.webp", "/img/Gorny/gorny2.webp", "/img/Gorny/gorny3.webp", "/img/Gorny/gorny4.webp", "/img/Gorny/gorny5.webp", "/img/Gorny/gorny6.jpg", "/img/Gorny/gorny7.jpg"],
            metres: "28",
            people: "5",
            features: {
                terrace: false,
                fridge: true,
                wifi: true
            }
        },
        {
            name: "Wieża",
            images: ["/img/Wieża/wieza1.webp", "/img/Wieża/wieza2.webp", "/img/Wieża/wieza3.webp", "/img/Wieża/wieza4.webp", "/img/Wieża/wieza5.webp", "/img/Wieża/wieza6.webp", "/img/Wieża/wieza7.webp", "/img/Wieża/wieza8.webp"],
            metres: "40",
            people: "2",
            features: {
                terrace: true,
                fridge: true,
                wifi: true
            }
        }
    ]

    return(
        <div className="apartamenty">
            <Hero nextID="#ApartIntro" title="Apartamenty w Dworze" bgImage="/img/DwórFront.jpg"/>
            <Intro id="ApartIntro" title="Nasze apartamenty" text="Istnieje możliwość wynajęcia całej części agroturystycznej w postaci trzech apartamentów wraz ze strefą Wellness (sauna, wanna z hydromasażem) dla maksymalnie 11 osób." />
            <section className="apartament_content">
                <h2>Wybierz wyjątkowy apartament dla siebie!</h2>
                <section className="ApartamentCards">
                    {Aparts.map((apartament, index) => {
                        return <RoomCard key={index} {...apartament}/>
                    })}
                </section>
            </section>
        </div>
    )
}
export default Apartamenty;