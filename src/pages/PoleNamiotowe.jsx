import "./PoleNamiotowe.css"
import Hero from "../components/Hero";
import Intro from "../components/Intro"
import CtaSection from "../components/CtaSection";
import GreenWhiteSection from "../components/GreenWhiteSection";
function PoleNamiotowe() {

    const PoleData = [
        {
            title: "Pełna wygoda",
            text: "Wynajęcie komfortowego pokoju z pełnym węzłem sanitarnym w budynku Gościńca umożliwia rozbicie namiotu na terenie obiektu. To doskonałe rozwiązanie dla rodzin – dzieci mogą przeżyć przygodę pod namiotem, a rodzice cieszyć się wygodą i spokojem.",
            color: "green"
        },
        {
            title: "Wakacje jak za młodu",
            text: "Pobyt w naszym Gościńcu to nie tylko odpoczynek, ale także okazja, by pokazać najmłodszym, jak wyglądały wakacje z dzieciństwa - z ogniskiem, zapachem trawy i nocą pod gwiazdami.",
            color: "white"
        }
    ]

    return (
        <div className="PoleNamiotowe main-content">
           <Hero title="Pole namiotowe" bgImage="/img/PoleNamiotowe.webp" nextID="#PoleIntro"/>
           <Intro id="PoleIntro" title="Skok w przeszłość" text="Zapraszamy do wyjątkowego miejsca, gdzie kontakt z naturą spotyka się z komfortem. Nasze pole namiotowe to idealna propozycja dla tych, którzy pragną poczuć klimat dawnych biwaków, jednocześnie nie rezygnując z wygody." />
            {PoleData.map((Pole, index) => (
                <GreenWhiteSection 
                    key={index} 
                    index={index}
                    title={Pole.title} 
                    text={Pole.text} 
                    color={Pole.color} 
                />
            ))}
           <CtaSection title="Skontaktuj się z nami" button="Napisz do nas" link="mailto:" phone="tel:"/>
        </div>

    )
}
export default PoleNamiotowe;