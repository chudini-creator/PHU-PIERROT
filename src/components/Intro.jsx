import "./Intro.css"
import {useInView} from "./UseInView"
function Intro({title, text, id ,background}) {


    const [ref, isVisible] = useInView({threshold: 0.2})
    const styler = `intro-section animate-on-scroll ${isVisible ? 'visible' : ''}`;

    const backgroundStyle = {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }

    return (
        <section ref={ref} id={id} className={styler} style={backgroundStyle}>
            <h2>{title}</h2>
            <p>{text}</p>
        </section>
    )
}
export default Intro;