import "./sklepy.css"
import ShopCard from "../components/ShopCard"
import Hero from "../components/Hero"
function Sklepy() {
  const mobile = window.innerWidth < 900;
  return ( 
  <div className="sklepy">
    <Hero title="Nasze sklepy" bgImage="/img/pierogi.webp"/>
    <div className="sklepy_content">
      <div className="sklepy_photos">
        <img src="/img/pierogi.webp"/>
        <img src="/img/pierogi.webp" className="centralPhoto"/>
        <img src="/img/pierogi.webp"/>
      </div>
        <ShopCard hours="9:30 - 16:30" title="Sklep na Wołyńskiej" adress="ul. Wołyńska 23, Chełm" map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.5102927284006!2d23.498758475840365!3d51.13594033777264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47239af6eb944051%3A0x4983cd82de52fb0c!2zV2_FgnnFhHNrYSwgMjItMTAwIENoZcWCbQ!5e0!3m2!1spl!2spl!4v1757887506675!5m2!1spl!2spl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
    </div>
    <div className="sklepy_content sklepy_content_reverse">  
        <ShopCard hours="9:30 - 17:00" title="Sklep na Zachodniej" adress="ul. Zachodnia 8A, Chełm" map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.5102927284006!2d23.498758475840365!3d51.13594033777264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47239af6eb944051%3A0x4983cd82de52fb0c!2zV2_FgnnFhHNrYSwgMjItMTAwIENoZcWCbQ!5e0!3m2!1spl!2spl!4v1757887506675!5m2!1spl!2spl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
        <div className="sklepy_photos">
          <img src="/img/pierogi.webp"/>
          <img src="/img/pierogi.webp" className="centralPhoto"/>
          <img src="/img/pierogi.webp"/>
        </div>
    </div>
  </div>
  )
}
export default Sklepy;
