import "./grupyZorganizowane.css";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import GreenWhiteSection from "../components/GreenWhiteSection";
import CtaSection from "../components/CtaSection";
import { Helmet } from "react-helmet-async";
function Grupy() {
  const groups_data = [
    {
      title: "Zakwaterowanie",
      text: "Nasze przestronne i przytulne pokoje są idealne dla grup różnej wielkości. Każde miejsce noclegowe wyposażone jest w wygodne łóżka i prywatne łazienki. Zapewniamy domową atmosferę, która sprzyja wypoczynkowi i integracji.",
      color: "white"
    },
    {
      title: "Wyżywienie",
      text: "Nasza kuchnia oferuje zdrowe i smaczne śniadania przygotowywane z lokalnych produktów jak i zasobów naszego gospodarstwa.",
      color: "green"
    },
    {
      title: "Rekreacja i wypoczynek",
      text: "Oferujemy ogrodzony teren (5ha) parku ze starodrzewiem i ogród kwiatowy. Znajdziecie u nas Państwo liczne ławeczki, leżaki, kosze plażowe, bujaki, hamaki i huśtawki. Nasze miejsce to cisza, spokój, niepowtarzalny widok na meandrujący Wieprz, nocna prawdziwa ciemność, czyste powietrze bez smogu. Obiekt znajduje się 8km od zalewu w Nieliszu. Możliwe jest zorganizowanie spływu kajakowego w zaprzyjaźnionej firmie.",
      color: "white"
    },
  ]


  return (
    <div className="Groups main-content">
      <Helmet>
        <title>Noclegi i Oferta dla Grup Zorganizowanych | Dwór Ujazdowski</title>
        <meta name="description" content="Organizujesz wyjazd integracyjny? Oferujemy kompleksowe noclegi, wyżywienie i atrakcje dla grup zorganizowanych w naszym obiekcie." />
        <meta property="og:title" content="Grupy zorganizowane w Dworze Ujazdowskim" />
      </Helmet>
      <Hero title="Grupy zorganizowane" bgImage="/img/GrupyZorganizowane.webp" nextID="#IntroGrupy" />
      <Intro id="IntroGrupy" title="Kompleksowa obsługa pobytów dla grup zorganizowanych" text="Zapraszamy grupy zorganizowane do spędzenia niezapomnianego czasu w
            malowniczym otoczeniu, gdzie natura i tradycja tworzą
            niepowtarzalną atmosferę. Nasza agroturystyka to idealne miejsce na
            wyjazdy grupowe, warsztaty, a także rodzinne spotkania. Oferujemy
            komfortowe zakwaterowanie oraz smaczne śniadania, a także możliwość
            zorganizowania ogniska."/>
      <div className="groups_container">
        {groups_data.map((group, index) => (
          <GreenWhiteSection
            key={index}
            index={index}
            title={group.title}
            text={group.text}
            color={group.color}
          />
        ))}
      </div>
      <CtaSection title="Skontaktuj się z nami" text="Zadzwoń lub napisz do nas, aby zarezerwować miejsce na wakacje." button="Napisz do nas" link="mailto:" phone="tel:691042418" buttonPhone="Zadzwoń do nas" />
    </div>
  );
}

export default Grupy;
