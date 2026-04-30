import "./Breakfest.css"
import Hero from "../components/Hero"
import { SniadaniaGaleria } from "../components/SniadaniaGaleria";
import { Helmet } from "react-helmet-async";
import Intro from "../components/Intro";
import WideCard from "../components/WideCard";
function Breakfest() {
    return (
        <div className="breakfest main-content">
            <Helmet>
                <title>Pyszne Śniadania dla Gości Dworu | Dwór Ujazdowski</title>
                <meta name="description" content="Zacznij dzień od pożywnego śniadania! Serwujemy świeże, lokalne produkty przygotowane z sercem. Sprawdź ofertę śniadaniową dla naszych gości." />
                <meta property="og:title" content="Pyszne Śniadania dla Gości Dworu" />
            </Helmet>
            <Hero title="Śniadania" bgImage="/img/Śniadanie2.mp4" nextID="#BreakfestIntro" />
            <Intro id="BreakfestIntro" title="Pyszne i pożywne śniadania z lokalnych produktów" text="Chcemy tworzyć przeciwwagę dla kultury opartej na jedzeniu typu „fast food” i życia w coraz większym pośpiechu, dlatego dbamy o to co jemy. Nasze śniadania to z zasady jedzenie dla przyjemności, a nie tylko odżywianie się." />
            <SniadaniaGaleria />
            <WideCard title="Produkt to dla nas klucz" text="Przygotowujemy śniadania dla Naszych Gości tylko ze świeżych, nieprzetworzonych produktów – w związku z tym prosimy Państwa o wcześniejsze deklaracje chęci skorzystania z posiłków, byśmy mogli się zaopatrzyć w niezbędne składniki dań." image="/img/Sniadania/SniadaniaOgrod1.webp" side="left" />
            <WideCard title="Ogród" text="Mamy własny ogród pełen smakowitych warzyw i aromatycznych ziół, dzięki któremu możemy oferować dania sezonowe – zawsze świeże, pachnące, niepowtarzalne…" image="/img/Sniadania/SniadaniaOgrod2.webp" side="right" />
        </div>
    )
}
export default Breakfest;
