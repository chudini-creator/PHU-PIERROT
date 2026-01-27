import "./CtaSection.css"
import {useInView} from "./UseInView"
import {Link} from "react-router-dom"
function CtaSection({title, text, button, link, phone}) {

    const [ref, inView] = useInView({threshold: 0.2})
    const styler = `cta-section animate-on-scroll ${inView ? 'visible' : ''}`

    return (
        <section ref={ref} className={styler}>
          <h2>{title}</h2>
          {text &&
            <p>{text}</p>
          }
          <div className="ctaButtons">
            <Link to={link}><button className="cta-button">{button}</button></Link>
            {phone &&
            <Link to={phone}><button className="cta-button">Zadzwoń</button></Link>
            } 
          </div>
      </section>
    )
}
export default CtaSection