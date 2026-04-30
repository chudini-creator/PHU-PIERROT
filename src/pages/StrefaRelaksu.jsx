import "./StrefaRelaksu.css";
import FeatureCard from '../components/FeatureCard';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import SniadaniaGaleria from "../components/SniadaniaGaleria";
import { Helmet } from "react-helmet-async";
const imagesRelaks = [
  { src: "/img/Relaks/Relaks2.webp", alt: "Strefa relaksu 1", itemClass: "item-1" },
  { src: "/img/Relaks/Relaks7.webp", alt: "Strefa relaksu 2", itemClass: "item-2" },
  { src: "/img/Relaks/Relaks3.webp", alt: "Strefa relaksu 3", itemClass: "item-3" },
  { src: "/img/Relaks/Relaks6.webp", alt: "Strefa relaksu 4", itemClass: "item-4" },
  { src: "/img/Relaks/Relaks1.webp", alt: "Strefa relaksu 5", itemClass: "item-5" },
  { src: "/img/Relaks/Relaks4.webp", alt: "Strefa relaksu 6", itemClass: "item-6" },
  { src: "/img/Relaks/Relaks5.webp", alt: "Strefa relaksu 7", itemClass: "item-7" },
]
import { FaSwimmer, FaTree, FaFire, FaUsers } from 'react-icons/fa';
import CtaSection from "../components/CtaSection";

const features = [
  {
    icon: <FaSwimmer />,
    title: 'Plaża z jacuzzi',
    description: 'W naszej strefie relaksu oferujemy Państwu „plażę” z wanną jacuzzi pod chmurką, liczne leżaki i kosze plażowe. Na terenie całego obiektu znajdziecie Państwo leżaki i huśtawki z których można podziwiać widok na meandrujący Wieprz.'
  },
  {
    icon: <FaTree />,
    title: 'Zabytkowy park i ogród',
    description: 'Dwór otacza zabytkowy park ze starodrzewiem. Znajdziecie Państwo u nas także magiczny ogród kwiatowy pełen motyli, pszczół i zająców.'
  },
  {
    icon: <FaFire />,
    title: 'Miejsce na ognisko',
    description: 'Istnieje możliwość zorganizowania ogniska (za dodatkową opłatą), które jest doskonałym sposobem na spędzenie klimatycznego wieczoru.'
  },
  {
    icon: <FaUsers />,
    title: 'Altana w sercu sadu',
    description: 'Oferujemy również altanę z miejscami siedzącymi znajdującą się w sadzie. Jest to idealne miejsce na spotkania z przyjaciółmi, rodziną lub na romantyczną kolację.'
  }
]
const StrefaRelaksu = () => {
  return (
    <div className="relax-zone-container main-content">
      <Helmet>
        <title>Strefa Relaksu i Wypoczynek w Dworze | Dwór Ujazdowski</title>
        <meta name="description" content="Zrelaksuj się i odetchnij od codzienności w naszej strefie relaksu. Znajdziesz tu idealne warunki do odnowy biologicznej i pełnego odpoczynku." />
        <meta property="og:title" content="Strefa relaksu | Dwór Ujazdowski" />
      </Helmet>
      <Hero nextID="#RelaxIntro" title="Strefa relaksu" bgImage="/img/Relaks.webp" />
      <Intro id="RelaxIntro" title="Strefa relaksu – Twój czas na wyciszenie i odpoczynek" text="Dwór Ujazdowski to miejsce, w którym zmysły znajdą prawdziwe ukojenie. 
          Brak aglomeracyjnych świateł i hałasu gwarantują pełen odpoczynek 
          od zgiełku codziennego, miejskiego życia."/>
      <section className="features-section">
        {features.map((feature, index) => (
          <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} animationDelay={'${index * 1}s'} />
        )
        )}
      </section>
      <SniadaniaGaleria id="RelaxGallery" images={imagesRelaks} />
      <CtaSection title="Gotowi na odpoczynek?" text="Skontaktuj się z nami i zarezerwuj swój pobyt w Dworze Ujazdowskim." button="Zarezerwuj teraz" />
    </div>
  );
};

export default StrefaRelaksu;