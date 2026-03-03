import { Link } from "react-router-dom";
import React from "react";
import "./PhotoGallery.css";
function PhotoGallery({ type, onPhotoClick }) {
  const chataPhotos = [
    { src: "/img/Pierogarnia/pierogarnia.jpg", title: "pierogarnia", link:"/pierogarnia"},
    { src: "/img/pierogi/IMG_2864.jpeg", title: "nasze sklepy", link: "/sklepy"  },
  ];

  const dworPhotos = [
    { src: "/img/pokoje.webp", title: "pokoje", link: "/pokoje"  },
    { src: "/img/DwórFront.jpg", title: "apartamenty na wyłączność", link: "/apartamenty"  },
    { src: "/img/Sniadania/chata5.jpg", title: "śniadania", link: "/śniadania"  },
    { src: "/img/Relaks.webp", title: "strefa relaksu", link: "/strefa-relaksu"  },
    { src: "/img/GrupyZorganizowane.webp", title: "grupy zorganizowane", link: "/grupy-zorganizowane"  },
    { src: "/img/PoleNamiotowe.webp", title: "pole namiotowe", link: "pole-namiotowe"  },
    { src: "/img/Tematyczne.webp", title: "weekendy tematyczne", link: "/weekendy-tematyczne"  },
    { src: "/img/Wspolpraca.webp", title: "współpraca", link: "/współpraca" },
  ];

  const photos = type === "chata" ? chataPhotos : type === "dwor" ? dworPhotos : [];

  return (
    <div className={`photos ${type ? "visible" : ""}`}>
      {photos.map((photo, index) => (
        <div key={index} className="photo">
          <Link to={photo.link || ""} onClick={onPhotoClick}>
          <img src={photo.src} alt={photo.title || ""} />
          </Link>
          {photo.title && <h2>{photo.title}</h2>}
        </div>
      ))}
    </div>
  );
}

export default PhotoGallery;
