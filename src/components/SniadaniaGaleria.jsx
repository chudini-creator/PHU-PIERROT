import "./SniadaniaGaleria.css"
import {useInView} from "./UseInView"

const defaultImages = [
    {src: "/img/Sniadania/Sniadanie1.webp", alt: "Śniadanie 1", itemClass: "item-1"},
    {src: "/img/Sniadania/Sniadanie2.webp", alt: "Śniadanie 2", itemClass: "item-2"},
    {src: "/img/Sniadania/Sniadanie3.webp", alt: "Śniadanie 3", itemClass: "item-3"},
    {src: "/img/Sniadania/Sniadanie4.webp", alt: "Śniadanie 4", itemClass: "item-4"},
    {src: "/img/Sniadania/Sniadanie5.webp", alt: "Śniadanie 5", itemClass: "item-5"},
    {src: "/img/Sniadania/Sniadanie6.webp", alt: "Śniadanie 6", itemClass: "item-6"},
    {src: "/img/Sniadania/Sniadanie7.webp", alt: "Śniadanie 7", itemClass: "item-7"},
]

function SniadaniaGaleria({id, images = defaultImages}) {

    const [ref, inView] = useInView({threshold: 0.2});
    const styler = `galeria-siatka animate-on-scroll ${inView ? "visible" : ""}`


    return (
        <section id={id} className="galeria-sniadania">
            <div ref={ref} className={styler}>
                {images.map(({src, alt, itemClass}, index) => (
                    <div key={`${src}-${index}`} className={`galeria-siatka-item ${itemClass ?? ""}`.trim()}>
                        <img src={src} alt={alt} loading="lazy" decoding="async" />
                    </div>
                ))}
            </div>
        </section>
    )
}

export { SniadaniaGaleria };
export default SniadaniaGaleria;
