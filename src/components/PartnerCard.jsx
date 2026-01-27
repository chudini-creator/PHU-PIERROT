import React, { useState, useRef } from 'react';
import './PartnerCard.css';
import { Link } from 'react-router-dom';

const PartnerCard = ({ imageSrc, title, subtitle, ctaText, link }) => {
  const [style, setStyle] = useState({});
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const { clientX, clientY } = e;
    const { top, left, width, height } = card.getBoundingClientRect();

    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;

    
    const rotateY = x * 5;
    const rotateX = -y * 5;
    const translateX = x * 5;
    const translateY = y * 5; 
    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      cardContent: {
        transform: `translateZ(40px) translateX(${translateX}px) translateY(${translateY}px)`
      },
      cardBg: {
        transform: `translateX(${-x * 2}px) translateY(${-y * 2}px) scale(1.05)`
      }
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
      cardContent: {
        transform: 'translateZ(0px) translateX(0px) translateY(0px)'
      },
      cardBg: {
        transform: 'translateX(0px) translateY(0px) scale(1)'
      }
    });
  };


  return (
    <div className="partner-card-container" ref={cardRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className="partner-card" style={style}>
        <div className="card-bg" style={{...style.cardBg, backgroundImage: `url(${imageSrc})`}}></div>
        <div className="card-content" style={style.cardContent}>
          <h3 className="card-title">{title}</h3>
          <p className="card-subtitle">{subtitle}</p>
          {ctaText &&
            <Link to={link} className="card-cta">{ctaText}</Link>
          }
        </div>
      </div>
    </div>
  );
};

export default PartnerCard;