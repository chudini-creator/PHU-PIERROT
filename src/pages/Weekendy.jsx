import "./Weekendy.css"
import Hero from "../components/Hero"
import Intro from "../components/Intro"
import HorizontalSlider from "../components/HorizontalSlider";
const weekendsData = [
  {
    title: 'Weekend z winem',
    description: 'Zapraszamy na wyjątkowy weekend poświęcony winu. Czeka na Państwa degustacja starannie wyselekcjonowanych trunków z lokalnej winnicy oraz zwiedzanie jej terenu. Całość odbywa się w kameralnej atmosferze, w otoczeniu natury — idealna okazja, by oderwać się od codzienności i zanurzyć w świecie smaków i aromatów.',
    imageUrl: '/img/Tematyczne.webp',
  },
  {
    title: 'Weekend z malowaniem',
    description: 'Poczuj w sobie artystę! Podczas weekendu z malowaniem zrelaksujesz się w malowniczej scenerii, tworząc własne dzieła. Nie musisz mieć wcześniejszego doświadczenia — liczy się dobra zabawa i kreatywność. Zapewniamy wszystkie materiały plastyczne, a każdy uczestnik zabierze ze sobą własnoręcznie namalowany obraz.',
    imageUrl: '/img/Malowanie.webp',
  },
  {
    title: 'Święto pieczonego ziemniaka',
    description: 'To prawdziwa uczta w rustykalnym klimacie! Zapraszamy na rodzinny weekend z ogniskiem, pieczonymi ziemniakami i regionalnymi przysmakami. Posiadamy małą uprawę ziemniaków. Zapewniamy, że nie znajdziecie Państwo nigdzie tak autentycznego smaku ziemniaka.',
    imageUrl: '/img/Ziemniaki.webp',
  },
  {
    title: 'Weekend z teatrem',
    description: 'Dla miłośników sztuki przygotowaliśmy niezwykłe spotkanie z teatrem. W programie warsztaty aktorskie prowadzone przez profesjonalnych artystów oraz rozmowy o teatrze. To doskonała okazja, by współtworzyć magiczny świat sceny.',
    imageUrl: '/img/Teatr.webp',
  },
];

function Weekendy(){
  return (      
    <div className="weekends main-content">
        <Hero title="Weekendy tematyczne" bgImage="/img/Wino.mp4" nextID="#WeekendIntro"/>
        <Intro id="WeekendIntro" title="Świętuj z nami swój weekend" text="W naszej ofercie znajduje się także organizacja weekendów tematycznych. Jeśli znudziły cię już standardowe wakacje, to nasza oferta jest dla Ciebie stworzona!"/>
        <HorizontalSlider data={weekendsData}/>
    </div>
  );
};
export default Weekendy