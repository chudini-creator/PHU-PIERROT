import "./GreenWhiteSection.css"
import {useInView} from "./UseInView" 

function GreenWhiteSection({title, text, color}) {
    
    const StyleColor = color === "green" ? "GreenWhite_green" : "GreenWhite_white"
    const [ref, inView] = useInView({threshold: 0.2})
    const GreenWhite = `GreenWhite animate-on-scroll ${inView ? "visible" : ""}`

    return (
        <section ref={ref} className={`${StyleColor} ${GreenWhite}`}>
            <div className="GreenWhite_Content">
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </section>
    )
}
export default GreenWhiteSection;