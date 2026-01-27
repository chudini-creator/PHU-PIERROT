import "./WideCard.css"
import { useInView } from './UseInView';
function WideCard({image, text, title, side}) {
    const [containerRef, isVisible] = useInView({ threshold: 0.25 });

    const containerClassName = `WideCard animate-on-scroll ${isVisible ? 'visible' : ''}`;

    const sideClassName = side === 'left' ? 'WideCard_left' : 'WideCard_right';
    return (
        <div ref={containerRef} className={`${containerClassName} ${sideClassName}`}>
            <div className="WideCard_text">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
            <div className="WideCard_image">
                <img src={image}/>
            </div>
        </div>
    )
}
export default WideCard;