import "./StrefaRelaksu.css";
import FeatureCard from '../components/FeatureCard';
import Hero from '../components/Hero';
import Intro from '../components/Intro';


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
        description: 'Oferujemy również altanę z miejscami siedzącymi znajdującą się tuż nad zbiornikiem wodnym. Jest to idealne miejsce na spotkania z przyjaciółmi, rodziną lub na romantyczną kolację.'
    }
  ]
const StrefaRelaksu = () => {
  return (
    <div className="relax-zone-container">
      <Hero nextID="#RelaxIntro" title="Strefa relaksu" bgImage="/img/Relaks.jpeg"/>
      <Intro id="RelaxIntro" title="Prawdziwe ukojenie dla zmysłów" text="Dwór Ujazdowski to miejsce, w którym zmysły znajdą prawdziwe ukojenie. 
          Brak aglomeracyjnych świateł i hałasu gwarantują pełen odpoczynek 
          od zgiełku codziennego, miejskiego życia."/>
      <section className="features-section">
        {features.map((feature, index) => (
          <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} animationDelay={'${index * 1}s'} />
        )
        )}
      </section>
      <CtaSection title="Gotowi na odpoczynek?" text="Skontaktuj się z nami i zarezerwuj swój pobyt w Dworze Ujazdowskim." button="Zarezerwuj teraz"/>
    </div>
  );
};

export default StrefaRelaksu;