import { threshold } from "three/src/nodes/TSL.js";
import "./SniadaniaGaleria.css"
import {useInView} from "./UseInView"
function SniadaniaGaleria({id}) {

    const [ref, inView] = useInView({threshold: 0.2});
    const styler = `galeria-siatka animate-on-scroll ${inView ? 'visible' : ''}`


    return (
        <section id={id} className="galeria-sniadania">
            <div ref={ref} className={styler}>
                <div className="galeria-siatka-item item-1">
                    <img src="/img/Sniadania/Sniadanie1.webp"/>
                </div>
                <div className="galeria-siatka-item item-2">
                    <img src="/img/Sniadania/Sniadanie2.webp"/>
                </div>
                <div className="galeria-siatka-item item-3">
                    <img src="/img/Sniadania/Sniadanie3.webp"/>
                </div>
                <div className="galeria-siatka-item item-4">
                    <img src="/img/Sniadania/Sniadanie4.webp"/>
                </div>
                <div className="galeria-siatka-item item-5">
                    <img src="/img/Sniadania/Sniadanie5.webp"/>
                </div>
                <div className="galeria-siatka-item item-6">
                    <img src="/img/Sniadania/Sniadanie6.webp"/>
                </div>
                <div className="galeria-siatka-item item-7">
                    <img src="/img/Sniadania/Sniadanie7.webp"/>
                </div>
            </div>
        </section>
    )
}
export default SniadaniaGaleria;