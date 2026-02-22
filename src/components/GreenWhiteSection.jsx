import "./GreenWhiteSection.css"
import {useInView} from "./UseInView" 
function GreenWhiteSection({ title, text, color, index }) {
    const StyleColor = color === "green" ? "GreenWhite_green" : "GreenWhite_white"
    const [ref, inView] = useInView({ threshold: 0.2 })
    const isEven = index % 2 === 0;
    const alignmentClass = isEven ? "align-left" : "align-right";
    const animationClass = inView ? "visible" : "";

    return (
        <section 
            ref={ref} 
            className={`GreenWhite ${StyleColor} ${alignmentClass} ${animationClass}`}
        >
            <div className="GreenWhite_Content">
                <span className="section-number">0{index + 1}</span>
                <div className="text-wrapper">
                    <h3>{title}</h3>
                    <div className="accent-line"></div>
                    <p>{text}</p>
                </div>
            </div>
        </section>
    )
}
export default GreenWhiteSection;