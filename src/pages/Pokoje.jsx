import Hero from "../components/Hero"
import "./pokoje.css"
import RoomCard from "../components/RoomCard"
import Intro from "../components/Intro"

function Pokoje() {
    const roomsData = [
  /*{
    id: 1,
    name: "Pokój z widokiem",
    images: ["/img/pokoje/widok-1.jpg", "/img/pokoje/widok-2.jpg"],
    metres: 37,
    people: 2,
    description: "Przestronny pokój z tarasem, częścią sypialnianą i wypoczynkową.",
    features: {
      terrace: true,
      aneks: "zlew, mikrofala, naczynia",
      fridge: true,
      kettle: true,
      wifi: true,
    },
  },*/
  {
    id: 2,
    name: "Srebrzysty",
    images: ["/img/Srebrzysty/Ujazdowski-Dwór-Pokój-srebrzysty-52.jpg", "/img/Srebrzysty/Ujazdowski-Dwór-Pokój-srebrzysty-53.jpg", "/img/Srebrzysty/Ujazdowski-Dwór-Pokój-srebrzysty-54.jpg", "/img/Srebrzysty/Ujazdowski-Dwór-Pokój-srebrzysty-55.jpg", "/img/Srebrzysty/Ujazdowski-Dwór-Pokój-srebrzysty-56.jpg", "/img/Srebrzysty/Ujazdowski-Dwór-Pokój-srebrzysty-57.jpg", "/img/Srebrzysty/Ujazdowski-Dwór-Pokój-srebrzysty-58.jpg", "/img/Srebrzysty/Ujazdowski-Dwór-Pokój-srebrzysty-59.jpg", "/img/Srebrzysty/Ujazdowski-Dwór-Pokój-srebrzysty-60.jpg"],
    metres: 32,
    people: 2,
    description: "Komfortowy pokój z tarasem i oddzieloną częścią wypoczynkową.",
    features: {
      terrace: true,
      aneks: false,
      fridge: true,
      kettle: true,
      wifi: true,
    },
  },
  {
    id: 3,
    name: "Biblioteka",
    images: ["/img/Biblioteka/Ujazdowski-Dwór-Pokój-biblioteka-68.jpg", "/img/Biblioteka/Ujazdowski-Dwór-Pokój-biblioteka-69.jpg", "/img/Biblioteka/Ujazdowski-Dwór-Pokój-biblioteka-70.jpg", "/img/Biblioteka/Ujazdowski-Dwór-Pokój-biblioteka-71.jpg", "/img/Biblioteka/Ujazdowski-Dwór-Pokój-biblioteka-72.jpg", "/img/Biblioteka/Ujazdowski-Dwór-Pokój-biblioteka-73.jpg", "/img/Biblioteka/Ujazdowski-Dwór-Pokój-biblioteka-74.jpg"],
    metres: 15,
    people: 2,
    description: "Przytulny pokój z łóżkiem małżeńskim i dostępem do tarasu.",
    features: {
      terrace: true,
      aneks: false,
      fridge: true,
      kettle: true,
      wifi: true,
    },
  },
  {
    id: 4,
    name: "Avinion",
    images: ["/img/Avinion/Ujazdowski-Dwór-Pokój-Avinion-15.jpg", "/img/Avinion/Ujazdowski-Dwór-Pokój-Avinion-16.jpg", "/img/Avinion/Ujazdowski-Dwór-Pokój-Avinion-17.jpg", "/img/Avinion/Ujazdowski-Dwór-Pokój-Avinion-18.jpg", "/img/Avinion/Ujazdowski-Dwór-Pokój-Avinion-19.jpg", "/img/Avinion/Ujazdowski-Dwór-Pokój-Avinion-20.jpg", "/img/Avinion/Ujazdowski-Dwór-Pokój-Avinion-21.jpg", "/img/Avinion/Ujazdowski-Dwór-Pokój-Avinion-22.jpg", "/img/Avinion/Ujazdowski-Dwór-Pokój-Avinion-23.jpg", "/img/Avinion/Ujazdowski-Dwór-Pokój-Avinion-24.jpg"],
    metres: 18,
    people: 3,
    description: "Idealny dla trzech osób, łóżko małżeńskie i pojedyncze.",
    features: {
      terrace: false,
      aneks: "mikrofala, naczynia",
      fridge: true,
      kettle: true,
      wifi: true,
    },
  },
  {
    id: 5,
    name: "Czerwony",
    images: ["/img/Czerwony/Ujazdowski-Dwór-Pokój-Czerwony-35.jpg", "/img/Czerwony/Ujazdowski-Dwór-Pokój-Czerwony-36.jpg", "/img/Czerwony/Ujazdowski-Dwór-Pokój-Czerwony-37.jpg", "/img/Czerwony/Ujazdowski-Dwór-Pokój-Czerwony-38.jpg", "/img/Czerwony/Ujazdowski-Dwór-Pokój-Czerwony-39.jpg", "/img/Czerwony/Ujazdowski-Dwór-Pokój-Czerwony-40.jpg", "/img/Czerwony/Ujazdowski-Dwór-Pokój-Czerwony-41.jpg", "/img/Czerwony/Ujazdowski-Dwór-Pokój-Czerwony-42.jpg", "/img/Czerwony/Ujazdowski-Dwór-Pokój-Czerwony-35.jpg", "/img/Czerwony/Ujazdowski-Dwór-Pokój-Czerwony-121.jpg", "/img/Czerwony/Ujazdowski-Dwór-Pokój-Czerwony-122.jpg", "/img/Czerwony/Ujazdowski-Dwór-Pokój-Czerwony-123.jpg", "/img/Czerwony/Ujazdowski-Dwór-Pokój-Czerwony-124.jpg"],
    metres: 17,
    people: 3,
    description: "Funkcjonalny pokój trzyosobowy z pełnym aneksem kuchennym.",
    features: {
      terrace: false,
      aneks: "zlew, mikrofala, naczynia",
      fridge: true,
      kettle: false,
      wifi: true,
    },
  },
  {
    id: 6,
    name: "Granat",
    images: ["/img/Granat/Ujazdowski-Dwór-Pokój-Granat-1.jpg", "/img/Granat/Ujazdowski-Dwór-Pokój-Granat-2.jpg", "/img/Granat/Ujazdowski-Dwór-Pokój-Granat-3.jpg", "/img/Granat/Ujazdowski-Dwór-Pokój-Granat-4.jpg", "/img/Granat/Ujazdowski-Dwór-Pokój-Granat-5.jpg", "/img/Granat/Ujazdowski-Dwór-Pokój-Granat-6.jpg", "/img/Granat/Ujazdowski-Dwór-Pokój-Granat-7.jpg", "/img/Granat/Ujazdowski-Dwór-Pokój-Granat-8.jpg", "/img/Granat/Ujazdowski-Dwór-Pokój-Granat-9.jpg", "/img/Granat/Ujazdowski-Dwór-Pokój-Granat-10.jpg", "/img/Granat/Ujazdowski-Dwór-Pokój-Granat-13.jpg", "/img/Granat/Ujazdowski-Dwór-Pokój-Granat-14.jpg", "/img/Granat/Ujazdowski-Dwór-Pokój-Granat-15.jpg", "/img/Granat/Ujazdowski-Dwór-Pokój-Granat-16.jpg"],
    metres: 18,
    people: 3,
    description: "Stylowy pokój dla trzech osób z bogato wyposażonym aneksem.",
    features: {
      terrace: false,
      aneks: "zlew, mikrofala, naczynia",
      fridge: true,
      kettle: true,
      wifi: true,
    },
  },
  {
    id: 7,
    name: "Różany",
    images: ["/img/Różany/Ujazdowski-Dwór-Pokój-Różany-30.jpg", "/img/Różany/Ujazdowski-Dwór-Pokój-Różany-31.jpg", "/img/Różany/Ujazdowski-Dwór-Pokój-Różany-32.jpg", "/img/Różany/Ujazdowski-Dwór-Pokój-Różany-33.jpg", "/img/Różany/Ujazdowski-Dwór-Pokój-Różany-34.jpg", "/img/Różany/Ujazdowski-Dwór-Pokój-Różany-35.jpg", "/img/Różany/Ujazdowski-Dwór-Pokój-Różany-36.jpg"],
    metres: 15,
    people: 2,
    description: "Romantyczny pokój dwuosobowy z łóżkiem małżeńskim.",
    features: {
      terrace: false,
      aneks: false,
      fridge: true,
      kettle: true,
      wifi: true,
    },
  },
  {
    id: 8,
    name: "Cynamon",
    images: ["/img/Cynamon/Ujazdowski-Dwór-Pokój-Cynamon-24.jpg", "/img/Cynamon/Ujazdowski-Dwór-Pokój-Cynamon-25.jpg", "/img/Cynamon/Ujazdowski-Dwór-Pokój-Cynamon-26.jpg", "/img/Cynamon/Ujazdowski-Dwór-Pokój-Cynamon-27.jpg", "/img/Cynamon/Ujazdowski-Dwór-Pokój-Cynamon-28.jpg", "/img/Cynamon/Ujazdowski-Dwór-Pokój-Cynamon-29.jpg", "/img/Cynamon/Ujazdowski-Dwór-Pokój-Cynamon-30.jpg", "/img/Cynamon/Ujazdowski-Dwór-Pokój-Cynamon-31.jpg"],
    metres: 16,
    people: 2,
    description: "Pokój z łóżkiem małżeńskim, kanapą i aneksem kuchennym.",
    features: {
      terrace: false,
      aneks: "mikrofala, naczynia",
      fridge: true,
      kettle: true,
      wifi: true,
    },
  },
  {
    id: 9,
    name: "Rudy",
    images: ["/img/Rudy/Ujazdowski-Dwór-Pokój-Rudy-43.jpg", "/img/Rudy/Ujazdowski-Dwór-Pokój-Rudy-44.jpg", "/img/Rudy/Ujazdowski-Dwór-Pokój-Rudy-45.jpg", "/img/Rudy/Ujazdowski-Dwór-Pokój-Rudy-46.jpg", "/img/Rudy/Ujazdowski-Dwór-Pokój-Rudy-47.jpg", "/img/Rudy/Ujazdowski-Dwór-Pokój-Rudy-48.jpg", "/img/Rudy/Ujazdowski-Dwór-Pokój-Rudy-49.jpg", "/img/Rudy/Ujazdowski-Dwór-Pokój-Rudy-50.jpg", "/img/Rudy/Ujazdowski-Dwór-Pokój-Rudy-51.jpg", "/img/Rudy/Ujazdowski-Dwór-Pokój-Rudy-126.jpg"],
    metres: 15,
    people: 2,
    description: "Klasyczny pokój dwuosobowy z łóżkiem małżeńskim.",
    features: {
      terrace: false,
      aneks: false,
      fridge: true,
      kettle: true,
      wifi: true,
    },
  },
  {
    id: 10,
    name: "Zielony",
    images: ["/img/Zielony/Ujazdowski-Dwór-Pokój-Zielony-84.jpg", "/img/Zielony/Ujazdowski-Dwór-Pokój-Zielony-85.jpg", "/img/Zielony/Ujazdowski-Dwór-Pokój-Zielony-86.jpg", "/img/Zielony/Ujazdowski-Dwór-Pokój-Zielony-87.jpg", "/img/Zielony/Ujazdowski-Dwór-Pokój-Zielony-88.jpg", "/img/Zielony/Ujazdowski-Dwór-Pokój-Zielony-89.jpg", "/img/Zielony/Ujazdowski-Dwór-Pokój-Zielony-90.jpg", "/img/Zielony/Ujazdowski-Dwór-Pokój-Zielony-91.jpg", "/img/Zielony/Ujazdowski-Dwór-Pokój-Zielony-92.jpg", "/img/Zielony/Ujazdowski-Dwór-Pokój-Zielony-93.jpg"],
    metres: 32,
    people: 2,
    description: "Klasyczny pokój dwuosobowy z łóżkiem małżeńskim.",
    features: {
      terrace: true,
      aneks: false,
      fridge: true,
      kettle: false,
      wifi: true,
    },
  },
];
    return (
        <div className="pokoje main-content">
            <Hero title="Nasze pokoje" bgImage="/img/pokoje.webp" nextID="#PokojeIntro" />
            <Intro title="Gościniec" text="Dysponujemy komfortowo urządzonymi pokojami. Panuje u nas ciepła i domowa atmosfera, która sprzyja wypoczynkowi z dala od wielkomiejskiego hałasu.
                        W butikowo urządzonych pokojach połączono nowoczesność z tradycją. Niepowtarzalne pokoje – więcej niż tylko miejsce do spania." id="PokojeIntro"/>
            <div className="pokoje_content">
                <h2>Wybierz pokój, który odpowiada twojemu stylowi</h2>
                <section className="RoomCards">
                    {roomsData.map((room) => (
                        <RoomCard
                        key={room.id}
                        {...room}
                        />
                    ))}
                </section>
            </div>
         </div>   
    )
}
export default Pokoje;