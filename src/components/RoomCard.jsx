import "./roomcard.css";
import { RulerDimensionLine, Users, Wifi, CookingPot, Refrigerator, Coffee, Sunrise } from "lucide-react";
import React from "react";
function RoomCard({ images = [], name, metres, people, description, features = {} }) {

    const [currentImage, setCurrentImage] = React.useState(0);

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

  const allFeatures = [
    {
      key: "metres",
      condition: metres,
      icon: <RulerDimensionLine />,
      text: `${metres}m²`,
    },
    {
      key: "people",
      condition: people,
      icon: <Users />,
      text: `max ${people} os.`,
    },
    {
      key: "terrace",
      condition: features.terrace,
      icon: <Sunrise />,
      text: "Taras",
    },
    {
      key: "aneks",
      condition: features.aneks,
      icon: <CookingPot />,
      text: "Aneks",
    },
    {
      key: "fridge",
      condition: features.fridge,
      icon: <Refrigerator />,
      text: "Lodówka",
    },
    {
      key: "kettle",
      condition: features.kettle,
      icon: <Coffee />,
      text: "Czajnik",
    },
    {
      key: "wifi",
      condition: features.wifi,
      icon: <Wifi />,
      text: "WiFi",
    },
  ].filter((feature) => feature.condition);

  return (
    <div className="RoomCard">
      <div className="RoomCard_image">
                {images.length > 0 && (
                    <>
                        <img src={images[currentImage]} alt={`${name} ${currentImage + 1}`} loading="lazy" />
                        {images.length > 1 && (
                            <div className="slider_controls">
                                <button onClick={prevImage}>&lt;</button>
                                <button onClick={nextImage}>&gt;</button>
                            </div>
                        )}
                    </>
                )}
        </div>
      <div className="RoomCard_info">
        <h3 className="RoomCard_name">{name}</h3>
        {description && <p className="RoomCard_description">{description}</p>}
        <div className="RoomCard_details">
          {allFeatures.map((feature) => (
            <div key={feature.key} className="icon_feature">
              {React.cloneElement(feature.icon, {
                color: "#3a5a40",
                size: "1.3rem",
                strokeWidth: "2px",
                "aria-label": feature.text,
              })}
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RoomCard;
