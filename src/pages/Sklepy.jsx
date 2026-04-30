import "./sklepy.css"
import ShopCard from "../components/ShopCard"
import Hero from "../components/Hero"
import { Helmet } from "react-helmet-async";
import Intro from "../components/Intro";
function Sklepy() {
  return (
    <div className="sklepy">
      <Helmet>
        <title>Nasze Sklepy w Chełmie | PHU Pierrot</title>
        <meta name="description" content="Odwiedź nasze sklepy stacjonarne. Oferujemy zawsze świeże produkty, lokalne wyroby i codziennie zaopatrzone półki. Sprawdź lokalizacje." />
        <meta property="og:title" content="Sklepy | Dwór Ujazdowski" />
      </Helmet>
      <Hero title="Nasze sklepy" bgImage="/img/pierogi/IMG_2865.jpeg" nextID="#sklepyContent" />
      <Intro title="Nasze sklepy – Świeżość i jakość blisko Ciebie" text="Oferujemy zawsze świeże produkty, lokalne wyroby i codziennie zaopatrzone półki. Sprawdź lokalizacje naszych sklepów i odwiedź nas już dziś!" />
      <div className="sklepy_content" id="sklepyContent">
        <div className="sklepy_photos_2">
          <img src="/img/Sklepy/Wolynska3.webp" alt="Sklep Wołyńska - zdjęcie 1" loading="lazy" decoding="async" />
          <img src="/img/Sklepy/Wolynska1.webp" className="centralPhoto" alt="Sklep Wołyńska - zdjęcie 2" loading="lazy" decoding="async" />
          <img src="/img/Sklepy/Wolynska2.webp" alt="Sklep Wołyńska - zdjęcie 3" loading="lazy" decoding="async" />
        </div>
        <ShopCard hours="9:30 - 16:30" title="Sklep na Wołyńskiej" adress="ul. Wołyńska 23, Chełm" map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.5102927284006!2d23.498758475840365!3d51.13594033777264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47239af6eb944051%3A0x4983cd82de52fb0c!2zV2_FgnnFhHNrYSwgMjItMTAwIENoZcWCbQ!5e0!3m2!1spl!2spl!4v1757887506675!5m2!1spl!2spl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
      </div>
      <div className="sklepy_content sklepy_content_reverse">
        <div className="sklepy_photos">
          <img src="/img/Sklepy/Zachodnia3.webp" alt="Sklep Zachodnia - zdjęcie 1" loading="lazy" decoding="async" />
          <img src="/img/Sklepy/Zachodnia1.webp" className="centralPhoto" alt="Sklep Zachodnia - zdjęcie 2" loading="lazy" decoding="async" />
          <img src="/img/Sklepy/Zachodnia2.webp" alt="Sklep Zachodnia - zdjęcie 3" loading="lazy" decoding="async" />
        </div>
        <ShopCard hours="9:30 - 17:00" title="Sklep na Zachodniej" adress="ul. Zachodnia 8A, Chełm" map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.5102927284006!2d23.498758475840365!3d51.13594033777264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47239af6eb944051%3A0x4983cd82de52fb0c!2zV2_FgnnFhHNrYSwgMjItMTAwIENoZcWCbQ!5e0!3m2!1spl!2spl!4v1757887506675!5m2!1spl!2spl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
      </div>
    </div>
  )
}
export default Sklepy;
