import "./WinnicaZamojska.css"
import Intro from "../components/Intro"
import CtaSection from "../components/CtaSection"
import Hero from "../components/Hero"
function WinnicaZamojska() {
    return (
        <div className="Winnica">
            <Hero title="Winnica Zamojska" bgImage="/img/Wino.mp4" nextID="#WinnicaIntro"/>
            <Intro id="WinnicaIntro" title="Weekend z winem" text="Zapraszamy na wyjątkowy weekend poświęcony winu. Czeka na Państwa degustacja starannie wyselekcjonowanych trunków z lokalnej winnicy oraz zwiedzanie jej terenu. Całość odbywa się w kameralnej atmosferze, w otoczeniu natury — idealna okazja, by oderwać się od codzienności i zanurzyć w świecie smaków i aromatów."/>
            <CtaSection title="Dowiedz się więcej" text="Odwiedź stronę winnicy i dowiedz się więcej o jej ofercie" button="Odwiedź stronę" link="http://winnicazamojska.pl" />
        </div>
    )
}
export default WinnicaZamojska