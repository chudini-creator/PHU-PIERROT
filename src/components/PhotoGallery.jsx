import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./PhotoGallery.css";

function PhotoGallery({ id, section, isVisible, onPhotoClick }) {
  const [sectionForRender, setSectionForRender] = useState(section);
  const [isSwitching, setIsSwitching] = useState(false);

  useEffect(() => {
    if (!section) {
      setSectionForRender(null);
      setIsSwitching(false);
      return;
    }

    setSectionForRender(section);
    setIsSwitching(true);

    const timeoutId = setTimeout(() => {
      setIsSwitching(false);
    }, 420);

    return () => clearTimeout(timeoutId);
  }, [section]);

  const photos = sectionForRender?.photos || [];

  return (
    <div
      id={id}
      className={`gallery ${isVisible ? "gallery-visible" : ""} ${
        isSwitching ? "gallery-switch" : ""
      }`}
      aria-hidden={!isVisible}
    >
      {photos.map((photo, index) => (
        <article
          key={`${sectionForRender?.id || "section"}-${photo.link}`}
          className="gallery-card"
          style={{ "--card-delay": `${index * 45}ms` }}
        >
          <Link to={photo.link} onClick={onPhotoClick}>
            <img
              src={photo.src}
              alt={photo.alt || photo.title || ""}
              loading="lazy"
              decoding="async"
            />
          </Link>
          {photo.title && <h2>{photo.title}</h2>}
        </article>
      ))}
    </div>
  );
}

export default PhotoGallery;
