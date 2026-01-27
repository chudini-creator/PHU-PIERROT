import './FeatureCard.css'
import { FaSwimmer, FaTree, FaFire, FaUsers } from 'react-icons/fa';
import {useInView} from "./UseInView"
function FeatureCard({ icon, title, description, animationDelay }) {

  const [ref, inView] = useInView({threshold: 0.2});
  const styler = `feature-card animate-on-scroll ${inView ? 'visible' : ''}`

  return (
    <div ref={ref} className={styler} style={{ transitionDelay: animationDelay }}>
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
export default FeatureCard;